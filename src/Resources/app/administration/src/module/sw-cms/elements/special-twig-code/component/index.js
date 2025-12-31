import template from './sw-cms-el-special-twig-code.html.twig';
import './sw-cms-el-special-twig-code.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-twig-code', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  computed: {
    htmlContent() {
      return this.element.config.contentHTML.value || '';
    }
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('special-twig-code');
    }
  }
});
