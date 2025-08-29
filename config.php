<?php
// Moodle configuration file for Railway deployment

unset($CFG);
global $CFG;
$CFG = new stdClass();

// Database configuration using Railway environment variables
$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = getenv('MYSQLHOST') ?: 'localhost';
$CFG->dbname    = getenv('MYSQLDATABASE') ?: 'moodle';
$CFG->dbuser    = getenv('MYSQLUSER') ?: 'root';
$CFG->dbpass    = getenv('MYSQLPASSWORD') ?: '';
$CFG->dbport    = getenv('MYSQLPORT') ?: '3306';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => $CFG->dbport,
  'dbsocket' => '',
  'dbcollation' => 'utf8mb4_unicode_ci',
);

// Site URL - Railway provides this automatically
$railway_url = getenv('RAILWAY_STATIC_URL');
$railway_domain = getenv('RAILWAY_PUBLIC_DOMAIN');

if ($railway_url) {
    $CFG->wwwroot = 'https://' . $railway_url;
} elseif ($railway_domain) {
    $CFG->wwwroot = 'https://' . $railway_domain;
} else {
    // Fallback for local development
    $CFG->wwwroot = 'http://localhost';
}

// Data directory
$CFG->dataroot  = '/var/moodledata';
$CFG->admin     = 'admin';

// Security settings
$CFG->directorypermissions = 0777;
$CFG->passwordsaltmain = getenv('MOODLE_SALT') ?: 'joltvolt-hsfy-' . uniqid();

// Performance settings for Railway
$CFG->cachedir = '/tmp/moodle-cache';
$CFG->tempdir = '/tmp';
$CFG->backuptempdir = '/tmp';

// Email settings (Railway provides SMTP if needed)
$CFG->smtphosts = getenv('SMTP_HOST') ?: '';
$CFG->smtpuser = getenv('SMTP_USER') ?: '';
$CFG->smtppass = getenv('SMTP_PASS') ?: '';
$CFG->smtpsecure = 'tls';
$CFG->noreplyaddress = 'noreply@joltvolt.co.nz';

// JoltVolt specific settings
$CFG->siteshortname = 'JoltVolt HSFY';
$CFG->fullname = 'JoltVolt HSFY Learning Platform';

// Disable some features for performance on free tier
$CFG->enablecompletion = true;
$CFG->enableavailability = true;
$CFG->enableoutcomes = false;
$CFG->enablewebservices = true;

// Enable LTI for JoltVolt integration
$CFG->enablemobilewebservice = 1;

// Timezone
$CFG->timezone = 'Pacific/Auckland';

// Debug settings (disable in production)
$CFG->debug = 0;
$CFG->debugdisplay = 0;

// Create cache and temp directories if they don't exist
if (!is_dir($CFG->cachedir)) {
    mkdir($CFG->cachedir, 0777, true);
}

require_once(__DIR__ . '/lib/setup.php');

// This line must be the last one in this file
