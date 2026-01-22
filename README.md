# Sales Buddi - PHP Version

This project is a merged version of the Sales Buddi landing page, combining work from two developers (Imran and Faisal) into a PHP-based project.

## Project Structure

```
sales-buddi-php/
├── index.php           # Main landing page (merged from both developers)
├── config.php          # PHP configuration file
├── style.css           # Merged custom styles
├── partials/           # Reusable PHP components
│   ├── header.php     # Header section with navigation and meta tags
│   └── footer.php     # Footer section with scripts
├── assets/
│   ├── css/           # CSS framework files
│   │   ├── sb-theme-style.css
│   │   ├── utilities.css
│   │   ├── spacer.css
│   │   └── slick.css
│   ├── images/        # All image assets from both developers
│   └── js/            # JavaScript files
│       ├── scripts.js
│       └── slick.min.js
└── README.md          # This file
```

## Developer Contributions

### Imran's Sections (Top of Page)
- **Header**: Logo and navigation with animated background shapes
- **Hero Section**: Main headline, CTA button, app store links, and app showcase with SVG text animation

### Faisal's Sections (Bottom of Page)
- **FAQ Section**: Accordion-style frequently asked questions
- **Deal Slip Away Section**: Final CTA with app download links and client reviews
- **Footer**: Basic footer structure

## Merged Features

### CSS
- Combined both developers' styles into a single `style.css`
- Organized with clear section comments
- Responsive design for mobile, tablet, and desktop
- Maintained all custom animations and effects

### HTML/PHP
- Converted from static HTML to PHP (`index.php`)
- Seamlessly integrated Imran's top sections with Faisal's bottom sections
- Maintained all interactive elements (accordion, buttons, links)

### Assets
- Merged all unique images from both projects
- Included all CSS framework files
- Included all JavaScript dependencies

## Setup Instructions

1. **Local Development**:
   - Place this folder in your web server directory (e.g., `htdocs` for XAMPP, `www` for WAMP)
   - Access via `http://localhost/sales-buddi-php/`

2. **Configuration**:
   - Edit `config.php` to set your site URL, database credentials (for future use), and other settings
   - Update app store links in the configuration or directly in `index.php`

3. **Customization**:
   - Modify `style.css` for design changes
   - Edit `index.php` for content updates
   - Update FAQ content and other text as needed
   - Modify `partials/header.php` to change header/navigation
   - Modify `partials/footer.php` to change footer content

## PHP Partials System

The project uses a modular PHP structure with reusable components:

### Header Partial (`partials/header.php`)
- Contains `<head>` section with meta tags and CSS links
- Includes site header with logo and navigation
- Supports dynamic page titles via `$page_title` variable

**Usage Example:**
```php
<?php
$page_title = "Custom Page Title";
include 'partials/header.php';
?>
```

### Footer Partial (`partials/footer.php`)
- Contains footer section with branding
- Includes all JavaScript files
- Closes `<main>`, `<body>`, and `<html>` tags

**Benefits:**
- **DRY Principle**: Don't Repeat Yourself - header and footer defined once
- **Easy Maintenance**: Update header/footer in one place, affects all pages
- **Scalability**: Easy to add new pages with consistent layout
- **Clean Code**: Main content files focus only on page-specific content
   - Modify `partials/header.php` to change header/navigation
   - Modify `partials/footer.php` to change footer content

## PHP Partials System

The project uses a modular PHP structure with reusable components:

### Header Partial (`partials/header.php`)
- Contains `<head>` section with meta tags and CSS links
- Includes site header with logo and navigation
- Supports dynamic page titles via `$page_title` variable

**Usage Example:**
```php
<?php
$page_title = "Custom Page Title";
include 'partials/header.php';
?>
```

### Footer Partial (`partials/footer.php`)
- Contains footer section with branding
- Includes all JavaScript files
- Closes `<main>`, `<body>`, and `<html>` tags

**Benefits:**
- **DRY Principle**: Don't Repeat Yourself - header and footer defined once
- **Easy Maintenance**: Update header/footer in one place, affects all pages
- **Scalability**: Easy to add new pages with consistent layout
- **Clean Code**: Main content files focus only on page-specific content

## Technologies Used

- **PHP**: Server-side scripting
- **HTML5**: Markup structure
- **CSS3**: Styling and animations
- **JavaScript/jQuery**: Interactive elements
- **Slick Slider**: Carousel functionality (if needed in future)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

The PHP structure allows for easy addition of:
- Database integration for storing quiz results
- Contact form functionality
- User authentication
- Admin panel
- Analytics integration
- Email marketing integration

## Credits

- **Imran**: Header and Hero sections
- **Faisal**: FAQ and CTA sections
- **Merged by**: AI Assistant

## License

Proprietary - Sales Buddi

