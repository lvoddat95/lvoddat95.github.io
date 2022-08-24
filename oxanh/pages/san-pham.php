<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php $GLOBALS["menu"] = 'san-pham'; ?>

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <!-- <nav class="toc">
            <ul>
                <li><a href="#topic-1">Kế hoạch tương trợ G1</a></li>
                <li>
                    <a href="#topic-2">Danh mục các bệnh hiểm nghèo</a>
                </li>
                <li>
                    <a href="#topic-3">Mức tương trợ tối đa và phí thành viên</a>
                </li>
                <li>
                    <a href="#topic-4">Lưu ý cơ bản</a>
                </li>
                <li>
                    <a href="#topic-5">Cách thức tham gia thành viên</a>
                </li>
                <li>
                    <a href="#topic-6"> Thời gian chờ</a>
                </li>
                <li>
                    <a href="#topic-7">Nội dung tương trợ </a>
                </li>
                <li>
                    <a href="#topic-8"> Chấm dứt kế hoạch</a>
                </li>
                <li>
                    <a href="#topic-9"> Hoàn cảnh không có sự hỗ trợ lẫn nhau</a>
                </li>
                <li>
                    <a href="#topic-10"> Đề nghị tương trợ và quy tắc phân bổ</a>
                </li>
                <li>
                    <a href="#topic-11">  Rút khỏi kế hoạch </a>
                </li>
                <li>
                    <a href="#topic-12"> Các vấn đề khác cần chú ý</a>
                </li>
            </ul>
            <svg class="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
            </svg>
        </nav> -->
        <main>

            <div class="ci-block ci-sanpham" id="topic-1">
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-md-7">
                            <div class="ci-heading">
                                <h2 class="ci-heading__main main-color">Kế hoạch tương trợ <span>G1</span></h2>
                            </div>
                            <div class="fz-16 text-sanpham" style="text-align: justify;">
                                Với tỷ lệ mắc Bệnh ung thư gia tăng mỗi năm <br>
                                Oxanh xin giới thiệu <span class="fw-medium">Kế hoạch tương trợ G1</span> sẽ giúp bạn giảm bớt lo âu với những quyền lợi ưu việt, mang lại sự chuẩn bị tốt nhất trước những rủi ro bất ngờ.
                            </div>
                        </div>
                        <div class="col-md-5 ">
                            <div class="ps-lg-5 img-sanpham">
                                <img class="radius-16 overflow-hidden of-cover" width="100%" height="300px" src="<?php echo SOURCE; ?>assets/img/san-pham/cham-soc.jpg" alt="Ô Xanh">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block text-center" id="topic-2">
                <div class="container">
                    <div class="ci-heading mb-3 mb-md-5">
                        <h2 class="ci-heading__main ">Danh mục các bệnh hiểm nghèo</h2>
                    </div>
                    <div class="fz-16 mb-3">
                        Các bệnh nghiêm trọng được định nghĩa trong kế hoạch này đề cập đến các bệnh. <br> Trạng thái bệnh được quy định chi tiết tại đây:
                    </div>

                    <a href="javascript:void(0);" onclick="fancybox_modal('#danh-muc-benh');" class="ci-docs__link">
                        <i class="fa-solid fa-book-medical me-2"></i>
                        <span>Xem bảng danh mục</span>
                    </a>

                </div>
            </div>

            <div class="ci-block text-center bg-color1" id="topic-3">
                <div class="container">
                    <div class="ci-heading mb-3 mb-md-5">
                        <h2 class="ci-heading__main ">Mức tương trợ tối đa và phí thành viên</h2>
                    </div>
                    <div class="fz-16 mb-3 text">
                        Với gói G1 này, mức tương trợ tối đa cho thành viên lên tới <span class="fw-medium main-color">200.000.000</span> đồng.
                        <br> Tùy theo các nhóm tuổi phí thành viên cụ thể như sau:

                    </div>
                    <div class="">
                        <table class="table table-style">
                            <thead>
                                <tr>
                                    <th style="border-right: 1px solid #fff;" rowspan="2">Độ tuổi</th>
                                    <th>Tên Gói và Mức tương trợ tối đa</th>
                                <tr>
                                    <th>G1 – 200.000.000</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Từ 1 -18 (1 tính từ 30 ngày)</td>
                                    <td>500.000</td>
                                </tr>
                                <tr>
                                    <td>Từ 19-29</td>
                                    <td>1.000.000</td>
                                </tr>
                                <tr>
                                    <td>Từ 30 - 39</td>
                                    <td>1.500.000</td>
                                </tr>
                                <tr>
                                    <td>Từ 40 - 49</td>
                                    <td>2.000.000</td>
                                </tr>
                                <tr>
                                    <td>Từ 50 - 59</td>
                                    <td>2.500.000</td>
                                </tr>
                                <tr>
                                    <td>Từ 60 -65 (chỉ dành cho người đã là thành viên)</td>
                                    <td>3.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row mt-3 fw-medium">
                            <div class="col-md-6 text-start">
                                <i>Phụ lục 1: Bảng mức tương trợ và Phí thành viên</i>
                            </div>
                            <div class="col-md-6 text-end">
                                <i>Đơn vị: Đồng</i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="ci-block" id="topic-4">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fa-solid fa-quote-left"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Lưu ý cơ bản</h2>
                        </div>
                        <div class="mb-3">
                            <p class="mb-3">Chương trình này không phải là bảo hiểm và chúng tôi không hứa rằng bệnh trạng nào của bạn cũng được bảo vệ.</p>
                            <p class="mb-3">Tại một thời điểm với kế hoạch trợ giúp lẫn nhau này, mỗi thành viên chỉ có thể tham gia một lần với 01 gói và/hoặc nộp 01 đơn xin tương trợ cho 01 sự kiện cần tương trợ.</p>
                            <p class="mb-3">Trong mọi trường hợp, sự hỗ trợ của Ô Xanh với mỗi thành viên không vượt quá Mức tương trợ tối đa của 01 gói tương trợ.</p>
                            <p class="mb-3">Việc tham gia nhiều lần hoặc nhiều gói, nộp nhiều đơn cho nhiều sự kiện tuơng trợ khác nhau cũng sẽ không thể nhận được nhiều hỗ trợ lẫn nhau.</p>
                            Các thành viên chia sẻ trách nhiệm Trợ giúp lẫn nhau trong hành động đóng góp và số tiền đã được phân bổ không thể bị thu hồi.
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block ci-style bg-color1" id="topic-5">
                <div class="container">
                    <div class="ci-heading mb-3 mb-md-5">
                        <h2 class="ci-heading__main">Cách thức tham gia thành viên</h2>
                    </div>
                    <div class="ci-claim-desc fz-16 mb-3">
                        Người dùng vào khai báo thông tin theo hướng dẫn trên web và app. Nếu đáp ứng yêu cầu của nền tảng,
                        người dùng nộp hồ sơ mới nhất đã tham gia khám bệnh trong vòng 1 năm (tờ phiếu khám và chuẩn đoán của bác sỹ) và
                        đóng phí thành viên để trở thành thành viên tương trợ của nền tảng. <br>
                        Cụ thể theo 5 bước như sau:
                    </div>

                    <div class="ci-flow">
                        <div>
                            <a href="javascript:void(0);" onclick="fancybox_modal('#step-1');" title="Đăng ký">
                                <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/signup.png" alt="Oxanh">
                                <span class="ci-flow__link">Bước 1: <br>Đăng ký</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:void(0);" onclick="fancybox_modal('#step-2');" title="Đăng nhập">
                                <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/login.png" alt="Oxanh">
                                <span class="ci-flow__link">Bước 2: <br>Đăng nhập</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:void(0);" onclick="fancybox_modal('#step-3');" title="Kê khai thông tin">
                                <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/register.png" alt="Oxanh">
                                <span class="ci-flow__link">Bước 3: <br>Kê khai thông tin</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:void(0);" onclick="fancybox_modal('#step-4');" title="Chọn gói tương trợ">
                                <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/product.png" alt="Oxanh">
                                <span class="ci-flow__link">Bước 4: <br>Chọn gói tương trợ</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:void(0);" onclick="fancybox_modal('#step-5');" title="Thanh toán" class="last">
                                <img class="ci-flow__icon" src="<?php echo SOURCE; ?>assets/img/pay.png" alt="Oxanh">
                                <span class="ci-flow__link">Bước 5: <br>Thanh toán</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="ci-block pb-0" id="topic-6">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-hourglass-clock text-warning op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Thời gian chờ là <span class="main-color">90 ngày</span></h2>
                        </div>
                        <div class="mb-3">
                            <div class="row gx-5 mb-3">
                                <div class="col-md-6" style="text-align: justify;">
                                    <p class="">Thời gian chờ sẽ trong vòng 90 ngày (bao gồm cả ngày thứ 90) tính từ 0h00 ngày hôm sau kể từ khi thành viên tham gia chương trình thành công.
                                        Trong thời gian chờ đợi, chẩn đoán ban đầu của thành viên phát hiện ra bệnh nghiêm trọng như được xác định trong kế hoạch này hoặc do thương tật tai nạn,
                                        sẽ không thể nhận được sự hỗ trợ lẫn nhau, tư cách thành viên chấm dứt và sẽ tự động rút khỏi chương trình,
                                        nhưng chúng tôi sẽ hoàn lại mà không tính lãi Số phí thành viên đã đóng trong chương trình này.</p>
                                    <i class="gray-color">Nếu hết thơi gian chờ mà thành viên vẫn chưa nộp hồ sơ đã tham gia khám chữa bệnh thì thời gian chờ sẽ tự động mở rộng cho đến khi thành viên nộp thành công.</i>
                                </div>
                                <div class="col-md-6" style="text-align: justify;">
                                    <p class="mb-0" style="background: rgb(238 249 248 / 95%); padding: 20px; border-radius: 30px;">
                                        Ví dụ: Trước khi hết thời gian chờ đợi, thành viên tìm thấy khối u nghi ngờ ác tính hoặc bắt đầu điều trị khối u ác tính thông qua bất kỳ phương tiện chẩn đoán nào và
                                        được chẩn đoán là có khối u ác tính trong vòng 90 ngày (kể cả ngày thứ 90) sau khi thời gian chờ kết thúc, thành viên sẽ không thể nhận được sự hỗ trợ lẫn nhau,
                                        chấm dứt tư cách thành viên và tự động rút khỏi gói này. Tuy nhiên, chúng tôi sẽ hoàn lại số phí thành viên đã đóng trong kế hoạch này mà không tính lãi suất.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block" id="topic-7">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-quote-left text-info op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Nội dung tương trợ </h2>
                        </div>
                        <div class="mb-3">
                            <p class="mb-3">SAU THỜI GIAN CHỜ 90 NGÀY và trong thời gian là thành viên của chương trình, một thành viên bị tai nạn và/hoặc được chẩn đoán ban đầu (lần đầu tiên được chẩn đoán)
                                là mắc bệnh nặng trong danh mục bệnh hiểm nghèo được xác định trong chương trình này VÀ SỐNG SÓT SAU 7 NGÀY kể từ ngày bị tai nạn và/hoặc được chẩn đoán mắc bệnh hiểm nghèo, thành viên bị bệnh có thể gửi đơn xin Trợ giúp lẫn nhau cho chúng tôi. </p>
                            <p class="mb-3">Sau khi kết thúc điều tra sự cố tương trợ của thành viên, chúng tôi sẽ bắt đầu phân bổ viện trợ lẫn nhau cho các thành viên trong
                                kế hoạch này và thanh toán quỹ trợ giúp lẫn nhau cho các thành viên bị bệnh nếu xác định được thông qua các thủ tục liên quan rằng việc Trợ giúp lẫn nhau cần được thực hiện.
                                Việc thanh toán được thực hiện 1 lần toàn bộ số tiền tương trợ thành viên.</p>
                            <p class="mb-3"> Trừ những trường hợp đặc biệt, Ô Xanh có thể tạm ứng trước (nhưng không quá 50%) để thành viên có thời gian hoàn thiện hồ sơ xin tương trợ.</p>
                            Các bệnh hiểm nghèo được định nghĩa trong kế hoạch này đề cập đến các bệnh, trạng thái bệnh hoặc các hoạt động được quy định trong <a title="Xem danh mục" href="#topic1">Các bệnh hiểm nghèo</a>.

                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block ci-style bg-color4" id="topic-8">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-octagon-exclamation text-danger op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Chấm dứt kế hoạch</h2>
                        </div>
                        <div class="mb-3">
                            <p><i class="far fa-circle-1 sub-color2 me-2"></i>Khi các điều kiện chấm dứt được liệt kê trong "Quy ước thành viên " được đáp ứng,
                                chẳng hạn như các yếu tố bất khả kháng hoặc chính sách của nhà nước, chúng tôi có quyền tự động chấm dứt các kế hoạch trợ giúp lẫn nhau này.</p>
                            <p><i class="far fa-circle-2 sub-color2 me-2"></i>Để đảm bảo kế hoạch hoạt động liên tục, lành mạnh và duy trì sự công bằng, quyền và
                                lợi ích của các thành viên, khi số lượng thành viên của phương án dưới 100.000 thành viên, chúng tôi có quyền chấm dứt hoặc điều chỉnh
                                kế hoạch (không giới hạn ở việc điều chỉnh phương thức chi trả như Mục 3 - Yêu câù hỗ trợ và phân bổ dưới đây)
                                Chúng tôi có quyền xây dựng, chấm dứt hoặc điều chỉnh kế hoạch và thực hiện công bố cho các thành viên. Trong thời gian công khai,
                                các thành viên của kế hoạch có thể đưa ra ý kiến và đề xuất về kế hoạch.
                                Chúng tôi sẽ lắng nghe cẩn thận và thực hiện điều chỉnh nếu thấy thích hợp.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block" id="topic-9">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-handshake-simple-slash text-dark op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Hoàn cảnh không có sự hỗ trợ lẫn nhau</h2>
                        </div>

                        <div class="ci-faq ci-faq2">
                            <div id="ci-hoancanh" class="accordion">
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh0" aria-expanded="true">
                                            1. Nếu một thành viên bị bệnh nặng như được xác định trong chương trình này nhưng do các trường hợp sau thì sẽ không thể nhận được sự hỗ trợ lẫn nhau
                                        </button>
                                    </div>
                                    <div id="hoancanh0" class="accordion-collapse collapse" data-bs-parent="#ci-hoancanh">
                                        <div class="accordion-body">
                                            <span class="d-block my-3 ms-4">+ Thành viên bị người trả tiền (phí thành viên) cố ý giết hoặc bị thương;</span>
                                            <span class="d-block my-3 ms-4">+ Thành viên phạm tội cố ý hoặc chống lại các biện pháp cưỡng chế hình sự theo quy định của pháp luật</span>
                                            <span class="d-block my-3 ms-4">+ Các hành động khiêu khích hoặc cố ý của các thành viên dẫn đến đánh nhau hoặc bị tấn công;</span>
                                            <span class="d-block my-3 ms-4">+ Các thành viên chủ động uống hoặc tiêm thuốc (không theo chỉ dẫn của bác sỹ);</span>
                                            <span class="d-block my-3 ms-4">+ Thành viên lái xe có động cơ trong khi say rượu, hoặc lái xe không có động cơ trong khi say;</span>
                                            <span class="d-block my-3 ms-4">+ Lái xe mà không có giấy phép lái xe hợp pháp, hoặc điều khiển xe cơ giới mà không có giấy phép lái xe hợp pháp;</span>
                                            <span class="d-block my-3 ms-4">+ Thành viên tự sát hoặc cố ý gây thương tích;</span>
                                            <span class="d-block my-3 ms-4">+ Các thành viên bị nhiễm HIV hoặc AIDS, trừ khi có thỏa thuận khác trong kế hoạch này?;</span>
                                            <span class="d-block my-3 ms-4">+ Các bệnh di truyền, dị tật bẩm sinh, dị tật hoặc bất thường nhiễm sắc thể, trừ khi có thỏa thuận khác trong kế hoạch này.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh1" aria-expanded="true">
                                            2. Bệnh/tình trạng hiểm nghèo của thành viên được gây ra, toàn bộ hoặc một phần, bởi bất kỳ một trong những nguyên nhân dưới đây
                                        </button>
                                    </div>
                                    <div id="hoancanh1" class="accordion-collapse collapse" data-bs-parent="#ci-hoancanh">
                                        <div class="accordion-body">
                                            <span class="d-block my-3 ms-4">+ Bệnh tật hoặc thương tật khác với chẩn đoán bệnh/tình trạng hiểm nghèo theo định nghĩa tại Mục 7.1 dưới đây;</span>
                                            <span class="d-block my-3 ms-4">+ Bệnh/tình trạng hiểm nghèo mà thành viên có triệu chứng, đã được xác minh, hoặc được chẩn đoán trước hoặc trong thời gian chờ trừ khi có thỏa thuận khác trong kế hoạch này;</span>
                                            <span class="d-block my-3 ms-4">+ Bệnh/tình trạng hiểm nghèo phát sinh, trực tiếp từ một khuyết tật hoặc bệnh bẩm sinh đã xuất hiện hoặc được chẩn đoán trước thi tham gia thành viên;</span>
                                            <span class="d-block my-3 ms-4">+ Thành viên không còn sống trong ít nhất bảy (7) ngày sau khi chẩn đoán bệnh/tình trạng hiểm nghèo;</span>
                                            <span class="d-block my-3 ms-4">+ Bức xạ ion hóa hoặc ô nhiễm bởi phóng xạ từ bất kỳ nhiên liệu hạt nhân hoặc từ bất kỳ chất thải hạt nhân do đốt nhiên liệu hạt nhân;</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed button-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh2" aria-expanded="true">
                                            3. Khi tham gia chương trình một thành viên không đáp ứng các yêu cầu về sức khỏe, hoặc mắc bệnh nặng theo quy định của chương trình, thành viên sẽ không thể nhận được sự Trợ giúp lẫn nhau và tư cách thành viên của thành viên sẽ bị chấm dứt và thành viên sẽ tự động rút khỏi chương trình thì được hoàn lại phí thành viên còn lại đến thời điểm rút khỏi chương trình.
                                        </button>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed button-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh3" aria-expanded="true">
                                            4. Thành viên đáp ứng các yêu cầu về sức khỏe khi tham gia chương trình và không mắc bệnh hiểm nghèo như đã xác định trong kế hoạch. Nhưng khi thay đổi chương trình tương trợ, lại không đáp ứng các yêu cầu về sức khỏe của chương trình mới.
                                            Vì vậy khi bênh nặng thành viên đăng ký tham gia chương trình hỗ trợ lẫn nhau với chương trình mới sẽ không phù hợp mà
                                        </button>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed button-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh4" aria-expanded="true">
                                            5. Đặc biệt lưu ý: Thành viên mắc bệnh hiểm nghèo quy định tại Điều 7.1 của kế hoạch này, nhưng là đối tượng không tương trợ quy định tại Điều 7.1 của kế hoạch này thì thành viên đó không được tương trợ.
                                            Vui lòng đọc kỹ toàn bộ nội dung của Điều 7.1, đặc biệt là phần in đậm.
                                        </button>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed button-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#hoancanh5" aria-expanded="true">
                                            6. Thành viên tham gia các hoạt động hàng không (trừ khi với tư cách là hành khách), tham gia các cuộc diễn tập, huấn luyện quân sự, tham gia chiến đấu của các lực lượng vũ trang.
                                            Điều trị thuốc không theo chỉ dẫn của cơ quan y tế.
                                            Do động đất, núi lửa, sóng thần, nhiễm phóng xạ, chiến tranh, nội chiến, đình công, thiên tai, dịch bệnh, các trường hợp bất khả kháng.
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block ci-style bg-color3" id="topic-10">
                <div class="container">
                    <div class="position-relative">
                        <div class="ci-heading">
                            <dic class="ci-icon">
                                <i class="fad fa-file-certificate text-success op10"></i>
                            </dic>
                            <h2 class="ci-heading__main">Đề nghị tương trợ và <span class="main-color">quy tắc phân bổ</span></h2>
                        </div>
                        <div class="ci-faq ci-faq2">
                            <div id="ci-denghiquytac" class="accordion">
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#denghiquytac0" aria-expanded="true" aria-controls="collapseOne">
                                            1. Các mốc thời gian
                                        </button>
                                    </div>
                                    <div id="denghiquytac0" class="accordion-collapse collapse" data-bs-parent="#ci-denghiquytac">
                                        <div class="accordion-body">
                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium d-block"><i class="far fa-circle-1 sub-color2 me-2"></i>Thông báo về các sự cố tương trợ</span>
                                                Các thành viên hoặc vợ /chồng, cha mẹ và con cái của họ có thể thông báo về các tai nạn, bênh tật và xin Trợ giúp lẫn nhau cho chúng tôi.
                                                Chúng tôi sẽ phải được thông báo <span class="fw-medium main-color">trong vòng 30 ngày </span> kể từ ngày sự cố tương trợ xẩy ra.
                                                Những người cố tình hoặc không thông báo kịp thời do sơ suất sẽ khó xác định bản chất,
                                                nguyên nhân và hậu quả của tai nạn tương trợ và họ sẽ không thể có được sự hỗ trợ lẫn nhau.
                                                Trừ khi, nếu chúng tôi đã biết hoặc biết kịp thời về việc xảy ra sự cố tương trợ lẫn nhau thông qua các phương tiện khác,
                                                hoặc nếu không thông báo kịp thời cho chúng tôi nhưng chúng tôi xác định được việc đó không ảnh hưởng đến việc xác định bản chất,
                                                nguyên nhân và kết quả của sự cố tương trợ lẫn nhau.
                                            </p>
                                            <p class="ci-list mb-3">
                                                <span class="fw-medium d-block"><i class="far fa-circle-2 sub-color2 me-2"></i>Thời gian được quyền gửi đơn và hồ sơ yêu cầu trợ giúp.</span>
                                                Thời gian để các thành viên nằm trong kế hoạch Trợ giúp lẫn nhau nộp đơn xin
                                                Trợ giúp lẫn nhau là <span class="fw-medium main-color">trong vòng 180 ngày</span> (bao gồm cả ngày thứ 180) kể từ ngày được bệnh viện chẩn đoán ban đầu hoặc xẩy ra tai nạn..
                                            </p>
                                            <p class="ci-list mb-3">
                                                <span class="fw-medium"><i class="far fa-circle-3 sub-color2 me-2"></i></span>
                                                Sau khi nhận được <span class="fw-medium main-color">tài liệu đăng ký đầy đủ</span>,
                                                chúng tôi hoặc cơ quan điều tra được ủy quyền của chúng tôi, sẽ tiến hành điều tra xem xét cụ thể và đưa ra ý kiến đánh giá sơ bộ
                                                <span class="fw-medium main-color">(trong vòng 05 ngày)</span>
                                            </p>
                                            <p class="ci-list mb-3">
                                                <span class="fw-medium"><i class="far fa-circle-4 sub-color2 me-2"></i></span>
                                                Đối với các trường hợp có thể tiến hành trợ giúp lẫn nhau do kết quả của việc điều tra và xem xét, chúng tôi sẽ công khai,
                                                công bố rộng rãi và chấp nhận sự giám sát của xã hội: <span class="fw-medium main-color">Thời hạn công khai là 07 ngày.</span>
                                                Trong thời gian thông báo công khai, chúng tôi sẽ chấp nhận các báo cáo giám sát, phản biện và tiến hành các cuộc điều tra bổ sung.
                                            </p>
                                            <p class="ci-list mb-3">
                                                <span class="fw-medium"><i class="far fa-circle-5 sub-color2 me-2"></i></span>
                                                Hết thời hạn công khai, thành viên bị ốm có thể nhận được sự trợ giúp lẫn nhau trong vòng <span class="fw-medium main-color">03 ngày</span> đối với những trường hợp
                                                không có phản đối sau khi công khai.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#denghiquytac1" aria-expanded="true" aria-controls="collapseOne">
                                            2. Các bước đăng ký xin hỗ trợ lẫn nhau
                                        </button>
                                    </div>
                                    <div id="denghiquytac1" class="accordion-collapse collapse" data-bs-parent="#ci-denghiquytac">
                                        <div class="accordion-body">
                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium d-block">Bước 1: Khi đăng ký tương trợ, các thành viên phải điền thông tin, Scan và gửi cho chúng tôi các chứng chỉ và tài liệu sau:</span>
                                                <span class="d-block mb-3">
                                                    <i class="far fa-circle-1 sub-color2 me-2"></i>
                                                    Giấy đề nghị tương trợ (<span class="fw-medium main-color">Phụ lục 03 </span> - theo Mẫu được đăng tải trên Website). <br>
                                                    Trường hợp làm giúp người khác thì phải có Giấy ủy quyền (<span class="fw-medium main-color">Phụ lục 04 </span> - theo Mẫu được đăng tải trên Website) .
                                                </span>

                                                <span class="d-block mb-3">
                                                    <i class="far fa-circle-2 sub-color2 me-2"></i>
                                                    CCCD, hộ chiếu, chứng minh thư hợp lệ của đương đơn;
                                                </span>

                                                <span class="d-block mb-3">
                                                    <i class="far fa-circle-3 sub-color2 me-2"></i>
                                                    Các chứng từ, tài liệu y tế liên quan, gồm:
                                                    <span class="d-block ms-4">
                                                        + Chứng từ chẩn đoán do bác sĩ chuyên khoa của bệnh viện cấp (xem 8.1 và 8.14), kết luận của bác sỹ,
                                                        bằng chứng lâm sàng, giấy nhập viện, xuất viện, báo cáo y tế, chứng nhận phẫu thuật, xạ trị, bằng chứng mô học và xét nghiệm,
                                                        kết quả xét nghiệm phóng xạ, tế bào học, và những kết quả xét nghiệm chụp chiếu khác (để làm căn cứ xác định rõ sự kiện tương trợ).
                                                    </span>
                                                    <span class="d-block ms-4">
                                                        + Các báo cáo khám bệnh bằng kính hiển vi, xét nghiệm máu và các phương pháp khoa học khác liên quan đến giấy chứng nhận chẩn đoán bệnh do bệnh viện cấp;
                                                    </span>
                                                </span>

                                                <span class="d-block mb-3">
                                                    <span class="d-block">
                                                        <i class="far fa-circle-4 sub-color2 me-2"></i>
                                                        Các chứng chỉ và tài liệu khác liên quan đến việc xác nhận bản chất, nguyên nhân và kết quả của sự kiện hỗ trợ lẫn nhau.
                                                    </span>
                                                    <i class="gray-color">
                                                        Lưu ý: Thành viên có thể khám chữa bệnh ở nhiều bệnh viện khác nhau nhưng trong hồ sơ gửi cho Ô Xanh để xin tương trợ, bắt buộc phải có các chứng từ, tài liệu y tế, chẩn đoán, kết luận, phác đồ điều trị của Bác sỹ, chuyên gia y tế của bệnh viện cấp trung ương.
                                                    </i>
                                                </span>
                                            </p>

                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium d-block">Bước 2: Nộp hồ sơ tương trợ (tại đây):</span>
                                                Sau khi chuẩn bị xong hồ sơ yêu cầu tương trợ như Bước 1, thành viên Nộp hồ sơ tương trợ trực tuyến (tại đây - để up hồ sơ lên hệ thống)
                                            </p>

                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium d-block">Bước 3: Nộp trực tiếp bản chính hoặc bản sao công chứng của các tài liệu gốc tại văn phòng Ô Xanh hoặc cho điều tra viên của Ô Xanh.</span>
                                                Trong mọi trường hợp, Ô Xanh có quyền yêu cầu bản gốc để kiểm tra.
                                                Trường hợp bản gốc chỉ có 01 bản cần dùng cho nhiều mục đích khác nhau,
                                                thành viên cần cung cấp bản sao của các tài liệu gốc để điều tra viên làm thủ tục xác nhận và đối chứng tại chỗ với bản gốc.
                                                <span class="d-block ms-4">
                                                    + Thành viên cũng có thể nộp các tài liệu trên trực tiếp cho chúng tôi theo địa chỉ công bố trên website.
                                                </span>
                                                <span class="d-block ms-4">
                                                    + Chi phí cho việc cung cấp các tài liệu nêu trên sẽ do người gửi chịu.
                                                </span>
                                                Nếu các chứng chỉ và tài liệu trên không đầy đủ, chúng tôi sẽ thông báo ngay cho thành viên để cung cấp các chứng chỉ và tài liệu liên quan cùng một lúc.
                                                <span class="d-block ms-4">
                                                    + Trong trường hợp có sự mâu thuẫn, không thuyết phục, không đồng thuận về kết quả chẩn đoán bệnh/tình trạng bệnh hiểm nghèo/thương tật do thành viên cung cấp,
                                                    Ô Xanh có quyền yêu cầu thành viên xin tương trợ tiến hành kiểm tra y tế, bao gồm nhưng không giới hạn việc cung cấp bằng chứng về tiền sử sức khỏe,
                                                    chẩn đoán lại, tiến hành xét nghiệm và chụp chiếu lại, nếu cần thiết, tại một bệnh viện khác. Chi phí cho việc cung cấp các tài liệu hoặc bằng chứng đó do Ô Xanh chi trả.
                                                    Thành viên phải tuân thủ các kết quả/bằng chứng cuối cùng này.
                                                </span>
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#denghiquytac3" aria-expanded="true" aria-controls="collapseOne">
                                            3. Quy tắc tương trợ (phân bổ)
                                        </button>
                                    </div>
                                    <div id="denghiquytac3" class="accordion-collapse collapse" data-bs-parent="#ci-denghiquytac">
                                        <div class="accordion-body">
                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium"><i class="far fa-circle-1 sub-color2 me-2"></i>Tỷ lệ tương trợ/phân bổ:</span>
                                                Tiền trợ giúp lẫn nhau được chia cho các thành viên theo một tỷ lệ cố định được tính bằng cách lấy
                                                Tiền trợ giúp thành viên (theo sự kiện) chia cho (:) Tổng phí thành viên.
                                                Trường hợp tỷ lệ này lớn hơn 1% thì lấy 1% và gọi đó là tỷ lệ phân bổ
                                            </p>

                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium"><i class="far fa-circle-2 sub-color2 me-2"></i>Tỷ lệ tương trợ/phân bổ:</span>
                                                Tiền trợ giúp lẫn nhau được chia cho các thành viên theo một tỷ lệ cố định được tính bằng cách lấy
                                                Tiền trợ giúp thành viên (theo sự kiện) chia cho (:) Tổng phí thành viên.
                                                Trường hợp tỷ lệ này lớn hơn 1% thì lấy 1% và gọi đó là tỷ lệ phân bổ
                                            </p>

                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium"><i class="far fa-circle-3 sub-color2 me-2"></i>Số tiền tương trợ/phân bổ của mỗi thành viên:</span>
                                                được tính bằng cách lấy tỷ lệ phân bổ nhân (x) với mức phí thành viên.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#denghiquytac4" aria-expanded="true" aria-controls="collapseOne">
                                            4. Phương pháp tương trợ (phân bổ)
                                        </button>
                                    </div>
                                    <div id="denghiquytac4" class="accordion-collapse collapse" data-bs-parent="#ci-denghiquytac">
                                        <div class="accordion-body">
                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium d-block"><i class="far fa-circle-1 sub-color2 me-2"></i>Tương trợ cho 1 sự kiện:</span>

                                                <span class="equa text-center d-flex align-items-center justify-content-center mb-3">
                                                    <span class="">Số tiền tương trợ mỗi sự kiện <br> của mỗi thành viên</span>
                                                    <span class="mx-5">=</span>
                                                    <span class="equa-wrap d-flex flex-column">
                                                        <span class="mb-3 pb-3" style="border-bottom: 1px solid;">Tiền hỗ trợ 1 sự kiện cụ thể</span>
                                                        <span>Tổng phí thành viên</span>
                                                    </span>
                                                    <span class="mx-5">x</span>
                                                    <span>Phí của thành viên đó.</span>
                                                </span>

                                                <i class="gray-color text-center d-block">Lưu ý: Số tiền tương trợ/phân bổ 1 sự kiện của mỗi thành viên không vượt quá 1% phí thành viên.</i>
                                            </p>

                                            <p class="ci-list mb-3 mt-4">
                                                <span class="fw-medium"><i class="far fa-circle-2 sub-color2 me-2"></i>Tương trợ cho 1 kỳ:</span>

                                                <span class="equa text-center d-flex align-items-center justify-content-center mb-3">
                                                    <span class="">Số tiền tương trợ 1 kỳ <br> của mỗi thành viên</span>
                                                    <span class="mx-5">=</span>
                                                    <span class="equa-wrap d-flex flex-column">
                                                        <span class="mb-3 pb-3" style="border-bottom: 1px solid;">Tiền hỗ trợ 1 kỳ </span>
                                                        <span>Tổng phí thành viên</span>
                                                    </span>
                                                    <span class="mx-5">x</span>
                                                    <span>Phí của thành viên đó.</span>
                                                </span>
                                            </p>

                                            <span class="fw-medium">Trong đó:</span>
                                            <br>(1) Tổng phí thành viên = Phí của tất cả thành viên tham gia.
                                            <br>(2) Tiền tuơng trợ 1 sự kiện: Là số tiền trợ giúp thành viên của 1 sự kiện được công khai và không bị phản đối (khi đủ thành viên thì chính là Mức tương trợ 1 sự kiện)
                                            <br>(3) Tiền hỗ trợ 1 kỳ: Là tổng số tiền tương trợ của nhiều sự kiện thực hiện trong 1 kỳ đã được công khai và không bị phản đối
                                            <br>(4) Phí thành viên: Là mức phí do 1 thành viên đóng trong 1 năm. Phí này là tạm tính, nếu thừa sẽ được tính cho năm sau, nếu thiếu sẽ thu bổ sung. Phí chưa sử dụng trong tài khoản vẫn là tiền của thành viên.
                                            <br>(5) Trường hợp chương trình được nhà nước hoặc các mạnh thường quân, các tổ chức nước ngoài ủng hộ sẽ:
                                            <br>+ Sử dụng theo yêu cầu hỗ trợ của Nhà nước, MTQ
                                            <br>+ Phân bổ cho từng tài khoản (theo cách như tỷ lệ phân bổ: lấy tổng số tiền hỗ trợ chia cho tổng phí rồi nhân với phí thành viên)
                                            <br>+ Hỗ trợ các trường hợp không được nhận tương trợ.
                                            <br>(6) Phí phân bổ (1 sự kiện/1kỳ): Là số tiền tương trợ thành viên bị bệnh hiểm nghèo, bị tai nạn nghiêm trọng cho 1 sự kiện hay 1 kỳ, đã được công khai và không bị phản đối. Trường hợp bị phản đối thì đã được Bồi thẩm đoàn (Hội đồng các thành viên độc lập) xem xét thông qua.
                                            <br>(7) Mỗi thành viên tương trợ, đóng góp không quá 1% phí thành viên cho một thành viên bị ốm.


                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block pb-0" id="topic-11">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-shield-slash text-danger op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Rút khỏi kế hoạch </h2>
                        </div>

                        <div class="ci-faq ci-faq2">
                            <div id="ci-rutkhoi" class="accordion">
                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#rutkhoi0" aria-expanded="true">
                                            Các thành viên tự nguyện rút khỏi kế hoạch
                                        </button>
                                    </div>
                                    <div id="rutkhoi0" class="accordion-collapse collapse" data-bs-parent="#ci-rutkhoi">
                                        <div class="accordion-body">
                                            Thành viên có thể xin rút khỏi chương trình bất cứ lúc nào và nhận lại phí đã đóng mà không tính lãi sau khi trừ đi phí quản lý, phí đã chia sẻ và/hoặc chấp nhận chia sẻ đến thời điểm hoàn thành việc rút khỏi chương trình.
                                            Sau khi một thành viên rút khỏi chương trình và đáp ứng các điều kiện để tham gia lại chương trình, thời gian chờ được tính lại.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#rutkhoi2" aria-expanded="true">
                                            Kế hoạch thoát tự động
                                        </button>
                                    </div>
                                    <div id="rutkhoi2" class="accordion-collapse collapse" data-bs-parent="#ci-rutkhoi">
                                        <div class="accordion-body">
                                            Thành viên sẽ rút khỏi chương trình khi xảy ra một trong các trường hợp sau:
                                            <span class="d-block my-3 ms-4">(1) Những người đã đủ 65 tuổi;</span>
                                            <span class="d-block my-3 ms-4">(2) Những người đã nhận được quỹ Trợ giúp lẫn nhau của kế hoạch này;</span>
                                            <span class="d-block my-3 ms-4">(3) Được xác minh rằng họ không đáp ứng các điều kiện tham gia;</span>
                                            <span class="d-block my-3 ms-4">(4) Không đóng phí thành viên và phí quản lý như đã thỏa thuận;</span>
                                            <span class="d-block my-3 ms-4">(5) Các yếu tố chính sách hoặc bất khả kháng khiến kế hoạch không thể tồn tại;</span>
                                            <span class="d-block my-3 ms-4">(6) Được xác minh rằng khi tham gia chương trình này, họ không đáp ứng các yêu cầu về sức khỏe,
                                                hoặc mắc bệnh hiểm nghèo theo quy định trong kế hoạch trợ giúp lẫn nhau này;</span>
                                            <span class="d-block my-3 ms-4">(7) Kế hoạch viện trợ lẫn nhau cần được chấm dứt theo điều khoản này;</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header">
                                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#rutkhoi3" aria-expanded="true">
                                            Tác động của việc thoát khỏi kế hoạch viện trợ lẫn nhau
                                        </button>
                                    </div>
                                    <div id="rutkhoi3" class="accordion-collapse collapse" data-bs-parent="#ci-rutkhoi">
                                        <div class="accordion-body">
                                            Thành viên sẽ rút khỏi chương trình khi xảy ra một trong các trường hợp sau:
                                            <span class="d-block my-3 ms-4">(1) Nếu thành viên rút lui, bảo đảm tương trợ sẽ bị chấm dứt;</span>
                                            <span class="d-block my-3 ms-4">(2) Tại thời điểm rút lui, số tiền đã phân bổ tương ứng với từng thời kỳ và các trường hợp đã phê duyệt và công khai, thành viên vẫn có trách nhiệm tương trợ;</span>
                                            <span class="d-block my-3 ms-4">(3) Thời gian chờ sẽ được áp dụng nếu tham gia lại;</span>
                                            <span class="d-block my-3 ms-4"> (4) Các thành viên đã nộp đơn xin trợ giúp lẫn nhau thành công và rút lui, khi tham gia lại kế hoạch, chỉ tham gia vào
                                                việc phân bổ các khoản viện trợ lẫn nhau mà không còn quyền được nhận hỗ trợ lẫn nhau.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ci-block" id="topic-12">
                <div class="container">
                    <div class="position-relative">
                        <dic class="ci-icon">
                            <i class="fad fa-quote-left text-info op10"></i>
                        </dic>
                        <div class="ci-heading mb-3 mb-md-5">
                            <h2 class="ci-heading__main">Các vấn đề khác cần chú ý</h2>
                        </div>
                        <div class="ci-faq ci-faq2">
                            <div id="ci-vandekhac" class="accordion">
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac0" aria-expanded="true">
                                                    Tuổi tham gia chương trình
                                                </button>
                                            </div>
                                            <div id="vandekhac0" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">

                                                    <p class="ci-list mb-3 mt-4">
                                                        <span class="fw-medium d-block"><i class="far fa-circle-1 sub-color2 me-2"></i>Tuổi tham gia</span>
                                                        <span class="d-block ms-4">
                                                            Độ tuổi tham gia chương trình này là từ 30 ngày tuổi sau khi sinh đến 65 tuổi,
                                                            nhưng chỉ những người đã là thành viên trước 60 tuổi mới được tham gia tiếp cho đến 65 tuổi.
                                                            Tuổi tham gia kế hoạch là tuổi của thành viên tại thời điểm tham gia kế hoạch.
                                                        </span>
                                                    </p>
                                                    <p class="ci-list mb-3 mt-4">
                                                        <span class="fw-medium d-block"><i class="far fa-circle-2 sub-color2 me-2"></i>Cách tính tuổi</span>
                                                        <span class="d-block ms-4">
                                                            Đề cập đến độ tuổi được tính dựa trên ngày sinh được ghi trong Giấy khai sinh, thẻ căn cước hợp lệ.
                                                            Sau 30 ngày kể từ ngày sinh được tính là 1 tuổi và cứ sau mỗi sinh nhật thì tăng lên một tuổi.
                                                        </span>
                                                    </p>

                                                    <p class="ci-list mb-3 mt-4">
                                                        <span class="fw-medium d-block"><i class="far fa-circle-3 sub-color2 me-2"></i>Độ tuổi thành viên</span>
                                                        <span class="d-block ms-4">
                                                            + Từ 30 ngày tuổi trở lên được tính là 01 tuổi.
                                                        </span>
                                                        <span class="d-block ms-4">
                                                            + Trường hợp ngày tham gia thành viên (chính thức) chưa đến ngày sinh nhật thì tuổi của thành viên tính bằng năm hiện tại trừ (-) năm sinh.
                                                        </span>
                                                        <span class="d-block ms-4">
                                                            + Trường hợp ngày tham gia thành viên (chính thức) đã qua ngày sinh nhật thì tuổi của thành viên tính bằng Năm hiện tại trừ (-) năm sinh cộng một (+1).
                                                        </span>
                                                        <span class="d-block ms-4">
                                                            + Phần mềm và máy tính sẽ giúp thành viên tính được tuổi chính xác khi tham giam chương trình.
                                                        </span>
                                                        <i class="gray-color d-block ms-4">Ví dụ: Cháu A sinh ngày 1.6.2021. Cháu được bố mẹ đăng ký cho tham gia trở thành thành viên của Ô Xanh vào ngày 15.7.2021. Tính đến và kể cả ngày 15.7.2021 thì cháu A được 45 ngày, cháu được tính là 1 tuổi. Sau sinh nhật 1.6.2022, cháu A được tính thêm 1 tuổi là 2 tuổi.
                                                            Chị B sinh ngày 30.4.1976, Chị trở thành thành viên vào ngày 15.7.2021. Như vậy Chị B được tính là 46 tuổi.
                                                        </i>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac1" aria-expanded="true">
                                                    Thành phần thỏa thuận
                                                </button>
                                            </div>
                                            <div id="vandekhac1" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">
                                                    Kế hoạch này bao gồm quy ước, điều khoản kế hoạch viện trợ lẫn nhau, yêu cầu về sức khỏe,
                                                    quy tắc thành viên và các tài liệu khác liên quan đến kế hoạch này được đăng tải chi tiết trên Web/App mà thành viên đã đọc, hiểu và chấp thuận.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac2" aria-expanded="true">
                                                    Điều kiện tham gia
                                                </button>
                                            </div>
                                            <div id="vandekhac2" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">
                                                    Các thành viên phải cam kết rằng sức khỏe thể chất của họ đáp ứng các yêu cầu về sức khỏe và các điều kiện tiếp cận toàn diện khác của chương trình, và họ có thể đăng ký tham gia chương trình.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac3" aria-expanded="true">
                                                    Phạm vi thành viên
                                                </button>
                                            </div>
                                            <div id="vandekhac3" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">
                                                    Bạn có thể đăng ký tham gia chương trình này cho chính mình, vợ/chồng, cha mẹ, con cái và bạn bè, với tư cách là người trả tiền, thực hiện nghĩa vụ tương trợ và phân bổ.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac4" aria-expanded="true">
                                                    Lỗi độ tuổi
                                                </button>
                                            </div>
                                            <div id="vandekhac4" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">
                                                    <p class="mb-3">
                                                        Khi bạn đăng ký tham gia chương trình cho chính mình hoặc vợ/chồng, cha mẹ hoặc con cái của bạn,
                                                        bạn nên cung cấp ngày sinh khớp với ID hợp lệ (CMT, Hộ chiếu, CCCD). Nếu có sai sót, hãy làm theo các bước bên dưới:
                                                    </p>
                                                    <p class="mb-3">
                                                        <span class="fw-medium"><i class="far fa-circle-1 sub-color2 me-2"></i></span>
                                                        Tuổi công bố của người đó hoặc các thành viên khác không đúng sự thật, và nếu tuổi thật của thành viên có sự cố cần trợ giúp
                                                        lẫn nhau xảy ra không đáp ứng giới hạn độ tuổi tham gia chương trình, chúng tôi có quyền chấm dứt tư cách thành viên.
                                                        Đối với các sự cố trợ giúp lẫn nhau xảy ra trước khi chấm dứt tư cách, sự trợ giúp lẫn nhau cũng vẫn sẽ không được áp dụng.
                                                    </p>
                                                    <p class="mb-0">
                                                        <span class="fw-medium"><i class="far fa-circle-2 sub-color2 me-2"></i></span>
                                                        Nếu tuổi khai báo của người đó hoặc các thành viên khác không đúng (không cố ý, chỉ là nhầm lẫn),
                                                        nhưng tuổi thật của họ đáp ứng giới hạn tuổi tham gia kế hoạch tại thời điểm xảy ra sự kiện tương trợ,
                                                        họ sẽ nộp đơn xin tương trợ theo mức độ tương trợ và đóng phí tương ứng với tuổi thật của thành viên khi xin hỗ trợ lẫn nhau.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#vandekhac5" aria-expanded="true">
                                                    Xử lý tranh chấp
                                                </button>
                                            </div>
                                            <div id="vandekhac5" class="accordion-collapse collapse" data-bs-parent="#ci-vandekhac">
                                                <div class="accordion-body">
                                                    <p class="mb-3"> Việc ký kết, hiệu lực, giải thích và thực hiện kế hoạch này và giải quyết tranh chấp sẽ được điều chỉnh bởi luật pháp của Cộng hòa Xã hội Chủ nghĩa Việt Nam.</p>
                                                    <p class="mb-3">Trong quá trình thực hiện kế hoạch này, các tranh chấp có liên quan trước tiên sẽ được giải quyết thông qua thương lượng, hòa giải; </p>
                                                    nếu thương lượng không thành công thì sẽ khởi kiện ra tòa án nhân dân nơi ký, phát hành điều khoản này theo quy định của pháp luật.</p>
                                                    <p class="mb-0">Nơi ký, phát hành điều khoản này: Quận Cầu Giấy, thành phố Hà Nội.</p>
                                                </div>
                                            </div>
                                        </div>
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