import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-url">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.url" placeholder="Link URL..">
                <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.style.backgroundColor">
                </label>
                <input type="submit" value="Add Keep">
            </form>
        </section>
    `,
    data() {
        return {
            keep: {
                id: utilService.makeId(),
                type: 'keep-link',
                isPinned: false,
                info: {
                    url: null,
                    title: null,
                },
                style: {
                    backgroundColor: '#888888',
                },
            }
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
        },
    },
}