// Delivery & Doctor search
function searchItems() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  // Delivery search
  document.querySelectorAll('.category-card').forEach(card => {
    const name = card.querySelector('h3').innerText.toLowerCase();
    const desc = card.querySelector('p').innerText.toLowerCase();
    if (name.includes(input) || desc.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  // Doctor search
  document.querySelectorAll('.doctor-card').forEach(card => {
    const name = card.querySelector('h3').innerText.toLowerCase();
    const desc = card.querySelector('.doc-desc').innerText.toLowerCase();
    const role = card.querySelector('.doc-role').innerText.toLowerCase();
    if (name.includes(input) || desc.includes(input) || role.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Appointment modal logic
let currentDoctor = "";

function showAppointment(doctorName) {
  currentDoctor = doctorName;
  document.getElementById('doctorName').textContent = doctorName;
  document.getElementById('appointmentModal').style.display = 'flex';
  document.getElementById('appointmentForm').style.display = '';
  document.getElementById('appointmentConfirmation').style.display = 'none';
  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('appointmentDate').setAttribute('min', today);
  document.getElementById('appointmentDate').value = today;
  document.getElementById('appointmentTime').value = "";
  document.getElementById('patientName').value = "";
}
function closeAppointment() {
  document.getElementById('appointmentModal').style.display = 'none';
}
function bookAppointment() {
  const patient = document.getElementById('patientName').value;
  const date = document.getElementById('appointmentDate').value;
  const time = document.getElementById('appointmentTime').value;
  if (!patient || !date || !time) return false;
  document.getElementById('appointmentForm').style.display = 'none';
  document.getElementById('cDoctor').textContent = currentDoctor;
  document.getElementById('cPatient').textContent = patient;
  document.getElementById('cDate').textContent = date;
  document.getElementById('cTime').textContent = time;
  document.getElementById('appointmentConfirmation').style.display = '';
  showSuccessPopup("Successfully booked!");
  return false;
}

// Login/Register modal logic
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}
function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'flex';
}
function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
}
function loginUser() {
  closeLoginModal();
  showSuccessPopup("Successfully Login!");
  return false;
}
function registerUser() {
  closeRegisterModal();
  showSuccessPopup("Successfully Registered!");
  return false;
}

// Close modal when clicking outside modal content
window.onclick = function(event) {
  ['appointmentModal', 'loginModal', 'registerModal', 'successPopup'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      if (id === 'appointmentModal') closeAppointment();
      if (id === 'loginModal') closeLoginModal();
      if (id === 'registerModal') closeRegisterModal();
      if (id === 'successPopup') closeSuccessPopup();
    }
  });
}

// Success popup logic
function showSuccessPopup(text) {
  const popup = document.getElementById('successPopup');
  document.getElementById('success-text-msg').innerText = text || "Successfully booked!";
  popup.style.display = 'flex';
  setTimeout(() => {
    closeSuccessPopup();
  }, 2200);
}
function closeSuccessPopup() {
  document.getElementById('successPopup').style.display = 'none';
}