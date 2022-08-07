<?php require_once "config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'home'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div id="ci-slider-block" class="ci-slider-block ci-slider slick-slider data-slick-slider mb-0" data-slick='{"dots": true,"slidesToShow": 1, "slidesToScroll": 1, "lazyLoad": "ondemand"}'>
            <div class="ci-slider-item">
                <div class="slider-item__img" style="background-image: url(<?php echo SOURCE; ?>assets/img/family4.jpg);"></div>
                <div class="container">
                    <div class="ci-slider-item__info">
                        <h3 class="ci-slider-info__title"><span>Ô Xanh</span> <br>Kế hoạch trợ giúp lẫn nhau vì bệnh hiểm nghèo</h3>
                        <p class="ci-slider-info__desc">
                            An tâm điều trị, giảm bớt âu lo
                        </p>
                        <a href="tel:0978240990" class="ci-btn ci-btn-main ci-btn-slider">Nhận báo giá miễn phí</a>
                    </div>
                </div>
            </div>
            <div class="ci-slider-item">
                <div class="slider-item__img" style="background-image: url(<?php echo SOURCE; ?>assets/img/blog03.jpg);"></div>
                <div class="container">
                    <div class="ci-slider-item__info">
                        <h3 class="ci-slider-info__title">Tận hưởng <br> hạnh phúc của bạn</h3>
                        <p class="ci-slider-info__desc">
                            Kế hoạch bảo vệ phù hợp, tương trợ kịp thời giúp bạn tiến lên phía trước</p>
                        <a href="tel:0978240990" class="ci-btn ci-btn-main ci-btn-slider">Nhận báo giá miễn phí</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="ci-package-block" class="ci-block ci-package-block bg-grey">
            <div class="container">
                <div class="ci-package-inner">
                    <div class="ci-heading">
                        <p class="ci-heading__sub">Các kế hoạch tương trợ</p>
                        <h2 class="ci-heading__main">Chọn kế hoạch phù hợp cho bạn</h2>
                    </div>
                    <div class="ci-package-slider">

                        <div class="ci-package-item">
                            <div class="ci-package-item__top">
                                <span>Kế hoạch</span>
                                <h3>G1 - 200.000.000</h3>
                            </div>
                            <div class="ci-package-item__mid">
                                <div class="ci-package-item__mid-inner">
                                    <p class="ci-summary__heading">Tóm tắt</p>
                                    <div class="ci-summary">
                                        <div class="ci-summary__row">
                                            <span>Tuổi tham gia</span>
                                            <span>1 đến 65 tuổi</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Quyền lợi tương trợ tối đa</span>
                                            <span>200 triệu đồng</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Phí tham gia</span>
                                            <span>500.000 đồng/năm</span>
                                        </div>
                                        <div class="collapse collapseSummary" id="collapseSummary">
                                            <div class="ci-summary__row">
                                                <span>Thời hạn hợp đồng</span>
                                                <span>Cho đến khi tôi không tham gia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="ci-summary-btn" data-bs-toggle="collapse" href="#collapseSummary" role="button" aria-expanded="false" aria-controls="collapseSummary">
                                        <i class="far fa-angle-down"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ci-package-item__bottom">
                                <a href="javascript:void(0);" onclick="fancybox_modal('#toi-dong-y');" class="ci-btn ci-btn-main">Tham gia trực tuyến</a>
                            </div>
                        </div>

                        <div class="ci-package-item">
                            <div class="ci-package-item__top">
                                <span>Kế hoạch</span>
                                <h3>G2 - 300.000.000</h3>
                            </div>
                            <div class="ci-package-item__mid">
                                <div class="ci-package-item__mid-inner">
                                    <p class="ci-summary__heading">Tóm tắt</p>
                                    <div class="ci-summary">
                                        <div class="ci-summary__row">
                                            <span>Tuổi tham gia</span>
                                            <span>1 đến 65 tuổi</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Quyền lợi tương trợ tối đa</span>
                                            <span>300 triệu đồng</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Phí tham gia</span>
                                            <span>750.000 đồng/năm</span>
                                        </div>
                                        <div class="collapse collapseSummary" id="collapseSummary02">
                                            <div class="ci-summary__row">
                                                <span>Thời hạn hợp đồng</span>
                                                <span>Cho đến khi tôi không tham gia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="ci-summary-btn" data-bs-toggle="collapse" href="#collapseSummary02" role="button" aria-expanded="false" aria-controls="collapseSummary02">
                                        <i class="far fa-angle-down"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ci-package-item__bottom">
                                <a href="<?php echo HTTP_PATH; ?>pages/mua-bao-hiem.php" class="ci-btn ci-btn-main">Tham gia trực tuyến</a>
                            </div>
                        </div>

                        <div class="ci-package-item">
                            <div class="ci-package-item__top">
                                <span>Kế hoạch</span>
                                <h3>G3 - 500.000.000</h3>
                            </div>
                            <div class="ci-package-item__mid">
                                <div class="ci-package-item__mid-inner">
                                    <p class="ci-summary__heading">Tóm tắt</p>
                                    <div class="ci-summary">
                                        <div class="ci-summary__row">
                                            <span>Tuổi tham gia</span>
                                            <span>1 đến 65 tuổi</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Quyền lợi tương trợ tối đa</span>
                                            <span>500 triệu đồng</span>
                                        </div>
                                        <div class="ci-summary__row">
                                            <span>Phí tham gia</span>
                                            <span>1.250.000 đồng/năm</span>
                                        </div>
                                        <div class="collapse collapseSummary" id="collapseSummary03">
                                            <div class="ci-summary__row">
                                                <span>Thời hạn hợp đồng</span>
                                                <span>Cho đến khi tôi không tham gia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="ci-summary-btn" data-bs-toggle="collapse" href="#collapseSummary03" role="button" aria-expanded="false" aria-controls="collapseSummary03">
                                        <i class="far fa-angle-down"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ci-package-item__bottom">
                                <a href="<?php echo HTTP_PATH; ?>pages/mua-bao-hiem.php" class="ci-btn ci-btn-main">Tham gia trực tuyến</a>
                            </div>
                        </div>

                    </div>
                    <div class="ci-package-docs">
                        <a href="" class="ci-docs__link">
                            <i class="fas fa-arrow-down-to-bracket me-2"></i>
                            <span>Tài liệu giới thiệu sản phẩm</span>
                        </a>
                        <span class="mx-3"></span>
                        <a href="" class="ci-docs__link">
                            <i class="fas fa-arrow-down-to-bracket me-2"></i>
                            <span>Quy tắc & Điều khoản</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="ci-block">
            <div class="container">
                <div class="ci-heading center">
                    <h2 class="ci-heading__main mb-3">Các hình thức <span class="main-color">thanh toán</span></h2>
                    <div class="row">
                        <div class="offset-lg-2 col-lg-8 text-center">
                            <div class="ci-app-desc mb-3">
                                Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lower-section">
                    <div class="row gx-5 clearfix">
                        <!-- Payment Menthod Block -->
                        <div class="payment-block col-lg-6 col-md-6 col-sm-12">
                            <div class="payment-box pe-md-5 pe-0">
                                <div class="payment-box__icon">
                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/logo/logo3.png" alt="Logo">
                                </div>
                                <div class="payment-box__info">
                                    <h3>THANH TOÁN BẰNG TIỀN MẶT TẠI VĂN PHÒNG ÔXANH</h3>
                                    <p class="mb-0">Sau khi đặt hàng thành công, Quý khách vui lòng qua văn phòng ÔXanh để thanh toán và nhận hoá đơn.</p>
                                </div>
                            </div>

                            <div class="payment-box pe-md-5 pe-0">
                                <div class="payment-box__icon">
                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/home.png" alt="Home">
                                </div>
                                <div class="payment-box__info">
                                    <h3>THANH TOÁN TẠI NHÀ</h3>
                                    <p class="mb-0">Nhân viên ÔXANH sẽ kí kết hợp đồng & thanh toán tại nhà theo địa chỉ Quý khách cung cấp.</p>
                                </div>
                            </div>


                        </div>
                        <div class="payment-block col-lg-6 col-md-6 col-sm-12">
                            <div class="payment-box pe-md-5 pe-0">
                                <div class="payment-box__icon">
                                    <img class="img-fluid mb-2" src="<?php echo SOURCE; ?>assets/img/payment/zalopay.svg" alt="Zalo Pay">
                                    <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/payment/napas.jpg" alt="Napas">
                                </div>
                                <div class="payment-box__info">
                                    <h3>THANH TOÁN QUA CỔNG THANH TOÁN ĐIỆN TỬ</h3>
                                    <p class="mb-0">Quý khách có thể thanh toán ngay (trực tuyến) qua cổng ZaloPay và Napas.</p>
                                </div>
                            </div>

                            <div class="payment-box pe-md-5 pe-0">
                                <div class="payment-box__icon">
                                    <img class="img-fluid mb-2" src="<?php echo SOURCE; ?>assets/img/payment/payoo_logo.png" alt="Payoo">
                                </div>
                                <div class="payment-box__info">
                                    <h3>THANH TOÁN QUA CÁC CỬA HÀNG TIỆN ÍCH</h3>
                                    <p class="mb-0">Quý khách có thể qua các điểm giao dịch, cửa hàng tiện ích ngay gần nhà để thanh toán.</p>
                                </div>
                            </div>
                        </div>
                        <div class="payment-block offset-lg-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12">
                            <div class="payment-box pe-md-5 pe-0 mb-5 ms-auto me-auto">
                                <div class="payment-box__icon">
                                    <img class="img-fluid mb-2" src="<?php echo SOURCE; ?>assets/img/payment/banking.png" alt="Banking">
                                </div>
                                <div class="payment-box__info">
                                    <h3>THANH TOÁN QUA CHUYỂN KHOẢN</h3>
                                    <p class="mb-0">Quý khách có thể thanh toán bằng cách chuyển khoản trực tiếp tại ngân hàng, qua thẻ ATM, hoặc qua Internet banking.</p>
                                </div>
                            </div>
                            <div class="payment-img-bank d-flex flex-wrap justify-content-between">
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/1_Agribank.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/2_VCB.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/3_BIDV.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/4_Vietinbank.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/5_Techcombank.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/ABBANK.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/ACB.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/BAC A BANK.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/Ban Viet Bank.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/Bao Viet.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/BIDC.jpg" alt=""></div>
                                <div class="img-bank"><img src="<?php echo SOURCE; ?>assets/img/bank/CoopBank.jpg" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ci-block ci-service-block bg-grey">
            <div class="container">
                <div class="ci-service-inner">
                    <div class="ci-heading ">
                        <p class="ci-heading__sub">Đặc điểm nổi bật</p>
                        <h2 class="ci-heading__main mb-3">Kế hoạch trợ giúp lẫn nhau vì bệnh hiểm nghèo</h2>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="fz-16 mb-3">
                                    Bảo vệ bản thân trong thời đại công nghệ số trở nên dễ dàng hơn bao giờ hết với <br> Nền tảng tương trợ trực tuyến Oxanh
                                </div>
                                <div class="fz-16 mb-3">
                                    Oxanh - Kế hoạch trợ giúp lẫn nhau vì bệnh hiểm nghèo có mức phí tham gia phù hợp với mọi túi tiền. <br> Bạn có thể tham gia trực tuyến nhanh chóng và dễ dàng với 5 bước:
                                </div>

                            </div>
                            <div class="col-12">
                                <div class="ci-flow">
                                    <div>
                                        <a href="">
                                            <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/signup.png" alt="Oxanh">
                                            <span class="ci-flow__link">Bước 1: <br>Đăng ký</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/login.png" alt="Oxanh">
                                            <span class="ci-flow__link">Bước 2: <br>Đăng nhập</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/register.png" alt="Oxanh">
                                            <span class="ci-flow__link">Bước 3: <br>Kê khai thông tin</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/product.png" alt="Oxanh">
                                            <span class="ci-flow__link">Bước 4: <br>Chọn gói tương trợ</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="" class="last">
                                            <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/pay.png" alt="Oxanh">
                                            <span class="ci-flow__link">Bước 5: <br>Thanh toán</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lower-section">
                        <div class="row gx-5 clearfix">
                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <i class="flaticon-health-insurance"></i>
                                    <h6>Số tiền tương trợ thành viên tối đa theo gói G1 là 200triệu, G2 là 300 triệu và G3 là 500 triệu</h6>
                                </div>
                            </div>

                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <i class="flaticon-care"></i>
                                    <h6>Hết thời gian chờ và sống sót sau 7 ngày kể từ khi mắc bệnh hiểm nghèo, thành viên được Nền tảng tiến hành tương trợ</h6>
                                </div>
                            </div>

                            <!-- Services Block -->
                            <div class="services-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <i class="flaticon-policy"></i>
                                    <h6>Bảo vệ 46 bệnh hiểm nghèo cho thành viên từ 1 đến 65 tuổi với phí tham gia hàng năm chỉ vài trăm nghìn đồng</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="ci-block ci-quyen-loi-block">
            <div class="container">
                <div class="ci-heading">
                    <p class="ci-heading__sub">Giới thiệu</p>
                    <h2 class="ci-heading__main">Quyền lợi tương trợ</h2>
                </div>
                <div class="ci-quyen-loi-box">
                    <div class="row gx-3 gx-lg-0">

                        <div class="col-lg-6 col-md-12 d-none d-md-block">
                            <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/family3.jpg" alt="">
                        </div>

                        <div class="col-lg-6 col-md-12 d-flex align-items-center">
                            <div class="ci-quyen-loi-box__detail p-5">
                                <div class="ci-quyen-loi-box__quote"><i class="fad fa-quote-left"></i></div>
                                <div class="info">
                                    <p class="fz-16" style="text-align: justify; line-height: 26px;">
                                        Tùy theo độ tuổi, chỉ từ 100 nghìn đồng với gói G1, cao nhất là 750 nghìn đồng với gói G3,
                                        thành viên tham gia Nền tảng tương trợ đã có sự bảo vệ đối với:
                                        <br>✔ 46 bệnh hiểm nghèo và tai nạn nghiêm trọng.
                                        <br>✔ Mức tương trợ tối đa lên tới 200 triệu đồng với gói G1, 300 triệu đồng với gói G2 và 500 triệu với gói G3.
                                        <br>✔ Thời gian chờ được rút ngắn từ 90+30 xuống 90+7.
                                        <br>✔ Ngưỡng tham gia thấp: Để được bảo vệ, thành viên tham gia đóng phí 1 năm chỉ tương đương vài bát phở.
                                        <br>✔ Thủ tục giải quyết tương trợ đơn giản. Khai báo yêu cầu tương trợ trực tuyến, nhanh chóng tiết kiệm thời gian”.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id="" class="ci-block ci-about-block">
            <div class="container">

                <div class="ci-heading">
                    <p class="ci-heading__sub">Lợi ích mang lại</p>
                    <h2 class="ci-heading__main">Ôxanh đã mang lại những gì?</h2>
                    <!-- <div class="ci-desc my-3">
                            <p class="mb-1"><span class="text-danger">*</span> Bảo vệ bản thân trong thời đại công nghệ số trở nên dễ dàng hơn bao giờ hết với Ô Xanh
                                Sống khỏe – Bảo hiểm bệnh ung thư.</p>
                            <p class="mb-1"><span class="text-danger">*</span> Ô Xanh Sống khỏe – Bảo hiểm bệnh ung thư là giải pháp phù hợp với túi tiền, bạn có thể
                                mua trực tuyến nhanh chóng và dễ dàng với 3 bước đơn giản.</p>
                        </div> -->
                </div>

                <div class="ci-about-wrapper">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="ci-about-item ci-about-item__01">
                                <div class="ci-about-item__icon">
                                    <h3 class="ci-count">19</h3>
                                </div>
                                <div class="ci-about-item__info">
                                    <h3>Tỷ Đồng</h3>
                                    <p>Tổng số tiền đã chi trả tương trợ</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ci-about-item ci-about-item__02">
                                <div class="ci-about-item__icon">
                                    <h3 class="ci-count">1500</h3>
                                </div>
                                <div class="ci-about-item__info">
                                    <h3>Khách hàng</h3>
                                    <p>Số lượng khách hàng được tương trợ</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="ci-about-item ci-about-item__03">
                                <div class="ci-about-item__icon">
                                    <h3 class="ci-count">900</h3>
                                </div>
                                <div class="ci-about-item__info">
                                    <h3>Nhân viên</h3>
                                    <p>Hỗ trợ 24/7 kịp thời đảm bảo quyền lợi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="" class="ci-app-download">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6 d-none d-lg-block ci-app-img">
                        <img class="img-fluid b-lazy" src="<?php echo SOURCE; ?>assets/img/mobile.png" alt="App">
                    </div>

                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="ci-app-left">
                            <div class="ci-app-title">Tải App Ô Xanh để có thể được hỗ trợ</div>
                            <div class="ci-app-subtitle">
                                MỌI NƠI &amp; MỌI LÚC
                            </div>
                            <div class="ci-app-desc">
                                Tải App ngay hôm nay để nhận được những ưu đãi đặc biệt từ Ô Xanh<br>
                                Hỗ trợ bão lãnh, tra cứu thông tin bảo hiểm nhanh chóng
                            </div>
                            <div class="d-flex align-items-center mt-4">
                                <div>
                                    <img class="img-fluid me-3" src="<?php echo SOURCE; ?>assets/img/qrcode.png" style="max-height: 120px;">
                                </div>
                                <div class="d-flex flex-column">
                                    <a href="" class="btn-app mb-3">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/app-store.svg">
                                    </a>
                                    <a href="" class="btn-app">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/google-play.svg">
                                    </a>
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
<?php include_once POPUP; ?>
<?php include_once SCRIPTS; ?>