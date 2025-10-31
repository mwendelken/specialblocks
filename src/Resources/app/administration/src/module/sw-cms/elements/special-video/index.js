import './component';
import './config';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'special-video',
    label: 'sw-cms.elements.special.video.label',
    component: 'sw-cms-el-special-video',
    configComponent: 'sw-cms-el-config-special-video',
    previewComponent: 'sw-cms-el-preview-special-video',
    defaultConfig: {
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media'
            }
        },
        autoplay: { value: false, source: 'static' },
        controls: { value: true, source: 'static' },
        muted: { value: false, source: 'static' },
        loop: { value: false, source: 'static' },
        width: { value: '100%', source: 'static' },
        height: { value: 'auto', source: 'static' }
    }
});