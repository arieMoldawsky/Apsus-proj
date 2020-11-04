import { utilService } from '../../../service/util-service.js'

export const mailService = {
    getInboxMails,
    getMailById,
    deleteMail,
    sendMail
}

var inboxMails = [
    { sender: 'David Mask', subject: 'Wassap?', body: 'Pick up! I miss you man..', isRead: false, sentAt: 1551133930594, id: 'A1029' },
    { sender: 'Moses Cohen', subject: 'How Ya Doin?', body: 'Call me bro! Everything is fine?', isRead: true, sentAt: 1551033950594, id: 'A1030' },
    { sender: 'Lebron James', subject: 'Yo, wanna play?', body: 'Let\' catch up and play', isRead: true, sentAt: 1550933950594, id: 'A1031' },
]

var sentMails = [
    { to: 'Chiko Samuel', copy: '', blindCopy:'', subject: 'Yo, wanna play?', body: 'Let\' catch up and play', sentAt: 1551033250594, id: 'B1030' }
]

function sendMail(composedMail) {
    composedMail.id = utilService.makeId();
    return Promise.resolve(sentMails)
        .then(mails => mails.push(composedMail))
        .then(() => console.log('sent mails:', sentMails))
}

function deleteMail(mailId) {
    const mailIdx = inboxMails.findIndex(mail => mail.id === mailId)
    inboxMails.splice(mailIdx, 1)
    console.log(inboxMails);
}

function getMailById(mailId) {
    return Promise.resolve(inboxMails)
        .then(mails => mails.find(mail => mail.id === mailId))
}

function getInboxMails() {
    return Promise.resolve(inboxMails)
}