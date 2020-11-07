import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-todos">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title" required>
                <input type="submit" class="submit-keep" value="Save Keep">
            </form>
            <form @submit.prevent="addTodo">
                <input type="text" v-model="todo.txt" placeholder="What Todo?" required>
                <input type="submit" class="submit-todo" value="Next Todo">
            </form>
            <ul class="todo-list" v-show="keep.info.todos.length">
                <li v-for="(todo, idx) in keep.info.todos">
                    <span>{{todo.txt}}</span>
                    <div class="todo-controls">
                        <svg v-if="!todo.doneAt" @click="toggleDoneTodo(todo)" enable-background="new 0 0 28.332 28.332" viewBox="0 0 28.332 28.332" xmlns="http://www.w3.org/2000/svg"><path d="m26.332 0h-24.332c-1.104 0-2 .896-2 2v24.332c0 1.104.896 2 2 2h24.332c1.104 0 2-.896 2-2v-24.332c0-1.105-.894-2-2-2zm-2 24.332h-20.332v-20.332h20.332z"/></svg>
                        <svg v-if="todo.doneAt"  @click="toggleDoneTodo(todo)" enable-background="new 0 0 1000 1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m351.6 352.2-101.3 108.6 255.5 239.5 484.2-498.3-88.5-81.3-397.7 385.7z"/><path d="m130.1 19.4c-66.4 0-120.1 53.7-120.1 120.2v720.9c0 66.5 53.7 120.1 120.1 120.1h720.9c66.5 0 120.1-53.7 120.1-120.1v-455.8l-120.1 116.5v299.2c0 22-18 40-40 40h-640.8c-22 0-40-18-40-40v-640.8c0-22 18-40 40-40h505.8l107.7-117.8z"/></svg>
                        <svg @click="deleteTodo(idx)" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
                    </div>    
                </button>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            todo: { id: utilService.makeId(), txt: null, doneAt: null },
            keep: this.makeNewTodos()
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = this.makeNewTodos()
        },
        addTodo() {
            this.keep.info.todos.push(this.todo);
            this.todo = { id: utilService.makeId(), txt: null, doneAt: null };
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1);
        },
        toggleDoneTodo(todo) {
            todo.doneAt = !todo.doneAt ? Date.now() : null;
        },
        makeNewTodos() {
            return {
                id: utilService.makeId(),
                type: 'keep-todos',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    todos: [],
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    }
}