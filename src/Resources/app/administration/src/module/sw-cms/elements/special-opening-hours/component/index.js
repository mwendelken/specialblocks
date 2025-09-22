import template from './sw-cms-el-special-opening-hours.html.twig';
import './sw-cms-el-special-opening-hours.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-special-opening-hours', {
    template,
    
    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            dayLabels: {
                monday: 'Montag',
                tuesday: 'Dienstag',
                wednesday: 'Mittwoch', 
                thursday: 'Donnerstag',
                friday: 'Freitag',
                saturday: 'Samstag',
                sunday: 'Sonntag'
            }
        };
    },

    computed: {
        openingHoursData() {
            const schedule = {};
            
            this.days.forEach(day => {
                schedule[day] = {
                    morning: {
                        open: this.element.config[`${day}_morning_open`]?.value || '',
                        close: this.element.config[`${day}_morning_close`]?.value || ''
                    },
                    afternoon: {
                        open: this.element.config[`${day}_afternoon_open`]?.value || '',
                        close: this.element.config[`${day}_afternoon_close`]?.value || ''
                    },
                    closed: this.element.config[`${day}_closed`]?.value || false
                };
            });
            
            return {
                schedule: schedule,
                displayStyle: this.element.config.displayStyle?.value || 'table',
                showCurrentStatus: this.element.config.showCurrentStatus?.value !== false
            };
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-opening-hours');
        }
    }
});