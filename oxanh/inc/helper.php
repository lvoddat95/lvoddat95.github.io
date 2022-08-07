<?php 
function get_site_url($p_dir="", $root=false) 
{
    // output: /myproject/index.php
    $currentPath = $_SERVER['PHP_SELF']; 

    // output: Array ( [dirname] => /myproject [basename] => index.php [extension] => php [filename] => index ) 
    $pathInfo = pathinfo($currentPath)['dirname']; 
    if ($root == true) {

        $path = '/'.APP_NAME;

        $whitelist = array(
            '127.0.0.1',
            '::1'
        );

        if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
            $path = '';
        }

        $pathInfo = $path;
    }

    // output: localhost
    $hostName = $_SERVER['HTTP_HOST']; 

    $isSecure = false;
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
        $isSecure = true;
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' || !empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') {
        $isSecure = true;
    }
    $protocol = $isSecure ? 'https' : 'http';

    // return: http://localhost/myproject/
    return $protocol.'://'.$hostName.$pathInfo."/".$p_dir;
}


function inc($view,$require_once=true,$extend=''){
    if ($require_once == true) {
        if (!empty($extend)) {
            $GLOBALS["gv"] = $extend;
        }
        
        require_once $view;
    }else{
        if (!empty($extend)) {
            $GLOBALS["gv"] = $extend;
        }
        require $view;
    }
}






?>