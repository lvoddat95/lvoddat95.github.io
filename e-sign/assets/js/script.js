const canvas = document.getElementById("signature");
var $output = $('input[name="signature"]');

const signaturePad = new SignaturePad(canvas);


// Xoá
$('#clear-signature').on('click', function () {
	signaturePad.clear();
	$output.val("");
	$('.e-sign-button').removeClass('show').addClass('hide');
	$('.e-sign-temp').removeClass('hide').addClass('show');
});

// Sự kiện vẽ vời
signaturePad.addEventListener("afterUpdateStroke", () => {
	if (!signaturePad.isEmpty()) {
		$('.e-sign-button').addClass('show');
		$('.e-sign-temp').removeClass('show').addClass('hide');
	} else {
		$('.e-sign-button').addClass('hide');
		$('.e-sign-temp').addClass('show');
	}
	// Lưu hidden
	$output.val(signaturePad.toDataURL());
	// console.log(signaturePad.toDataURL());
});