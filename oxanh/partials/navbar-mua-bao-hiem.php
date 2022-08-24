<?php
$attr_menu = '';
$arr_menu = array();
if (!empty($GLOBALS["menu"])) {
    $attr_menu = $GLOBALS["menu"];
    $arr_menu = explode(",", $attr_menu);
}
?>
<div id="ci-header" class="ci-header">
    <nav class="navbar px-3 p-xl-0 ">
        <div class="container">
            <a class="navbar-brand" href="<?php echo HTTP_PATH; ?>">
                <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/logo2.png" alt="Logo" width="130px">
            </a>
            <button class="navbar-toggle d-block d-xl-none" type="button">
                <b class="icon-bar"></b>
                <b class="icon-bar"></b>
                <b class="icon-bar"></b>
            </button>
            <ul id="main-menu" class="nav navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link <?php echo in_array('home', $arr_menu) ? " active " : ""; ?>
                    " aria-current="page" href="<?php echo HTTP_PATH; ?>">Sản phẩm</a>
                </li>
  

                <!-- Hien thi mobile -->
                <li class="nav-ỉtem-form d-block d-xl-none">
                    <form class="d-block">
                        <div class="ci-menu-link d-flex align-items-center me-0 mb-4">
                            <svg class="ci-menu-user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                            <div class="ci-menu-link__item">
                                <a href="<?php echo HTTP_PATH . 'pages/dang-nhap2.php'; ?>">
                                    Đăng nhập
                                </a>
                            </div>
                            <span class="ci-menu-link__separator"></span>
                            <div class="ci-menu-link__item">
                                <a href="<?php echo HTTP_PATH . 'pages/dang-ky2.php'; ?>">
                                    Đăng kí
                                </a>
                            </div>
                        </div>
                        <div class="ci-header-phone">
                            <a class="ci-btn ci-bg-sub-color" href="tel:0978240990">
                                <i class="fal fa-phone-volume fz-20 me-3"></i>0978 240 990
                            </a>
                        </div>
                        <!-- <button class="ci-btn ci-btn-main ci-btn-mua-bh d-block w-100" type="button">MUA BẢO HIỂM</button> -->
                    </form>
                </li>

            </ul>
            <div class="navbar-right d-none d-xl-block ms-5">
                <div class="d-flex align-items-center">
                    <div class="ci-header-phone">
                        <a class="ci-btn ci-bg-sub-color" href="tel:0978240990">
                            <i class="fal fa-phone-volume fz-20 me-3"></i>0978 240 990
                        </a>
                    </div>
                    <!-- <button class="ci-btn ci-btn-main ci-btn-mua-bh" type="button">MUA BẢO HIỂM</button> -->
                </div>
            </div>
        </div>
    </nav>
</div>