<?php 
// Kết nối CSDL và lưu vào biến kết nối
// Các tham số gồm:
// - localhost: là tên server, thường mặc định là localhost luôn
// - root: là tên đăng nhập vào database
// - vertrigo: là mật khẩu đăng nhập vào database
// - demo: Là database sẽ xử lý

$host = "localhost";
$user = "root";
$pass = "";
$data = "b52";
$conn = mysqli_connect($host, $user, $pass, $data);
mysqli_set_charset($conn, 'UTF8');

if($conn) {
	echo "Kết nối thành công"."<br>" ;
}


// Câu truy vấn
$sql = "INSERT INTO t_record (c_id, c_name, c_value, c_datetime) VALUES ('','t','0','2019-08-27 12:18:55')";

if (mysqli_query($conn, $sql)){
    echo 'Cập nhật thành công';
}else{
    echo 'Lỗi';
}
 
// Ngắt kết nối
mysqli_close($conn);
exit();





 ?>