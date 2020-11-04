import { mailService } from './services/mail-service.js';
import mailList from './cmps/mail-list.cmp.js';
import mailFilter from './cmps/mail-filter.cmp.js';


export default {
    template: `
    <section class="mail-app-section">
        <!-- <div>The Mail!!!</div> -->
        <mail-filter v-show="isMailDetails"></mail-filter>
        <mail-list v-show="isMailDetails" :inboxMails="inboxMails" :isMailDetails="isMailDetails" @showDetails="onHideList"/>
        <router-view :isMailDetails="isMailDetails" @showList="onShowList"></router-view>
    </section>
`,
    data() {
        return {
            inboxMails: [],
            isMailDetails: true,
        }
    },
    methods: {
        onHideList() {
            this.isMailDetails = false;
        },
        onShowList() {
            this.isMailDetails = true;
        }
        

    },
    created() {
        mailService.getInboxMails()
            .then(mails => this.inboxMails = mails)
            .then(() => console.log(this.inboxMails))
    },
    components: {
        mailList,
        mailFilter
    }
}