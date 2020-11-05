import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['inboxMails', 'isMailDetails', 'sentMails'],
    template: `
    <section  class="mail-list-section">
        <ul class="inbox-mails-list">
            <li class="inbox-mail" v-for="mail in mailsToShow" :key="mail.id" @click="onMailClick(mail)"><mail-preview :isInbox="isInbox" :mail="mail"/></li>
        </ul>
        <!-- <router-view><router-view/> -->
    </section>
`,
    data() {
        return {
            showList: this.isMailDetails,
            mailsBoxList: []
        }
    },
    methods: {
        onMailClick(mail) {
            this.$emit('showDetails', mail.id)
            this.showList = false;
            mail.isRead = true;
            this.$router.push(`/mail/details/${mail.id}`);
            // if (this.$route.path === '/mail/sent') this.$router.push(`/mail/sent/details/${mail.id}`);
            // else this.$router.push(`/mail/inbox/details/${mail.id}`)
            // console.log(mail);
        },
    },
    computed: {
        mailsToShow() {
            if (this.$route.path === '/mail/sent') return this.sentMails;
            else return this.inboxMails
        },
        isInbox() {
            if (this.$route.path === '/mail/sent') return false;
            else return true
        }

    },
    created() {
    },
    components: {
        mailPreview
    }
}