import { keepService } from './service/keep-service.js';
import keepFilter from './cmps/keep-filter.cmp.js'
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'
import { eventBus } from '../../service/event-bus-service.js';

export default {
    template: `
        <main class="keep-app">
            <router-link to="/keep/archive">Archived</router-link>
            <keep-filter @filtered="setFilter"/>
            <keep-add @add-keep="addKeep"/>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="keeps"/>
        </main>
    `,
    components: {
        keepFilter,
        keepAdd,
        keepList,

    },
    data() {
        return {
            keeps: null,
            filterBy: null,

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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        // filteredKeeps() {
        //     return this.keeps.filter(keep => {
        //         if (keep.info.title.toLowerCase().includes(this.filterBy.txt) ||
        //             keep.info.sss.toLowerCase().includes(this.filterBy.txt) ||
        //             keep.info.sss.toLowerCase().includes(this.filterBy.txt) ||
        //             )
        //     })
        // }
    },
    created() {
        keepService.initKeeps()
        this.getKeeps();
    }
}