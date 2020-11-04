import { mailService } from './services/mail-service.js';
import mailList from './cmps/mail-list.cmp.js';


export default {
    template: `
    <section class="mail-app-section">
        <div>The Mail!!!</div>
        <mail-list :inboxMails="inboxMails"/>
    </section>
`,
    data() {
        return {
            inboxMails: [],

        }
    },
    methods: {

    },
    created() {
        mailService.getInboxMails()
            .then(mails => this.inboxMails = mails)
            .then(() => console.log(this.inboxMails))
    },
    components: {
        mailList
    }
}