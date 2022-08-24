<?php 
define('HEADER', 'header.php');
define('FOOTER', 'footer.php');
define('NAVBAR', 'navbar.php');
define('NAVBAR2', 'navbar-mua-bao-hiem.php');
define('NAVBAR3', 'navbar-tai-khoan.php');
define('SCRIPTS', 'scripts.php');
define('MOBILE_NAV', 'mobile-bottom.php');
define('TOP_RIGHT', 'top-right.php');
define('BOTTOM', 'bottom.php');
define('POPUP', 'popup.php');

define('DIR', dirname(__FILE__));

define('APP_NAME', strtok(str_replace(realpath($_SERVER['DOCUMENT_ROOT']), '', __FILE__), DIRECTORY_SEPARATOR));

define('HTTP_PATH', get_site_url('',true)); 

define('SOURCE', HTTP_PATH);

define('DOCUMENT_ROOT',$_SERVER['DOCUMENT_ROOT'].'/'.APP_NAME); 

?>