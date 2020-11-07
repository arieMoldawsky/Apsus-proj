import { utilService } from '../../../service/util-service.js'

export const mailService = {
    getInboxMails,
    getMailById,
    deleteMail,
    sendMail,
    getSentMails,
    deleteSent,
    getSentById,
    onListMailClick,
    starClick
}

const INBOX_KEY = 'inboxDB';
const SENT_KEY = 'sentDB';

var defaultInboxMails = [
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'David Mask', subject: 'Wassap?', body: 'Pick up! I miss you man. It\'s really not fair that you don\'t response.', isRead: false, isStarred: true, sentAt: 1551133930594, id: 'A1029' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Moses Cohen', subject: 'How Ya Doin?', body: 'Call me bro! Everything is fine?', isRead: false, isStarred: false, sentAt: 1551033950594, id: 'A1030' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Lebron James', subject: 'Yo, wanna play?', body: 'Let\'s catch up and play', isRead: true, isStarred: true, sentAt: 1550933950594, id: 'A1031' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Popy Gonzales', subject: 'A Lawsuit is on the way', body: 'You stole my idea, I\'m going to kick your ass. You have 3 more days to back off.', isRead: true, isStarred: false, sentAt: 1550933950594, id: 'A1032' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Shimshon Atzmon', subject: 'Zalman, please add me to your LinkedIn network', body: 'Hi Zalman, I\'d like to join your LinkedIn network.', isRead: true, isStarred: false, sentAt: 1548033950594, id: 'A1047' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Jimmy Page', subject: 'Check out our newest album', body: 'Our fresh new album is out and you get the opportunity to listen to it first!', isRead: true, isStarred: true, sentAt: 1546733950594, id: 'A1033' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Google', subject: 'Alert! Your account might have been hacked', body: 'If you have just logged in from China please ignore this message.', isRead: true, isStarred: true, sentAt: 1541033950594, id: 'A1045' },
    { to: 'Ori Shemla', copy: '', blindCopy:'', sender: 'Avocode', subject: 'Your free trial is over', body: 'The free trial for Moshe\s team has ended. Please log in and purchase a subscription within 14 days to keep working on your design projects.', isRead: true, sentAt: 1540033950594, id: 'A1046' },
]

var inboxMails = utilService.loadFromStorage(INBOX_KEY) ? utilService.loadFromStorage(INBOX_KEY) : defaultInboxMails;

var defaultSentMails = [
    { to: 'Chiko Samuel', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'Yo, wanna play?', body: 'Let\' catch up and play', isRead: true, isStarred: false, sentAt: 1593033250594, id: 'B1030' },
    { to: 'King Shark', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'I\'m hungry, do you want a burger?', body: 'I\'m going to eat the whole menu. I\'m not kidding just order every single thing for me.', isRead: true, isStarred: false, sentAt: 1551033250594, id: 'B1040' },
    { to: 'Jimmy Page', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'That is actually an awesome album!', body: 'I think your going to be really famous! Please don\'t forget me when you go on a world tour..', isRead: true, isStarred: false, sentAt: 1541033250594, id: 'B1050' },
    { to: 'Eli Ohana', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'You are the best in history!', body: 'I think you are the best player ever. Please don\'t ever leave...', isRead: true, isStarred: false, sentAt: 1501033250594, id: 'B1060' },
    { to: 'Donald Trump', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'Are you really going to lose?', body: 'I thought that you are so confident about Elections Day.', isRead: true, isStarred: false, sentAt: 1501013250594, id: 'B1061' },
    { to: 'NoReply', copy: '', blindCopy:'', sender: 'Ori Shemla', subject: 'I will reply anyways.', body: 'Just don\'t tell me I cant reply to that address.', isRead: true, isStarred: false, sentAt: 1500513250594, id: 'B1063' },
]

var sentMails = utilService.loadFromStorage(SENT_KEY) ? utilService.loadFromStorage(SENT_KEY) : defaultSentMails;


function starClick(mailId) {
    getMailById(mailId)
    .then(mail => {
        if(mail) mail.isStarred = !mail.isStarred
    })
    .then(() => utilService.saveToStorage(INBOX_KEY, inboxMails))
}

function onListMailClick(mailId) {
    getMailById(mailId)
        .then(mail => {
            if(mail) mail.isRead = true
        })
        .then(() => utilService.saveToStorage(INBOX_KEY, inboxMails))
    
}

function deleteSent(mailId) {
    const mailIdx = sentMails.findIndex(mail => mail.id === mailId)
    sentMails.splice(mailIdx, 1)
    utilService.saveToStorage(SENT_KEY, sentMails)
    console.log(sentMails);
}

function sendMail(composedMail) {
    composedMail.id = utilService.makeId();
    return Promise.resolve(sentMails)
        .then(mails => mails.unshift(composedMail))
        .then(() => {
            utilService.saveToStorage(SENT_KEY, sentMails)
            console.log('sent mails:', sentMails)
        })
}

function deleteMail(mailId) {
    var mailIdx = inboxMails.findIndex(mail => mail.id === mailId)
    if(mailIdx === -1) {
        mailIdx = sentMails.findIndex(mail => mail.id === mailId)
        sentMails.splice(mailIdx, 1)
        utilService.saveToStorage(SENT_KEY, sentMails)
        console.log(sentMails);
    } else {
        inboxMails.splice(mailIdx, 1)
        utilService.saveToStorage(INBOX_KEY, inboxMails)
        console.log(inboxMails);
    }
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