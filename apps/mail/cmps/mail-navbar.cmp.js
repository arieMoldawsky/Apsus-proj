export default {
    template: `
        <section class="mail-navbar-section">
            <button class="compose-btn">+ Compose</button>
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

    },
    computed: {

    },
    created() {
    }
}