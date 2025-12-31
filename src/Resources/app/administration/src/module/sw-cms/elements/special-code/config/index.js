import template from './sw-cms-el-config-special-code.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-special-code', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-code');
        },

        onElementUpdate() {
            // Always emit the full element so Shopware persists config changes (including Twig toggle)
            this.$emit('element-update', this.element);
        }
    }
});
