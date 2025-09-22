# Special Blocks for Shopware 6.7+

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shopware Version](https://img.shields.io/badge/Shopware-6.7%2B-blue.svg)](https://www.shopware.com/)

A free Shopware 6.7+ plugin that extends Shopping Experiences with essential CMS blocks - **no additional CSS frameworks required!** This plugin integrates seamlessly with your existing Shopware theme and respects your design system.

## Community Gift 🎁

This plugin is our way of saying **thank you** to the amazing Shopware community that has always been supportive and helpful. It's completely free and open source - use it, modify it, and share it!

## Features

### Video Block

- **MP4 video integration** with full control options
- Autoplay, loop, mute, and controls configuration
- Responsive design that adapts to your theme
- Custom dimensions and aspect ratios

### Table Block

- **Dynamic table creation** with configurable rows and columns
- Multiple styling options (Standard, Primary, Dark) that respect your theme colors
- Striped and bordered layouts
- Fully responsive on all devices
- Perfect for pricing tables, comparisons, or data display

### Opening Hours Block

- **Weekly schedule display** with morning/afternoon splits
- Real-time status indicator (Open/Closed)
- Flexible display modes (Table or List view)
- Support for both 12h and 24h time formats
- Customizable status colors via admin interface
- Perfect for stores, restaurants, or service businesses

## Theme Integration

**No CSS framework dependencies!** This plugin is designed to work seamlessly with:

- Default Shopware theme
- Custom themes
- Third-party themes
- Your existing design system

The blocks automatically adapt to your theme's styling and color scheme, ensuring a consistent look and feel across your entire shop.

## Installation

### Method 1: Direct Download (Recommended)

1. Download the latest release from [GitHub Releases](../../releases)
2. Extract the ZIP file to your Shopware `custom/plugins/` directory
3. Install and activate the plugin:

```bash
cd /path/to/your/shopware
bin/console plugin:install SpecialBlocks
bin/console plugin:activate SpecialBlocks
bin/console cache:clear
```

4. Compile assets:

```bash
bin/console bundle:dump
bin/console asset:install
```

### Method 2: Git Clone

```bash
cd /path/to/your/shopware/custom/plugins
git clone https://github.com/your-username/special-blocks.git SpecialBlocks
cd /path/to/your/shopware
bin/console plugin:install SpecialBlocks
bin/console plugin:activate SpecialBlocks
bin/console cache:clear
bin/console bundle:dump
bin/console asset:install
```

## Usage

### Adding Special Blocks to Your Pages

1. Go to **Content > Shopping Experiences** in your Shopware admin
2. Create a new Shopping Experience or edit an existing one
3. Find the new blocks in the **"Special Blocks"** category
4. Drag and drop them into your layout
5. Configure each block according to your needs

### Block Configuration

#### Video Block Configuration

- **Video File**: Select MP4 file from Media Manager
- **Autoplay**: Enable/disable automatic playback
- **Controls**: Show/hide video controls
- **Muted**: Start video muted
- **Loop**: Enable continuous playback
- **Dimensions**: Set custom width and height

#### Table Block Configuration

- **Headers**: Define column titles
- **Rows**: Add table content row by row
- **Style**: Choose from Standard, Primary, or Dark themes
- **Layout Options**: Enable striped rows, borders, or header visibility

#### Opening Hours Configuration

- **Weekly Schedule**: Set morning/afternoon hours for each day
- **Closed Days**: Mark specific days as closed
- **Display Mode**: Choose between table or list layout
- **Status Display**: Show current open/closed status
- **Time Format**: Select 12h or 24h format
- **Status Colors**: Customize colors in plugin settings

## Requirements

- **Shopware 6.7+** (Required)
- PHP 8.1+
- No additional dependencies

## Architecture

This plugin follows Shopware 6.7+ best practices:

- **Element Resolvers Only**: No deprecated Block Resolvers (removed in 6.7+)
- **Modern Architecture**: Clean separation between backend logic, admin interface, and frontend templates
- **Theme Compatible**: Respects existing theme styles and variables
- **Performance Optimized**: Minimal footprint with no external dependencies

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. Clone the repository
2. Set up a Shopware 6.7+ development environment
3. Install the plugin in development mode
4. Make your changes
5. Test thoroughly

### Contribution Guidelines

- Follow Shopware coding standards
- Maintain compatibility with Shopware 6.7+
- Ensure theme compatibility
- Add appropriate documentation
- Test with different themes

### Reporting Issues

Found a bug or have a feature request? Please create an issue on GitHub with:

- Shopware version
- PHP version
- Theme information
- Detailed description of the issue
- Steps to reproduce

## Changelog

### Version 1.0.0

- Initial release
- Video Block with full MP4 support
- Table Block with multiple styling options
- Opening Hours Block with status indicators
- Full Shopware 6.7+ compatibility
- Theme integration support

## Acknowledgments

Special thanks to:

- The **Shopware Community** for continuous support and inspiration
- All contributors who help improve this plugin
- Beta testers who provided valuable feedback

## Troubleshooting

### Common Issues

**"Class AbstractCmsBlockResolver not found" Error:**

- This error occurs when using the plugin with older Shopware versions
- The plugin is optimized for Shopware 6.7+ and doesn't require Block Resolvers anymore
- Solution: Ensure you're using Shopware 6.7+

**Elements not appearing in admin:**

- Check service registration in `services.xml`
- Clear cache: `bin/console cache:clear`
- Recompile assets: `bin/console bundle:dump && bin/console asset:install`

**Configuration not saving:**

- Verify Vue.js component data binding
- Check browser console for JavaScript errors

**Frontend not rendering:**

- Verify Twig template paths
- Check data structure access in templates
- Ensure theme compatibility

### General Troubleshooting

For questions or problems:

1. Check Shopware logs in `var/log/`
2. Ensure all files are correctly uploaded
3. Clear cache: `bin/console cache:clear`
4. Recompile assets

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Free to use and modify!**

## Links

- [Report Issues](../../issues)
- [Feature Requests](../../issues)

## Support the Community

If this plugin helps you, consider:

- Starring this repository
- Reporting bugs or suggesting improvements
- Contributing code or documentation
- Sharing with other Shopware developers

---

**Made with ❤️ for the Shopware Community**