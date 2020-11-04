export default {
    props: ['keep'],
    template: `
        <div class="keep keep-note">
            <span contenteditable v-text="keep.info.title" @blur="updateTitle"/>
            <br/>
            <span contenteditable v-text="keep.info.txt" @blur="updateTxt"/>
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
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep()
        },
        updateTxt(ev) {
            this.keep.info.txt = ev.target.innerText
            this.updateKeep()
        },
    },
}