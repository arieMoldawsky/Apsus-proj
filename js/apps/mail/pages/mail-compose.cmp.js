import { mailService } from '../services/mail-service.js';
import { keepService } from '../../keep/service/keep-service.js'


export default {
    template: `
    <!-- <section v-show="showMailCompose" class="mail-compose-section"> -->
    <section class="mail-compose-section">
        <div class="compose-title">New Message</div>
        <label class="compose-to-container compose-container">
            To: <input type="text" placeholder="Recipents" v-model="composedMail.to"/>
        </label>
        <label class="compose-copy-container compose-container">
            Cc: <input type="text" v-model="composedMail.copy"/>
        </label>
        <label class="compose-bcopy-container compose-container">
            Bcc: <input type="text" v-model="composedMail.blindCopy"/>
        </label>
        <label class="compose-subject-container compose-container">
            <div class="pre-input">Subject:</div>
            <input type="text" placeholder="The Subject" v-model="composedMail.subject"/>
        </label>
        <textarea cols="60" rows="18" v-model="composedMail.body"></textarea>
        <button class="send-mail-btn" @click="onSendMail">Send <svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 504.142 504.142"><path d="M176.797,411.547l99.446-66.298" fill="#eb7a0c"/><g fill="#a4c2f7"><path d="M210.37 302.432l-33.574 109.115 99.446-66.3z"/><path d="M210.37 302.432l-33.037 109.115-25.717-142.69 344.13-176.262z"/><path d="M487.705 107.97c-3.004.098-5.814-1.48-7.293-4.098l-270.04 198.56 167.87 109.115L490.277 107.45c-.827.3-1.694.477-2.572.522z"/></g><path d="M445.387 126.17L210.37 302.432l151.082 92.328 100.72-276.984z" fill="#e3e7f2"/><path d="M468.4 98.245L8.394 193.317l143.222 75.54 323.04-165.46a8.1 8.1 0 0 1-6.247-5.152z" fill="#fff"/><path d="M445.387 117.776L34.11 210.104l117.508 58.754 300.017-145.93a8.1 8.1 0 0 1-6.247-5.152z" fill="#e3e7f2"/><g fill="#428dff"><path d="M378.24 419.94a8.4 8.4 0 0 1-4.574-1.352l-167.87-109.115c-2.312-1.5-3.74-4.04-3.82-6.796s1.197-5.374 3.418-7.007L406.78 147.596l-251.336 128.73c-2.434 1.25-5.325 1.234-7.746-.04L4.477 200.743c-3.134-1.654-4.892-5.097-4.394-8.605s3.145-6.326 6.615-7.042l487.197-100.69c3.357-.756 6.835.612 8.78 3.45.177.25.336.514.475.787.785 1.46 1.116 3.12.95 4.77a7.7 7.7 0 0 1-.23 1.287 8.04 8.04 0 0 1-.279.885l-117.474 318.86c-1.213 3.302-4.36 5.496-7.877 5.492zM225.117 302.006l148.885 96.77 104.213-282.87-253.098 186.098zM32.994 196.8l118.68 62.598L436.83 113.342 32.994 196.8z"/><path d="M176.805 419.94c-3.7.003-6.966-2.417-8.04-5.957s.297-7.367 3.376-9.42l99.443-66.295c2.495-1.69 5.704-1.91 8.408-.582s4.488 4.005 4.675 7.012-1.253 5.884-3.77 7.537l-99.443 66.295c-1.376.918-2.993 1.41-4.648 1.4h0z"/><path d="M177.33 419.94c-.156 0-.32-.008-.484-.017-3.873-.222-7.09-3.068-7.78-6.885l-25.713-142.69a8.39 8.39 0 0 1 4.435-8.959L491.92 85.128c3.893-1.994 8.664-.665 10.965 3.054s1.36 8.582-2.162 11.175l-283.13 208.18-32.23 106.442a8.39 8.39 0 0 1-8.033 5.96h0zm-16.353-146.45l18.426 102.246 22.935-75.737a8.38 8.38 0 0 1 3.057-4.328L406.78 147.596 160.977 273.49z"/><path d="M176.797 419.94c-2.664 0-5.17-1.264-6.752-3.406s-2.055-4.91-1.273-7.455l33.574-109.115c.774-2.518 2.684-4.526 5.16-5.425s5.23-.584 7.44.85l65.87 42.82c2.368 1.54 3.803 4.166 3.82 7s-1.388 5.467-3.738 7.034l-99.443 66.295c-1.378.922-3 1.413-4.656 1.41zm38.328-104.4l-23.377 75.96 69.23-46.147-45.852-29.812z"/></g></svg></button>
    </section>
`,
    data() {
        return {
            composedMail: { to: '', copy: '', blindCopy: '', sender: 'Tal H.', subject: '', body: '', isRead: true, sentAt: Date.now(), id: '' }

        }
    },
    methods: {
        onSendMail() {
            mailService.sendMail(this.composedMail)
                .then(() => console.log('sent successfuly!'))
            this.$router.push(`/mail/inbox`);
        },
        onComposeKeep() {
            const id = this.$route.params.keepId;
            var currKeep = keepService.getKeepById(id)
            console.log(currKeep);
        }
    },
    computed: {

    },
    created() {
        const id = this.$route.params.keepId;
        if (id) {
            var currKeep = keepService.getKeepById(id)
                .then(keep => {
                    this.composedMail.subject = keep.info.title
                    this.composedMail.body = keep.info.txt
                })
            this.$emit('fixNavbar', true);
        }
    }
}