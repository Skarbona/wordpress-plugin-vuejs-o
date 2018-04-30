<?php

function fs_plugin_scripts() {

    wp_register_script('fs_vuejs',plugins_url('/dist/build.js',
        PORTFOLIO_PLUGIN_URL),array(),1.0,true);

    wp_register_script('fs_dev_vuejs',plugins_url('/src/build.js',
        PORTFOLIO_PLUGIN_URL),array(),1.0,true);

    wp_enqueue_script('fs_vuejs');
    //wp_enqueue_script('fs_dev_vuejs');

}