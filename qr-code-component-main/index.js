var qr;
(function () {
  qr = new QRious({
    element: document.getElementById("qr-code"),
    size: 400,
    value: "Scan Me",
  });
})();

function generateQRCode() {
  var qrtext = document.getElementById("input").value;
  alert(qrtext);
  qr.set({
    foreground: "black",
    size: 400,
    value: qrtext,
  });
}
