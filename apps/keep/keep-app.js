import { keepService } from './service/keep-service.js';
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'

export default {
    template: `
        <main class="keep-app">
            <keep-add @addKeep="addKeep"/>
            <keep-list :keeps="keeps"/>
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
            console.log('adding: ', newKeep);
            keepService.addKeep(newKeep);
        }
    },
    created() {
        this.getKeeps();
    }
}