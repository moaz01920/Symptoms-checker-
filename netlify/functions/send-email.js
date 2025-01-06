const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const { email, code } = JSON.parse(event.body);

  const msg = {
    to: email,
    from: 'your-email@example.com', // Verified email on SendGrid
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
