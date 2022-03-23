<?php

date_default_timezone_set('Asia/Ho_Chi_Minh');
// Kết nối CSDL và lưu vào biến kết nối
// Các tham số gồm:
// - localhost: là tên server, thường mặc định là localhost luôn
// - root: là tên đăng nhập vào database
// - pass: là mật khẩu đăng nhập vào database
// - db: Là database sẽ xử lý

$host = "localhost";
$user = "root";
$pass = "";
$db = "b52";
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'UTF8');

if (!$conn) {
	echo "Kết nối không thành công!";
	die;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = isset($_POST['p_name']) ? $_POST['p_name'] : '';
	$value = isset($_POST['p_value']) ? $_POST['p_value'] : '';
	$ratio = isset($_POST['p_ratio']) ? $_POST['p_ratio'] : '';
	$boom = isset($_POST['p_boom']) ? $_POST['p_boom'] : '';

	$today = date('d/m/Y H:i:s');

	// Câu truy vấn
	$sql = "INSERT INTO t_record (c_id, c_name, c_value, c_ratio, c_boom, c_datetime) VALUES ('', '$name', '$value', '$ratio', '$boom', '$today')";
	// echo $sql;
	if (mysqli_query($conn, $sql)) {
		echo 'Cập nhật thành công';
	} else {
		echo 'Lỗi cập nhập!';
	}
}

// Ngắt kết nối
mysqli_close($conn);
exit();
