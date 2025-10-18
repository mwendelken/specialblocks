# Installation - Special Blocks für Shopware 6.7+

Diese Anleitung beschreibt die Installation und Konfiguration des Special Blocks Plugins für Shopware 6.7+.

## Systemanforderungen

- **Shopware 6.7+** (erforderlich)
- **PHP 8.1+**
- Zugriff auf die Shopware-Konsole (CLI)
- Schreibrechte im `custom/plugins/` Verzeichnis

## Installationsmethoden

### Methode 1: Direkter Download (Empfohlen)

1. Laden Sie die neueste Version von [GitHub Releases](https://github.com/your-username/special-blocks/releases) herunter

2. Entpacken Sie die ZIP-Datei in Ihr Shopware `custom/plugins/` Verzeichnis:
   
   ```bash
   cd /pfad/zu/ihrem/shopware/custom/plugins
   unzip SpecialBlocks.zip
   ```

3. Wechseln Sie in das Shopware Root-Verzeichnis:
   
   ```bash
   cd /pfad/zu/ihrem/shopware
   ```

4. Installieren Sie das Plugin:
   
   ```bash
   bin/console plugin:refresh
   bin/console plugin:install SpecialBlocks --activate
   ```

5. Leeren Sie den Cache:
   
   ```bash
   bin/console cache:clear
   ```

6. Kompilieren Sie die Assets:
   
   ```bash
   bin/console bundle:dump
   bin/console asset:install
   ```

### Methode 2: Git Clone

1. Wechseln Sie in das `custom/plugins/` Verzeichnis:
   
   ```bash
   cd /pfad/zu/ihrem/shopware/custom/plugins
   ```

2. Klonen Sie das Repository:
   
   ```bash
   git clone https://github.com/mwendelken/specialblocks.git SpecialBlocks
   ```

3. Wechseln Sie zurück ins Shopware Root-Verzeichnis:
   
   ```bash
   cd /pfad/zu/ihrem/shopware
   ```

4. Installieren Sie das Plugin:
   
   ```bash
   bin/console plugin:refresh
   bin/console plugin:install --activate SpecialBlocks
   bin/console cache:clear
   bin/console bundle:dump
   bin/console assets:install
   bin/console theme:compile
   bin/build-administration.sh
   bin/build-storefront.sh
   ```

5. Leeren Sie den Cache:
   
   ```bash
   bin/console cache:clear
   ```

6. Kompilieren Sie die Assets:
   
   ```bash
   bin/console bundle:dump
   bin/console assets:install
   bin/console theme:compile
   bin/build-administration.sh
   bin/build-storefront.sh
   ```

## Installation überprüfen

1. Melden Sie sich im Shopware Admin-Panel an
2. Navigieren Sie zu **Erweiterungen > Meine Erweiterungen**
3. Suchen Sie nach "Special Blocks"
4. Der Status sollte **Installiert** und **Aktiviert** anzeigen

## Plugin konfigurieren (Optional)

Das Plugin bietet optionale Konfigurationseinstellungen für die Öffnungszeiten-Anzeige:

1. Gehen Sie zu **Erweiterungen > Meine Erweiterungen**
2. Suchen Sie "Special Blocks" und klicken Sie auf die drei Punkte
3. Wählen Sie **Konfigurieren**
4. Passen Sie die Farben für Status-Anzeigen an (Geöffnet/Geschlossen)
5. Speichern Sie die Änderungen

## Erste Schritte

Nach erfolgreicher Installation können Sie die Special Blocks in Ihren Erlebniswelten verwenden:

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

## Deinstallation

Falls Sie das Plugin deinstallieren möchten:

```bash
cd /pfad/zu/ihrem/shopware
bin/console plugin:deactivate SpecialBlocks
bin/console plugin:uninstall SpecialBlocks
bin/console cache:clear
```

Um das Plugin komplett zu entfernen, löschen Sie zusätzlich das Verzeichnis:

```bash
rm -rf custom/plugins/SpecialBlocks
```

## Troubleshooting

### Plugin wird nicht angezeigt

**Problem:** Das Plugin erscheint nicht in der Erweiterungsliste

**Lösung:**

```bash
bin/console plugin:refresh
bin/console cache:clear
```

### Blöcke erscheinen nicht im Admin

**Problem:** Die Special Blocks sind in den Erlebniswelten nicht sichtbar

**Lösung:**

```bash
bin/console cache:clear
bin/console bundle:dump
bin/console assets:install
bin/console theme:compile
bin/build-administration.sh
bin/build-storefront.sh
```

Leeren Sie anschließend den Browser-Cache (Strg+F5 / Cmd+Shift+R)

### "Class AbstractCmsBlockResolver not found" Fehler

**Problem:** Dieser Fehler tritt bei älteren Shopware-Versionen auf

**Lösung:** Stellen Sie sicher, dass Sie Shopware 6.7 oder höher verwenden:

```bash
bin/console --version
```

### Konfiguration wird nicht gespeichert

**Problem:** Änderungen in der Plugin-Konfiguration werden nicht übernommen

**Lösung:**

1. Überprüfen Sie die Browser-Konsole auf JavaScript-Fehler
2. Leeren Sie den Cache: `bin/console cache:clear`
3. Überprüfen Sie Dateiberechtigungen im `var/cache/` Verzeichnis

### Frontend-Darstellung fehlerhaft

**Problem:** Blöcke werden im Storefront nicht korrekt angezeigt

**Lösung:**

```bash
bin/console cache:clear
bin/console theme:compile
```

Falls Sie ein eigenes Theme verwenden, stellen Sie sicher, dass die Theme-Kompilierung erfolgreich war.

## Weitere Hilfe

Bei weiteren Fragen oder Problemen:

- **Dokumentation:** Siehe [README.md](README.md)
- **Issues melden:** [GitHub Issues](https://github.com/mwendelken/special-blocks/issues)
- **Logs prüfen:** `var/log/` im Shopware-Verzeichnis

## Support

Für technischen Support:

- GitHub Issues: https://github.com/mwendelken/special-blocks/issues
- Website: https://wendelken.net

---

**Version:** 1.0.0
**Letzte Aktualisierung:** Oktober 2025
