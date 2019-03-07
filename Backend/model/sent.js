class SentMessage {
  constructor(
    senderId,
    messageId,
    createdOn,
    recieverId,
  ) {
    this.senderId = senderId;
    this.messageId = messageId;
    this.createdOn = createdOn;
    this.recieverId = recieverId;
  }
}

module.exports = SentMessage;
