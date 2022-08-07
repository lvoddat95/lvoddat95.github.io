<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'blog'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/blog.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Tin tức tổng hợp</h1>
                    <div class="ci-breadcrumb-desc">
                        Thông tin ưu đãi, con người và văn hoá Ô Xanh
                    </div>
                </div>
            </div>
        </div>

        <main class="bg-grey">
            <div class="container">
                <div id="ci-blog-popular" class="ci-block pb-0 overflow-visible d-none">
                    <div class="ci-heading">
                        <h2 class="ci-heading__main">Bài viết nổi bật</h2>
                    </div>
                    <div class="ci-slider slick-slider data-slick-slider" data-slick='{"infinite": false, "slidesToShow": 1, "slidesToScroll": 1, "dots": true}'>
                        <div class="slider-item">
                            <div class="ci-blog-slider__item">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/blog01.jpg" alt="Slider">
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center">
                                        <div class="ci-blog-info">
                                            <span class="sub-color fw-medium">Blog</span>
                                            <h3 class="ci-blog-info__title">
                                                <a href="single.php" class="main-color">
                                                    Chương trình khuyến mại dành cho CBNV Agribank mua sản phẩm Đón đầu thay đổi trong tương lai
                                                </a>
                                            </h3>
                                            <p class="ci-blog-info__desc"> Áp dụng sản phẩm bảo hiểm Đón đầu thay
                                                đổi 3.0 được phân phối tại ngân hàng Nông nghiệp
                                                và Phát triển Nông thôn Việt Nam (Agribank) bao
                                                gồm các sản phẩm bổ trợ đi kèm (nếu có), từ ngày
                                                08/03/2022 đến ngày 30/06/2022.</p>
                                            <div class="text-start">
                                                <a href="single.php" class="ci-blog-info__readmore"><i class="fal fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="ci-blog-slider__item">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/blog02.jpg" alt="Slider">
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center">
                                        <div class="ci-blog-info">
                                            <span class="sub-color fw-medium">Blog</span>
                                            <h3 class="ci-blog-info__title">
                                                <a href="single.php" class="main-color">
                                                    Chương trình khuyến mại dành cho CBNV Agribank mua sản phẩm Đón đầu thay đổi trong tương lai
                                                </a>
                                            </h3>
                                            <p class="ci-blog-info__desc"> Áp dụng sản phẩm bảo hiểm Đón đầu thay
                                                đổi 3.0 được phân phối tại ngân hàng Nông nghiệp
                                                và Phát triển Nông thôn Việt Nam (Agribank) bao
                                                gồm các sản phẩm bổ trợ đi kèm (nếu có), từ ngày
                                                08/03/2022 đến ngày 30/06/2022.</p>
                                            <div class="text-start">
                                                <a href="single.php" class="ci-blog-info__readmore"><i class="fal fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="ci-blog-slider__item">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/blog03.jpg" alt="Slider">
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center">
                                        <div class="ci-blog-info">
                                            <span class="sub-color fw-medium">Blog</span>
                                            <h3 class="ci-blog-info__title">
                                                <a href="single.php" class="main-color">
                                                    Chương trình khuyến mại dành cho CBNV Agribank mua sản phẩm Đón đầu thay đổi trong tương lai
                                                </a>
                                            </h3>
                                            <p class="ci-blog-info__desc"> Áp dụng sản phẩm bảo hiểm Đón đầu thay
                                                đổi 3.0 được phân phối tại ngân hàng Nông nghiệp
                                                và Phát triển Nông thôn Việt Nam (Agribank) bao
                                                gồm các sản phẩm bổ trợ đi kèm (nếu có), từ ngày
                                                08/03/2022 đến ngày 30/06/2022.</p>
                                            <div class="text-start">
                                                <a href="single.php" class="ci-blog-info__readmore"><i class="fal fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="ci-blog-slider__item">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/blog04.jpg" alt="Slider">
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center">
                                        <div class="ci-blog-info">
                                            <span class="sub-color fw-medium">Blog</span>
                                            <h3 class="ci-blog-info__title">
                                                <a href="single.php" class="main-color">
                                                    Chương trình khuyến mại dành cho CBNV Agribank mua sản phẩm Đón đầu thay đổi trong tương lai
                                                </a>
                                            </h3>
                                            <p class="ci-blog-info__desc"> Áp dụng sản phẩm bảo hiểm Đón đầu thay
                                                đổi 3.0 được phân phối tại ngân hàng Nông nghiệp
                                                và Phát triển Nông thôn Việt Nam (Agribank) bao
                                                gồm các sản phẩm bổ trợ đi kèm (nếu có), từ ngày
                                                08/03/2022 đến ngày 30/06/2022.</p>
                                            <div class="text-start">
                                                <a href="single.php" class="ci-blog-info__readmore"><i class="fal fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ci-block overflow-visible">
                    <div class="ci-slider  row">

                        <div class="slider-item col-lg-4 mb-4">
                            <div class="ci-blog-slider__item item-style2">
                                <div class="ci-blog-img">
                                    <img class="w-100 of-cover lazyload" src="<?php echo SOURCE; ?>assets/img/5_Du-bao-tinh-hinh-ung-thu.jpg" alt="Danh mục và tỷ lệ, điều kiện thanh toán đối với thuốc, vật tư y tế thuộc phạm vi được hưởng của người tham gia bảo hiểm y tế" width="362" height="240">
                                </div>
                                <div class="ci-blog-info">
                                    <h3 class="ci-blog-info__title">
                                        <a href="single.php" title="Danh mục và tỷ lệ, điều kiện thanh toán đối với thuốc, vật tư y tế thuộc phạm vi được hưởng của người tham gia bảo hiểm y tế" class="main-color">Danh mục và tỷ lệ, điều kiện thanh toán đối với thuốc, vật tư y tế thuộc phạm vi được hưởng của người tham gia bảo hiểm y tế</a>
                                    </h3>
                                    <p class="ci-blog-info__desc">
                                        Danh mục và tỷ lệ, điều kiện thanh toán đối với thuốc, vật tư y tế thuộc phạm vi được hưởng của người tham gia bảo hiểm y tế.
                                    </p>
                                    <a href="single.php" class="ci-blog-info__readmore-outline" title="Xem tiếp"><i class="far fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                </div>
                            </div>
                        </div>

                        <div class="slider-item col-lg-4 mb-4">
                            <div class="ci-blog-slider__item item-style2">
                                <div class="ci-blog-img">
                                    <img class="w-100 of-cover lazyload" src="<?php echo SOURCE; ?>assets/img/4_Y-nghia-cua-viec-tinh-diem-tin-nhiem-tin-dung-ca-nhan-voi-Ngan-hang-va-nen-tang-tuong-tro-truc-tuyen.png" alt="Danh mục bệnh hiểm nghèo do Nhà nước quy định" width="362" height="240">
                                </div>
                                <div class="ci-blog-info">
                                    <h3 class="ci-blog-info__title">
                                        <a href="single.php" class="main-color">Danh mục bệnh hiểm nghèo do Nhà nước quy định</a>
                                    </h3>
                                    <p class="ci-blog-info__desc">
                                        Danh mục bệnh hiểm nghèo do Nhà nước quy định
                                    </p>
                                    <a href="single.php" class="ci-blog-info__readmore-outline" title="Xem tiếp"><i class="far fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                </div>
                            </div>
                        </div>

                        <div class="slider-item col-lg-4 mb-4">
                            <div class="ci-blog-slider__item item-style2">
                                <div class="ci-blog-img">
                                    <img class="w-100 of-cover lazyload" src="<?php echo SOURCE; ?>assets/img/3_moi-nam-vn-co-them-2000-nguoi-mac-benh-ung-thu.jpg" alt="Mỗi năm Việt Nam có thêm gần 200.000 người mắc bệnh ung thư" width="362" height="240">
                                </div>
                                <div class="ci-blog-info">
                                    <h3 class="ci-blog-info__title">
                                        <a href="single.php" title="Mỗi năm Việt Nam có thêm gần 200.000 người mắc bệnh ung thư" class="main-color">Mỗi năm Việt Nam có thêm gần 200.000 người mắc bệnh ung thư</a>
                                    </h3>
                                    <p class="ci-blog-info__desc">
                                        Mỗi năm Việt Nam có thêm gần 200.000 người mắc bệnh ung thư
                                    </p>
                                    <a href="single.php" class="ci-blog-info__readmore-outline" title="Xem tiếp"><i class="far fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                </div>
                            </div>
                        </div>

                        <div class="slider-item col-lg-4 mb-4">
                            <div class="ci-blog-slider__item item-style2">
                                <div class="ci-blog-img">
                                    <img class="w-100 of-cover lazyload" src="<?php echo SOURCE; ?>assets/img/2_bao-hiem-benh-hiem-ngheo.jpg" alt="Ý nghĩa của việc tính điểm tín nhiệm tín dụng cá nhân với Ngân hàng và nền tảng tương trợ trực tuyến" width="362" height="240">
                                </div>
                                <div class="ci-blog-info">
                                    <h3 class="ci-blog-info__title">
                                        <a href="single.php" title="Ý nghĩa của việc tính điểm tín nhiệm tín dụng cá nhân với Ngân hàng và nền tảng tương trợ trực tuyến" class="main-color">Ý nghĩa của việc tính điểm tín nhiệm tín dụng cá nhân với Ngân hàng và nền tảng tương trợ trực tuyến</a>
                                    </h3>
                                    <p class="ci-blog-info__desc">
                                        Giới thiệu nền tảng tương trợ trực tuyến - oxanh
                                    </p>
                                    <a href="single.php" class="ci-blog-info__readmore-outline" title="Xem tiếp"><i class="far fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                </div>
                            </div>
                        </div>

                        <div class="slider-item col-lg-4 mb-4">
                            <div class="ci-blog-slider__item item-style2">
                                <div class="ci-blog-img">
                                    <img class="w-100 of-cover lazyload" src="<?php echo SOURCE; ?>assets/img/1_danh-muc-thuoc.jpeg" alt="Những bệnh nặng và bệnh hiểm nghèo người Việt hay gặp nhất" width="362" height="240">
                                </div>
                                <div class="ci-blog-info">
                                    <h3 class="ci-blog-info__title">
                                        <a href="single.php" title="Những bệnh nặng và bệnh hiểm nghèo người Việt hay gặp nhất" class="main-color">Những bệnh nặng và bệnh hiểm nghèo người Việt hay gặp nhất</a>
                                    </h3>
                                    <p class="ci-blog-info__desc">
                                        Những bệnh nặng và bệnh hiểm nghèo người Việt hay gặp nhất
                                    </p>
                                    <a href="single.php" class="ci-blog-info__readmore-outline" title="Xem tiếp"><i class="far fa-arrow-right-long me-2"></i>Xem tiếp</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <nav class="mt-3 d-flex justify-content-center">
                        <ul class="pagination">
                            <li class="page-item"><a disable class="page-link" href="#"><i class="fas fa-fw fa-arrow-left"></i>Trang Trước</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Trang Sau<i class="fas fa-fw fa-arrow-right"></i></a></li>
                        </ul>
                    </nav>



                </div>


            </div>

        </main>

        <?php include_once FOOTER; ?>

    </div>
</body>

<?php include_once SCRIPTS; ?>