<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'giai-quyet-quyen-loi-bao-hiem'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-step">
            <div class="container">
                <ul class="step-nav" role="navigation">
                    <div id="progressbar" class="progressbar"></div>
                    <li class="active">
                        <button>
                            <div class="step-number">1</div>
                            <div class="step-title">Thông tin cá nhân</div>
                        </button>
                    </li>
                    <li class="">
                        <button>
                            <div class="step-number">2</div>
                            <div class="step-title">Xem lại thông tin</div>
                        </button>
                    </li>
                    <li class="">
                        <button>
                            <div class="step-number">3</div>
                            <div class="step-title">Xác nhận và thanh toán</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>



        <main>

            <div class="ci-block ci-service-block">
                <div class="container">
                    <div class="ci-heading">
                        <p class="ci-heading__sub">Đặc điểm nổi bật</p>
                        <h2 class="ci-heading__main">Bảo hiểm bệnh ung thư</h2>
                    </div>
                    <div class="lower-section">
                        <div class="row gx-5 clearfix">
                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="upper-box">
                                        <div class="box-inner">
                                            <div class="icon-box">
                                                <img width="62px" class="img-fluid" src="<?php echo SOURCE; ?>assets/img/salary.png" alt="HTV">
                                            </div>
                                            <h6>Chi trả toàn bộ Số tiền bảo hiểm từ 100 - 500 triệu đồng</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="upper-box">
                                        <div class="box-inner">
                                            <div class="icon-box">
                                                <img width="62px" class="img-fluid" src="<?php echo SOURCE; ?>assets/img/family.png" alt="HTV">
                                            </div>
                                            <h6>Bảo hiểm bệnh ung thư ở bất kỳ giai đoạn nào.</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="upper-box">
                                        <div class="box-inner">
                                            <div class="icon-box">
                                                <img width="62px" class="img-fluid" src="<?php echo SOURCE; ?>assets/img/bill.png" alt="HTV">
                                            </div>
                                            <h6>Phí bảo hiểm chỉ từ vài trăm nghìn đồng/năm</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="ci-block bg-grey">
                <div class="container">
                    <div class="ci-heading">
                        <p class="ci-heading__sub">Giới thiệu</p>
                        <h2 class="ci-heading__main">Quyền lợi bảo hiểm</h2>
                    </div>
                    <div class="ci-quyen-loi-box">
                        <div class="row gx-3 gx-lg-0">

                            <div class="col-lg-6 d-none d-lg-block">
                                <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/family3.jpg" alt="">
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                                <div class="ci-quyen-loi-box__detail p-5">
                                    <div class="ci-quyen-loi-box__quote"><i class="fad fa-quote-left"></i></div>
                                    <div class="info">
                                        <p>Chỉ hơn 100.000đ/năm. VBI sẽ chi trả số tiền bảo hiểm lên đến 800 triệu/VNĐ ngay khi NĐBH có chẩn đoán mắc bệnh Ung thư:
                                            <br>✔ Quyền lợi Bảo hiểm bệnh ung thư giai đoạn sớm lên tới 125 triệu VNĐ
                                            <br>✔ Quyền lợi Bảo hiểm bệnh ung thư giai đoạn trễ lên tới 500 triệu VNĐ
                                            <br>✔ Quyền lợi Trợ cấp nằm viện lên tới 150 triệu VNĐ.
                                            <br>✔ Trợ cấp Tử vong lên tới 25 triệu VNĐ.
                                            <br>Thủ tục bồi thường đơn giản. Khai báo bồi thường trực tuyến, nhanh chóng, tiết kiệm thời gian.
                                            Bảo hiểm Ung thư Ô Xanh giúp các bệnh nhân chẳng may mắc phải bệnh Ung thư giảm bớt gánh nặng tài chính.
                                            Mua ngay kẻo lỡ!!!
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block">
                <div class="container">
                    <div class="ci-heading center">
                        <h2 class="ci-heading__main">Mua bảo hiểm ung thư</h2>
                    </div>
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