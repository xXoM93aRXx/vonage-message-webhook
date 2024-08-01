const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the PORT environment variable if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Webhook endpoint to receive inbound SMS
app.post('/webhooks/inbound-sms', (req, res) => {
    console.log(req.body)
    // Extract the message body from the request
    const { text } = req.body;

    // Log the message body
    console.log('Received message:', text);

    // Send a 2xx response to acknowledge receipt of the message
    res.status(200).send('Message received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
