import keepControls from '../keep-controls/keep-controls.cmp.js'


export default {
    props: ['keep'],
    template: `
        <div class="keep keep-note">
            <span contenteditable v-text="keep.info.title" @blur="updateTitle"/>
            <br/>
            <span contenteditable v-text="keep.info.txt" @blur="updateTxt"/>
            <br/>
            <keep-controls :keep="keep" @remove-keep="removeKeep" @update-keep="updateKeep"/>
        </div>
    `,
    components: {
        keepControls,
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
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep(this.keep)
        },
        updateTxt(ev) {
            this.keep.info.txt = ev.target.innerText
            this.updateKeep(this.keep)
        },
    },
}