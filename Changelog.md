# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## [1.4.0] - 2025-12-27

### Hinzugefügt
- **Intelligente Produkt-Ladung** im HTML/Twig-Element via Element Resolver
- Automatische Produkt-Ladung auf Kategorie-Seiten (`element.data.categoryProducts`)
- Manuelle Produkt-Ladung via Kategorie-ID Konfiguration (`element.data.customCategoryProducts`)
- Produkte gruppiert nach Kategorien verfügbar (`element.data.productsByCategory`)
- Konfigurierbare Optionen im Admin:
  - **Kategorie-ID** (optional) - Lädt Produkte einer spezifischen Kategorie
  - **Produkt-Limit** (1-100, Standard: 24) - Maximale Anzahl geladener Produkte
  - **Sortierung** - Name (A-Z, Z-A), Preis (auf-/absteigend), Neueste zuerst
  - **Nur Angebote** - Filtert Produkte mit reduziertem Preis (listPrice > calculatedPrice)
- CodeBlockStruct mit ProductCollection und CategoryEntity Support
- Automatische Duplikat-Vermeidung bei Produkt-Gruppierung

### Geändert
- HTML/Twig-Element unterstützt nun Element Resolver (vorher absichtlich ohne Resolver)
- Einstellungen-Tab erweitert mit Produkt-Lade-Optionen und Hilfe-Texten

### Technisch
- CodeElementResolver mit intelligentem collect() und enrich() Prozess
- Unterstützung für ResolverContext zur Erkennung der aktuellen Seite
- Produkt-Filterung nach Rabatt (listPrice vs. calculatedPrice)
- Kategorie-basierte Produkt-Gruppierung mit alphabetischer Sortierung

## [1.3.3] - 2025-12-27

### Behoben
- **KRITISCH**: Template-Name korrigiert von `cms-element-special-html-twig.html.twig` → `cms-element-special-code.html.twig` (muss Element-Typ `special-code` entsprechen)
- HTML/Twig-Element rendert jetzt korrekt auf der Storefront (Fehler: `element.translated.config.htmlCode.value` → `element.config.htmlCode.value`)
- Einstellungen-Tab im HTML/Twig-Element zeigt jetzt korrekt den Twig-Toggle-Schalter (`sw-switch` → `sw-switch-field` mit korrektem v-model)
- Twig-Funktion `special_blocks_render_string` wird jetzt mit korrekten Parametern aufgerufen
- Info-Box im Einstellungen-Tab erklärt die Twig-Funktionalität

## [1.3.2] - 2025-12-26

### Behoben
- Administration-Bundle wird wieder ausgeliefert (esbuild-Build erzeugt `Resources/public/administration/js/special-blocks.js`).
- Alle CMS-Elemente (Video, Tabelle, Öffnungszeiten, HTML/Twig) erscheinen erneut im Admin.

## [1.3.1] - 2025-12-26

### Behoben
- Admin-Konfiguration des HTML/Twig-Blocks speichert Änderungen (inkl. Twig-Toggle) wieder zuverlässig.
- Administration-Asset wird direkt geladen (administration.xml + fertiges JS), damit das Element sichtbar bleibt.

## [1.3.0] - 2025-12-26

### Hinzugefügt
- Twig-String-Compiler-Service mit Logging und Fallback für das HTML/Twig-Element
- Neue Twig-Funktion `special_blocks_render_string` für kontextbewusstes Rendering dynamischer Inhalte

### Geändert
- HTML/Twig-Storefront-Template nutzt die neue Rendering-Pipeline anstelle von `template_from_string()`

## [1.2.0] - 2025-12-25

### Hinzugefügt
- **HTML/Twig Code Block**: Neues CMS-Element für benutzerdefinierten HTML, CSS und JavaScript Code
- Code-Editor mit Syntax-Highlighting für HTML, CSS und JavaScript im Admin
- Optional aktivierbare Twig-Template-Kompilierung für dynamische Inhalte
- Twig StringLoader-Extension Integration (`template_from_string()`)
- Tab-basierte Code-Verwaltung im Admin-Interface (HTML, CSS, JS, Einstellungen)
- Getrennte Eingabefelder für HTML, CSS und JavaScript Code
- Toggle-Schalter zum Aktivieren/Deaktivieren der Twig-Kompilierung

### Technische Details
- Registrierung der `Twig\Extension\StringLoaderExtension` in services.xml
- Admin-Komponenten: Preview, Component, Config mit Vue.js
- Storefront Template mit bedingter Twig-Verarbeitung
- Keine zusätzlichen Abhängigkeiten erforderlich

## [1.1.0] - 2024-XX-XX

### Geändert
- Verbesserungen und Bugfixes
- Performance-Optimierungen

## [1.0.0] - 2024-XX-XX

### Hinzugefügt
- Erstveröffentlichung des Plugins
- **Video Block**: MP4-Video-Integration mit vollständigen Steuerungsoptionen
  - Autoplay, Loop, Mute, Controls Konfiguration
  - Individuelle Dimensionen und Seitenverhältnisse
  - Automatische Medienverwaltungs-Ordner-Erstellung
- **Tabellen Block**: Dynamische Tabellenerstellung
  - Konfigurierbare Zeilen und Spalten
  - Mehrere Styling-Optionen (Standard, Primary, Dark)
  - Gestreifte und umrandete Layouts
  - Vollständig responsive
- **Öffnungszeiten Block**: Wochenplan mit Status-Anzeige
  - Vormittag/Nachmittag-Aufteilung
  - Echtzeit-Status-Indikator (Geöffnet/Geschlossen)
  - Flexible Anzeigemodi (Tabellen- oder Listenansicht)
  - 12h und 24h Zeitformate
  - Anpassbare Status-Farben
- Vollständige Shopware 6.7+ Kompatibilität
- Theme-agnostische Integration ohne CSS-Framework-Abhängigkeiten
- Element Resolvers (keine veralteten Block Resolvers)
- Mehrsprachige Unterstützung (Deutsch, Englisch)

---

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).
