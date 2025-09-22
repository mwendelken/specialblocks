
// src/Resources/app/administration/src/module/sw-cms/elements/special-table/component/index.js
import template from './sw-cms-el-special-table.html.twig';
import './sw-cms-el-special-table.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-table', {
    template,
    
    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        tableData() {
            return {
                headers: this.element.config.tableHeaders.value || [],
                rows: this.element.config.tableRows.value || [],
                style: this.element.config.tableStyle.value || 'default',
                showHeader: this.element.config.showHeader.value !== false,
                striped: this.element.config.striped.value || false,
                bordered: this.element.config.bordered.value !== false
            };
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-table');
        }
    }
});