<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = ''; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-step">
            <div class="container">
                <ul class="step-nav" role="navigation">
                    <div id="progressbar" class="progressbar" style="width: 0%;"></div>
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


            <div class="ci-block bg-grey">
                <div class="container">
                    <form action="" method="post" validation="true">
                        <div class="ci-purchase">
                            <div class="row gx-5">
                                <div class="col-lg-8">
                                    <div class="ci-purchase__top">
                                        <h2 class="ci-purchase__title">
                                            1. Thông tin cá nhân
                                        </h2>
                                        <p class="ci-purchase__desc">Các thông tin bên dưới dùng cho việc thẩm định,
                                            phát hành hợp đồng bảo hiểm và sẽ được bảo mật.
                                            Do đó, bạn hãy điền đầy đủ và chính xác các thông tin này</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-5">
                                <div class="col-lg-8">
                                    <div class="ci-purchase-box mb-5">
                                        <div class="row gx-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Mua cho: <span class="text-danger">*</span></label>
                                                    <select class="form-select" select2 required>
                                                        <option value="">Bản thân</option>
                                                        <option value="1">Bố/mẹ</option>
                                                        <option value="2">Anh/Chị/Em</option>
                                                        <option value="3">Con</option>
                                                        <option value="4">Bạn bè</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row gx-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Họ tên: <span class="text-danger">*</span></label>
                                                    <input id="" type="text" class="form-control" placeholder="Nhập tên đầy đủ" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Giới tính: <span class="text-danger">*</span></label>
                                                    <select class="form-select" select2 required>
                                                        <option value="">Chọn giới tính</option>
                                                        <option value="1">Nam</option>
                                                        <option value="2">Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row gx-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Ngày sinh: <span class="text-danger">*</span></label>
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control input-date datepicker" placeholder="dd/mm/yyyy">
                                                        <i class="fad fa-calendar-alt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">CMND/CCCD/Hộ chiếu: <span class="text-danger">*</span></label>
                                                    <input type="number" class="form-control input-number" placeholder="123456789">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row gx-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Điện thoại: <span class="text-danger">*</span></label>
                                                    <input type="number" class="form-control input-number" placeholder="0912345678">

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="" class="form-label">Email: <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" placeholder="example@email.com">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="" class="form-label">Địa chỉ: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>



                                        <div class="d-flex justify-content-between mt-5">
                                            <a href="javascript:;" style="visibility: hidden; opacity: 0;" class="btn ci-btn ci-btn-200 ci-btn-outline">
                                                Quay lại
                                            </a>
                                            <a href="xem-thong-tin.php" class="btn ci-btn ci-btn-200 ci-btn-main">
                                                Tiếp tục
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="ci-purchase-box">
                                        <h3 class="ci-purchase__subtitle">Thông tin gói tham gia</h3>
                                        <div class="package-change">
                                            <div class="package-info">
                                                <div class="mb-3">
                                                    <span class="fw-medium fz-16">G1 - 200.000.000</span>
                                                    <!-- <a class="ms-3" href="javascript:;" onclick="show_package_select(this);">
                                                        <u>Thay đổi</u> <i class="ms-1 far fa-pen-to-square"></i></a> -->
                                                </div>
                                                <div class="package-select" style="display: none;">
                                                    <div class="d-flex align-items-center mb-3">
                                                        <input class="package-select-control" type="radio" id="pkg-100" name="pkg" value="200">
                                                        <label class="ms-2" for="pkg-100">G1 - 200.000.000</label>
                                                    </div>

                                                    <div class="d-flex align-items-center mb-3">
                                                        <input class="package-select-control" type="radio" id="pkg-200" name="pkg" value="300">
                                                        <label class="ms-2" for="pkg-200">G2 - 300.000.000</label>
                                                    </div>

                                                    <div class="d-flex align-items-center mb-3">
                                                        <input class="package-select-control" type="radio" id="pkg-300" name="pkg" value="500" checked>
                                                        <label class="ms-2" for="pkg-300">G3 - 500.000.000</label>
                                                    </div>


                                                </div>
                                            </div>
                                            <div id="package-sotienbh" class="package-info">
                                                <h3>Quyền lợi tham gia</h3>
                                                <p class="sotienbh"><span>200.000.000</span> VNĐ</p>
                                            </div>
                                            <div id="package-phibh" class="package-info">
                                                <h3>Phí thành viên</h3>
                                                <p class="phibh"><span>1,500,000</span> đ/năm</p>
                                            </div>
                                            <div id="package-phibh" class="package-info">
                                                <h3>Phí quản lý (10% Phí thành viên)</h3>
                                                <p class="phibh"><span>150,000</span> đ/năm</p>
                                            </div>
                                            <div id="package-phibh" class="package-info">
                                                <h3>Tổng số tiền phải nộp</h3>
                                                <p class="phibh"><span>1,650,000</span> đ/năm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>

        </main>

        <?php include_once FOOTER; ?>

    </div>
</body>

<?php include_once SCRIPTS; ?>