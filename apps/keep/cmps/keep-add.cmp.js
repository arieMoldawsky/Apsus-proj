import { utilService } from '../../../service/util-service.js'
import keepNote from './keep-note.js'
import keepImg from './keep-img.js'
import keepLink from './keep-link.js'

export default {
    template: `
        <section class="keep-add">
            <pre>{{keep}}</pre>
            <span :class="keepTypeNote" @click="keepType='note'">Note</span>
            <span :class="keepTypeImg" @click="keepType='img'">Image</span>
            <span :class="keepTypeLink" @click="keepType='link'">Link</span>
            <keep-note v-if="keepType==='note'" @add-keep="addKeep"/>
            <keep-img v-if="keepType==='img'" @add-keep="addKeep"/>
            <keep-link v-if="keepType==='link'" @add-keep="addKeep"/>
        </section>
    `,
    data() {
        return {
            keepType: 'note',
        }
    },
    components: {
        keepNote,
        keepImg,
        keepLink,
    },
    computed: {
        keepTypeNote() {
            return {
                'keep-type': this.keepType === 'note',
            }
        },
        keepTypeImg() {
            return {
                'keep-type': this.keepType === 'img',
            }
        },
        keepTypeLink() {
            return {
                'keep-type': this.keepType === 'link',
            }
        }
    },
    methods: {
        addKeep(keep) {
            this.$emit('add-keep', keep);
        },
    },
}