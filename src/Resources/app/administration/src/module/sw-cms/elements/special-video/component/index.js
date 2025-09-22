import template from './sw-cms-el-special-video.html.twig';
import './sw-cms-el-special-video.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-video', {
    template,
    
    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        videoElement() {
            return {
                src: this.element.config.videoSrc.value || '',
                autoplay: this.element.config.autoplay.value || false,
                controls: this.element.config.controls.value !== false,
                muted: this.element.config.muted.value || false,
                loop: this.element.config.loop.value || false,
                style: {
                    width: this.element.config.width.value || '100%',
                    height: this.element.config.height.value || 'auto'
                }
            };
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-video');
        }
    }
});