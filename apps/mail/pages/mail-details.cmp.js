import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <section class="mail-details-section">
        <div>Bla</div>
    </section>
`,
data() {
    return {
        theMail: {},

    }
},
methods: {

},
computed: {

},
created() {
    // const id = this.$route.params.bookId;
    console.log(this.$route);
}
}