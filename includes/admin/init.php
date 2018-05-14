<?php
function fs_own_post_type_init() {

    $labels = array(
        'name'               => __( 'Dostępność',  'portfolio' ),
        'singular_name'      => __( 'Dostępność',  'portfolio' ),
        'menu_name'          => __( 'Dostępność',  'portfolio' ),
        'name_admin_bar'     => __( 'Dostępność',  'portfolio' ),
        'add_new'            => __( 'Dodaj nową',  'portfolio' ),
        'add_new_item'       => __( 'Dodaj nową dotępność', 'portfolio' ),
        'new_item'           => __( 'Dodaj nową dotępność', 'portfolio' ),
        'edit_item'          => __( 'Edytuj dotępność', 'portfolio' ),
        'view_item'          => __( 'Zobacz', 'portfolio' ),
        'all_items'          => __( 'Wszystkie', 'portfolio' ),
        'search_items'       => __( 'Szukaj', 'portfolio' ),
        'parent_item_colon'  => __( 'Rodzic Dostepności:', 'portfolio' ),
        'not_found'          => __( 'Nie znaleziono dostępności.', 'portfolio' ),
        'not_found_in_trash' => __( 'Nie znaleziono dostępności w koszu.', 'portfolio' )
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Dostępności', 'portfolio' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'dostepnosc' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'show_in_rest'       => true,
        'rest_base'          => 'dostepnosc-api',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           => array( 'title', 'editor'), );


    $labelsL = array(
            'name'               => __( 'Mapy',  'portfolio' ),
            'singular_name'      => __( 'Mapy',  'portfolio' ),
            'menu_name'          => __( 'Mapy',  'portfolio' ),
            'name_admin_bar'     => __( 'Mapy',  'portfolio' ),
            'add_new'            => __( 'Dodaj Lokalizacje',  'portfolio' ),
            'add_new_item'       => __( 'Dodaj nową lokalizacje', 'portfolio' ),
            'new_item'           => __( 'Dodaj nową lokalizacje', 'portfolio' ),
            'edit_item'          => __( 'Edytuj lokalizacje', 'portfolio' ),
            'view_item'          => __( 'Zobacz', 'portfolio' ),
            'all_items'          => __( 'Wszystkie', 'portfolio' ),
            'search_items'       => __( 'Szukaj', 'portfolio' ),
            'parent_item_colon'  => __( 'Rodzic Lokalizacji:', 'portfolio' ),
            'not_found'          => __( 'Nie znaleziono lokalizacji.', 'portfolio' ),
            'not_found_in_trash' => __( 'Nie znaleziono lokalizacji w koszu.', 'portfolio' )
        );

    $argsL = array(
        'labels'             => $labelsL,
        'description'        => __( 'Lokalizacja', 'portfolio' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'lokalizacja' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'show_in_rest'       => true,
        'rest_base'          => 'lokalizacja-api',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           => array( 'title'),


    );

    register_post_type( 'portfolio', $args );
    register_post_type( 'lokalizacja', $argsL );

}