
export default {
    template: `
    <section class="apsus-header">
        <div @click="goHome" class="header-logo">Apsus<span>.</span></div>
        <div class="head-nav">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/mail/inbox">Mail</router-link>
            <router-link to="/keep/regular">Keep</router-link>
            <router-link to="/books">Books</router-link>
        </div>
    </section>
`,
    methods: {
        goHome() {
            this.$router.push(`/`);
        }
    }
}