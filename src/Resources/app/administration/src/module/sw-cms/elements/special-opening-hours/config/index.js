import template from './sw-cms-el-config-special-opening-hours.html.twig';
import './sw-cms-el-config-special-opening-hours.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-special-opening-hours', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            displayStyleOptions: [
                {
                    value: 'table',
                    label: 'Tabelle'
                },
                {
                    value: 'list',
                    label: 'Liste'
                }
            ],
            timeFormatOptions: [
                {
                    value: '24h',
                    label: '24-Stunden-Format'
                },
                {
                    value: '12h',
                    label: '12-Stunden-Format'
                }
            ]
        };
    },

    computed: {
        currentDisplayStyle: {
            get() {
                return this.element?.config?.displayStyle?.value || 'table';
            },
            set(value) {
                this.$set(this.element.config.displayStyle, 'value', value);
                this.onElementUpdate(this.element);
            }
        },

        currentTimeFormat: {
            get() {
                return this.element?.config?.timeFormat?.value || '24h';
            },
            set(value) {
                this.$set(this.element.config.timeFormat, 'value', value);
                this.onElementUpdate(this.element);
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-opening-hours');
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        },


        isDayClosed(day) {
            return this.element.config[`${day}_closed`]?.value || false;
        },

        toggleDayClosed(day) {
            const configKey = `${day}_closed`;
            this.element.config[configKey].value = !this.element.config[configKey].value;
            
            // Clear times when day is closed
            if (this.element.config[configKey].value) {
                this.element.config[`${day}_morning_open`].value = '';
                this.element.config[`${day}_morning_close`].value = '';
                this.element.config[`${day}_afternoon_open`].value = '';
                this.element.config[`${day}_afternoon_close`].value = '';
            }
            
            this.onElementUpdate(this.element);
        },

        updateTime(day, period, type, value) {
            const configKey = `${day}_${period}_${type}`;
            this.element.config[configKey].value = value;
            this.onElementUpdate(this.element);
        },

        onDisplayStyleChange(value) {
            this.currentDisplayStyle = value;
        },

        onTimeFormatChange(value) {
            this.currentTimeFormat = value;
        }
    }
});