function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const ele = document.getElementById("ele").value;
    const aadhar = document.getElementById("aadhar").value;
    
  
    // Basic validation
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (phone === "") {
      alert("Please enter your phone number.");
      return false;
    }
  
    if (ele === "") {
      alert("Please enter your electricity account number");
      return false;
    }
  
    if (aadhar === "") {
      alert("Please enter your aadhar number");
      return false;
    }
  
   
  
    // Additional validation (e.g., date range, room availability) can be added here
  
    return true;
  }
  
  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
