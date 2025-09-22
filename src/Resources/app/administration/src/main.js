import './module/sw-cms/elements/special-video';
import './module/sw-cms/elements/special-table';
import './module/sw-cms/elements/special-opening-hours';

// Register Translations
const { Locale } = Shopware;

Locale.extend('de-DE', {
    'sw-cms': {
        'elements': {
            'special': {
                'video': {
                    'label': 'Special Video'
                },
                'table': {
                    'label': 'Special Tabelle'
                },
                'openingHours': {
                    'label': 'Öffnungszeiten'
                }
            }
        }
    },
    'specialBlocks': {
        'openingHours': {
            'config': {
                'displayStyle': {
                    'label': 'Darstellungsart',
                    'placeholder': 'Darstellungsart wählen'
                },
                'showCurrentStatus': {
                    'label': 'Aktuellen Status anzeigen'
                },
                'timeFormat': {
                    'label': 'Uhrzeitformat',
                    'placeholder': 'Uhrzeitformat wählen'
                },
                'weeklySchedule': 'Wöchentliche Öffnungszeiten',
                'days': {
                    'monday': 'Montag',
                    'tuesday': 'Dienstag',
                    'wednesday': 'Mittwoch',
                    'thursday': 'Donnerstag',
                    'friday': 'Freitag',
                    'saturday': 'Samstag',
                    'sunday': 'Sonntag'
                },
                'periods': {
                    'morning': 'Vormittag',
                    'afternoon': 'Nachmittag'
                },
                'timeTo': 'bis',
                'open': 'Geöffnet',
                'closed': 'Geschlossen'
            }
        }
    }
});

Locale.extend('en-GB', {
    'sw-cms': {
        'elements': {
            'special': {
                'video': {
                    'label': 'Special Video'
                },
                'table': {
                    'label': 'Special Table'
                },
                'openingHours': {
                    'label': 'Opening Hours'
                }
            }
        }
    },
    'specialBlocks': {
        'openingHours': {
            'config': {
                'displayStyle': {
                    'label': 'Display Style',
                    'placeholder': 'Select display style'
                },
                'showCurrentStatus': {
                    'label': 'Show Current Status'
                },
                'timeFormat': {
                    'label': 'Time Format',
                    'placeholder': 'Select time format'
                },
                'weeklySchedule': 'Weekly Opening Hours',
                'days': {
                    'monday': 'Monday',
                    'tuesday': 'Tuesday',
                    'wednesday': 'Wednesday',
                    'thursday': 'Thursday',
                    'friday': 'Friday',
                    'saturday': 'Saturday',
                    'sunday': 'Sunday'
                },
                'periods': {
                    'morning': 'Morning',
                    'afternoon': 'Afternoon'
                },
                'timeTo': 'to',
                'open': 'Open',
                'closed': 'Closed'
            }
        }
    }
});