const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")))

const publicVapidKey = "BMb8pBQauiIzdTOX4eEJJjTbd0lk78WagnGsandheX3F3uVMPxccWzZD2A82f1zRZmUckSt4tBk2zdiqXUnw2U8";
const privateVapidKey = "-JyrPl-FPcgAeklQI5zoKZG-wFvAu52vfGGnNo2jhCc";

webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    console.log(subscription)
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "hello, This notification is from LeadLabs :)" });
    webpush.sendNotification(subscription, payload).catch(console.log);
})

const PORT = 9004;
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})