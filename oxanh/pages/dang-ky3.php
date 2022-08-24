<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'giai-quyet-quyen-loi-bao-hiem'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/register.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Đăng ký tài khoản</h1>
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
                        <div class="col-lg-12">
                            <form action="dong-y-chinh-sach3.php" class="p-5 bg-white radius-16">
                                <div class="row gx-5">
                                    <div class="col-md-6">
                                        <div class="auth-heading mb-5">
                                            <h4>
                                                <img class="img-fluid me-2" src="<?php echo SOURCE; ?>assets/img/user.png" width="24px" alt="">
                                                <span>Thông tin cá nhân</span>
                                            </h4>
                                            <div class="line"></div>
                                        </div>
                                        <div class="auth-box">
                                            <div class="form-group">
                                                <label for="" class="form-label">Họ và tên</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Email</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="" class="form-label">Ngày Sinh</label>
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control form-control input-date datepicker" placeholder="dd/mm/yyyy">
                                                            <i class="fad fa-calendar-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="" class="form-label">Giới tính</label>
                                                        <select class="form-select" select2>
                                                            <option value="">Chọn giới tính</option>
                                                            <option value="1">Nam</option>
                                                            <option value="2">Nữ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Tỉnh/Thành phố</label>
                                                <select class="form-select" select2>
                                                    <option value="">Chọn tỉnh/thành phố</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Quận/Huyện</label>
                                                <select class="form-select" select2>
                                                    <option value="">Chọn quận/huyện</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Phường/Xã</label>
                                                <select class="form-select" select2>
                                                    <option value="">Chọn phường/xã</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Ghi chú địa chỉ</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">Điện thoại</label>
                                                <input type="text" class="form-control input-phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="form-label">CMTND/CCCD</label>
                                                <input type="text" class="form-control">
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 text-center">
                                                    <label for="mattruoc_file">
                                                        <img class="img-fluid" id="preview_mattruoc" src="<?php echo SOURCE; ?>assets/img/camera.svg">
                                                    </label>
                                                    <input type="file" name="" id="mattruoc_file" style="display:none" accept="image/*">
                                                    <p class="tx-16">Ảnh mặt trước</p>
                                                </div>
                                                <div class="col-md-6 text-center">
                                                    <label for="matsau_file">
                                                        <img class="img-fluid" id="preview_matsau" src="<?php echo SOURCE; ?>assets/img/camera.svg">
                                                    </label>
                                                    <input type="file" name="" id="matsau_file" style="display:none" accept="image/*">
                                                    <p class="tx-16">Ảnh mặt sau</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="mt-5">
                                            <button class="btn w-100 ci-btn ci-bg-sub-color " type="submit">Đăng ký</button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="auth-heading mb-5">
                                            <h4>
                                                <img class="img-fluid me-2" src="<?php echo SOURCE; ?>assets/img/shield.png" width="24px" alt="">
                                                <span>Thông tin đăng nhập</span>
                                            </h4>
                                            <div class="line"></div>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label">Tên đăng nhập</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label">Mật khẩu</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label">Nhập lại mật khẩu</label>
                                            <input type="text" class="form-control">
                                        </div>
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