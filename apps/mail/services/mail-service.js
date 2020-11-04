

export const mailService = {
    getInboxMails,
   
  }

var inboxMails = [
    {sender: 'David', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594, id: 'A1029'},
    {sender: 'Moses', subject: 'How Ya Doin?', body: 'Call me bro!', isRead: true, sentAt : 1551033950594, id: 'A1030'},
]


function getInboxMails() {
    return Promise.resolve(inboxMails)
}