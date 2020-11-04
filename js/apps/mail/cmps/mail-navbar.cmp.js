export default {
    template: `
        <section class="mail-navbar-section">
            <button @click="onOpenCompose" class="compose-btn">+ Compose</button>
            <router-link class="nav-link" to="inbox">Inbox</router-link>
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

    },
    created() {
    }
}