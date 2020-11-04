import { mailService } from '../services/mail-service.js';

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview-section" :class="unread">
        <div class="preview-sender" >{{mail.sender}}</div>
        <div class="preview-subject">{{mail.subject}}</div>
        <div class="preview-mail-body">{{mail.body}}</div>
        <div class="preview-sent-at">{{mail.sentAt}}</div>
        <button @click.stop="onDeleteMail">Delete</button>
    </section>
`,
    data() {
        return {

        }
    },
    methods: {
        onDeleteMail() {
            mailService.deleteMail(this.mail.id);
        }

    },
    computed: {
        unread() {
            return { mailRead: this.mail.isRead, mailUnRead: !this.mail.isRead }
        }
    },
    created() {
    }
}