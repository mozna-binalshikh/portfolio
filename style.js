 function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    const sections = ["accommodation", "tourism", "hajj"];
    sections.forEach(id => {
      document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
    });
  }
  
  function goHome() {
    document.getElementById("home").style.display = "block";
    const sections = ["accommodation", "tourism", "hajj"];
    sections.forEach(id => {
      document.getElementById(id).style.display = "none";
    });
  }
  
  function sendMessage(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
  }
  
  function confirmBooking(event) {
    event.preventDefault();
    alert("تم تأكيد الحجز! سنتواصل معك قريبًا.");
  }
  
  function calculateTotal(section) {
    let persons = parseInt(document.getElementById(section + "Persons")?.value) || 0;
    let price = 0;
  
    if (section === "accommodation") price = 150;
    else if (section === "tourism") price = 300;
    else if (section === "hajj") {
      const select = document.getElementById("hajjOption");
      price = parseInt(select.value) || 0;
    }
  
    document.getElementById(section + "Total").textContent = persons * price;
  }
  
  function makePayment(section) {
    const total = document.getElementById(section + "Total").textContent;
    if (parseInt(total) > 0) {
      alert("تم الدفع بنجاح! المبلغ المدفوع: " + total + " ريال.");
    } else {
      alert("الرجاء إدخال عدد الأشخاص واختيار الخدمة أولاً.");
    }
  }