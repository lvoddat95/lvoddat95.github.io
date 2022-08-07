<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = ''; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-step">
            <div class="container">
                <ul class="step-nav" role="navigation">
                    <div id="progressbar" class="progressbar" style="width: 50%;"></div>
                    <li class="done">
                        <button>
                            <div class="step-number">1</div>
                            <div class="step-title">Thông tin cá nhân</div>
                        </button>
                    </li>
                    <li class="active">
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
                    <div class="ci-purchase">
                        <div class="row gx-5">
                            <div class="col-lg-8">
                                <div class="ci-purchase__top">
                                    <h2 class="ci-purchase__title">
                                        2. Xác nhận thông tin cá nhân
                                    </h2>
                                    <p class="ci-purchase__desc">Tôi là Bên mua bảo hiểm,
                                        Người được bảo hiểm và cũng là người sở hữu thẻ/tài khoản dùng để đóng phí cho hợp đồng bảo hiểm này.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col-lg-8">
                                <div class="ci-purchase-box mb-5">

                                    <h2 class="ci-purchase__title">
                                        Thông tin của bạn
                                    </h2>

                                    <div class="table-box fz-16 mb-4">
                                        <label class="checkcontainer mb-0" for="cam-ket">
                                            <input id="cam-ket" type="checkbox">
                                            <span class="checkmark" style="top: 5px;"></span>
                                            <div>
                                                <span>Tôi là Bên mua bảo hiểm, Người được bảo hiểm và cũng là người sở hữu thẻ/tài khoản dùng để đóng phí
                                                    cho hợp đồng bảo hiểm này.</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div class="table-block">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Họ tên</td>
                                                    <td>Le Văn A</td>
                                                </tr>
                                                <tr>
                                                    <td>Ngày sinh</td>
                                                    <td>20/12/1995</td>
                                                </tr>
                                                <tr>
                                                    <td>Giới tính</td>
                                                    <td>Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Nơi sinh</td>
                                                    <td>THÀNH PHỐ HÀ NỘI</td>
                                                </tr>
                                                <tr>
                                                    <td>Tình trạng hôn nhân</td>
                                                    <td>Độc thân</td>
                                                </tr>
                                                <tr>
                                                    <td>Số CMND/Căn cước/Hộ chiếu</td>
                                                    <td>123456712</td>
                                                </tr>
                                                <tr>
                                                    <td>Cấp ngày</td>
                                                    <td>12/12/2011</td>
                                                </tr>
                                                <tr>
                                                    <td>Nơi cấp</td>
                                                    <td>THÀNH PHỐ HÀ NỘI</td>
                                                </tr>
                                                <tr>
                                                    <td>Số điện thoại liên hệ</td>
                                                    <td>0987654321</td>
                                                </tr>
                                                <tr>
                                                    <td>Địa chỉ email</td>
                                                    <td>ASD@GA.COM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="d-flex justify-content-between mt-5">
                                        <a href="mua-bao-hiem.php" class="btn ci-btn ci-btn-200 ci-btn-outline">
                                            Quay lại
                                        </a>
                                        <a href="thanh-toan.php" class="btn ci-btn ci-btn-200 ci-btn-main">
                                            Tiếp tục
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ci-purchase-box">
                                    <h3 class="ci-purchase__subtitle">Thông tin gói bảo hiểm</h3>
                                    <div class="package-change">
                                        <div class="package-info">
                                            <div class="mb-3">
                                                <span class="fw-medium fz-16">Cancer Care 300</span>
                                            </div>
                                        </div>
                                        <div id="package-sotienbh" class="package-info">
                                            <h3>Quyền lợi bảo hiểm</h3>
                                            <p class="sotienbh"><span>300.000.000</span> VNĐ</p>
                                        </div>
                                        <div id="package-phibh" class="package-info">
                                            <table class="table table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td class="w-50">Thời hạn bảo hiểm:</td>
                                                        <td class="w-50 text-end">5 năm</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50">Định kỳ đóng phí:</td>
                                                        <td class="w-50 text-end">1 năm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="package-phibh" class="package-info">
                                            <h3>Phí bảo hiểm</h3>
                                            <p class="phibh"><span>422.000</span> đ/năm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </main>

        <?php include_once FOOTER; ?>

    </div>
</body>

<?php include_once SCRIPTS; ?>