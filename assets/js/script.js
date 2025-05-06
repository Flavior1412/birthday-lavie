document.getElementById("birthday-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const attending = document.querySelector('input[name="attending"]:checked')?.value || "";
    const message = document.getElementById("message").value;

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("attending", attending);
    formData.append("message", message);

    fetch('https://script.google.com/macros/s/AKfycbyOeBLd95t0csjYrHsD4LZyOKaJjbWUO79VHQtM7Hn_dADU5G89SSbnsk9IhMtIYOOC/exec', {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Gửi thành công! Cảm ơn bạn 🎉");
          document.getElementById("birthday-form").reset();
        } else {
          alert("Gửi không thành công. Vui lòng thử lại!");
        }
      })
      .catch((error) => {
        alert("Lỗi kết nối!");
        console.error("Error:", error);
      });
  });