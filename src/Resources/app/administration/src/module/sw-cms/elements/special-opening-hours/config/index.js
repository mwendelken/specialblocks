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
            ],
            // Lokale reactive Kopien der Werte
            localDisplayStyle: 'table',
            localTimeFormat: '24h',
            localShowStatus: false
        };
    },

    created() {
        this.createdComponent();
    },

    mounted() {
        // Lade aktuelle Werte in lokale Variablen
        this.loadCurrentValues();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('special-opening-hours');
            this.ensureConfigExists();
            this.loadCurrentValues();
        },

        ensureConfigExists() {
            // Display Style
            if (!this.element.config.displayStyle) {
                this.$set(this.element.config, 'displayStyle', { 
                    value: 'table', 
                    source: 'static' 
                });
            }

            // Time Format  
            if (!this.element.config.timeFormat) {
                this.$set(this.element.config, 'timeFormat', { 
                    value: '24h', 
                    source: 'static' 
                });
            }

            // Show Current Status
            if (!this.element.config.showCurrentStatus) {
                this.$set(this.element.config, 'showCurrentStatus', { 
                    value: false, 
                    source: 'static' 
                });
            }

            // Initialisiere alle Day-Configs
            this.days.forEach(day => {
                ['morning_open', 'morning_close', 'afternoon_open', 'afternoon_close'].forEach(period => {
                    const key = `${day}_${period}`;
                    if (!this.element.config[key]) {
                        this.$set(this.element.config, key, { value: '', source: 'static' });
                    }
                });

                const closedKey = `${day}_closed`;
                if (!this.element.config[closedKey]) {
                    this.$set(this.element.config, closedKey, { value: false, source: 'static' });
                }
            });
        },

        loadCurrentValues() {
            // Lade aktuelle Werte aus der Config in lokale Variablen
            this.localDisplayStyle = this.element?.config?.displayStyle?.value || 'table';
            this.localTimeFormat = this.element?.config?.timeFormat?.value || '24h';
            this.localShowStatus = this.element?.config?.showCurrentStatus?.value || false;
        },

        onDisplayStyleChange(value) {
            console.log('Display Style wird geändert von', this.localDisplayStyle, 'zu', value);
            
            // Aktualisiere lokale Variable sofort
            this.localDisplayStyle = value;
            
            // Aktualisiere Element Config
            this.element.config.displayStyle.value = value;
            
            // Force Vue Reaktivität
            this.$forceUpdate();
            
            // Emit Update
            this.onElementUpdate();
            
            console.log('Display Style nach Update:', this.element.config.displayStyle.value);
        },

        onTimeFormatChange(value) {
            console.log('Time Format wird geändert von', this.localTimeFormat, 'zu', value);
            
            // Aktualisiere lokale Variable sofort
            this.localTimeFormat = value;
            
            // Aktualisiere Element Config
            this.element.config.timeFormat.value = value;
            
            // Force Vue Reaktivität
            this.$forceUpdate();
            
            // Emit Update
            this.onElementUpdate();
        },

        onShowStatusChange(value) {
            console.log('Show Status wird geändert zu', value);
            
            // Aktualisiere lokale Variable sofort
            this.localShowStatus = value;
            
            // Aktualisiere Element Config
            this.element.config.showCurrentStatus.value = value;
            
            // Force Vue Reaktivität
            this.$forceUpdate();
            
            // Emit Update
            this.onElementUpdate();
        },

        onElementUpdate() {
            console.log('Element wird updated:', {
                displayStyle: this.element.config.displayStyle.value,
                timeFormat: this.element.config.timeFormat.value,
                showStatus: this.element.config.showCurrentStatus.value
            });
            
            this.$emit('element-update', this.element);
        },

        isDayClosed(day) {
            return this.element.config[`${day}_closed`]?.value || false;
        },

        toggleDayClosed(day) {
            const configKey = `${day}_closed`;
            
            if (!this.element.config[configKey]) {
                this.$set(this.element.config, configKey, { value: false, source: 'static' });
            }
            
            this.element.config[configKey].value = !this.element.config[configKey].value;
            
            // Clear times when day is closed
            if (this.element.config[configKey].value) {
                this.updateTime(day, 'morning', 'open', '');
                this.updateTime(day, 'morning', 'close', '');
                this.updateTime(day, 'afternoon', 'open', '');
                this.updateTime(day, 'afternoon', 'close', '');
            }
            
            this.onElementUpdate();
        },

        updateTime(day, period, type, value) {
            const configKey = `${day}_${period}_${type}`;
            
            if (!this.element.config[configKey]) {
                this.$set(this.element.config, configKey, { value: '', source: 'static' });
            }
            
            this.element.config[configKey].value = value;
            this.onElementUpdate();
        }
    },

    watch: {
        // Watch für Änderungen von außen (z.B. beim Laden eines gespeicherten Elements)
        'element.config.displayStyle.value'(newVal) {
            if (newVal !== this.localDisplayStyle) {
                this.localDisplayStyle = newVal;
            }
        },
        'element.config.timeFormat.value'(newVal) {
            if (newVal !== this.localTimeFormat) {
                this.localTimeFormat = newVal;
            }
        },
        'element.config.showCurrentStatus.value'(newVal) {
            if (newVal !== this.localShowStatus) {
                this.localShowStatus = newVal;
            }
        }
    }
});