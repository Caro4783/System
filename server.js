const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const validCredentials = {
    'E-00': 'Ethicc123',
    'E-01': 'Ethicc123',
    'E-02': 'Ethicc123',
    'E-03': 'Ethicc123',
    'E-04': 'Ethicc123',
    'E-05': 'Ethicc123',
    'E-06': 'Ethicc123',
    'E-07': 'Ethicc123',
    'E-08': 'Ethicc123',
    'E-09': 'Ethicc123',
    'E-10': 'Ethicc123',
    'E-11': 'Ethicc123',
    'E-12': 'Ethicc123'
};

const userGreetings = {
    'E-00': 'Eldritch',
    'E-01': 'Choice',
    'E-02': 'Tetorion',
    'E-03': 'Rhapsody',
    'E-04': 'Iustitia',
    'E-05': 'Nova',
    'E-06': 'Vendetta',
    'E-07': 'Ethios',
    'E-08': 'Davros',
    'E-09': 'Lullaby',
    'E-10': 'Venom',
    'E-11': 'Bug',
    'E-12': 'Leafon'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (validCredentials[username] && validCredentials[username] === password) {
        res.json({ success: true, greeting: userGreetings[username] });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
