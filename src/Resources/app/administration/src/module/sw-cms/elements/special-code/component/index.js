import template from './sw-cms-el-special-code.html.twig';
import './sw-cms-el-special-code.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-code', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        displayCode() {
            const html = this.element.config.htmlCode.value || '';
            const css = this.element.config.cssCode.value || '';
            const js = this.element.config.jsCode.value || '';

            let preview = '';
            if (html) preview += `HTML: ${html.substring(0, 50)}...`;
            if (css) preview += `\nCSS: ${css.substring(0, 50)}...`;
            if (js) preview += `\nJS: ${js.substring(0, 50)}...`;

            return preview || 'Kein Code vorhanden';
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-code');
        }
    }
});
