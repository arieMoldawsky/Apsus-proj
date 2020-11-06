import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep keep-video">
            <iframe width="560" height="315" :src="keep.info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <pre class="keep-title" contenteditable v-text="keep.info.title" @blur="updateTitle"/>
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
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep(this.keep)
        },  
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
    },
}