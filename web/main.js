function generateQRCode() {
	var data = document.getElementById("data").value
	eel.dummy("Dummy_param")(function(ret){console.log(ret)})
	eel.generate_qr(data)(setImage)
}

function setImage(base64) {
	document.getElementById("qr").src = base64
}