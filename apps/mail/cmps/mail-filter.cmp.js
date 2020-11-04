// export default {
//     template: `
//         <section class="filter-section">
//             <form >
//             <span class="filter-title">Filter:</span>
//                 <label>
//                     By Name:
//                     <input type="text" v-model="filterBy.name" @input="emitFilter"/>
//                 </label>
//                 <label>
//                     | By Price Range: 0
//                     <input type="range" v-model.number="filterBy.priceRange" step="1" min="10" max="200" @input="emitFilter"/>
//                     <input class="showNumsInp" type="number" v-model.number="filterBy.priceRange">
//                 </label>
//                 <!-- <button class="filter-btn" @submit.prevent>Go</button> -->
//             </form>

//         </section>
//     `,
//     data() {
//         return {

//             filterBy: {priceRange: 200, name: ''}
//         }
//     },
//     methods: {
//         emitFilter() {
//             this.$emit('filtered', this.filterBy);
//         }
//     },
//     computed: {

//     },
//     created() {
//     }
// }