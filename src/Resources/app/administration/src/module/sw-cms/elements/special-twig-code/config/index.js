import template from './sw-cms-el-config-special-twig-code.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-special-twig-code', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('special-twig-code');
    },

    onElementUpdate(element) {
      this.$emit('element-update', element);
    }
  }
});
