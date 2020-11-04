export default {
    props: ['keep'],
    template: `
        <div class="keep keep-img">
            <img :src="keep.info.url"/>
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