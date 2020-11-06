import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
            <form class="new-keep new-img" @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.url" placeholder="Image URL.." required>
                <input type="submit" value="Add Keep">
            </form>
    `,
    data() {
        return {
            keep: this.makeNewImg()
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = this.makeNewImg();
        },
        makeNewImg() {
            return {
                id: utilService.makeId(),
                type: 'keep-img',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    url: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    },
}