import { mailService } from '../services/mail-service.js';


export default {
    props: ['showDetails'],
    template: `
    <section v-show="showMailDetails" class="mail-details-section">
    <!-- <button @click="onBackToInbox">Go Back</button> -->
        <div class="details-delete-btn">
            <svg @click="onBackToInbox" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 512 512"><path d="M512 307.863c0 70.124-57.048 127.172-127.172 127.172h-61.575c-4.746 0-8.898-2.56-11.135-6.376-1.15-1.914-1.798-4.164-1.798-6.557a12.94 12.94 0 0 1 12.933-12.933h61.575c55.858 0 101.306-45.447 101.306-101.306S440.686 206.57 384.828 206.57H36.098l73.33 82.178c4.746 5.34 4.28 13.515-1.048 18.262-2.47 2.2-5.535 3.285-8.6 3.285-3.557 0-7.1-1.46-9.66-4.32L7.54 213.412C3.22 208.575.764 202.677.156 196.65c-.142-1.332-.18-2.677-.142-4.022.233-6.738 2.742-13.412 7.527-18.78l82.58-92.564c4.76-5.328 12.933-5.794 18.262-1.035a12.95 12.95 0 0 1 1.048 18.262l-73.33 82.2h348.73c70.123.001 127.17 57.036 127.17 127.16z" fill="#1e0478"/><path d="M486.134 307.863c0 55.858-45.447 101.306-101.306 101.306h-61.575a12.94 12.94 0 0 0-12.92 12.274c.168-11.886 5.044-22.62 12.868-30.432 7.954-7.954 18.947-12.88 31.09-12.88h30.535c18.857 0 36.575-7.41 49.896-20.86s20.55-31.234 20.37-50.103c-.375-38.347-32.462-69.555-71.546-69.555H63.8l-8.6-9.635-19.102-21.406h348.73c55.858 0 101.306 45.434 101.306 101.293z" fill="#94e7ef"/></svg>
            <svg @click.stop="onDeleteMail" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
        </div>
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