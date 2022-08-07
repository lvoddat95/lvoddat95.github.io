 <!-- Back to top with progress indicator-->
 <a class="prgoress_indicator" href="javascript:void(0);" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
    <!-- <i class="fal fa-circle-chevron-up"></i> -->
 </a>

 <!-- Load JS -->
 <script src="<?php echo SOURCE; ?>utils/jquery/dist/jquery.min.js"></script>

 <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
 <script src="<?php echo SOURCE; ?>utils/jquery-ui/ui/i18n/datepicker-vi.js"></script>

 <script src="<?php echo SOURCE; ?>utils/bootstrap/dist/js/bootstrap.bundle.js"></script>
 <script src="<?php echo SOURCE; ?>utils/slick-carousel/slick/slick.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/owl.carousel/dist/owl.carousel.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/sweetalert2/dist/sweetalert2.all.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/@fancyapps/fancybox/dist/jquery.fancybox.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/hc-offcanvas-nav/dist/hc-offcanvas-nav.js"></script>
 <script src="<?php echo SOURCE; ?>utils/select2/dist/js/select2.full.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/select2/dist/js/i18n/vi.js"></script>
 <script src="<?php echo SOURCE; ?>utils/datatables/datatables.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/datatables/dataTables.bootstrap5.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/cleave.js/dist/cleave.min.js"></script>
 <script src="<?php echo SOURCE; ?>utils/jquery-validation/dist/jquery.validate.min.js"></script>

 <!-- Page Script  -->
 <?php
    if (isset($GLOBALS["pScript"])) {
        $list_cript = $GLOBALS["pScript"];
        $arr_cript =  explode(";", $list_cript);

        if (!empty($arr_cript)) {
            foreach ($arr_cript as $item) {
                echo '<script src="' . SOURCE . $item . '"></script>';
            }
        }
    }
    ?>
 <!-- End Page Script  -->

 <script src="<?php echo SOURCE; ?>assets/js/app.js"></script>
 <script src="<?php echo SOURCE; ?>assets/js/script.js"></script>

 </html>