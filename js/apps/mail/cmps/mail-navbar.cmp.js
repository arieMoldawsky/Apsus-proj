export default {
    props: ['unreadMails'],
    template: `
        <section class="mail-navbar-section">
            <button @click="onOpenCompose" class="compose-btn">+ Compose</button>
            <router-link class="nav-link" to="inbox">Inbox <span v-show="unread" :class="unreadTxt">({{unreadMails}})</span></router-link>
            <router-link to="starred">Starred</router-link>
            <router-link to="sent">Sent Items</router-link>
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
            return {boldTxt: this.unreadMails > 0}
        },
        unread() {
            if(this.unreadMails > 0) return true;
            else return false
        }


    },
    created() {
    }
}