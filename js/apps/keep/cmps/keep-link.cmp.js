export default {
    props: ['keep'],
    template: `
        <div class="keep keep-link">
            <span>{{keep.info.title}}</span>
            <br/>
            <a :href="keep.info.url" target="_blank">Go!</a>
            <br/>
            <button @click="removeKeep(keep.id)">Delete</button>
        </div>
    `,
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
    },
}