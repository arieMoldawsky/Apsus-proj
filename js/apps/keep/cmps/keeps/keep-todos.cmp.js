import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep keep-todos">
        <span class="keep-title" contenteditable v-text="keep.info.title" @blur="updateTitle"/>
            <br/>
            <ul>
                <li v-for="(todo, idx) in keep.info.todos">
                    <span  class="todo-txt" contenteditable v-text="todo.txt" @blur="updateTodoTxt($event, idx)"/>  
                    <span v-if="todo.doneAt" @click="toggleDoneTodo(todo)">{{todo.doneAt}}</span>    
                    <svg :class="{done:todo.doneAt}" @click="toggleDoneTodo(todo)" enable-background="new 0 0 1000 1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m351.6 352.2-101.3 108.6 255.5 239.5 484.2-498.3-88.5-81.3-397.7 385.7z"/><path d="m130.1 19.4c-66.4 0-120.1 53.7-120.1 120.2v720.9c0 66.5 53.7 120.1 120.1 120.1h720.9c66.5 0 120.1-53.7 120.1-120.1v-455.8l-120.1 116.5v299.2c0 22-18 40-40 40h-640.8c-22 0-40-18-40-40v-640.8c0-22 18-40 40-40h505.8l107.7-117.8z"/></svg>
                    <svg @click="deleteTodo(idx)" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>

                </li>
            </ul>
            <br/>
            <keep-controls :keep="keep" @remove-keep="removeKeep" @update-keep="updateKeep"/>
        </div>
    `,
    components: {
        keepControls,
    },
    methods: {
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep(this.keep)
        },
        updateTodoTxt(ev, idx) {
            this.keep.info.todos[idx].txt = ev.target.innerText
            this.updateKeep(this.keep)
        },
        toggleDoneTodo(todo) {
            todo.doneAt = !todo.doneAt ? Date.now() : null;
            this.updateKeep(this.keep);
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1)
            this.updateKeep(this.keep);
        },
    }
}