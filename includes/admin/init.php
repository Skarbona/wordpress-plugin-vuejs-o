<?php
function fs_dostepnosc_init() {

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
        'supports'           => array( 'title', 'editor'),
    );

    register_post_type( 'portfolio', $args );

}