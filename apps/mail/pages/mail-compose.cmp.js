import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <section v-show="showMailCompose" class="mail-details-section">
    <button @click="onBackToInbox">Go Back</button><button @click="onDeleteMail">Delete</button>
        <div class="details-subject">{{theMail.subject}}</div>
        <div class="details-sender">From: {{theMail.sender}}</div>
        <div class="details-body">{{theMail.body}}</div>
    </section>
`,
    data() {
        return {
            showMailDetails: !this.showDetails,
            theMail: {},

        }
    },
    methods: {
        onDeleteMail() {
            mailService.deleteMail(this.theMail.id);
            this.showMailDetails = false;
            this.$router.push(`/mail/inbox`);
            this.$emit('showList', this.showMailDetails);
        },
        onBackToInbox() {
            this.$router.push(`/mail/inbox`);
            this.$emit('showList', this.showMailDetails);
        }

    },
    computed: {

    },
    created() {
        const id = this.$route.params.mailId;
        mailService.getMailById(id)
            .then(mail => this.theMail = mail)
    }
}