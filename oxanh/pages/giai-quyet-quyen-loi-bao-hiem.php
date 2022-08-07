<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'giai-quyet-quyen-loi-bao-hiem'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/breadcrumb2.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Giải quyết quyền lợi tương trợ</h1>
                    <div class="ci-breadcrumb-desc">
                        Các bước yêu cầu tương trợ vì bệnh hiểm nghèo
                    </div>
                </div>
            </div>
        </div>

        <main>

            <div class="">
                <div class="ci-block pb-0 overflow-visible ">
                    <div class="container">
                        <div class="row ci-block-icon">
                            <div class="col-12">
                                <div class="ci-heading mb-3 mb-md-5">
                                    <h2 id="buoc1" class="ci-heading__main">Bước 1. Chuẩn bị Hồ sơ yêu cầu tương trợ</h2>
                                </div>
                                <div class="fz-16">

                                    <p><i class="far fa-circle-1 sub-color2 me-2"></i>Giấy đề nghị tương trợ (Phụ lục 03 – <a href="#">Link Mẫu Phụ lục 03</a> ). <br>
                                        Trường hợp làm giúp người khác thì phải có Giấy ủy quyền (Phụ lục 04 – <a href="#">Link Mẫu Phụ lục 04</a>) .</p>
                                    <p><i class="far fa-circle-2 sub-color2 me-2"></i> CCCD, hộ chiếu, chứng minh thư hợp lệ của đương đơn;</p>
                                    <p class="ci-list">
                                        <span><i class="far fa-circle-3 sub-color2 me-2"></i> Các chứng từ, tài liệu y tế liên quan, gồm:</span>
                                        <span class="d-block my-3 ms-4">+ Chứng từ chẩn đoán do bác sĩ chuyên khoa của bệnh viện cấp (xem 8.1 và 8.14), kết luận của bác sỹ, bằng chứng lâm sàng, giấy nhập viện, xuất viện, báo cáo y tế, chứng nhận phẫu thuật, xạ trị,
                                            bằng chứng mô học và xét nghiệm, kết quả xét nghiệm phóng xạ, tế bào học, và những kết quả xét nghiệm chụp chiếu khác (để làm căn cứ xác định rõ sự kiện tương trợ).</span>
                                        <span class="d-block my-3 ms-4">+ Các báo cáo khám bệnh bằng kính hiển vi, xét nghiệm máu và các phương pháp khoa học khác liên quan đến giấy chứng nhận chẩn đoán bệnh do bệnh viện cấp;</span>
                                    </p>
                                    <p>
                                        <i class="far fa-circle-4 sub-color2 me-2"></i> Các chứng chỉ và tài liệu khác liên quan đến việc xác nhận bản chất, nguyên nhân và kết quả của sự kiện hỗ trợ lẫn nhau.
                                    </p>

                                    <i class="gray-color">Lưu ý: Thành viên có thể khám chữa bệnh ở nhiều bệnh viện khác nhau nhưng trong hồ sơ gửi cho Ô Xanh để xin tương trợ, bắt buộc phải có các chứng từ, tài liệu y tế, chẩn đoán, kết luận, phác đồ điều trị của Bác sỹ, chuyên gia y tế của bệnh viện cấp trung ương.</i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="ci-block pb-0 overflow-visible">
                    <div class="container">
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Mẫu đơn yêu cầu tương trợ</h2>
                        </div>
                        <div class="ci-download">
                            <div class="row gx-5">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-download-item">
                                        <a href="" class="ci-download__link">
                                            <span>Tải Giấy đề nghị tương trợ</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-download-item">
                                        <a href="" class="ci-download__link">
                                            <span>Tải Giấy ủy quyền trích sao tóm tắt bệnh án/Hồ sơ bệnh án</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-download-item">
                                        <a href="" class="ci-download__link">
                                            <span>Tải Giấy ủy quyền yêu cầu tương trợ (khi người yêu cầu không phải là người bị bệnh hiểm nghèo)</span>
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="ci-block pb-0">
                    <div class="container">
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Bước 2. Nộp hồ sơ trực tuyến</h2>
                        </div>
                        <div class="ci-claim-desc fz-16 mb-3">
                            Sau khi chuẩn bị xong hồ sơ yêu cầu tương trợ như Bước 1, thành viên Nộp hồ sơ tương trợ trực tuyến (tại đây) để upload hồ sơ lên hệ thống.
                        </div>
                        <div class="ci-package-docs mt-0">
                            <div class="ci-docs-item mb-4">
                                <a href="javascript:void(0);" onclick="fancybox_modal('#upload-files');" class="ci-docs__link">
                                    <i class="fas fa-arrow-up-from-square me-2"></i>
                                    <span>Nộp trực tuyến tại đây</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="ci-block">
                    <div class="container">
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Bước 3. Nộp hồ sơ tại văn phòng</h2>
                        </div>
                        <div class="ci-claim-desc fz-16 mb-3">
                            Nộp trực tiếp bản chính hoặc bản sao công chứng của các tài liệu gốc tại văn phòng Ô Xanh hoặc cho điều tra viên của Ô Xanh.
                        </div>
                        <ul class="list-unstyled fz-16">
                                <li><i class="fad main-color fa-fw fa-location-dot me-2"></i>Địa chỉ: Số 5 Tú Mỡ, quận Cầu Giấy, TP.Hà Nội</li>
                                <li><i class="fad main-color fa-fw fa-phone me-2"></i>Hotline: <a class="dark-color" href="tel:+0339869338">0339.869.338</a> </li>
                            </ul>
                        <div class="ci-package-docs mt-0">
                            <div class="ci-docs-item">
                                <a href="javascript:;" class="ci-docs__link">
                                    <i class="fas fa-arrow-up-from-square me-2"></i>
                                    <span>Nộp trực tiếp, nộp bản chính tại trung tâm dịch vụ khách hàng Ô Xanh</span>
                                </a>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div class="ci-block bg-grey">
                    <div class="container">

                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main color-gray">Tóm lược quy trình giải quyết bồi thường</h2>
                        </div>
                        <div class="ci-claim-desc fz-16 mb-5">
                            Theo 03 bước như trên.
                            Ô Xanh luôn thấu hiểu và đồng cảm khi thành viên trải qua giai đoạn khó khăn về sức khỏe.
                            Vì thế, xử lý nhanh chóng yêu cầu giải quyết quyền lợi tương trợ cho thành viên là ưu tiên hàng đầu của chúng tôi.
                        </div>

                        <div class="ci-claim-process">
                            <div class="row gx-5">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-claim-process__item">
                                        <img width="62px" class="ci-claim-process__icon img-fluid" src="<?php echo SOURCE; ?>assets/img/schedule.png" alt="HTV">
                                        <h3 class="ci-claim-process__title">Khi nào tôi có thể nộp hồ sơ yêu cầu giải quyết Quyền lợi tương trợ lẫn nhau?</h3>
                                        <p class="ci-claim-process__content">Thành viên có thể gửi Hồ sơ yêu cầu tương trợ lẫn nhau trong vòng 180 ngày kể từ ngày xảy ra sự kiện tương trợ.</p>
                                    </div>

                                    <div class="ci-claim-process__img pt-5  d-none d-md-block">
                                        <img width="360px" class=" img-fluid" src="<?php echo SOURCE; ?>assets/img/claim-process.png" alt="HTV">
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-claim-process__item">
                                        <img width="62px" class="ci-claim-process__icon img-fluid" src="<?php echo SOURCE; ?>assets/img/salary.png" alt="HTV">
                                        <h3 class="ci-claim-process__title">Ô Xanh sẽ chi trả Quyền lợi thành viên như thế nào?</h3>
                                        <p class="ci-claim-process__content">Nếu Thông báo giải quyết tương trợ được phát hành với nội dung chấp thuận tương trợ cho Quý thành viên,
                                            chúng tôi sẽ chuyển số tiền được chi trả theo phương thức thanh toán mà thành viên đã cung cấp.</p>
                                    </div>
                                    <div class="ci-claim-process__item">
                                        <img width="62px" class="ci-claim-process__icon img-fluid" src="<?php echo SOURCE; ?>assets/img/find.png" alt="HTV">

                                        <h3 class="ci-claim-process__title">Trong bao lâu thì Hồ sơ yêu cầu tương trợ của tôi được giải quyết?</h3>
                                        <p class="ci-claim-process__content">Các hồ sơ đầy đủ và hợp lệ, chúng tôi sẽ tiến hành công khai thông tin theo quy định của Điều khoản kế hoạch trợ giúp lẫn nhau vì bệnh/tình trạng hiểm nghèo.
                                            Thời gian thực hiện công khai là <span class="sub-color2 fw-bold">07 ngày</span>. Sau thời gian công khai, nếu không có ý kiến nào phản đối,
                                            Ô Xanh sẽ ra Thông báo giải quyết tương trợ đến Thành viên trong vòng <span class="sub-color2 fw-bold">03 ngày</span> làm việc qua email và tin nhắn.
                                            Trường hợp hồ sơ cần bổ sung chứng từ, chúng tôi sẽ thông báo đến Quý thành viên trong vòng 2 ngày làm việc qua email và tin nhắn.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="ci-claim-process__item">
                                        <img width="62px" class="ci-claim-process__icon img-fluid" src="<?php echo SOURCE; ?>assets/img/claim.png" alt="HTV">
                                        <h3 class="ci-claim-process__title">Khi nào Ô Xanh sẽ chi trả Quyền lợi tương trợ cho tôi ?</h3>
                                        <p class="ci-claim-process__content">Chúng tôi sẽ chuyển số tiền tương trợ cho Quý thành viên trong 03 ngày làm việc kể từ ngày
                                            Thông báo giải quyết tương trợ được phát hành và chấp thuận.</p>
                                    </div>
                                    <div class="ci-claim-process__item">
                                        <img width="62px" class="ci-claim-process__icon img-fluid" src="<?php echo SOURCE; ?>assets/img/contact.png" alt="HTV">
                                        <h3 class="ci-claim-process__title">Trường hợp cần trao đổi, tôi liên hệ với Ô Xanh bằng cách nào?</h3>
                                        <p class="ci-claim-process__content">Ô Xanh luôn sẵn sàng lắng nghe và trao đổi để giải đáp các câu hỏi và thắc mắc của Quý thành viên.
                                            Hãy liên hệ với chúng tôi qua Tổng đài chăm sóc khách hàng hoặc số Hotline <a href="tel:0339869338">0339 869 338</a>, Zalo chat hoặc gửi email đến địa chỉ <a href="mailto:contact@oxanh.vn">contact@oxanh.vn</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ci-block">
                    <div class="container">
                        <div class="ci-heading">
                            <h2 class="ci-heading__main">5. Câu hỏi thường gặp</h2>
                        </div>
                        <div class="ci-faq">
                            <div id="ci-faq-accordion" class="accordion">

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="true" aria-controls="collapseOne">
                                            5.1 Trường hợp nào không được tương trợ?
                                        </button>
                                    </div>
                                    <div id="collapse0" class="accordion-collapse collapse" data-bs-parent="#ci-faq-accordion">
                                        <div class="accordion-body">
                                            <p><strong>5.1.1</strong> Nếu một&nbsp;th&agrave;nh vi&ecirc;n bị bệnh nặng như được x&aacute;c định trong chương tr&igrave;nh n&agrave;y nhưng do c&aacute;c trường hợp sau th&igrave; sẽ kh&ocirc;ng thể nhận được sự hỗ trợ lẫn nhau:</p>

                                            <p>(1) Th&agrave;nh vi&ecirc;n bị người trả tiền (ph&iacute; th&agrave;nh vi&ecirc;n) cố &yacute; giết hoặc bị thương;</p>

                                            <p>(2) Th&agrave;nh vi&ecirc;n phạm tội cố &yacute; hoặc chống lại c&aacute;c biện ph&aacute;p cưỡng chế h&igrave;nh sự theo quy định của ph&aacute;p luật;</p>

                                            <p>(3) C&aacute;c h&agrave;nh động khi&ecirc;u kh&iacute;ch hoặc cố &yacute; của c&aacute;c th&agrave;nh vi&ecirc;n dẫn đến đ&aacute;nh nhau hoặc bị tấn c&ocirc;ng;</p>

                                            <p>(4) C&aacute;c th&agrave;nh vi&ecirc;n chủ động uống hoặc ti&ecirc;m thuốc<s>;</s></p>

                                            <p>(5) Th&agrave;nh vi&ecirc;n l&aacute;i xe c&oacute; động cơ trong khi say rượu, hoặc l&aacute;i xe kh&ocirc;ng c&oacute; động cơ trong khi say;</p>

                                            <p>(6) L&aacute;i xe m&agrave; kh&ocirc;ng c&oacute; giấy ph&eacute;p l&aacute;i xe hợp ph&aacute;p, hoặc điều khiển xe cơ giới m&agrave; kh&ocirc;ng c&oacute; giấy ph&eacute;p l&aacute;i xe hợp ph&aacute;p;</p>

                                            <p>(7) Th&agrave;nh vi&ecirc;n tự s&aacute;t hoặc cố &yacute; g&acirc;y thương t&iacute;ch;</p>

                                            <p>(8) C&aacute;c th&agrave;nh vi&ecirc;n bị nhiễm HIV hoặc AIDS, trừ khi c&oacute; thỏa thuận kh&aacute;c trong kế hoạch n&agrave;y?;</p>

                                            <p>(9) C&aacute;c bệnh di truyền, dị tật bẩm sinh, dị tật hoặc bất thường nhiễm sắc thể, trừ khi c&oacute; thỏa thuận kh&aacute;c trong kế hoạch n&agrave;y?.</p>

                                            <p><strong>5.1.2</strong> Khi một&nbsp;th&agrave;nh vi&ecirc;n kh&ocirc;ng đ&aacute;p ứng c&aacute;c y&ecirc;u cầu về sức khỏe khi tham gia chương tr&igrave;nh, hoặc mắc bệnh nặng theo quy định của chương tr&igrave;nh, th&agrave;nh vi&ecirc;n sẽ kh&ocirc;ng thể nhận được sự Trợ gi&uacute;p lẫn nhau v&agrave; tư c&aacute;ch th&agrave;nh vi&ecirc;n của thanh vi&ecirc;n sẽ bị chấm dứt v&agrave; thanh vi&ecirc;n sẽ tự động r&uacute;t khỏi chương tr&igrave;nh th&igrave; được&nbsp; ho&agrave;n lại ph&iacute; th&agrave;nh vi&ecirc;n c&ograve;n lại đến thời điểm r&uacute;t khỏi chương tr&igrave;nh.</p>

                                            <p><strong>5.1.3</strong>&nbsp;Th&agrave;nh vi&ecirc;n đ&aacute;p ứng c&aacute;c y&ecirc;u cầu về sức khỏe khi tham gia chương tr&igrave;nh v&agrave; kh&ocirc;ng mắc&nbsp;bệnh hiểm ngh&egrave;o như đ&atilde; x&aacute;c định trong kế hoạch. Nhưng khi thay đổi chương tr&igrave;nh tương trợ, lại&nbsp;kh&ocirc;ng đ&aacute;p ứng c&aacute;c y&ecirc;u cầu về sức khỏe của chương tr&igrave;nh mới. V&igrave; vậy khi b&ecirc;nh nặng th&agrave;nh vi&ecirc;n đăng k&yacute; tham gia chương tr&igrave;nh hỗ trợ lẫn nhau với&nbsp;chương tr&igrave;nh mới sẽ kh&ocirc;ng ph&ugrave; hợp m&agrave; chỉ c&oacute; thể l&agrave;m theo&nbsp;chương tr&igrave;nh viện trợ lẫn nhau ban đầu.</p>

                                            <p><strong>5.1.4</strong>&nbsp;Đặc biệt lưu &yacute;: Th&agrave;nh vi&ecirc;n mắc bệnh hiểm ngh&egrave;o quy định tại Điều 7.1 của kế hoạch n&agrave;y, nhưng l&agrave; đối tượng kh&ocirc;ng được tương trợ quy định tại Điều 7.1 của kế hoạch n&agrave;y th&igrave; th&agrave;nh vi&ecirc;n đ&oacute; kh&ocirc;ng được tương trợ.&nbsp;</p>

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                            5.2 Thời gian chờ là gì?
                                        </button>
                                    </div>
                                    <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#ci-faq-accordion">
                                        <div class="accordion-body">
                                            <div class="ci-list">
                                                <p><strong>5.2.1 </strong>Khi tham gia kế hoạch tương trợ bệnh hiểm ngh&egrave;o, th&agrave;nh&nbsp; vi&ecirc;n phải trải qua thời gian chờ trong v&ograve;ng 90 ng&agrave;y (bao gồm cả ng&agrave;y thứ 90) kể từ 0h00 ng&agrave;y h&ocirc;m sau kể từ khi th&agrave;nh vi&ecirc;n tham gia chương tr&igrave;nh th&agrave;nh c&ocirc;ng v&agrave; V&Agrave; SỐNG S&Oacute;T SAU 7 NG&Agrave;Y kể từ ng&agrave;y bị tai nạn v&agrave; hoặc được chẩn đo&aacute;n mắc bệnh hiểm ngh&egrave;o.</p>

                                                <p><strong>5.2.2&nbsp;</strong>Nếu một th&agrave;nh vi&ecirc;n mắc bệnh trong thời gian chờ hoặc kh&ocirc;ng qua khỏi trong v&ograve;ng 7 ng&agrave;y kể từ khi bị tai nạn hoặc được chẩn đo&aacute;n mắc bệnh hiểm ngh&egrave;o th&igrave; th&agrave;nh vi&ecirc;n đ&oacute; kh&ocirc;ng thuộc đối tượng được tương trợ trong kế hoạch n&agrave;y.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapseOne">
                                            5.3 Thời gian xin tương trợ mất bao lâu?
                                        </button>
                                    </div>
                                    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#ci-faq-accordion">
                                        <div class="accordion-body">
                                            <p>Trong v&ograve;ng 180 ng&agrave;y (bao gồm cả ng&agrave;y thứ 180) kể từ ng&agrave;y được bệnh viện chẩn đo&aacute;n ban đầu hoặc xẩy ra tai nạn.</p>

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne">
                                            5.4 Các câu hỏi khác?
                                        </button>
                                    </div>
                                    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#ci-faq-accordion">
                                        <div class="accordion-body">
                                            <p><a href="https://oxanh.vn">Xem phần 100 c&acirc;u hỏi v&agrave; trả lời về Bệnh hiểm ngh&egrave;o.</a></p>

                                            <p><b><i>Th&agrave;nh vi&ecirc;n cam kết đ&atilde; đọc, hiểu v&agrave; đồng &yacute; với c&aacute;c nội dung của Quy ước th&agrave;nh vi&ecirc;n, Điều khoản, Quy tắc v&agrave; c&aacute;c điều kiện tham gia Nền tảng trợ gi&uacute;p &Ocirc; Xanh</i></b></p>

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
<?php include_once POPUP; ?>
<?php include_once SCRIPTS; ?>