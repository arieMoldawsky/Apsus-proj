import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-note">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.txt" placeholder="Take a note..." required>
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
                type: 'keep-note',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    txt: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = {
                id: utilService.makeId(),
                type: 'keep-note',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    txt: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        },
    },
}