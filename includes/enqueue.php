<?php

function fs_plugin_scripts() {

    wp_register_script('fs_vuejs',plugins_url('/dist/build.js',
        PORTFOLIO_PLUGIN_URL),array(),1.0,true);

    wp_register_script('fs_maps','https://maps.googleapis.com/maps/api/js?key=AIzaSyBOd6ZrLJa1kSCQYrp6ucDElSkUVddLoPQ',array(),1.0,false);


    wp_localize_script('fs_vuejs','wp_rest_api', array(
        'base_url'   => home_url('wp-json/wp/v2/'),
        'home_url' => home_url('')
    ));

    wp_enqueue_script('fs_vuejs');
    wp_enqueue_script('fs_maps');







}


