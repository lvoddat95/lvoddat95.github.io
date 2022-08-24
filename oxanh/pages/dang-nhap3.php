<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'giai-quyet-quyen-loi-bao-hiem'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/register.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Đăng nhập tài khoản</h1>
                    <div class="ci-breadcrumb-desc">
                        Nhận lại quyền lợi bảo hiểm bảo vệ toàn diện từ ICaner
                    </div>
                </div>
            </div>
        </div>

        <main>

            <div class="ci-block bg-silver2">
                <div class="container">
                    <div class="row">
                        <div class=" col-lg-8">
                            <form action="dang-ky3.php" class="p-5 bg-white radius-16">
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

                                <div class="mt-4 text-center">
                                    Quý khách chưa đăng ký tài khoản? <a href="dang-ky3.php">Đăng ký</a>
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

                                <div class="mt-4 text-center">
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
                </div>

            </div>
        </main>

        <?php include_once FOOTER; ?>

    </div>
</body>

<?php include_once SCRIPTS; ?>