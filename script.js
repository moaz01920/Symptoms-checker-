// Symptom Checker Logic
function checkSymptoms() {
  const symptoms = document.getElementById('symptoms').value;
  
  if (symptoms) {
    document.getElementById('result').innerText =
      `Our algorithm will analyzes these symptoms and give report in your email.`;
  } else {
    document.getElementById('result').innerText = 'Please enter your symptoms.';
  }
}



// Doctor Chat
function sendMessage() {
  const input = document.getElementById('chat-input').value;
  const output = document.getElementById('chat-output');

  if (input) {
    output.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    output.innerHTML += `<p><strong>Doctor:</strong> Please provide more details about your symptoms.</p>`;
    document.getElementById('chat-input').value = '';
  }
}
