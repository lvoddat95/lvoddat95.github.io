<?php 
require __DIR__ . "/vendor/autoload.php";
require __DIR__ . "/inc/helper.php";
require __DIR__ . "/inc/const.php";

// Cau hinh thu muc nhan include
$include_paths = array(
    $_SERVER['DOCUMENT_ROOT'].'/partials/',
    $_SERVER['DOCUMENT_ROOT'].'/oxanh/partials/',
);
set_include_path(get_include_path() . PATH_SEPARATOR . implode(PATH_SEPARATOR, $include_paths));

