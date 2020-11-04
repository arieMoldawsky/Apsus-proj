import { utilService } from '../../../service/util-service.js'
import keepNote from './keep-note.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepLink from './keep-link.cmp.js'
import keepVideo from './keep-video.cmp.js'

export default {
    template: `
        <section class="keep-add">
            <span :class="keepTypeNote" @click="keepType='note'">Note</span>
            <span :class="keepTypeImg" @click="keepType='img'">Image</span>
            <span :class="keepTypeLink" @click="keepType='link'">Link</span>
            <span :class="keepTypeVideo" @click="keepType='video'">video</span>
            <keep-note v-if="keepType==='note'" @add-keep="addKeep"/>
            <keep-img v-if="keepType==='img'" @add-keep="addKeep"/>
            <keep-link v-if="keepType==='link'" @add-keep="addKeep"/>
            <keep-video v-if="keepType==='video'" @add-keep="addKeep"/>
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
        keepVideo,
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
        },
        keepTypeVideo() {
            return {
                'keep-type': this.keepType === 'video',
            }
        },
    },
    methods: {
        addKeep(keep) {
            this.$emit('add-keep', keep);
        },
    },
}