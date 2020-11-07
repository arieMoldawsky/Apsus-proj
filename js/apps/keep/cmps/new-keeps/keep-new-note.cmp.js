import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
            <form class="new-keep new-note" @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.txt" placeholder="Take a note..." required>
                <input type="submit" class="submit-keep" value="Save">
            </form>
    `,
    data() {
        return {
            keep: this.makeNewNote()
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = this.makeNewNote()
        },
        makeNewNote() {
            return {
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