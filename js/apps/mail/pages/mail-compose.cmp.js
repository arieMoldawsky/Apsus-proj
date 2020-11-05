import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <!-- <section v-show="showMailCompose" class="mail-compose-section"> -->
    <section class="mail-compose-section">
        <div class="compose-title">New Message</div>
        <div class="pre-input">To:</div><input type="text" placeholder="Recipents" v-model="composedMail.to"/>
        <div class="pre-input">Cc:</div><input type="text" v-model="composedMail.copy"/>
        <div class="pre-input">Bcc:</div><input type="text" v-model="composedMail.blindCopy"/>
        <div class="pre-input">Subject:</div><input type="text" placeholder="The Subject" v-model="composedMail.subject"/>
        <textarea cols="60" rows="20" v-model="composedMail.body"></textarea>
        <button class="send-mail-btn" @click="onSendMail">Send</button>
        <pre>
        {{composedMail}}
        </pre>
    </section>
`,
    data() {
        return {
            composedMail: {to: '', copy: '', blindCopy: '', sender: 'Tal H.', subject: '', body: '', isRead: true, sentAt: Date.now(), id: ''}

        }
    },
    methods: {
        onSendMail() {
            mailService.sendMail(this.composedMail)
                .then(() => console.log('sent successfuly!'))
            this.$router.push(`/mail/inbox`);
        }

    },
    computed: {
        // sendTime() {
        //     return Date.now();
        // }
    },
    created() {
        const id = this.$route.params.mailId;
        mailService.getMailById(id)
            .then(mail => this.theMail = mail)
    }
}