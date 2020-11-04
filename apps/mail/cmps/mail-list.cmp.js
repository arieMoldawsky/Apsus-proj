import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['inboxMails'],
    template: `
    <section class="mail-list-section">
        <ul class="inbox-mails-list">
            <li class="inbox-mail" v-for="mail in inboxMails" :key="mail.id" @click="onMailClick(mail)"><mail-preview :mail="mail"/></li>
        </ul>
    </section>
`,
data() {
    return {

    }
},
methods: {
    onMailClick(mail) {
        mail.isRead = true;
        this.$router.push(`/mail/details/${mail.id}`)
        // console.log(mail);
    }

},
created() {
},
components: {
    mailPreview
}
}