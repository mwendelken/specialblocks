import './component';
import './config';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'special-table',
    label: 'sw-cms.elements.special.table.label',
    component: 'sw-cms-el-special-table',
    configComponent: 'sw-cms-el-config-special-table',
    previewComponent: 'sw-cms-el-preview-special-table',
    defaultConfig: {
        tableHeaders: { value: ['Spalte 1', 'Spalte 2', 'Spalte 3'], source: 'static' },
        tableRows: { value: [
            ['Zeile 1, Spalte 1', 'Zeile 1, Spalte 2', 'Zeile 1, Spalte 3'],
            ['Zeile 2, Spalte 1', 'Zeile 2, Spalte 2', 'Zeile 2, Spalte 3']
        ], source: 'static' },
        tableStyle: { value: 'default', source: 'static' },
        showHeader: { value: true, source: 'static' },
        striped: { value: false, source: 'static' },
        bordered: { value: true, source: 'static' }
    }
});