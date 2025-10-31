import template from './sw-cms-el-config-special-video.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('sw-cms-el-config-special-video', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            defaultFolderId: null,
            showMediaModal: false,
            uploadTag: 'special-video-upload',
            mediaItem: null
        };
    },

    computed: {
        mediaRepository() {
            return this.repositoryFactory.create('media');
        }
    },

    watch: {
        'element.config.media.value': {
            handler(newValue) {
                if (newValue) {
                    this.loadMediaItem(newValue);
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
            this.getDefaultFolderId();
        },

        async loadMediaItem(mediaId) {
            try {
                this.mediaItem = await this.mediaRepository.get(mediaId, Shopware.Context.api);
            } catch (error) {
                this.mediaItem = null;
            }
        },

        async getDefaultFolderId() {
            const mediaFolderRepository = this.repositoryFactory.create('media_default_folder');
            const criteria = new Criteria();
            criteria.addFilter(Criteria.equals('entity', 'special_blocks_video'));
            criteria.addAssociation('folder');

            const result = await mediaFolderRepository.search(criteria, Shopware.Context.api);

            if (result.first() && result.first().folder) {
                this.defaultFolderId = result.first().folder.id;
            }
        },

        onMediaChange(mediaId) {
            this.element.config.media.value = mediaId;
            this.$emit('element-update', this.element);
        },

        onMediaSelected(selection) {
            const mediaId = selection[0]?.id;
            if (mediaId) {
                this.element.config.media.value = mediaId;
                this.$emit('element-update', this.element);
            }
            this.showMediaModal = false;
        },

        onMediaUploadFinish({ targetId }) {
            this.element.config.media.value = targetId;
            this.$emit('element-update', this.element);
        },

        onMediaDropped(mediaItem) {
            if (mediaItem?.id) {
                this.element.config.media.value = mediaItem.id;
                this.mediaItem = mediaItem;
                this.$emit('element-update', this.element);
            }
        },

        onRemoveMediaItem() {
            this.element.config.media.value = null;
            this.mediaItem = null;
            this.$emit('element-update', this.element);
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        }
    }
});