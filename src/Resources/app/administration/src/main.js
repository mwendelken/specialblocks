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
        'video': {
            'label': 'Special Video',
            'description': 'Zeigt ein MP4-Video an',
            'browserNotSupported': 'Ihr Browser unterstützt das Video-Tag nicht.',
            'noVideoSelected': 'Kein Video ausgewählt. Bitte wählen Sie eine MP4-Datei aus.',
            'config': {
                'videoSrc': {
                    'label': 'Video-Datei',
                    'helpText': 'Wählen Sie eine MP4-Video-Datei aus'
                },
                'autoplay': {
                    'label': 'Automatisch abspielen',
                    'helpText': 'Video automatisch beim Laden der Seite starten'
                },
                'controls': {
                    'label': 'Steuerungsleiste anzeigen',
                    'helpText': 'Play/Pause und andere Bedienelemente anzeigen'
                },
                'muted': {
                    'label': 'Stumm schalten',
                    'helpText': 'Video ohne Ton starten'
                },
                'loop': {
                    'label': 'Endlosschleife',
                    'helpText': 'Video in Schleife abspielen'
                },
                'width': {
                    'label': 'Breite',
                    'helpText': 'CSS-Breite des Videos (z.B. 100%, 500px)'
                },
                'height': {
                    'label': 'Höhe',
                    'helpText': 'CSS-Höhe des Videos (z.B. auto, 300px)'
                }
            }
        },
        'table': {
            'label': 'Special Tabelle',
            'description': 'Zeigt eine konfigurierbare Tabelle an',
            'noDataAvailable': 'Keine Tabellendaten verfügbar. Bitte konfigurieren Sie die Tabelle.',
            'config': {
                'tableHeaders': {
                    'label': 'Tabellenkopf',
                    'helpText': 'Spaltenüberschriften der Tabelle'
                },
                'tableRows': {
                    'label': 'Tabellenzeilen',
                    'helpText': 'Datenzeilen der Tabelle'
                },
                'tableStyle': {
                    'label': 'Tabellenstil',
                    'helpText': 'Visueller Stil der Tabelle'
                },
                'showHeader': {
                    'label': 'Kopfzeile anzeigen',
                    'helpText': 'Tabellenkopf mit Überschriften anzeigen'
                },
                'striped': {
                    'label': 'Gestreift',
                    'helpText': 'Abwechselnde Zeilenhintergrundfarben'
                },
                'bordered': {
                    'label': 'Mit Rahmen',
                    'helpText': 'Rahmen um Tabellenzellen anzeigen'
                }
            }
        },
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
        'video': {
            'label': 'Special Video',
            'description': 'Displays an MP4 video',
            'browserNotSupported': 'Your browser does not support the video tag.',
            'noVideoSelected': 'No video selected. Please choose an MP4 file.',
            'config': {
                'videoSrc': {
                    'label': 'Video File',
                    'helpText': 'Select an MP4 video file'
                },
                'autoplay': {
                    'label': 'Autoplay',
                    'helpText': 'Start video automatically when page loads'
                },
                'controls': {
                    'label': 'Show Controls',
                    'helpText': 'Show play/pause and other control elements'
                },
                'muted': {
                    'label': 'Mute',
                    'helpText': 'Start video without sound'
                },
                'loop': {
                    'label': 'Loop',
                    'helpText': 'Play video in loop'
                },
                'width': {
                    'label': 'Width',
                    'helpText': 'CSS width of the video (e.g. 100%, 500px)'
                },
                'height': {
                    'label': 'Height',
                    'helpText': 'CSS height of the video (e.g. auto, 300px)'
                }
            }
        },
        'table': {
            'label': 'Special Table',
            'description': 'Displays a configurable table',
            'noDataAvailable': 'No table data available. Please configure the table.',
            'config': {
                'tableHeaders': {
                    'label': 'Table Headers',
                    'helpText': 'Column headers of the table'
                },
                'tableRows': {
                    'label': 'Table Rows',
                    'helpText': 'Data rows of the table'
                },
                'tableStyle': {
                    'label': 'Table Style',
                    'helpText': 'Visual style of the table'
                },
                'showHeader': {
                    'label': 'Show Header',
                    'helpText': 'Display table header with column titles'
                },
                'striped': {
                    'label': 'Striped',
                    'helpText': 'Alternating row background colors'
                },
                'bordered': {
                    'label': 'Bordered',
                    'helpText': 'Show borders around table cells'
                }
            }
        },
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