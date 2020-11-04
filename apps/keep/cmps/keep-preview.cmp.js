export default {
    props: ['keep'],
    template: `
        <section :style="previewStyle" class="keep-preview">
            <span>{{keep.title}}</span>
            <br/>
            <span>{{keep.txt}}</span>
            <br/>
            <img v-if="keep.type === 'img'" :src="keep.url"/>
            <a v-if="keep.type === 'link'" :href="keep.url">{{keep.title}}</a>
            <iframe v-if="keep.type === 'video'" width="560" height="315" :src="youtubeParser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <router-link :to="'/keep/' + keep.id" exact >Details</router-link>
            <br/>
            <button @click="removeKeep">delete</button>
        </section>
    `,
    data() {
        return {
            previewStyle: {
                backgroundColor: this.keep.color
            }
        }
    },
    methods: {
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
    },
}