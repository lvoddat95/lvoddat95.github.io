<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = ''; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-step">
            <div class="container">
                <ul class="step-nav" role="navigation">
                    <div id="progressbar" class="progressbar" style="width: 100%;"></div>
                    <li class="done">
                        <button>
                            <div class="step-number">1</div>
                            <div class="step-title">Thông tin cá nhân</div>
                        </button>
                    </li>
                    <li class="done">
                        <button>
                            <div class="step-number">2</div>
                            <div class="step-title">Xem lại thông tin</div>
                        </button>
                    </li>
                    <li class="active">
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
                                        3. Xác nhận đơn hàng
                                    </h2>
                                    <!-- <p class="ci-purchase__desc">Tôi là Bên mua bảo hiểm,
                                        Người được bảo hiểm và cũng là người sở hữu thẻ/tài khoản dùng để đóng phí cho hợp đồng bảo hiểm này.</p> -->
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col-lg-8">
                                <div class="ci-purchase-box mb-5">

                                    <h2 class="ci-purchase__title">
                                        Chọn phương thức thanh toán
                                    </h2>

                                    <div class="row gx-2 clearfix">
                                        <div class="payment-block col-lg-6 col-md-6 col-sm-12">
                                            <div onclick="chose_payment(this);" class="payment-box payment-menthod-box">
                                                <div class="payment-box__icon">
                                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/logo/logo3.png" alt="Logo">
                                                </div>
                                                <div class="payment-box__info">
                                                    <h3>THANH TOÁN BẰNG TIỀN MẶT TẠI VĂN PHÒNG ÔXANH</h3>
                                                    <p class="mb-0">Sau khi đặt hàng thành công, Quý khách vui lòng qua văn phòng ÔXanh để thanh toán và nhận hoá đơn.</p>
                                                </div>
                                                <input type="radio" name="iBank" value="OXANH" checked>
                                            </div>

                                            <div onclick="chose_payment(this);" class="payment-box payment-menthod-box">
                                                <div class="payment-box__icon">
                                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/home.png" alt="Home">
                                                </div>
                                                <div class="payment-box__info">
                                                    <h3>THANH TOÁN TẠI NHÀ</h3>
                                                    <p class="mb-0">Nhân viên ÔXANH sẽ kí kết hợp đồng & thanh toán tại nhà theo địa chỉ Quý khách cung cấp.</p>
                                                </div>
                                                <input type="radio" name="iBank" value="TAINHA">
                                            </div>
                                        </div>

                                        <div class="payment-block col-lg-6 col-md-6 col-sm-12">
                                            <div onclick="chose_payment(this);" class="payment-box payment-menthod-box">
                                                <div class="payment-box__icon">
                                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/zalopay.svg" alt="Zalo Pay">
                                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/napas.jpg" alt="Napas">
                                                </div>
                                                <div class="payment-box__info">
                                                    <h3>THANH TOÁN QUA CỔNG THANH TOÁN ĐIỆN TỬ</h3>
                                                    <p class="mb-0">Quý khách có thể thanh toán ngay (trực tuyến) qua cổng ZaloPay và Napas.</p>
                                                </div>
                                                <input type="radio" name="iBank" value="EPAY">
                                            </div>

                                            <div onclick="chose_payment(this);" class="payment-box payment-menthod-box">
                                                <div class="payment-box__icon">
                                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/payoo_logo.png" alt="Payoo">
                                                </div>
                                                <div class="payment-box__info">
                                                    <h3>THANH TOÁN QUA CÁC CỬA HÀNG TIỆN ÍCH</h3>
                                                    <p class="mb-0">Quý khách có thể qua các điểm giao dịch, cửa hàng tiện ích ngay gần nhà để thanh toán.</p>
                                                </div>
                                                <input type="radio" name="iBank" value="CUAHANG">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row gx-2 clearfix">
                                        <div class="payment-block col-lg-6 col-md-6 col-sm-12">
                                            <div onclick="chose_payment(this);" class="payment-box payment-menthod-box">
                                                <div class="payment-box__icon">
                                                    <img class="img-fluid mb-2" src="<?php echo SOURCE; ?>assets/img/payment/banking.png" alt="Banking">
                                                </div>
                                                <div class="payment-box__info">
                                                    <h3>THANH TOÁN QUA CHUYỂN KHOẢN</h3>
                                                    <p class="mb-0">Quý khách có thể thanh toán bằng cách chuyển khoản trực tiếp tại ngân hàng, qua thẻ ATM, hoặc qua Internet banking.</p>
                                                </div>
                                                <input type="radio" name="iBank" value="CHUYENKHOAN">
                                            </div>
                                        </div>
                                        <div class="col-12 mt-4">
                                            <div id="payment-info" class="payment-info mb-5" data-info="CHUYENKHOAN" style="display: none;">
                                                <div class="d-flex flex-wrap justify-content-between">
                                                    <a href="#bank-agribank" class="img-bank active" onclick="chosse_bank(this);" data-stk="1029635288" data-chinhanh="">
                                                        <img src="<?php echo SOURCE; ?>assets/img/bank/1_Agribank.jpg" alt="">
                                                    </a>
                                                    <a href="#bank-bidv" class="img-bank " onclick="chosse_bank(this);" data-stk="1401206012620" data-chinhanh="">
                                                        <img src="<?php echo SOURCE; ?>assets/img/bank/2_VCB.jpg" alt="">
                                                    </a>
                                                    <a href="#bank-agribank" class="img-bank " onclick="chosse_bank(this);" data-stk="16010000695086" data-chinhanh="">
                                                        <img src="<?php echo SOURCE; ?>assets/img/bank/3_BIDV.jpg" alt="">
                                                    </a>
                                                    <a href="#bank-vietinbank" class="img-bank " onclick="chosse_bank(this);" data-stk="116002916355" data-chinhanh="">
                                                        <img src="<?php echo SOURCE; ?>assets/img/bank/4_Vietinbank.jpg" alt="">
                                                    </a>
                                                    <a href="#bank-techcombank" class="img-bank " onclick="chosse_bank(this);" data-stk="1234567890" data-chinhanh="">
                                                        <img src="<?php echo SOURCE; ?>assets/img/bank/5_Techcombank.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="bank-info">
                                                    <ul id="bank-agribank" class="list-unstyled active">
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Ngân hàng:</span>
                                                            <span>Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam Agribank</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Tài khoản:</span>
                                                            <span class="copy-text">
                                                                <span class="bank-stk">1029635288</span>
                                                                <a href="javascript:void(0);" onclick="copy_text(this);" class="ms-3 btn-copy">Sao chép</a>
                                                            </span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chủ tài khoản:</span>
                                                            <span>Công ty cổ phần công nghệ internet Chiếc Ô Xanh</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chi nhánh:</span>
                                                            <span id="bank-chinhanh">Chi nhánh Hà Nội 1</span>
                                                        </li>
                                                    </ul>

                                                    <ul id="bank-bidv" class="list-unstyled">
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Ngân hàng:</span>
                                                            <span>Ngân hàng thương mại cổ phần Ngoại thương Việt Nam Vietcombank</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Tài khoản:</span>
                                                            <span class="copy-text">
                                                                <span class="bank-stk">1401206012620</span>
                                                                <a href="javascript:void(0);" onclick="copy_text(this);" class="ms-3 btn-copy">Sao chép</a>
                                                            </span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chủ tài khoản:</span>
                                                            <span>Công ty cổ phần công nghệ internet Chiếc Ô Xanh</span>
                                                        </li>
                                                    </ul>

                                                    <ul id="bank-agribank" class="list-unstyled">
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Ngân hàng:</span>
                                                            <span>Ngân hàng Thương mại cổ phần Đầu tư và Phát triển Việt Nam BIDV</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Tài khoản:</span>
                                                            <span class="copy-text">
                                                                <span class="bank-stk">16010000695086</span>
                                                                <a href="javascript:void(0);" onclick="copy_text(this);" class="ms-3 btn-copy">Sao chép</a>
                                                            </span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chủ tài khoản:</span>
                                                            <span>Công ty cổ phần công nghệ internet Chiếc Ô Xanh</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chi nhánh:</span>
                                                            <span id="bank-chinhanh">Chi nhánh Sở Giao dịch 3</span>
                                                        </li>
                                                    </ul>

                                                    <ul id="bank-vietinbank" class="list-unstyled">
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Ngân hàng:</span>
                                                            <span>Ngân hàng Thương mại cổ phần Công Thương Việt Nam VietinBank</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Tài khoản:</span>
                                                            <span class="copy-text">
                                                                <span class="bank-stk">116002916355</span>
                                                                <a href="javascript:void(0);" onclick="copy_text(this);" class="ms-3 btn-copy">Sao chép</a>
                                                            </span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chủ tài khoản:</span>
                                                            <span>Công ty cổ phần công nghệ internet Chiếc Ô Xanh</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chi nhánh:</span>
                                                            <span id="bank-chinhanh">Chi nhánh Thành An</span>
                                                        </li>
                                                    </ul>

                                                    <ul id="bank-techcombank" class="list-unstyled">
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Ngân hàng:</span>
                                                            <span>Ngân hàng Thương mại cổ phần Kỹ Thương Việt Nam Techcombank</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Tài khoản:</span>
                                                            <span class="copy-text">
                                                                <span class="bank-stk">1234567890</span>
                                                                <a href="javascript:void(0);" onclick="copy_text(this);" class="ms-3 btn-copy">Sao chép</a>
                                                            </span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chủ tài khoản:</span>
                                                            <span>Công ty cổ phần công nghệ internet Chiếc Ô Xanh</span>
                                                        </li>
                                                        <li class="d-flex">
                                                            <span class="w-25 fw-medium">Chi nhánh:</span>
                                                            <span id="bank-chinhanh">Chi nhánh Techcombank</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="table-box fz-16 mb-4">
                                        <label class="checkcontainer mb-0" for="cam-ket">
                                            <input id="cam-ket" type="checkbox">
                                            <span class="checkmark" style="top: 5px;"></span>
                                            <div>
                                                <span>Tôi cam kết các thông tin khai báo là chính xác,
                                                    trung thực và hoàn toàn chịu trách nhiệm về các thông tin đã
                                                    khai báo. Đồng thời tôi đã đọc, hiểu và đồng ý với <a href="">điều kiện,
                                                        điều khoản, quy tắc của Ô Xanh</a>.</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-between mt-5">
                                        <a href="xem-thong-tin.php" class="btn ci-btn ci-btn-200 ci-btn-outline">
                                            Quay lại
                                        </a>
                                        <a href="" class="btn ci-btn ci-btn-200 ci-btn-main">
                                            Thanh toán
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div class="ci-purchase-box">
                                    <h3 class="ci-purchase__subtitle">Thông tin thanh toán</h3>
                                    <div class="package-change">
                                        <div class="package-info">
                                            <!-- <h3>Gói bảo hiểm</h3> -->
                                            <span class="fw-medium fz-16">G1 – 200.000.000</span>
                                        </div>
                                        <div class="package-info">
                                            <h3>Tổng phí thanh toán</h3>
                                            <p class="sotienbh"><span>1,878,000</span> VNĐ</p>
                                        </div>
                                        <div id="package-phibh" class="package-info">
                                            <table class="table table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td class="w-50">Tổng phí bảo hiểm :</td>
                                                        <td class="w-50 text-end">1,878,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50">Giảm phí:</td>
                                                        <td class="w-50 text-end">0</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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