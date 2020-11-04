import { keepService } from './service/keep-service.js';
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'

export default {
    template: `
        <main class="keep-app">
            <keep-add @add-keep="addKeep"/>
            <!-- <router-view/> -->
            <keep-list @remove-keep="removeKeep" :keeps="keeps"/>
        </main>
    `,
    components: {
        keepAdd,
        keepList,
        
    },
    data() {
        return {
            keeps: null
        }
    },
    methods: {
        getKeeps() {
            this.keeps = keepService.getKeeps()
        },
        addKeep(newKeep) {
            keepService.addKeep(newKeep)
                .then(keeps => this.keeps = keeps)
        },
        removeKeep(keepId) {
            keepService.removeKeep(keepId)
                .then(keeps => this.keeps = keeps);
        },
        updateKeep(keepId) {
            keepService.updateKeep(keepId)
                .then(keeps => this.keeps = keeps);
        },
    },
    created() {
        keepService.initKeeps()
        this.getKeeps();
    }
}