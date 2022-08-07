<?php require_once "../../config.php"; ?>
<?php include_once HEADER; ?>
<link rel="stylesheet" href="style.css">

<body>
    <div id="ci-content" class="ci-content">

        <?php include_once NAVBAR; ?>

        <div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/register.jpg);">
            <div class="container">
                <div class="ci-breadcrumb-inner">
                    <h1 class="ci-breadcrumb-title">Google Map</h1>
                    <div class="ci-breadcrumb-desc">
                        Nhận lại quyền lợi bảo hiểm bảo vệ toàn diện từ ICaner
                    </div>
                </div>
            </div>
        </div>

        <main>
            <div class="ci-block">
                <div class="container">
                    <div class="map-container">
                        <div class="row gx-3 gx-sm-0">
                            <div class="col-sm-4">
                                <div class="stores-container">
                                    <div class="stores-filter"></div>
                                    <div class="stores-box">
                                        <div class="stores-list"></div>
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

<script src="store-data.js"></script>
<script src="map.js"></script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARGkCQ4eW06QTQbb2nzr1sIWyFBLCustY&callback=initMap"></script>

