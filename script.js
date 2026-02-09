 function openForm() {
    document.getElementById("formOverlay").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("formOverlay").style.display = "none";
  }

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();

    // Indian mobile number validation (starts with 6-9 & 10 digits)
    const mobilePattern = /^[6-9]\d{9}$/;

    if (name === "") {
      alert("Please enter your name");
      return false;
    }

    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return false;
    }

    if (email === "") {
      alert("Please enter your email");
      return false;
    }

    if (city === "") {
      alert("Please enter your city");
      return false;
    }

    // SUCCESS (backend later)
    alert("Registration submitted successfully!");
    closeForm();

    return false; // remove when backend/API added
  }


