<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap.min.css">

    <title>Hello, world!</title>
</head>

<body>
    <!-- Optional JavaScript -->
    <script src="jquery-3.5.1.min.js"></script>
    <script src="popper.min.js"></script>
    <script src="bootstrap.min.js"></script>

    <form action="post.php" target="_blank">
        <div class="container">
            <div class="row mt-4">
                <div class="offset-md-4 col-md-4">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td id="cell"><b>jpV</b></td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style="width: 120px;">$</span>
                                        </div>
                                        <input type="text" name="" id="divjpV" class="form-control input-money text-right">
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td><b>B</b> - T <span id="cellTai"></span></td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="divTaiSl" style="width: 60px;"></span>
                                            <span class="input-group-text" id="divTaiPt" style="width: 60px;"></span>
                                        </div>
                                        <input type="text" name="" id="divTai" class="form-control input-money text-right" readonly>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>S</b> - X <span id="cellXiu"></span>
                                </td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="divXiuSl" style="width: 60px;"></span>
                                            <span class="input-group-text" id="divXiuPt" style="width: 60px;"></span>
                                        </div>
                                        <input type="text" name="" id="divXiu" class="form-control input-money text-right" readonly>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="divSumSl" style="width: 60px;"></span>
                                            <span class="input-group-text" id="divSumPt" style="width: 60px;"></span>
                                        </div>
                                        <input type="text" name="" id="divSum" class="form-control input-money text-right" readonly>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <code id="kq"></code>
                </div>
            </div>
        </div>
    </form>
    <script src="https://nosir.github.io/cleave.js/dist/cleave.min.js"></script>
    <script src="script.js"></script>
</body>

</html>