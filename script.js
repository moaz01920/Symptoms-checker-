

// Symptom Checker Logic
function checkSymptoms() {
  const symptoms = document.getElementById('symptoms').value;
  
  if (symptoms) {
    document.getElementById('result').innerText =
      `Our algorithm will analyzes these symptoms and give you report in your email.`;
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
    output.innerHTML += `<p><strong>Bot:</strong> We will reply to you as soon as possible in email.</p><p style="color:red;"><strong>"If we feel we can help you, we will arrange a Zoom meeting with one of our doctors."</strong></p> `;
    document.getElementById('chat-input').value = '';
  }
}
