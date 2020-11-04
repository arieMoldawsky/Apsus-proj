import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-img">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.url" placeholder="Image URL.." required>
                <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.style.backgroundColor">
                </label>
                <input type="submit" value="Add Keep">
            </form>
        </section>
    `,
    components: {
    },
    data() {
        return {
            keep: {
                id: utilService.makeId(),
                type: 'keep-img',
                isPinned: false,
                info: {
                    url: null,
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