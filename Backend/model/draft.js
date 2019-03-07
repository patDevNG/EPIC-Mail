class Draft{
    constructor(
        senderId,
        messageId,
        createdOn,
        recieverId,  
    ){
    this.senderId = senderId;
    this.messageId = messageId;
    this.createdOn = createdOn;
    this.recieverId = recieverId;
    }
}

module.exports = Draft;