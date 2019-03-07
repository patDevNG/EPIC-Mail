const Message = require('../model/message');
const SentMessage = require('../model/sent');
const InboxMessage = require('../model/inbox')
const messageStore = require('../data/message');
const sentMessageStore = require('../data/sent');
const inboxMessageStore = require('../data/inbox');
const DraftMessages = require('../model/draft');
const draftMsgStore = require('../data/draft');

module.exports = {
  sendMessage: (req, res) => {
    const messageData = req.body;
    const message = new Message(
      messageData.messageId,
      messageData.createdOn,
      messageData.subject,
      messageData.message,
      messageData.parentMessageId,
      messageData.status,
      messageData.senderId,
      messageData.recieverId,
    );
    message.messageId = messageStore.length;
    messageStore.push(message);
    if (message.status === 'sent'){
      
      const sentMessage = new SentMessage(
        message.senderId,
        message.messageId,
        message.createdOn,
        message.recieverId,
      );
      sentMessageStore.push(sentMessage);
    } else if (message.status === 'read' ){
      const inboxmsg = new InboxMessage(
        message.senderId,
        message.messageId,
        message.createdOn,
        message.recieverId,
      );
      inboxMessageStore.push(inboxmsg);
      res.status(200).send('Message Sent');
    } else {
      const draftMsg = new DraftMessages(
        message.senderId,
        message.messageId,
        message.createdOn,
        message.recieverId,
        );
        draftMsgStore.push(draftMsg);
        res.status(200).send('Message Saved');
    }
    
  },
};
