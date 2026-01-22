<?php
/**
 * Sales Buddi - Configuration File
 * 
 * This file contains configuration settings for the Sales Buddi application.
 * Modify these settings as needed for your environment.
 */

// Error Reporting (set to 0 in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Site Configuration
define('SITE_NAME', 'Sales Buddi');
define('SITE_TAGLINE', 'Your AI Sales Coach');
define('SITE_URL', 'http://localhost'); // Change this to your domain

// Database Configuration (for future use)
define('DB_HOST', 'localhost');
define('DB_NAME', 'sales_buddi');
define('DB_USER', 'root');
define('DB_PASS', '');

// Email Configuration (for future use)
define('CONTACT_EMAIL', 'info@salesbuddi.com');
define('ADMIN_EMAIL', 'admin@salesbuddi.com');

// API Keys (for future integrations)
define('GOOGLE_ANALYTICS_ID', '');
define('FACEBOOK_PIXEL_ID', '');

// App Store Links
define('APP_STORE_IOS_LINK', '#');
define('APP_STORE_ANDROID_LINK', '#');

// Timezone
date_default_timezone_set('UTC');

// Session Configuration
session_start();

?>

