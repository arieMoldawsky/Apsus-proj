import { mailService } from './services/mail-service.js';
import mailList from './cmps/mail-list.cmp.js';
import mailFilter from './cmps/mail-filter.cmp.js';
import mailNavbar from './cmps/mail-navbar.cmp.js';
import { eventBus } from '../../service/event-bus-service.js';


export default {
    template: `
    <main class="mail-app-section">
        <div class="main-mail-container">
            <mail-navbar :fixNav='navFixer' :unreadMails="unreadMails"></mail-navbar>
            <router-view :isMailDetails="isMailDetails"
                        @showList="onShowList"
                        :inboxMails="inboxMailsToShow"
                        @showDetails="onHideList"
                        :sentMails="sentMailsToShow"
                        @fixNavbar="fixNav">
            </router-view>
        </div>
    </main>
    `,
    data() {
        return {
            inboxMails: [],
            sentMails: [],
            isMailDetails: true,
            filterBy: null,
            navFixer: false
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
        fixNav() {
            this.navFixer = true;
        }

    },
    computed: {
        inboxMailsToShow() {
            if (!this.filterBy) return this.inboxMails;
            return this.inboxMails.filter(mail => (mail.subject.toLowerCase().includes(this.filterBy.txt) ||
                mail.body.toLowerCase().includes(this.filterBy.txt) || 
                mail.sender.toLowerCase().includes(this.filterBy.txt))
                && (`${mail.isRead}` === this.filterBy.read || (this.filterBy.read === 'all' && `${mail.isRead}` !== this.filterBy.read)))
        },
        sentMailsToShow() {
            if (!this.filterBy) return this.sentMails;
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
        eventBus.$on('mails-filtered', filterBy => this.setFilter(filterBy))
        mailService.getInboxMails()
            .then(mails => this.inboxMails = mails)
            .then(() => console.log('inbox mails:', this.inboxMails))
        mailService.getSentMails()
            .then(mails => this.sentMails = mails)
            .then(() => console.log('sent mails(mail-app):', this.sentMails))
    },
    components: {
        mailList,
        mailNavbar
    }
}