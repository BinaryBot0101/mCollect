function openSecondPage() {
  // Logic to open the second page goes here
  window.location.href = 'src/dashboard.html';
  console.log("Opening dashboard...");
}

var continueBtn = document.getElementById('submit-btn');
continueBtn.addEventListener('click', openSecondPage);