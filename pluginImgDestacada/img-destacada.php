<?php

/**
 * Plugin Name: Imagem Destacada para WP-API
 * Plugin URI: http://rodrigozan.com
 * Description: Adicionando ao wp-api imagens destacadas para serem consumidas por aplicações web e mobile.
 * Version: 1.0
 * Author: Rodrigo Zan
 * Author URI: http:/rodrigozan.com
 */


/**
* Add featured image urls to post response
* Default is to show media ID, but then you have to do another http request to get the image for an app. This allows you to just use the url.
* Sample usage would be post.featured_image_urls.thumbnail
*/
add_action( 'rest_api_init', 'appp_add_featured_urls' );
function appp_add_featured_urls() {
	register_rest_field( array( 'post', 'product' ),
	    'featured_image_urls',
	    array(
	        'get_callback'    => 'appp_featured_images',
	        'update_callback' => null,
            'schema'          => null,
	    )
	);
}

function appp_featured_images( $post ) {

    $featured_id = get_post_thumbnail_id( $post['id'] );

	$sizes = wp_get_attachment_metadata( $featured_id );

	$size_data = new stdClass();
			
	if ( ! empty( $sizes['sizes'] ) ) {

		foreach ( $sizes['sizes'] as $key => $size ) {
			// Use the same method image_downsize() does
			$image_src = wp_get_attachment_image_src( $featured_id, $key );

			if ( ! $image_src ) {
				continue;
			}
			
			$size_data->$key = $image_src[0];
			
		}

	}

	return $size_data;
    
}
