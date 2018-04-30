<?php
/*
Plugin Name: Chili IT Plugin
Description: This is plugin for specific this site. It use VueJS.
Author: Filip Sokolowski
Version: 1.0
Author URI: filip-sokolowski.pl
*/

if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

//Setup
define('PORTFOLIO_PLUGIN_URL',__FILE__);


//Includes
include('includes/enqueue.php');

//Hooks
add_action('wp_enqueue_scripts','fs_plugin_scripts',100);