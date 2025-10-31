# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.1.0] - 2025-10-30

### Geändert

#### Video Block - Media Manager Integration

- **Video-Auswahl über Shopware Medienverwaltung** statt externer URL
  - Integration des `sw-media-field` für native Medienauswahl
  - Upload-Funktionalität direkt im CMS-Designer
  - Automatische Erstellung eines "Video"-Ordners bei Plugin-Installation
  - Media-Entity-Verarbeitung im `VideoElementResolver`

#### Backend-Änderungen

- `VideoBlockStruct`: Erweitert um `MediaEntity`, `mediaId` und `videoUrl` Properties
- `VideoElementResolver`:
  - `collect()` Methode implementiert für Media-Entity-Laden
  - `enrich()` Methode angepasst für Media-Verarbeitung
  - Criteria Collection für optimiertes Media-Loading
- `SpecialBlocks.php`: `createMediaFolder()` Methode für automatische Ordner-Erstellung bei Installation

#### Admin-Komponenten

- Config-Komponente: `sw-media-field` ersetzt Text-Input
- Config index.js: `getDefaultFolderId()` für Video-Ordner-Referenz
- Element index.js: `defaultConfig` angepasst mit Media-Entity-Konfiguration
- Component: Media-Repository-Integration mit Watcher für dynamisches Laden

#### Frontend

- Storefront Template: Verwendet `element.data.media.url` statt direkter URL

### Technische Details

- Neue Abhängigkeit: `Shopware\Core\Content\Media\MediaEntity`
- Service-Injection: `repositoryFactory` in Admin-Komponenten
- Default Media Folder Entity: `special_blocks_video`

## [1.0.0] - 2025-10-18

### Hinzugefügt

#### Video Block

- MP4-Video-Integration mit vollständiger Kontrolle über Wiedergabeoptionen
- Konfigurierbare Optionen: Autoplay, Loop, Mute, Controls
- Responsive Design mit anpassbaren Dimensionen und Seitenverhältnissen
- Unterstützung für Custom Width und Height
- Vorschau im Admin-Panel

#### Tabellen Block

- Dynamische Tabellenerstellung mit konfigurierbaren Zeilen und Spalten
- Drei Styling-Optionen: Standard, Primary, Dark
- Theme-Integration zur Anpassung an existierende Farbschemata
- Gestreifte und umrandete Layout-Optionen
- Vollständig responsive auf allen Geräten
- Option zum Ein-/Ausblenden der Kopfzeile
- Perfekt für Preistabellen, Vergleiche oder Datendarstellung

#### Öffnungszeiten Block

- Wochenplan-Anzeige mit Vormittag/Nachmittag-Aufteilung
- Echtzeit-Status-Indikator (Geöffnet/Geschlossen)
- Flexible Anzeigemodi: Tabellen- oder Listenansicht
- Unterstützung für 12h und 24h Zeitformate
- Anpassbare Status-Farben über Admin-Interface
- Logik für durchgehende Öffnungszeiten ohne Mittagspause
- Konfigurierbare geschlossene Tage
- Automatische Zeitberechnung basierend auf aktueller Uhrzeit

#### Architektur & Integration

- Vollständige Shopware 6.7+ Kompatibilität
- Moderne Architektur ohne deprecated Block Resolvers
- Element Resolvers für alle drei Blocktypen
- Data Structures für strukturierte Datenverarbeitung
- Service-Container-Integration mit Dependency Injection
- Theme Compiler Subscriber für Asset-Integration
- Twig Extension für Custom Functions
- Config Service für Plugin-Konfiguration

#### Admin-Komponenten

- Vue.js Komponenten für alle drei Blocktypen
- Konfigurationsinterfaces im CMS-Designer
- Vorschau-Komponenten für bessere Übersicht
- Vollständige Integration in Shopware Admin UI
- Snippet-Unterstützung für Deutsch und Englisch

#### Frontend

- Twig Templates für alle Blocktypen
- CSS ohne externe Framework-Abhängigkeiten
- Theme-kompatibles Styling
- Mobile-First Responsive Design
- Barrierefreie HTML-Struktur

#### Dokumentation

- Umfassendes README.md mit Feature-Übersicht
- Detaillierte Installationsanleitung (INSTALLATION.md)
- Technische Dokumentation für Entwickler (CLAUDE.md)
- Funktionsweise-Beschreibung (FUNKTIONSWEISE.md)
- Code-Kommentare und Inline-Dokumentation

#### Konfiguration

- System-Konfiguration für Opening Hours Status-Farben
- Color Picker für "Geöffnet"-Status
- Color Picker für "Geschlossen"-Status
- Plugin-Icon und Metadaten

### Technische Details

#### Element Resolvers

- `VideoElementResolver` - Verarbeitet Video-Konfiguration
- `TableElementResolver` - Verarbeitet Tabellen-Konfiguration
- `OpeningHoursElementResolver` - Verarbeitet Öffnungszeiten-Konfiguration

#### Data Structures

- `VideoBlockStruct` - Video-Datenstruktur
- `TableBlockStruct` - Tabellen-Datenstruktur
- `OpeningHoursBlockStruct` - Öffnungszeiten-Datenstruktur mit Zeitlogik

#### Services

- `ConfigService` - Zentrale Konfigurationsverwaltung
- `ThemeCompilerSubscriber` - Event-Handling für Theme-Kompilierung
- `SpecialBlocksController` - Storefront-Controller
- `SpecialBlocksExtension` - Twig-Extension

#### Coding Standards

- PSR-1, PSR-4, PSR-12 konform
- PHP 8.1+ mit strict types
- Vue.js 3 Komponenten
- BEM CSS-Namenskonvention
- ESLint-konforme JavaScript-Syntax

### Sicherheit

- Keine hardcodierten Credentials
- Sichere Twig-Templates mit Auto-Escaping
- Validierung aller Konfigurationswerte
- Keine SQL-Injections durch Doctrine ORM

---

## Support

Bei Fragen oder Problemen:

- **GitHub Issues:** [GitHub · Issues](https://github.com/mwendelken/specialblocks/issues)
- **Website:** https://wendelken.net

## Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.
