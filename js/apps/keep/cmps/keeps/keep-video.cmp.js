export default {
    props: ['keep'],
    template: `
        <div class="keep keep-video">
            <iframe width="560" height="315" :src="keep.info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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