<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php
?>

<body>
    <div id="ci-content" class="ci-content">
        <div>
            <div class="auth-page-login auth-page-style2">

                <div class="d-block d-lg-flex">
                    <div class="w-50 auth-style2-wrapper">
                        <div class="auth-content d-flex flex-column justify-content-center my-3 my-lg-5">
                            <div>
                                <div class="text-center">
                                    <a href="<?php echo HTTP_PATH; ?>">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/logo/logo-nav.png" alt="Logo" width="180px">
                                    </a>
                                </div>
                                <div class="text-center mt-2 mb-5">
                                    <h3 class="auth-title">ĐĂNG NHẬP TÀI KHOẢN</h3>
                                </div>
                                <form action="dang-ky2.php">

                                    <div class="mb-4">
                                        <label for="username" class="form-label">Tài khoản</label>
                                        <input type="text" class="form-control" id="username" placeholder="Tên đăng nhập hoặc email">
                                    </div>

                                    <div class="mb-4">
                                        <label class="form-label" for="password-input">Mật khẩu</label>
                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                            <input type="password" class="form-control pe-5" placeholder="············" id="password-input">
                                            <button onclick="show_password(this);" class="btn btn-link position-absolute end-0 top-0 h-100 text-decoration-none text-muted" style="width: 40px;" type="button" id="password-addon"><i class="fa fa-eye-slash align-middle"></i></button>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <label for="username" class="form-label">Mã thành viên</label>
                                        <input type="text" class="form-control" id="mathanhvien" placeholder="Mã tham gia thành viên">
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">
                                        <label class="form-check-label position-relative" for="auth-remember-check" style="top:-0.5px;">Lưu
                                            đăng
                                            nhập</label>
                                        <div class="float-end">
                                            <a href="quen-mat-khau.html">Quên mật khẩu?</a>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <button class="btn w-100 ci-btn ci-btn-main" type="submit">Đăng nhập</button>
                                    </div>

                                    <div class="mt-5 text-center">
                                        Quý khách chưa đăng ký tài khoản? <a href="dang-ky2.php">Đăng ký</a>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <p class="mt-0 mb-2 auth-login-with"><span>Hoặc đăng nhập bằng</span></p>

                                        <div class="btn-login-list d-flex align-items-center justify-content-center">
                                            <a class="btn-login-with" href="" title="Đăng nhập bằng Facebook">
                                                <img class="img-fluid me-2" src="<?php echo SOURCE; ?>assets/img/social/facebook.png" alt="" width="28px">
                                                <span>Facebook</span>
                                            </a>
                                            <a class="btn-login-with mx-2 mx-lg-4" href="" title="Đăng nhập bằng Google">
                                                <img class="img-fluid me-2" src="<?php echo SOURCE; ?>assets/img/social/google.png" alt="" width="28px">
                                                <span>Google</span>
                                            </a>
                                            <a class="btn-login-with" href="" title="Đăng nhập bằng Zalo">
                                                <img class="img-fluid me-2" src="<?php echo SOURCE; ?>assets/img/social/zalo.png" alt="" width="28px">
                                                <span>Zalo</span>
                                            </a>
                                        </div>
                                        </ul>
                                    </div>

                                    <div class="mt-5">
                                        <div class="alert alert-primary">
                                            Chúng tôi không sử dụng thông tin của bản với bất kỳ mục đích nào.
                                            Bằng cách đăng nhập hoặc đăng kí, bạn đồng ý với
                                            <a href="">Chính sách quy định</a> của Công ty Công nghệ bảo hiểm Hạt Thóc
                                            Vàng
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="auth-footer">
                            <div class="container-fluid">
                                <div class="d-block d-xl-flex align-items-center justify-content-between flex-column">
                                    <ul class="auth-footer-link list-unstyled my-4 my-xl-0">
                                        <li>
                                            <a href="">
                                                <i class="fal fa-headset fz-18 me-3"></i>
                                                <span>Liên hệ hỗ trợ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-circle-question fz-18 me-3"></i>
                                                <span>Câu hỏi thường gặp</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-user-shield fz-18 me-3"></i>
                                                <span>Miễn trừ trách nhiệm</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-shield-check fz-18 me-3"></i>
                                                <span>Chính sách bảo mật</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="mb-0 mt-2">© 2022 Bản quyền thuộc về Công ty Công nghệ bảo hiểm Hạt Thóc Vàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-50 position-relative d-none d-lg-block">
                        <div class="bg-overlay"></div>
                        <img class="auth-img img-fluid" src="<?php echo SOURCE; ?>assets/img/register3.jpg" alt="Login">
                    </div>
                </div>




            </div>
        </div>

    </div>
</body>
<?php include_once POPUP; ?>
<?php include_once SCRIPTS; ?>