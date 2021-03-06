export default {
    props: ['keep'],
    template: `
        <div class="keep-color-picker">
            <svg enable-backgorund="0 0 512 512" viewBox="0 0 512 512"><path d="M256 64C150.401 64 64 150.401 64 256c0 105.604 86.401 192 192 192 18.136 0 32-13.864 32-32 0-8.531-3.198-16-8.531-21.333-5.333-5.334-8.531-12.803-8.531-21.334 0-18.135 13.864-32 32-32h38.396c58.667 0 106.667-48 106.667-106.666C448 140.802 361.604 64 256 64zM138.667 256c-18.136 0-32-13.864-32-32s13.864-32 32-32c18.135 0 32 13.864 32 32s-13.865 32-32 32zm64-85.333c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32 18.135 0 32 13.864 32 32 0 18.135-13.865 32-32 32zm106.666 0c-18.135 0-32-13.865-32-32 0-18.136 13.865-32 32-32 18.136 0 32 13.864 32 32 0 18.135-13.864 32-32 32zm64 85.333c-18.135 0-32-13.864-32-32s13.865-32 32-32c18.136 0 32 13.864 32 32s-13.864 32-32 32z"/></svg>
            <div class="keep-colors">
                <span v-for="(color,idx) in colors" :style="{color}" @click="changeColor(color)">
                    ⬤
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            colors: 
                {
                    'White': '#FFFFFF',
                    'Red': '#F28B82',
                    'Blue': '#96C9DC',
                    'Teal': '#A7FFEB',
                    'Yellow': '#F5D491',
                    'Green': '#BDC667',
                    'Purple': '#D7AEFB',
                    'Pink': '#FDCFE8',
                }
            
        }
    },
    methods: {
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        changeColor(color) {
            this.keep.style.backgroundColor = color;
            this.updateKeep(this.keep);
        }
    },
}