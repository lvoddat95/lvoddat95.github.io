<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = ''; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR3; ?>
        <div class="pt-0 bg-grey overflow-visible">
            <div class="ci-breadcrumb-link bg-silver2 d-flex">
                <div class="container">
                    <ul class="list-unstyled">
                        <li class="home"><a href="<?php echo HTTP_PATH; ?>">Trang chủ</a></li>
                        <li><a href="#">Tài khoản</a></li>
                    </ul>
                </div>
            </div>

            <div class="ci-block">
                <div class="container">
                    <div class="ci-block-aside pb-5">
                        <aside class="ci-aside mb-3">
                            <div class="ci-user-box">
                                <svg class="ci-menu-user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                                <div class="info">
                                    <span class="fz-12">Tài khoản của</span>
                                    <span class="fz-16 fw-medium d-block">Lê Văn A</span>
                                </div>
                            </div>
                            <ul class="account-menu-list">
                                <li class="item active">
                                    <a href="<?php echo HTTP_PATH; ?>pages/tai-khoan.php" title="Thông tin tài khoản">
                                        <i class="fa fa-user fa-fw"></i>Thông tin tài khoản
                                    </a>
                                </li>

                                <!-- <li class="item ">
                                    <a href="<?php echo HTTP_PATH; ?>pages/san-pham-quan-tam.php" title="Sản phẩm đang quan tâm">
                                        <i class="fa fa-inbox fa-fw"></i>Sản phẩm đang quan tâm
                                    </a>
                                </li>

                                <li class="item ">
                                    <a href="<?php echo HTTP_PATH; ?>pages/ma-giam-gia.php" title="Mã giảm giá">
                                        <i class="fa fa-gift fa-fw"></i>Mã giảm giá
                                    </a>
                                </li> -->

                                <li class="item ">
                                    <a href="<?php echo HTTP_PATH; ?>pages/quan-ly-don-hang.php" title="Quản lý đơn hàng">
                                        <i class="fa fa-box-circle-check fa-fw"></i>Quản lý đơn hàng
                                    </a>
                                </li>

                                <li class="item ">
                                    <a href="<?php echo HTTP_PATH; ?>pages/quan-ly-thong-bao.php" title="Quản lý thông báo">
                                        <i class="fa fa-bell fa-fw"></i>Quản lý thông báo
                                    </a>
                                </li>

                                <li class="item ">
                                    <a href="<?php echo HTTP_PATH; ?>pages/doi-mat-khau.php" title="Thay đổi mật khẩu">
                                        <i class="fa fa-lock-keyhole fa-fw"></i>Thay đổi mật khẩu
                                    </a>
                                </li>
                            </ul>
                        </aside>

                        <main class="ci-main">
                            <h2 class="fz-20 fw-normal mb-4">Thông tin tài khoản</h2>
                            <div class="bg-white px-4 py-4 radius-8">

                                <div class="row gx-5 ">
                                    <div class="col-lg-3">
                                        <div class="form-group row align-items-center mt-5">
                                            <div class="media">
                                                <div class="media-aside text-center">
                                                    <label for="file">
                                                        <img src="<?php echo SOURCE; ?>assets/img/camera.svg" height="80" width="80" class="of-cover rounded-circle">
                                                    </label>
                                                </div>
                                                <div class="media-body mt-2 text-center">
                                                    <input hidden="hidden" type="file" accept=".jpg, .png, .gif" class="form-control-file" id="file">
                                                    <p class="m-0">Chọn ảnh đại diện </p>
                                                    <p class="gray-color m-0 fz-12"> Định dạng cho phép JPG, GIF or PNG. Dung lượng ảnh < 1MB </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Họ và tên</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <input class="form-control" type="text" name="" id="" value="Nguyễn Văn Thọ" placeholder="Nhập họ và tên">
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Ngày sinh</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <div class="position-relative">
                                                    <input type="text" class="form-control form-control input-date datepicker " placeholder="dd/mm/yyyy" id="">
                                                    <i class="fad fa-calendar-alt"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Số điện thoại</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <input class="form-control" type="text" name="" id="" value="" placeholder="Nhập số điện thoại">
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Email</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <input class="form-control" type="text" name="" id="" value="" placeholder="Nhập Email">
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Giới tính</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <ul class="list-unstyled m-0 p-0 d-flex align-items-center">
                                                    <li class="d-flex align-items-center me-5">
                                                        <input id="gt-nam" type="radio" checked="checked" name="gioitinh" value="nam">
                                                        <label class="ms-2" for="gt-nam">Nam</label>
                                                    </li>
                                                    <li class="d-flex align-items-center me-5">
                                                        <input id="gt-nu" type="radio" name="gioitinh" value="nu">
                                                        <label class="ms-2" for="gt-nu">Nữ</label>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <input id="gt-khac" type="radio" name="gioitinh" value="nu">
                                                        <label class="ms-2" for="gt-khac">Khác</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">Địa chỉ</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <input class="form-control" type="text" name="" id="" value="" placeholder="Nhập địa chỉ">
                                            </div>
                                        </div>

                                        <div class="mt-5 form-group row align-items-center">
                                            <div class="text-left col-md-3 ">
                                                <label class="m-0 d-block text-md-end">&nbsp;</label>
                                            </div>
                                            <div class="text-left col-md-9">
                                                <button class="btn ci-btn btn-primary" type="submit">Lưu thay đổi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>

        <?php include_once FOOTER; ?>

    </div>
</body>

<?php include_once SCRIPTS; ?>