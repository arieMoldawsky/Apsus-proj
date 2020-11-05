import { utilService } from '../../../service/util-service.js'

export const mailService = {
    getInboxMails,
    getMailById,
    deleteMail,
    sendMail,
    getSentMails,
    deleteSent,
    getSentById
}

var inboxMails = [
    { to: 'Tal H.', copy: '', blindCopy:'', sender: 'David Mask', subject: 'Wassap?', body: 'Pick up! I miss you man..', isRead: false, sentAt: 1551133930594, id: 'A1029' },
    { to: 'Tal H.', copy: '', blindCopy:'', sender: 'Moses Cohen', subject: 'How Ya Doin?', body: 'Call me bro! Everything is fine?', isRead: true, sentAt: 1551033950594, id: 'A1030' },
    { to: 'Tal H.', copy: '', blindCopy:'', sender: 'Lebron James', subject: 'Yo, wanna play?', body: 'Let\'s catch up and play', isRead: true, sentAt: 1550933950594, id: 'A1031' },
]

var sentMails = [
    { to: 'Chiko Samuel', copy: '', blindCopy:'', sender: 'Tal H.', subject: 'Yo, wanna play?', body: 'Let\' catch up and play', isRead: true, sentAt: 1551033250594, id: 'B1030' }
]

function deleteSent(mailId) {
    const mailIdx = sentMails.findIndex(mail => mail.id === mailId)
    sentMails.splice(mailIdx, 1)
    console.log(sentMails);
}

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

function getSentById(mailId) {
    return Promise.resolve(sentMails)
        .then(mails => mails.find(mail => mail.id === mailId))
}

function getMailById(mailId) {
    return Promise.resolve(inboxMails)
        .then(mails => mails.find(mail => mail.id === mailId))
}

function getSentMails() {
    return Promise.resolve(sentMails)
}

function getInboxMails() {
    return Promise.resolve(inboxMails)
}