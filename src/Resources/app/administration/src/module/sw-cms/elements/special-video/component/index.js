import template from './sw-cms-el-special-video.html.twig';
import './sw-cms-el-special-video.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-video', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            mediaItem: null
        };
    },

    computed: {
        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        videoElement() {
            return {
                src: this.mediaItem?.url || '',
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

    watch: {
        'element.config.media.value': {
            handler(newValue) {
                if (newValue) {
                    this.loadMedia(newValue);
                } else {
                    this.mediaItem = null;
                }
            },
            immediate: true
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-video');
        },

        async loadMedia(mediaId) {
            this.mediaItem = await this.mediaRepository.get(mediaId, Shopware.Context.api);
        }
    }
});