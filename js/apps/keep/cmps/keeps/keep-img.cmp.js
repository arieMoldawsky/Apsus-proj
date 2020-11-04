export default {
    props: ['keep'],
    template: `
        <div class="keep keep-img">
            <img :src="keep.info.url"/>
            <br/>
            <span :class="{pinned: keep.isPinned}" @click="togglePin">Pin Note</span>
            <br/>
            <button @click="removeKeep(keep.id)">Delete</button>
        </div>
    `,
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
        updateKeep() {
            this.$emit('update-keep', this.keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep();
        },
    },
}