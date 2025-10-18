# Special Blocks Plugin - Funktionsweise und Architektur

## Überblick

Das Special Blocks Plugin erweitert Shopware 6.7+ um drei spezielle CMS-Blöcke für Erlebniswelten (Shopping Experiences):

- **Video-Block**: MP4-Video-Integration mit umfangreichen Konfigurationsoptionen
- **Tabellen-Block**: Dynamische Tabellen mit verschiedenen Darstellungsstilen
- **Öffnungszeiten-Block**: Wöchentliche Öffnungszeiten mit Status-Indikator

## Architektur und Komponenten

### 1. Plugin-Hauptklasse

**Datei**: `src/SpecialBlocks.php:9`

Die Hauptklasse erbt von `Shopware\Core\Framework\Plugin` und implementiert Standard-Installationsroutinen. Sie ist minimal gehalten und delegiert die Funktionalität an die spezialisierten Komponenten.

### 2. Service-Konfiguration

**Datei**: `src/Resources/config/services.xml:6`

Das Plugin registriert drei Element-Resolver als Services mit dem Tag `shopware.cms.data_resolver`:

- `VideoElementResolver` für Video-Elemente
- `TableElementResolver` für Tabellen-Elemente
- `OpeningHoursElementResolver` für Öffnungszeiten-Elemente

**Wichtiger Hinweis**: Das Plugin verwendet bewusst **keine Block-Resolver**, da diese in Shopware 6.7+ entfernt wurden. Die Architektur basiert ausschließlich auf Element-Resolvern, was der neuen Shopware-Struktur entspricht.

### 3. Backend-Architektur (PHP)

#### Element-Resolver

**Verzeichnis**: `src/Core/Content/Cms/SalesChannel/Element/`

Jeder Element-Resolver erbt von `AbstractCmsElementResolver` und implementiert drei Kernmethoden:

1. **`getType()`**: Definiert den eindeutigen Element-Typ (z.B. 'special-video')
2. **`collect()`**: Sammelt Daten für Batch-Verarbeitung (hier nicht verwendet, gibt `null` zurück)
3. **`enrich()`**: Verarbeitet die Konfigurationsdaten und erstellt die Datenstruktur

**Beispiel - VideoElementResolver (`src/Core/Content/Cms/SalesChannel/Element/VideoElementResolver.php:12`)**:

```php
public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
{
    $config = $slot->getFieldConfig();
    $videoStruct = new VideoBlockStruct();

    // Konfigurationswerte auslesen und in Datenstruktur übertragen
    $videoSrcConfig = $config->get('videoSrc');
    if ($videoSrcConfig) {
        $videoStruct->setVideoSrc($videoSrcConfig->getValue() ?? '');
    }
    // ... weitere Konfigurationen

    $slot->setData($videoStruct);
}
```

#### Datenstrukturen

**Verzeichnis**: `src/Core/Content/Cms/DataResolver/Element/Struct/`

Jede Datenstruktur erbt von `Shopware\Core\Framework\Struct\Struct` und definiert:

- Private/Protected Properties für Konfigurationswerte
- Getter/Setter-Methoden für Zugriff
- `getApiAlias()`-Methode für API-Identifikation

**Beispiel - VideoBlockStruct (`src/Core/Content/Cms/DataResolver/Element/Struct/VideoBlockStruct.php:6`)**:

- Eigenschaften: `$videoSrc`, `$autoplay`, `$controls`, `$muted`, `$loop`, `$width`, `$height`
- Standard-Werte: `autoplay=false`, `controls=true`, `width='100%'`, etc.

### 4. Frontend-Architektur (JavaScript/Vue)

#### Administration Interface

**Verzeichnis**: `src/Resources/app/administration/src/`

**Haupteinstiegspunkt**: `main.js:1`

- Importiert alle Element-Module
- Registriert Übersetzungen für Deutsch und Englisch
- Erweitert das Shopware-Locale-System

**Element-Struktur** (pro Element):

```
elements/special-{elementname}/
├── index.js                    # Element-Registrierung
├── component/                  # Haupt-Vue-Komponente für Admin
│   ├── index.js               # Komponenten-Definition
│   ├── sw-cms-el-special-*.html.twig  # Template
│   └── sw-cms-el-special-*.scss       # Styles
├── config/                     # Konfigurations-Interface
│   ├── index.js               # Config-Komponente
│   └── sw-cms-el-config-*.html.twig   # Config-Template
└── preview/                    # Vorschau im CMS-Designer
    ├── index.js               # Preview-Komponente
    ├── sw-cms-el-preview-*.html.twig   # Preview-Template
    └── sw-cms-el-preview-*.scss        # Preview-Styles
```

#### Storefront Templates

**Verzeichnis**: `src/Resources/views/storefront/element/`

Twig-Templates für die Frontend-Ausgabe:

- `cms-element-special-video.html.twig` - Video-Ausgabe
- `cms-element-special-table.html.twig` - Tabellen-Ausgabe
- `cms-element-special-opening-hours.html.twig` - Öffnungszeiten-Ausgabe

### 5. Datenfluss und Verarbeitung

#### 1. Konfiguration (Admin)

1. Benutzer konfiguriert Element im CMS-Designer
2. Vue.js-Komponenten sammeln Konfigurationswerte
3. Daten werden in `CmsSlotEntity->fieldConfig` gespeichert

#### 2. Verarbeitung (Backend)

1. Shopware lädt CMS-Page mit Slots
2. Element-Resolver wird basierend auf Element-Typ aufgerufen
3. `enrich()`-Methode liest Konfiguration aus `fieldConfig`
4. Daten werden in Struct-Objekt strukturiert
5. Struct wird an Slot angehängt (`$slot->setData()`)

#### 3. Ausgabe (Frontend)

1. Twig-Template erhält Slot mit angereicherter Datenstruktur
2. Template greift auf Struct-Daten zu (z.B. `element.data.videoSrc`)
3. HTML wird mit konfigurierten Werten generiert

### 6. Element-spezifische Funktionalitäten

#### Video-Block

**Konfigurierbare Optionen**:

- `videoSrc`: Pfad zur MP4-Datei
- `autoplay`: Automatisches Abspielen
- `controls`: Steuerungsleiste anzeigen
- `muted`: Stumm starten
- `loop`: Endlosschleife
- `width`/`height`: Dimensionen

#### Tabellen-Block

**Konfigurierbare Optionen**:

- Dynamische Kopfzeilen und Datenzeilen
- Verschiedene Bootstrap-Stile (Standard, Primary, Dark)
- Gestreifte und umrandete Darstellung
- Responsive Verhalten

#### Öffnungszeiten-Block

**Besonderheiten**:

- Komplexe Datenstruktur für 7 Wochentage
- Vormittag/Nachmittag-Aufteilung pro Tag
- Status-Berechnung (Geöffnet/Geschlossen)
- Verschiedene Anzeigeformate (Tabelle/Liste)
- 12h/24h-Zeitformat-Unterstützung

### 7. Shopware 6.7+ Kompatibilität

**Wichtige Änderungen**:

- Entfernung der `AbstractCmsBlockResolver`-Klasse
- Fokus auf Element-basierte Architektur
- Vereinfachte Service-Registrierung
- Direkte Element-zu-Template-Zuordnung

**Migration von älteren Versionen**:
Das Plugin ist ausschließlich für Shopware 6.7+ konzipiert und nutzt die modernisierte CMS-Architektur ohne Block-Resolver-Layer.

### 8. Erweiterbarkeit

**Neue Elemente hinzufügen**:

1. Element-Resolver in `src/Core/Content/Cms/SalesChannel/Element/` erstellen
2. Datenstruktur in `src/Core/Content/Cms/DataResolver/Element/Struct/` definieren
3. Service in `services.xml` registrieren
4. Admin-Komponenten in `src/Resources/app/administration/src/module/sw-cms/elements/` erstellen
5. Frontend-Template in `src/Resources/views/storefront/element/` erstellen
6. Element-Import in `main.js` hinzufügen

**Styling anpassen**:

- SCSS-Dateien in den jeweiligen Komponenten-Verzeichnissen
- Globale Styles in `src/Resources/app/storefront/src/scss/special-blocks.scss`

### 9. Debugging und Fehlerbehandlung

**Häufige Probleme**:

- **"Class AbstractCmsBlockResolver not found"**: Shopware-Version < 6.7
- **Element wird nicht angezeigt**: Service-Registrierung prüfen
- **Konfiguration wird nicht gespeichert**: Vue.js-Komponenten-Binding prüfen
- **Frontend-Darstellung fehlt**: Twig-Template-Pfad und Slot-Data prüfen

**Debugging-Tipps**:

- `var/log/` für PHP-Fehler
- Browser-Entwicklertools für JavaScript-Fehler
- `bin/console debug:container` für Service-Registrierung
- Twig-Debug-Modus für Template-Probleme

## Fazit

Das Special Blocks Plugin demonstriert eine moderne, saubere Implementierung der Shopware 6.7+ CMS-Architektur. Durch die Trennung von Backend-Logik (Element-Resolver + Structs), Admin-Interface (Vue.js) und Frontend-Darstellung (Twig) entsteht eine wartbare und erweiterbare Lösung, die den aktuellen Shopware-Standards entspricht.