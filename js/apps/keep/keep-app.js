import { keepService } from './service/keep-service.js';
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'

export default {
    template: `
        <main class="keep-app">
            <router-link to="/keep/archive">Archived</router-link>
            <keep-add @add-keep="addKeep"/>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="keeps"/>
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
        updateKeep(keep) {
            keepService.updateKeep(keep)
                .then(keeps => this.keeps = keeps);
        },
    },
    created() {
        keepService.initKeeps()
        this.getKeeps();
    }
}