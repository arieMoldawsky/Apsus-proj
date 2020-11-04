import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <!-- <section v-show="showMailCompose" class="mail-compose-section"> -->
    <section class="mail-compose-section">
        <div class="compose-title">New Message</div>
        <div class="pre-input">To:</div><input type="text"/>
        <div class="pre-input">Cc:</div><input type="text"/>
        <div class="pre-input">Bcc:</div><input type="text"/>
        <div class="pre-input">Subject:</div><input type="text"/>
        <textarea cols="30" rows="10"></textarea>

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