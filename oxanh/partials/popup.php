<!--Custom Template SweatAlert-->
<template id="alert-message-template">
    <swal-title></swal-title>
    <swal-html>Nội dung</swal-html>
    <swal-button type="confirm" class="ci-button">
        Đồng ý
    </swal-button>
    <swal-button type="cancel">
        Huỷ
    </swal-button>
    <swal-button type="deny">
        Không đồng ý
    </swal-button>
    <swal-param name="allowEscapeKey" value="false" />
    <swal-param name="customClass" value='{ "popup": "my-popup" }' />
</template>
<!--END - Custom Template SweatAlert-->

<!--Dialog Đồng ý-->
<div id="dialog-content" class="d-none">
    <div>
        Cảm ơn Bạn đã đăng kí là thành viên của <b>Ô Xanh</b>.
        Chúng tôi đã gửi bạn thông tin kích hoạt tài khoản vào địa chỉ email
        <a href="mailto:abc@gmail.com">abc.xyz@gmail.com</a>. Bạn hãy kiểm tra hộp
        thư
        đến
        để thực hiện
        kích hoạt tài khoản!</p>
    </div>
</div>
<!--END - Dialog Đồng ý-->


<!-- Modal Tôi đồng ý -->
<div id="toi-dong-y" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Tôi đồng ý
        </div>
    </div>
    <div class="fancybox-body">
        <div class="mb-4">
            <label class="checkcontainer" for="ckb1">
                <input id="ckb1" type="checkbox" checked="checked" disabled>
                <span class="checkmark" style="top: 3px;"></span>
                <div>
                    Tôi là công dẫn Việt Nam, đang sinh sống tại Việt Nam.
                </div>
            </label>
        </div>
        <div class="mb-4">
            <label class="checkcontainer" for="ckb2">
                <input id="ckb2" type="checkbox" checked="checked" disabled>
                <span class="checkmark" style="top: 3px;"></span>
                <div>
                    Tôi là Bên mua bảo hiểm, Người được bảo hiểm và cũng là người sở hữu thẻ/tài khoản dùng
                    để đóng phí cho hợp đồng bảo hiểm này.
                </div>
            </label>
        </div>
        <div class="mb-4">
            <label class="checkcontainer" for="ckb3">
                <input id="ckb3" type="checkbox" checked="checked" disabled>
                <span class="checkmark" style="top: 3px;"></span>
                <div>
                    Tôi hiểm rằng Ô Xanh có thể xem xét lại việc phát hành/duy trì hiệu lực Hợp đồng
                    bảo hiểm này nếu các thông tin kê khai là thông tin chính xác.
                </div>
            </label>
        </div>
        <div>
            <label class="checkcontainer mb-0" for="ckb4">
                <input id="ckb4" type="checkbox" checked="checked" disabled>
                <span class="checkmark" style="top: 3px;"></span>
                <div>
                    Tôi đồng ý tham gia bảo hiểm qua giao dịch điện tử với Công ty Công nghệ bảo hiểm Hạt Thóc Vàng,
                    đã đọc hiểu và đồng ý với <a href="javascript:;">Điều khoản sử dụng Ô Xanh</a>,
                    <a href="javascript:;">Điều khoản bảo mật của Ô Xanh</a> và
                    <a href="javascript:;">Quy tắc, điều khoản của sản phẩm Ô Xanh</a> Bảo hiểm bệnh ung thư.
                </div>
            </label>
        </div>
    </div>
    <div class="fancybox-footer">
        <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn ci-btn ci-btn-200 ci-btn-outline mx-2 mx-lg-4" data-fancybox-close>Không</a>
            <a href="javascript:;" class="btn ci-btn ci-btn-200 ci-bg-sub-color mx-2 mx-lg-4" onclick="fancybox_new_modal('#thong-tin-suc-khoe')">Xác nhận</a>
        </div>
    </div>
</div>
<!--End - Modal Tôi đồng ý -->

<!-- Modal Thông tin sức khoẻ -->
<div id="thong-tin-suc-khoe" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Thông tin sức khoẻ
        </div>
    </div>
    <div class="fancybox-body">
        <div class="mb-4 fw-medium">
            Bạn có bao giờ được chẩn đoán hoặc điều trị một trong các trường hợp sau đây:
        </div>
        <div class="mb-4">
            1. Bạn có đang trong quá trình khám để chẩn đoán bệnh; hoặc đang chờ phẫu thuật; hoặc đang chờ
            kết quả xét nghiệm y khoa, cận lâm sàng, giải phẫu bệnh hoặc sinh thiết; hoặc đã có kết quả
            bất thường của các xét nghiệm dấu ấn ung thư CEA, CA-125, AFP, PSA?
        </div>
        <div class="mb-4">
            2. Trong 3 tháng vừa qua, bạn có bao giờ bị một trong các dấu hiệu hoặc triệu chứng sau: đau dai dẳng
            mới xuất hiệu; hoặc mệt mỏi kéo dài hơn 7 ngày; hoặc sụt cân hơn 5kg; hoặc bị sưng hay thay đổi
            kích thước của vú (đối với nữ); hoặc có máu trong nước tiểu, máu trong phân, máu trong đàm; hoặc
            thay đổi thói quen đi đại tiện như tiêu chảy kéo dài, táo bón xen kẽ tiêu chảy, phân mỏng dẹp.
        </div>
        <div>
            3. Bạn có bao giờ được chẩn đoán hoặc điều trị viêm gan siêu vi B, hoặc viêm gan siêu vi C,
            bướu tuyến giáp, HIV/AIDS, ung thư, u, bướu, nang, pô-líp (polyp), hạch hoặc bất kỳ khối
            u nào khác?
        </div>
    </div>
    <div class="fancybox-footer">
        <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn ci-btn ci-btn-200 ci-btn-outline mx-2 mx-lg-4" onclick="fancybox_new_modal('#khong-dong-y')">Có</a>
            <a href="<?php echo HTTP_PATH; ?>pages/mua-bao-hiem.php" class="btn ci-btn ci-btn-200 ci-bg-sub-color mx-2 mx-lg-4">Không</a>
        </div>
    </div>
</div>
<!--End - Modal Thông tin sức khoẻ-->

<!-- Modal Thông tin sức khoẻ -->
<div id="khong-dong-y" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-body">
        <div>
            <span class="fw-medium"> Cảm ơn bạn đã chọn tham gia Bảo hiểm ung thư </span><br>
            Với thông tin bạn đã cung cấp, chúng tôi rất tiếc chưa thể chấp nhận Hồ sơ yêu cầu
            bảo hiểm tại thời điểm hiện tại. <br>
            Bạn có thể liên hệ Công ty Công nghệ bảo hiểm Hạt Thóc Vàng qua website hoặc Tổng đài
            <span class="fw-medium"><a href="tel:19001234">19001234</a></span> (miễn phí)
            để được tư vấn thêm.
        </div>
    </div>
    <div class="fancybox-footer">
        <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn ci-btn ci-btn-200 ci-bg-sub-color mx-2 mx-lg-4" data-fancybox-close>Đóng</a>
        </div>
    </div>
</div>
<!--End - Modal Thông tin sức khoẻ-->


<!-- Modal Upload Files -->
<div id="upload-files" class="fancybox-modal fancybox-content-lg">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            <i class="fa-solid fa-arrow-up-from-bracket fa-fw main-color"></i>Tải lên giấy yêu cầu tương trợ
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        <table class="table overflow-hidden" width="100%">
            <tbody>
                <tr>
                    <td width="80%">
                        <div class="fw-medium"><i class="far fa-circle-1 sub-color2 me-2"></i> Tải lên giấy đề nghị tương trợ</div>
                        <div class="input-list-files"></div>
                    </td>
                    <td width="20%" class="text-end">
                        <div class="input-file-container">
                            <input id="fileupload1" class="input-file" name="files" type="file" multiple="">
                            <label for="fileupload1" class="input-file-trigger"><i class="fas fa-upload me-2"></i>Tải lên</label>
                        </div>
                    </td>
                </tr>


                <tr>
                    <td width="80%">
                        <div class="fw-medium"><i class="far fa-circle-2 sub-color2 me-2"></i> Tải lên giấy ủy quyền trích sao tóm tắt bệnh án/Hồ sơ bệnh án</div>
                        <div class="input-list-files"></div>
                    </td>
                    <td width="20%" class="text-end">
                        <div class="input-file-container">
                            <input id="fileupload2" class="input-file" name="files" type="file" multiple="">
                            <label for="fileupload2" class="input-file-trigger"><i class="fas fa-upload me-2"></i>Tải lên</label>
                        </div>
                    </td>
                </tr>


                <tr>
                    <td width="80%">
                        <div class="fw-medium"><i class="far fa-circle-3 sub-color2 me-2"></i> Tải lên giấy ủy quyền yêu cầu tương trợ (khi người yêu cầu không phải là người bị bệnh hiểm nghèo)</div>
                        <div class="input-list-files"></div>
                    </td>
                    <td width="20%" class="text-end">
                        <div class="input-file-container">
                            <input id="fileupload3" class="input-file" name="files" type="file" multiple="">
                            <label for="fileupload3" class="input-file-trigger"><i class="fas fa-upload me-2"></i>Tải lên</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <p>2. Tải lên giấy ủy quyền trích sao tóm tắt bệnh án/Hồ sơ bệnh án</p>
        <p>3. Tải lên giấy ủy quyền yêu cầu tương trợ (khi người yêu cầu không phải là người bị bệnh hiểm nghèo)</p> -->
    </div>
    <div class="fancybox-footer">
        <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn ci-btn ci-bg-sub-color mx-2 mx-lg-4">Upload danh sách files</a>
        </div>
    </div>
</div>
<!--End - Modal Tôi đồng ý -->

<!-- Bảng danh mục -->
<div id="danh-muc-benh" class="fancybox-modal fancybox-content-xl">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bảng danh mục các bệnh hiểm nghèo
        </div>
    </div>
    <div class="fancybox-body fz-16 ">

        <ul class="danh-muc-benh d-flex flex-wrap">
            <li>1. Ung thư nghiêm trọng</li>
            <li>2. Nhồi máu cơ tim cấp tính</li>
            <li>3. Đột quỵ nghiêm trọng</li>
            <li>4. Phẫu thuật bắc cầu động mạch vành</li>
            <li>5. Suy thận</li>
            <li>6. Chấn thương đầu nghiêm trọng</li>
            <li>7. Bệnh phổi giai đoạn cuối</li>
            <li>8. Suy gan giai đoạn cuối</li>
            <li>9. Thương tật toàn bộ vĩnh viễn</li>
            <li>10. Phẫu thuật động mạch chủ</li>
            <li>11. Phẫu thuật van tim</li>
            <li>12. Viêm gan tối cấp</li>
            <li>13. Bỏng nặng</li>
            <li>14. Cấy ghép cơ quan nội tạng chính/ tủy xương</li>
            <li>15. Khối u não lành tính</li>
            <li>16. Viêm não do vi-rút</li>
            <li>17. Viêm màng não do vi khuẩn</li>
            <li>18. Điếc (mất thích lực)</li>
            <li>19. Mù (mất thị lực)</li>
            <li>20. Câm (Mất khả năng ngôn ngữ, phát âm)</li>
            <li>21. Mất hai chi</li>
            <li>22. Tăng áp lực động mạch phổi nguyên phát</li>
            <li>23. Nhiễm HIV do truyền máu và nhiễm HIV do nghề nghiệp </li>
            <li>24.Thiếu máu bất sản (suy tủy xương) </li>
            <li>25.Bệnh đa xơ cứng nặng</li>
            <li>26.Loạn dưỡng cơ nặng</li>
            <li>27.Tạo hình mạch và Điều trị xâm lấn khác trên động mạch vành</li>
            <li>28.Bệnh Parkinson</li>
            <li>29.Hôn mê </li>
            <li>30.Tê liệt (mất khả năng sử dụng tay chân)</li>
            <li>31.Bệnh giai đoạn cuối </li>
            <li>32.Xơ cứng bì tiến triển</li>
            <li>33.Hội chứng Apallic (Hoại tử toàn bộ vỏ não )</li>
            <li>34.Lupus ban đỏ hệ thống có biến chứng viêm thận do lupus</li>
            <li>35.Bệnh động mạch vành nghiêm trọng khác</li>
            <li>36.Bại liệt</li>
            <li>37.Mất khả năng sống độc lập</li>
            <li>38.Bệnh nang tủy thận nặng</li>
            <li>39.Viêm tụy mãn tính tái phát nặng</li>
            <li>40. Bệnh Alzheimer/ Chứng mất trí nhớ nghiêm trọng </li>
            <li>41.Teo cơ cột sống tiến triển nặng ở trẻ.</li>
            <li>42. Viêm đa khớp dạng thấp nặng</li>
            <li>43.Hoại thư do liên cầu khuẩn tan huyết</li>
            <li>44. Bệnh rối loạn thần kinh vận động </li>
            <li>45.Bệnh cơ tim nguyên phát nặng</li>
            <li>46. Bệnh chân voi</li>
        </ul>
    </div>
</div>
<!-- End - Bảng danh mục -->




<div id="step-1" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bước 1: Đăng ký
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        Người dùng đăng ký thông tin (họ và tên, ngày tháng năm sinh và số mobile/email, tên đăng nhập, Password ..vv.
        Sau khi hoàn thành nhập thông tin, người dùng sẽ nhận được tin nhắn <span class="fw-medium">OTP/MÃ THAM GIA THÀNH VIÊN </span> gửi vào mobile/email để bổ sung bảo mật đăng nhập.
    </div>
</div>
<div id="step-2" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bước 2: Đăng nhập
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        Đăng nhập bằng tên đăng nhập (vừa khai báo), mật khẩu và mã <span class="fw-medium">OTP/MÃ THAM GIA THÀNH VIÊN </span> (gửi qua tin nhắn/email)
    </div>
</div>
<div id="step-3" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bước 3: Kê khai thông tin
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        <p class="mb-3">Vào kê khai thông tin. Nếu đáp ứng yêu cầu của nền tảng thì kích vào nút nộp hồ sơ để chụp ảnh hoặc mở files (trên máy tính/máy di động) hồ sơ khám bệnh.</p>
        <p class="mb-3">Trường hợp tại thời điểm kê khai thông tin, thành viên chưa sẵn sàng có hồ sơ khám bệnh thì bấm vào nút “nộp sau” để nộp vào thời gian chờ.</p>
    </div>
</div>
<div id="step-4" class="fancybox-modal fancybox-content-md">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bước 4: Chọn tham gia gói tương trợ
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        Chọn tham gia gói tương trợ <span class="fw-medium">(G1, G2 hay G3)</span> để nộp phí thành viên và chính thức trở thành thành viên của nền tảng vào lúc 0h00 ngày kế tiếp.
    </div>
</div>
<div id="step-5" class="fancybox-modal fancybox-content-lg">
    <div class="fancybox-header">
        <div class="fancybox-title text-center">
            Bước 5: Thanh toán (có clip hướng dẫn)
        </div>
    </div>
    <div class="fancybox-body fz-16 ">
        <p class="mb-3">Nếu chọn thanh toán qua ngân hàng app/web sẽ tự động link đến các tài khoản Ngân hàng để thanh toán luôn.</p>
        <p class="mb-3">Hoặc chủ động thanh toán ngoài bằng chuyển khoản thì nội dung thanh toán ghi đúng cú pháp là <span class="fw-medium">“thanh toán cho HỌ TÊN, MÃ THAM GIA THÀNH VIÊN”</span> của bạn.</p>
        <p class="mb-3">Bạn cũng có thể thanh toán phí thành viên bằng các loại thẻ và ví điện tử.</p>
        <p class="mb-3">Bạn cũng có thể đến các bưu cục để nhờ chuyển tiền, nhờ người khác chuyển khoản hộ, thậm chí trực tiếp đến văn phòng Ô Xanh để nộp.</p>
        <p class="mb-3">Nhưng mọi trường hợp khi thanh toán đều phải ghi rõ nội dung theo cú pháp: <span class="fw-medium">“thanh toán cho HỌ TÊN, MÃ THAM GIA THÀNH VIÊN”</span> của bạn.</p>
        <p class="mb-3">Nếu thanh toán mà bạn không ghi rõ nội dung thanh toán theo đúng cú pháp, phần mềm sẽ không nhận ra bạn đã thanh toán,
            trường hợp đó bạn cần điện thoại cho tổng đài hoặc hotline của Ô Xanh để nhờ trơ giúp.</p>

    </div>
</div>