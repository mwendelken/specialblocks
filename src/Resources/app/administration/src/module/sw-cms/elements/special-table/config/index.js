import template from './sw-cms-el-config-special-table.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-special-table', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            headerInput: '',
            rowInput: ''
        };
    },

    computed: {
        headers: {
            get() {
                return this.element.config.tableHeaders.value || [];
            },
            set(value) {
                this.element.config.tableHeaders.value = value;
                this.$emit('element-update', this.element);
            }
        },

        rows: {
            get() {
                return this.element.config.tableRows.value || [];
            },
            set(value) {
                this.element.config.tableRows.value = value;
                this.$emit('element-update', this.element);
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-table');
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        },

        addHeader() {
            if (this.headerInput.trim()) {
                this.headers = [...this.headers, this.headerInput.trim()];
                this.headerInput = '';
            }
        },

        removeHeader(index) {
            const newHeaders = [...this.headers];
            newHeaders.splice(index, 1);
            this.headers = newHeaders;
        },

        addRow() {
            const newRow = new Array(this.headers.length).fill('');
            this.rows = [...this.rows, newRow];
        },

        removeRow(index) {
            const newRows = [...this.rows];
            newRows.splice(index, 1);
            this.rows = newRows;
        },

        updateCell(rowIndex, cellIndex, value) {
            const newRows = [...this.rows];
            newRows[rowIndex][cellIndex] = value;
            this.rows = newRows;
        }
    }
});