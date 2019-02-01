<?php 

namespace Drupal\behaviors_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * The BehaviorsController Class
 */
class BehaviorsController extends ControllerBase {

	/**
	 * Display the Markup
	 *
	 * @return  array
	 *  return markup array
	 */
	public function content() {

		return [
			'#theme' => 'my_theme',
		];

	}

}



