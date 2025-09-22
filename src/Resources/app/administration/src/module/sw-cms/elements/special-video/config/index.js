import template from './sw-cms-el-config-special-video.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-special-video', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-video');
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        }
    }
});