document.addEventListener("DOMContentLoaded", function () {
  // Your WhatsApp number
  var whatsappNumber = "9966500254"; // Replace with your WhatsApp number

  // Function to open WhatsApp chat
  function openWhatsApp() {
    var message = "Hello, I'd like to chat."; // Default message
    var whatsappUrl =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);
    window.open(whatsappUrl, "_blank");
  }

  // Attach click event listener to the anchor tag
  var whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    openWhatsApp();
  });
});
