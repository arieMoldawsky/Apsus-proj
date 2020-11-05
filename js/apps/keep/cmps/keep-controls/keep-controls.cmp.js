import keepColor from './keep-color.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep-controls">
            <span :class="{pinned: keep.isPinned}" @click="togglePin">Pin Note</span>
            <keep-color :keep="keep" @update-keep="updateKeep"/>
            <button @click="removeKeep(keep.id)">Delete</button>
        </div>
    `,
    components: {
        keepColor,
    },
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
    },
}