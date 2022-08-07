<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'ho-tro-khach-hang'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/contact.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Hỗ trợ thành viên</h1>
                    <div class="ci-breadcrumb-desc">
                    Chúng tôi luôn ở đây để hỗ trợ và giải đáp mọi thắc mắc của Thành viên
                    <br> Hãy liên hệ với chúng tôi qua <a class="text-white" href="tel:0339869338">0339869338</a>; <a class="text-white" href="mailto:oxanh@oxanh.vn">oxanh@oxanh.vn</a> và Zalo
                    </div>
                </div>
            </div>
        </div>

        <main>

            <div class="ci-block pb-0">
                <div class="container">

                    <div class="ci-contact">
                        <div class="ci-heading">
                            <h2 class="ci-heading__main mb-4">Hỗ trợ thành viên mọi vấn về tương trợ</h2>
                            <p class="mb-0">Từ giải thích về các kế hoạch tương trợ, làm thế nào để tham gia Nền tảng tương trợ, thanh toán phí đến cách lập hồ sơ để xin tương trợ</p>
                        </div>

                        <div class="ci-contact-wrapper">
                            <div class="row">
                                <div class="ci-contact-item col-lg-4 col-md-6 col-12">
                                    <a href="" class="ci-contact-link">
                                        <h3 class="ci-contact-item__title">Xem phương thức thanh toán phí</h3>
                                        <i class="ci-contact-item__icon far fa-credit-card"></i>
                                    </a>
                                </div>
                                <div class="ci-contact-item col-lg-4 col-md-6 col-12">
                                    <a href="" class="ci-contact-link">
                                        <h3 class="ci-contact-item__title">Tìm hiểu chương trình chăm sóc khách hàng</h3>
                                        <i class="ci-contact-item__icon far fa-gift"></i>
                                    </a>
                                </div>
                                <div class="ci-contact-item col-lg-4 col-md-6 col-12">
                                    <a href="" class="ci-contact-link">
                                        <h3 class="ci-contact-item__title">Kiểm tra lãi suất sản phẩm bảo hiểm Ô Xanh</h3>
                                        <i class="ci-contact-item__icon far fa-chart-user"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="ci-block pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-5">
                            <div class="mb-5 mb-lg-0">
                                <img class="radius-16 overflow-hidden of-cover" width="100%" height="300px" src="<?php echo SOURCE; ?>assets/img/family.jpg" alt="HTV">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ci-heading">
                                <h2 class="ci-heading__main mb-4">Giải quyết quyền lợi tương trợ</h2>
                                <p class="mb-0">
                                    Yêu cầu giải quyết quyền lợi tương trợ với các bước đơn giản và nhanh chóng cùng Ô Xanh.
                                </p>
                            </div>
                            <a href="giai-quyet-quyen-loi-bao-hiem.php" class="ci-btn ci-btn-main d-inline-block">
                                <i class="far fa-arrow-right me-3"></i>Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center flex-column-reverse flex-lg-row">
                        <div class="col-lg-6">
                            <div class="ci-heading">
                                <h2 class="ci-heading__main mb-4">Kiểm tra quyền lợi bảo vệ của Quý khách</h2>
                                <p class="mb-0">
                                    Để biết thông tin chi tiết về quyền lợi bảo vệ, Quý khách vui lòng đăng nhập cổng Ô Xanh Dịch vụ Trực tuyến để kiểm tra chi tiết hợp đồng bảo hiểm của mình.
                                </p>
                            </div>
                            <a href="dang-ky2.php" class="ci-btn ci-btn-main d-inline-block">
                                <i class="far fa-arrow-right me-3"></i>Đăng nhập</a>
                        </div>
                        <div class="col-lg-5">
                            <div class="mb-5 mb-lg-0">
                                <img class="radius-16 overflow-hidden of-cover" width="100%" height="300px" src="<?php echo SOURCE; ?>assets/img/family3.jpg" alt="HTV">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block" onload=initMap();>
                <div class="container">
                    <div class="ci-heading">
                        <h2 class="ci-heading__main mb-4">Mạng lưới chi nhánh, văn phòng giao dịch</h2>
                    </div>
                    <div class="map-container">
                        <div class="row gx-3 gx-sm-0">
                            <div class="col-sm-4">
                                <div class="stores-container">
                                    <div class="stores-inner">
                                        <div class="stores-filter"></div>
                                        <div class="stores-box">
                                            <div class="stores-list"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div id="map"></div>
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

<script src="<?php echo SOURCE; ?>assets/js/stores.map.js"></script>
<script src="<?php echo SOURCE; ?>assets/js/map.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARGkCQ4eW06QTQbb2nzr1sIWyFBLCustY&callback=initMap"></script>