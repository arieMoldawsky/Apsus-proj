export default {
    props: ['keep'],
    template: `
        <section class="keep-preview">
            <span>{{keep.title}}</span>
            <br/>
            <span>{{keep.txt}}</span>
            <br/>
            <img v-if="keep.type === 'img'" :src="keep.url"/>
            <a v-if="keep.type === 'link'" :href="keep.url">{{keep.title}}</a>
            <br/>
            <router-link :to="'/keep/' + keep.id" exact >Details</router-link>
            <br/>
            <button @click="removeKeep">delete</button>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
    },
    computed: {
    },
}