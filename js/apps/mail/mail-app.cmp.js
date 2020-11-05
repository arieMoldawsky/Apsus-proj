import { mailService } from './services/mail-service.js';
import mailList from './cmps/mail-list.cmp.js';
import mailFilter from './cmps/mail-filter.cmp.js';
import mailNavbar from './cmps/mail-navbar.cmp.js';


export default {
    template: `
    <section class="mail-app-section">
        <!-- <div>The Mail!!!</div> -->
        <mail-filter v-show="isMailDetails" @filtered="setFilter"></mail-filter>
        <div class="main-mail-container">
            <mail-navbar :unreadMails="unreadMails"></mail-navbar>
            <!-- <mail-list v-show="isMailDetails" :inboxMails="inboxMailsToShow" :isMailDetails="isMailDetails" @showDetails="onHideList"/> -->
            <router-view :isMailDetails="isMailDetails"
                        @showList="onShowList"
                        :inboxMails="inboxMailsToShow"
                        @showDetails="onHideList"
                        :sentMails="sentMailsToShow">
            </router-view>
        </div>
    </section>
`,
    data() {
        return {
            inboxMails: [],
            sentMails: [],
            isMailDetails: true,
            filterBy: null
        }
    },
    methods: {
        onHideList(mailId) {
            this.isMailDetails = false;
            mailService.onListMailClick(mailId);
        },
        onShowList() {
            this.isMailDetails = true;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

    },
    computed: {
        inboxMailsToShow() {
            if (!this.filterBy) return this.inboxMails;
            // console.log(this.filterBy.read);
            return this.inboxMails.filter(mail => (mail.subject.toLowerCase().includes(this.filterBy.txt) ||
                mail.body.toLowerCase().includes(this.filterBy.txt) || 
                mail.sender.toLowerCase().includes(this.filterBy.txt))
                && (`${mail.isRead}` === this.filterBy.read || (this.filterBy.read === 'all' && `${mail.isRead}` !== this.filterBy.read)))
        },
        sentMailsToShow() {
            if (!this.filterBy) return this.sentMails;
            // console.log(this.filterBy.read);
            return this.sentMails.filter(mail => (mail.subject.toLowerCase().includes(this.filterBy.txt) ||
                mail.body.toLowerCase().includes(this.filterBy.txt) || 
                mail.to.toLowerCase().includes(this.filterBy.txt))
                && (`${mail.isRead}` === this.filterBy.read || (this.filterBy.read === 'all' && `${mail.isRead}` !== this.filterBy.read)))
        },
        unreadMails() {
            var count = 0;
            this.inboxMails.forEach( mail => {
                if(mail.isRead === false) count++
            });
            return count;
        }
    },
    created() {
        mailService.getInboxMails()
            .then(mails => this.inboxMails = mails)
            .then(() => console.log('inbox mails:', this.inboxMails))
        mailService.getSentMails()
            .then(mails => this.sentMails = mails)
            .then(() => console.log('sent mails(mail-app):', this.sentMails))
    },
    components: {
        mailList,
        mailFilter,
        mailNavbar
    }
}