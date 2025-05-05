const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name, email, message } = JSON.parse(event.body)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `New Contact from ${name}`,
    text: message,
    html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
  }

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent' }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    }
  }
}
