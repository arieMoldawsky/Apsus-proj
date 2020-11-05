import { mailService } from '../services/mail-service.js';

export default {
    props: ['mail', 'isInbox'],
    template: `
    <section class="mail-preview-section" :class="unread">
        <div class="avatar-container">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:v="https://vecta.io/nano" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" viewBox="7.086 7.087 1277.149 924.008"><path d="M1179.44 7.087c57.543 0 104.627 47.083 104.627 104.626v30.33l-145.36 103.833L643.833 586.77 148.96 242.42v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.44 7.087z" fill="#e75a4d"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="303.82" y1="204.384" x2="986.034" y2="204.384"><stop offset="0" stop-color="#f8f6ef"/><stop offset="1" stop-color="#e7e4d6"/></linearGradient><use xlink:href="#C" fill="url(#A)"/><path fill="#e7e4d7" d="M148.96 242.42v688.676h989.774V245.877l-494.9 340.894z"/><path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"/><path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218L643.833 586.77z"/><path d="M1284.066 142.044l.17 684.5c-2.494 76.082-35.46 103.238-145.22 104.514l-.283-685.22 145.332-103.805z" fill="#b2392f"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="url(#A)"/><use xlink:href="#C" fill="#f7f5ed"/><defs><path id="C" d="M111.713 7.087l532.12 394.525L1179.44 7.087z"/></defs></svg>
        </div>
        <div class="preview-sender" v-show="isInbox" >{{mail.sender}}</div>
        <div class="preview-sender" v-show="!isInbox" >{{mail.to}}</div>
        <div class="preview-subject">{{mail.subject}}</div>
        <div class="preview-mail-body">{{shortBody}}</div>
        <div class="preview-sent-at">{{mail.sentAt}}</div>
        <!-- <button v-show="isInbox" @click.stop="onDeleteMail">Delete -->
        <div class="preview-delete-btn">
            <svg v-show="isInbox" @click.stop="onDeleteMail" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
            <svg v-show="!isInbox" @click.stop="onDeleteSent" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
        </div>
        <!-- </button> -->
        <!-- <button v-show="!isInbox" @click.stop="onDeleteSent">Delete</button> -->
    </section>
`,
    data() {
        return {

        }
    },
    methods: {
        onDeleteMail() {
            mailService.deleteMail(this.mail.id);
        },
        onDeleteSent() {
            mailService.deleteSent(this.mail.id);
        },

    },
    computed: {
        unread() {
            return { mailRead: this.mail.isRead, mailUnRead: !this.mail.isRead }
        },
        shortBody() {
            return `${this.mail.body.substring(0, 30)}...`;
        },
        convertSentTime() {

        }
    },
    created() {
    }
}