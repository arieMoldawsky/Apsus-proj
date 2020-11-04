export default {
    props: ['keep'],
    template: `
        <div class="keep keep-video">
            <iframe width="560" height="315" :src="keep.info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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