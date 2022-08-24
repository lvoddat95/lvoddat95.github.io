<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php
?>

<body>
    <div id="ci-content" class="ci-content">
        <div>
            <div class="auth-page-register auth-page-style2">

                <div class="d-block d-lg-flex">
                    <div class="w-50 auth-style2-wrapper">
                        <div class="auth-content d-flex flex-column justify-content-center my-3 my-lg-5">
                            <div>
                                <div class="text-center">
                                    <a href="<?php echo HTTP_PATH; ?>">
                                        <img class="img-fluid" src="<?php echo SOURCE; ?>assets/img/logo2.png" alt="Logo" width="180px">
                                    </a>
                                </div>
                                <div class="text-center mt-2 mb-5">
                                    <h3 class="auth-title">Chính sách và Quy định</h3>
                                </div>
                                <form action="dong-y-chinh-sach2.php">
                                    <p>Cảm ơn Bạn đã đăng ký là thành viên của website. Chúng tôi gửi cho bạn thông tin
                                        kích hoạt
                                        tài khoản vào đỉa chỉ email <a href="mailto:abc@gmail.com">abc.xyz@gmail.com</a>. Bạn hãy kiểm tra hộp thư
                                        đến
                                        để thực hiện
                                        kích hoạt tài khoản!</p>

                                    <div class="mb-4">
                                        <label class="checkcontainer" for="c_check_agree">
                                            <input id="c_check_agree" type="checkbox" checked="checked">
                                            <span class="checkmark" style="top: 3px;"></span>

                                            <div>
                                                Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng
                                                cách
                                                đăng nhập hoặc đăng ký, bạn đồng ý với <a href="javascript:;">Chính sách
                                                    quy đính của Công ty Công nghệ bảo hiểm Hạt Thóc Vàng </a>
                                            </div>
                                        </label>
                                    </div>

                                    <div class="mb-4">
                                        <label class="checkcontainer" for="c_check_agree2">
                                            <input id="c_check_agree2" type="checkbox" checked="checked">
                                            <span class="checkmark" style="top: 3px;"></span>

                                            <div>
                                                Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng
                                                cách
                                                đăng nhập hoặc đăng ký, bạn đồng ý với <a href="javascript:;">Chính sách
                                                    quy đính của Công ty Công nghệ bảo hiểm Hạt Thóc Vàng </a>
                                            </div>
                                        </label>
                                    </div>

                                    <div class="mb-4">
                                        <label class="checkcontainer" for="c_check_agree3">
                                            <input id="c_check_agree3" type="checkbox" checked="checked">
                                            <span class="checkmark" style="top: 3px;"></span>

                                            <div>
                                                Vào từng thời điểm, chúng tôi sẽ cung cấp thông tin về các vấn đề liên
                                                quan đến bảo mật mà chúng tôi cho rằng bạn nên biết.
                                                Các cập nhật về bảo mật sẽ được trình bày trên trang này.
                                            </div>
                                        </label>
                                    </div>

                                    <div class="mt-5 auth-btn-agree d-flex justify-content-center">
                                        <a href="" class="btn ci-btn ci-btn-outline w-50 mx-2 mx-lg-4" type="submit">Không đồng ý</a>
                                        <a href="javascript:;" onclick="AlertMessage('#dialog-content','<?php echo SOURCE; ?>')" class="btn ci-btn ci-bg-sub-color w-50 mx-2 mx-lg-4" type="submit">Đồng
                                            ý</a>
                                    </div>



                                </form>
                            </div>
                        </div>
                        <div class="auth-footer">
                            <div class="container-fluid">
                                <div class="d-block d-xl-flex align-items-center justify-content-between flex-column">
                                    <ul class="auth-footer-link list-unstyled my-4 my-xl-0">
                                        <li>
                                            <a href="">
                                                <i class="fal fa-headset fz-18 me-3"></i>
                                                <span>Liên hệ hỗ trợ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-circle-question fz-18 me-3"></i>
                                                <span>Câu hỏi thường gặp</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-user-shield fz-18 me-3"></i>
                                                <span>Miễn trừ trách nhiệm</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fal fa-shield-check fz-18 me-3"></i>
                                                <span>Chính sách bảo mật</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="mb-0 mt-2">© 2022 Bản quyền thuộc về Công ty Công nghệ bảo hiểm Hạt Thóc Vàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-50 position-relative d-none d-lg-block">
                        <div class="bg-overlay"></div>
                        <img class="auth-img img-fluid" src="<?php echo SOURCE; ?>assets/img/register3.jpg" alt="Login">
                    </div>
                </div>




            </div>
        </div>

    </div>
</body>

<?php include_once POPUP; ?>
<?php include_once SCRIPTS; ?>