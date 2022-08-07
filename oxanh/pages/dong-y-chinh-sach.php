<?php require_once "../config.php"; ?>
<?php include_once HEADER; ?>
<?php
$GLOBALS["pScript"] = "assets/js/particles.js;assets/js/particles.app.js";
?>

<body>
    <div id="ci-content" class="ci-content">

        <div class="auth-wrapper" style="background-image: url(<?php echo SOURCE; ?>assets/img/slider.png);">
            <div id="auth-particles" class="bg-overlay"></div>
            <div class="auth-page-content">
                <div class="container">

                    <div class="card my-3 my-xl-5">
                        <div class="card-body p-3 p-xl-5">
                            <div class="text-center ">
                                <a href="index.html" class="d-inline-block auth-logo">
                                    <img src="<?php echo SOURCE; ?>assets/img/logo2.png" alt="" height="50">
                                </a>
                            </div>
                            <div class="text-center mt-2 mb-5">
                                <h3 class="auth-title">Chính sách và Quy định</h3>
                            </div>


                            <div class="p-2">


                                <form action="dong-y-chinh-sach.html">
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
                    </div>

                </div>

            </div>
        </div>

    </div>


</body>
<?php include_once POPUP; ?>
<?php include_once SCRIPTS; ?>