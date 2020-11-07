export default {
    props: ['unreadMails', 'fixNav'],
    template: `
        <section class="mail-navbar-section">
            <button @click="onOpenCompose" class="compose-btn">+ Compose</button>
            <router-link class="nav-link" :to="fixingNavInbox">Inbox <span v-show="unread" :class="unreadTxt">({{unreadMails}})</span></router-link>
            <router-link :to="fixingNavStarred">Starred</router-link>
            <router-link :to="fixingNavSent">Sent Items</router-link>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        onOpenCompose() {
            this.$router.push(`compose`)
        }
    },
    computed: {
        unreadTxt() {
            return { boldTxt: this.unreadMails > 0 }
        },
        unread() {
            if (this.unreadMails > 0) return true;
            else return false
        },
        fixingNavInbox() {
            if (this.fixNav === true) return '../../../mail/inbox';
            else return '../mail/inbox';
        },
        fixingNavSent() {
            if (this.fixNav === true) return '../../../mail/sent';
            else return 'sent';
        },
        fixingNavStarred() {
            if (this.fixNav === true) return '../../../mail/starred';
            else return 'starred';
        },
    },
    created() {
    }
}