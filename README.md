# Special Blocks für Shopware 6.7+

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shopware Version](https://img.shields.io/badge/Shopware-6.7%2B-blue.svg)](https://www.shopware.com/)

Ein kostenloses Shopware 6.7+ Plugin, das die Erlebniswelten um essentielle CMS-Blöcke erweitert - **keine zusätzlichen CSS-Frameworks erforderlich!** Dieses Plugin integriert sich nahtlos in Ihr bestehendes Shopware-Theme und nutzt Ihr Design.

## Community Geschenk 

Dieses Plugin ist mein Weg **Danke** zu sagen an die großartige Shopware-Community, die immer hilfsbereit und unterstützend war. Es ist komplett kostenlos und Open Source - nutzen Sie es, modifizieren Sie es und teilen Sie es!

## Features

### Video Block

- **MP4-Video-Integration** mit vollständigen Steuerungsoptionen
- Konfiguration für Autoplay, Loop, Mute und Controls
- Responsive Design, das sich an Ihr Theme anpasst
- Individuelle Dimensionen und Seitenverhältnisse

### Tabellen Block

- **Dynamische Tabellenerstellung** mit konfigurierbaren Zeilen und Spalten
- Mehrere Styling-Optionen (Standard, Primary, Dark), die Ihre Theme-Farben respektieren
- Gestreifte und umrandete Layouts
- Vollständig responsive auf allen Geräten
- Perfekt für Preistabellen, Vergleiche oder Datendarstellung

### Öffnungszeiten Block

- **Wochenplan-Anzeige** mit Vormittag/Nachmittag-Aufteilung
- Echtzeit-Status-Indikator (Geöffnet/Geschlossen)
- Flexible Anzeigemodi (Tabellen- oder Listenansicht)
- Unterstützung für 12h und 24h Zeitformate
- Anpassbare Status-Farben über das Admin-Interface
- Perfekt für Geschäfte, Restaurants oder Dienstleistungsunternehmen

## Theme-Integration

**Keine CSS-Framework-Abhängigkeiten!** Dieses Plugin funktioniert nahtlos mit:

- Standard-Shopware-Theme
- Individuellen Themes
- Themes von Drittanbietern
- Ihrem bestehenden Design-System

Die Blöcke passen sich automatisch an das Styling und Farbschema Ihres Themes an und sorgen so für ein konsistentes Erscheinungsbild in Ihrem gesamten Shop.

## Installation

### Methode 1: Direkter Download (Empfohlen)

1. Laden Sie die neueste Version von [GitHub Releases](../../releases) herunter
2. Entpacken Sie die ZIP-Datei in Ihr Shopware `custom/plugins/` Verzeichnis
3. Installieren und aktivieren Sie das Plugin:

```bash
cd /pfad/zu/ihrem/shopware
bin/console plugin:refresh
bin/console plugin:install --activate SpecialBlocks
bin/console cache:clear
```

4. Kompilieren Sie die Assets:

```bash
bin/console bundle:dump
bin/console asset:install
```

### Methode 2: Git Clone

```bash
cd /pfad/zu/ihrem/shopware/custom/plugins
git clone https://github.com/mwendelken/specialblocks.git SpecialBlocks
cd /pfad/zu/ihrem/shopware
bin/console plugin:refresh
bin/console plugin:install --activate SpecialBlocks
bin/console cache:clear
bin/console bundle:dump
bin/console assets:install
bin/console theme:compile
bin/build-administration.sh
bin/build-storefront.sh
```

## Verwendung

### Special Blocks zu Ihren Seiten hinzufügen

1. Gehen Sie zu **Inhalte > Erlebniswelten** in Ihrem Shopware-Admin
2. Erstellen Sie eine neue Erlebniswelt oder bearbeiten Sie eine bestehende
3. Finden Sie die drei neuen Elemente in der Elementübersicht
4. Verfügbare Blöcke:   
   - **Video Block** - MP4-Video-Integration
   - **Tabellen Block** - Dynamische Tabellen
   - **Öffnungszeiten Block** - Wochenplan mit Status-Anzeige
5. Tauschen Sie das Element über die Schaltfläche "Element austauschen"
6. Konfigurieren Sie den Block über das Zahnrad-Symbol
7. Speichern und publizieren Sie die Erlebniswelt

### Block-Konfiguration

#### Video Block-Konfiguration

- **Video-Datei**: MP4-Video-URL aus OneDrive, Google-Drive, Dropbox, etc. (Video-URL muss öffentlich abrufbar sein) einfügen und speichern.
- **Autoplay**: Automatische Wiedergabe aktivieren/deaktivieren
- **Controls**: Video-Steuerelemente anzeigen/verbergen
- **Muted**: Video stumm starten
- **Loop**: Kontinuierliche Wiedergabe aktivieren
- **Dimensionen**: Individuelle Breite und Höhe festlegen

#### Tabellen Block-Konfiguration

- **Kopfzeilen**: Spaltentitel definieren
- **Zeilen**: Tabelleninhalt Zeile für Zeile hinzufügen
- **Stil**: Wählen Sie zwischen Standard, Primary oder Dark Themes
- **Layout-Optionen**: Gestreifte Zeilen, Rahmen oder Kopfzeilen-Sichtbarkeit aktivieren

#### Öffnungszeiten-Konfiguration

- **Wochenplan**: Vormittag/Nachmittag-Zeiten für jeden Tag festlegen
- **Geschlossene Tage**: Bestimmte Tage als geschlossen markieren
- **Anzeigemodus**: Zwischen Tabellen- oder Listenlayout wählen
- **Status-Anzeige**: Aktuellen Geöffnet/Geschlossen-Status anzeigen
- **Zeitformat**: 12h oder 24h Format auswählen
- **Status-Farben**: Farben in den Plugin-Einstellungen anpassen

## Systemanforderungen

- **Shopware 6.7+** (Erforderlich)
- PHP 8.1+
- Keine zusätzlichen Abhängigkeiten

## Architektur

Dieses Plugin folgt den Best Practices von Shopware 6.7+:

- **Nur Element Resolvers**: Keine veralteten Block Resolvers (in 6.7+ entfernt)
- **Moderne Architektur**: Klare Trennung zwischen Backend-Logik, Admin-Interface und Frontend-Templates
- **Theme-Kompatibel**: Respektiert bestehende Theme-Stile und Variablen
- **Performance-Optimiert**: Minimaler Footprint ohne externe Abhängigkeiten

## Mitwirken

### Probleme melden

Einen Bug gefunden oder einen Feature-Wunsch? Bitte erstellen Sie ein Issue auf GitHub mit:

- Shopware-Version
- PHP-Version
- Theme-Informationen
- Detaillierte Beschreibung des Problems
- Schritte zur Reproduktion

## Changelog

### Version 1.0.0

- Erstveröffentlichung
- Video Block mit vollständiger MP4-Unterstützung
- Tabellen Block mit mehreren Styling-Optionen
- Öffnungszeiten Block mit Status-Indikatoren
- Vollständige Shopware 6.7+ Kompatibilität
- Theme-Integrations-Unterstützung

Siehe [Changelog.md](Changelog.md) für detaillierte Änderungen.

## Danksagungen

Besonderer Dank an:

- Die **Shopware-Community** für kontinuierliche Unterstützung und Inspiration
- Alle Mitwirkenden, die helfen, dieses Plugin zu verbessern
- Beta-Tester, die wertvolles Feedback gegeben haben

## Fehlerbehebung

### Häufige Probleme

**"Class AbstractCmsBlockResolver not found" Fehler:**

- Dieser Fehler tritt bei älteren Shopware-Versionen auf
- Das Plugin ist für Shopware 6.7+ optimiert und benötigt keine Block Resolvers mehr
- Lösung: Stellen Sie sicher, dass Sie Shopware 6.7+ verwenden

**Elemente erscheinen nicht im Admin:**

- Service-Registrierung in `services.xml` überprüfen
- Cache leeren: `bin/console cache:clear`
- Assets neu kompilieren: `bin/console bundle:dump && bin/console asset:install`

**Konfiguration wird nicht gespeichert:**

- Vue.js-Komponenten-Datenbindung überprüfen
- Browser-Konsole auf JavaScript-Fehler prüfen

**Frontend rendert nicht:**

- Twig-Template-Pfade überprüfen
- Datenzugriff auf Datenstrukturen in Templates prüfen
- Theme-Kompatibilität sicherstellen

### Allgemeine Fehlerbehebung

Bei Fragen oder Problemen:

1. Shopware-Logs in `var/log/` überprüfen
2. Sicherstellen, dass alle Dateien korrekt hochgeladen wurden
3. Cache leeren: `bin/console cache:clear`
4. Assets neu kompilieren

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) Datei für Details.

**Frei zu verwenden, zu modifizieren und zu verteilen!**

## Links

- [GitHub Repository](https://github.com/mwendelken/specialblocks)
- [Probleme melden](https://github.com/mwendelken/specialblocks/issues)
- [Feature-Wünsche](https://github.com/mwendelken/specialblocks/issues)

## Die Community unterstützen

Wenn Ihnen dieses Plugin hilft, erwägen Sie:

- Dieses Repository mit einem Stern versehen
- Bugs melden oder Verbesserungen vorschlagen
- Code oder Dokumentation beitragen
- Mit anderen Shopware-Entwicklern teilen

---

**Mit Liebe für die Shopware-Community erstellt**

**Version:** 1.0.0
**Autor:** Wendelken Dienstleistungen
**Website:** https://wendelken.net
