import { mailService } from '../services/mail-service.js';


export default {
    props: ['showDetails'],
    template: `
    <section v-show="showMailDetails" class="mail-details-section">
    <button @click="onBackToInbox">Go Back</button><button @click="onDeleteMail">Delete</button>
        <div class="details-subject">{{theMail.subject}}</div>
        <div class="details-sender" v-show="isInbox">From: {{theMail.sender}}</div>
        <div class="details-sender" v-show="!isInbox">To: {{theMail.to}}</div>
        <div class="details-body">{{theMail.body}}</div>
    </section>
`,
    data() {
        return {
            showMailDetails: !this.showDetails,
            theMail: { subject: '', sender: '', to: '', body: '' },
            isInbox: true
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
        },
        getTheMail() {
            const id = this.$route.params.mailId;
            mailService.getMailById(id)
                .then(mail => {
                    if (!mail) {
                        mailService.getSentById(id)
                            .then(mail => this.theMail = mail)
                            .then(() => this.isInbox = false)
                    } else {
                        this.isInbox = true;
                        return mail;
                    }
                })
                .then(mail => {
                    if (mail) this.theMail = mail
                })
        }

    },
    computed: {

    },
    created() {
        this.getTheMail();
    }
}