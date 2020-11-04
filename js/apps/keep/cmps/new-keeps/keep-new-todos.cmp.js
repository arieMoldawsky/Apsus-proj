import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-todos">
            <form @submit.prevent="addTodo">
                <input type="text" v-model="todo.txt" placeholder="What Todo?" required>
                <input type="submit" value="Add Todo">
            </form>
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title" required>
                <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.style.backgroundColor">
                </label>
                <input type="submit" value="Add Keep">
            </form>
            <ul v-show="keep.info.todos.length">
                <li v-for="(todo, idx) in keep.info.todos">
                    <span>{{todo.txt}}</span>
                    <button @click="deleteTodo(idx)">Delete</button>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            todo: { id: utilService.makeId(), txt: null, doneAt: null },
            keep: {
                id: utilService.makeId(),
                type: 'keep-todos',
                isPinned: false,
                info: {
                    title: null,
                    todos: [],
                },
                style: {
                    backgroundColor: '#888888',
                },
            }
        }
    },
    methods: {
        addKeep() {
            console.log('sss');
            this.$emit('add-keep', this.keep);
            this.keep = {
                id: utilService.makeId(),
                type: 'keep-todos',
                isPinned: false,
                info: {
                    title: null,
                    todos: [],
                },
                style: {
                    backgroundColor: '#888888',
                },
            }
        },
        addTodo() {
            this.keep.info.todos.push(this.todo);
            this.todo = { id: utilService.makeId(), txt: null, doneAt: null };
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1);
        },
    },
    computed: {

    }
}