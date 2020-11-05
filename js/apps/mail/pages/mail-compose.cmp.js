import { mailService } from '../services/mail-service.js';
// import {eventBus, 'send-keep-as-mail',} from '../services/event-bus-service.js'


export default {
    template: `
    <!-- <section v-show="showMailCompose" class="mail-compose-section"> -->
    <section class="mail-compose-section">
        <div class="compose-title">New Message</div>
        <label class="compose-to-container compose-container">
            To: <input type="text" placeholder="Recipents" v-model="composedMail.to"/>
        </label>
        <label class="compose-copy-container compose-container">
            Cc: <input type="text" v-model="composedMail.copy"/>
        </label>
        <label class="compose-bcopy-container compose-container">
            Bcc: <input type="text" v-model="composedMail.blindCopy"/>
        </label>
        <label class="compose-subject-container compose-container">
            <div class="pre-input">Subject:</div>
            <input type="text" placeholder="The Subject" v-model="composedMail.subject"/>
        </label>
        <textarea cols="60" rows="18" v-model="composedMail.body"></textarea>
        <button class="send-mail-btn" @click="onSendMail">Send</button>
    </section>
`,
    data() {
        return {
            composedMail: { to: '', copy: '', blindCopy: '', sender: 'Tal H.', subject: '', body: '', isRead: true, sentAt: Date.now(), id: '' }

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

        // eventBus.$on('send-keep-as-mail', msg => {
        //     this.composedMail = msg;
        // })
    }
}