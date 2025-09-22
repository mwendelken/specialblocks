import './component';
import './config';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'special-opening-hours',
    label: 'sw-cms.elements.special.openingHours.label',
    component: 'sw-cms-el-special-opening-hours',
    configComponent: 'sw-cms-el-config-special-opening-hours',
    previewComponent: 'sw-cms-el-preview-special-opening-hours',
    defaultConfig: {
        monday_morning_open: { value: '09:00', source: 'static' },
        monday_morning_close: { value: '12:00', source: 'static' },
        monday_afternoon_open: { value: '14:00', source: 'static' },
        monday_afternoon_close: { value: '18:00', source: 'static' },
        monday_closed: { value: false, source: 'static' },
        
        tuesday_morning_open: { value: '09:00', source: 'static' },
        tuesday_morning_close: { value: '12:00', source: 'static' },
        tuesday_afternoon_open: { value: '14:00', source: 'static' },
        tuesday_afternoon_close: { value: '18:00', source: 'static' },
        tuesday_closed: { value: false, source: 'static' },
        
        wednesday_morning_open: { value: '09:00', source: 'static' },
        wednesday_morning_close: { value: '12:00', source: 'static' },
        wednesday_afternoon_open: { value: '14:00', source: 'static' },
        wednesday_afternoon_close: { value: '18:00', source: 'static' },
        wednesday_closed: { value: false, source: 'static' },
        
        thursday_morning_open: { value: '09:00', source: 'static' },
        thursday_morning_close: { value: '12:00', source: 'static' },
        thursday_afternoon_open: { value: '14:00', source: 'static' },
        thursday_afternoon_close: { value: '18:00', source: 'static' },
        thursday_closed: { value: false, source: 'static' },
        
        friday_morning_open: { value: '09:00', source: 'static' },
        friday_morning_close: { value: '12:00', source: 'static' },
        friday_afternoon_open: { value: '14:00', source: 'static' },
        friday_afternoon_close: { value: '18:00', source: 'static' },
        friday_closed: { value: false, source: 'static' },
        
        saturday_morning_open: { value: '09:00', source: 'static' },
        saturday_morning_close: { value: '13:00', source: 'static' },
        saturday_afternoon_open: { value: '', source: 'static' },
        saturday_afternoon_close: { value: '', source: 'static' },
        saturday_closed: { value: false, source: 'static' },
        
        sunday_morning_open: { value: '', source: 'static' },
        sunday_morning_close: { value: '', source: 'static' },
        sunday_afternoon_open: { value: '', source: 'static' },
        sunday_afternoon_close: { value: '', source: 'static' },
        sunday_closed: { value: true, source: 'static' },
        
        displayStyle: { value: 'table', source: 'static' },
        showCurrentStatus: { value: false, source: 'static' },
        timeFormat: { value: '24h', source: 'static' }
    }
});