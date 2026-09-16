document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var menu = document.querySelector("nav.main ul");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  var form = document.querySelector("form.contact");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lines = [
        "Name: " + f.get("first_name") + " " + f.get("last_name"),
        "Company: " + (f.get("company") || "-"),
        "Phone: " + (f.get("phone") || "-"),
        "Address: " + (f.get("address") || "-"),
        "",
        f.get("message") || ""
      ];
      var subject = "Quote Request from " + f.get("first_name") + " " + f.get("last_name");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:sales@redwoodsignalco.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
    });
  }
});
