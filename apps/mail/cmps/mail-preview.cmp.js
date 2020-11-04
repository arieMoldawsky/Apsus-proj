
export default {
    props: ['mail'],
    template: `
    <section class="mail-preview-section" :class="unread">
        <div class="preview-sender" >{{mail.sender}}</div>
        <div class="preview-subject">{{mail.subject}}</div>
        <div class="preview-mail-body">{{mail.body}}</div>
        <div class="preview-sent-at">{{mail.sentAt}}</div>
    </section>
`,
data() {
    return {

    }
},
methods: {

},
computed: {
    unread() {
        return { mailRead: this.mail.isRead, mailUnRead: !this.mail.isRead }
    }
},
created() {
}
}