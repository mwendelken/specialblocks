import './component';
import './config';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'special-code',
    label: 'sw-cms.elements.special.code.label',
    component: 'sw-cms-el-special-code',
    configComponent: 'sw-cms-el-config-special-code',
    previewComponent: 'sw-cms-el-preview-special-code',
    defaultConfig: {
        htmlCode: {
            source: 'static',
            value: ''
        },
        cssCode: {
            source: 'static',
            value: ''
        },
        jsCode: {
            source: 'static',
            value: ''
        },
        enableTwig: {
            source: 'static',
            value: false
        },
        categoryId: {
            source: 'static',
            value: ''
        },
        productLimit: {
            source: 'static',
            value: 24
        },
        sortBy: {
            source: 'static',
            value: 'name-asc'
        },
        onlyDeals: {
            source: 'static',
            value: false
        }
    }
});