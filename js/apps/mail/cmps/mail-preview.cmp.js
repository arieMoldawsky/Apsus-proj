import { mailService } from '../services/mail-service.js';

export default {
    props: ['mail', 'isInbox'],
    template: `
    <section class="mail-preview-section" :class="unread">
        <div class="preview-sender" v-show="isInbox" >{{mail.sender}}</div>
        <div class="preview-sender" v-show="!isInbox" >{{mail.to}}</div>
        <div class="preview-subject">{{mail.subject}}</div>
        <div class="preview-mail-body">{{shortBody}}</div>
        <div class="preview-sent-at">{{mail.sentAt}}</div>
        <button v-show="isInbox" @click.stop="onDeleteMail">Delete</button>
        <button v-show="!isInbox" @click.stop="onDeleteSent">Delete</button>
    </section>
`,
    data() {
        return {

        }
    },
    methods: {
        onDeleteMail() {
            mailService.deleteMail(this.mail.id);
        },
        onDeleteSent() {
            mailService.deleteSent(this.mail.id);
        },
        
    },
    computed: {
        unread() {
            return { mailRead: this.mail.isRead, mailUnRead: !this.mail.isRead }
        },
        shortBody() {
            return `${this.mail.body.substring(0, 30)}...`;
        },
        convertSentTime() {

        }
    },
    created() {
    }
}