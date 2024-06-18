const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Environment variables
const credentials = {
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
    'E-12': '1111',
    'O5-01': 'Blackmoon',
    'O5-02': 'Blackmoon',
    'O5-03': 'Blackmoon',
    'O5-04': 'Blackmoon',
    'O5-05': 'Blackmoon',
    'O5-06': 'Blackmoon',
    'O5-07': 'Blackmoon',
    'O5-08': 'Blackmoon',
    'O5-09': 'Blackmoon',
    'O5-10': 'Blackmoon',
    'O5-11': 'Blackmoon',
    'O5-12': 'Blackmoon',
    'O5-13': 'Blackmoon',
    'admin': 'Blackmoon',
    'Z-00': '527Stinkt',
    'Z-01': '527Stinkt',
    'Z-02': '527Stinkt',
    'Z-03': '527Stinkt',
    'Z-04': '527Stinkt',
    'Z-05': '527Stinkt',
    'Z-06': '527Stinkt',
    'Z-07': '527Stinkt',
    'Z-08': '527Stinkt',
    'Z-09': '527Stinkt',
    'Z-10': '527Stinkt',
    'Z-11': '527Stinkt',
    'Z-12': '527Stinkt'
};

const userGreetings = {
    'E-00': '"Eldritch"',
    'E-01': '"[ERROR 404]"',
    'E-02': '"Tetorion"',
    'E-03': '"Rhapsody"',
    'E-04': '"Iustitia"',
    'E-05': '"Nova"',
    'E-06': '"Vendetta"',
    'E-07': '"Ethios"',
    'E-08': '"Davros"',
    'E-09': '"Lullaby"',
    'E-10': '"Venom"',
    'E-11': '"Bug"',
    'E-12': '"Bee"',
    'O5-01': '"Eve"',
    'O5-02': '"He Who Waits"',
    'O5-03': '"The Beacon"',
    'O5-04': '"The Gangster"',
    'O5-05': '"Blackbird"',
    'O5-06': '"The Puppet"',
    'O5-07': '"The Cardinal"',
    'O5-08': '"The Forgotten"',
    'O5-09': '"[Redacted]"',
    'O5-10': '"The Veteran"',
    'O5-11': '"The Liar"',
    'O5-12': '"Adam"',
    'O5-13': '"Death"',
    'admin': '"Administrator"',
    'Z-00': 'Agent "Offense"',
    'Z-01': 'Agent "Chaos"',
    'Z-02': 'Agent "Abaddon"',
    'Z-03': 'Agent "Revenge"',
    'Z-04': 'Agent "Suicidal"',
    'Z-05': 'Agent "Cipher"',
    'Z-06': 'Agent "Scout"',
    'Z-07': 'Agent "Betrayed"',
    'Z-08': 'Agent "Deimos"',
    'Z-09': 'Agent "Dread"',
    'Z-10': 'Agent "Sad"',
    'Z-11': 'Agent "Eclipse"',
    'Z-12': 'Agent "Silence"'
};

const accessibleTexts = {
    'EthikText': ['E-01', 'E-02', 'E-03', 'E-04', 'E-05', 'E-06', 'E-07', 'E-08', 'E-09', 'E-10', 'E-11', 'E-12', 'E-00', 'admin'],
    'ZifferText': ['Z-01', 'Z-02', 'Z-03', 'Z-04', 'Z-05', 'Z-06', 'Z-07', 'Z-08', 'Z-09', 'Z-10', 'Z-11', 'Z-12', 'Z-00', 'admin'],
    'O5Text': ['O5-01', 'O5-02', 'O5-03', 'O5-04', 'O5-05', 'O5-06', 'O5-07', 'O5-08', 'O5-09', 'O5-10', 'O5-11', 'O5-12', 'O5-13', 'admin'],
    'SCP-173': ['E-01', 'E-02', 'E-03', 'E-04', 'E-05', 'E-06', 'E-07', 'E-08', 'E-09', 'E-10', 'E-11', 'E-12', 'E-00', 'Z-01', 'Z-02', 'Z-03', 'Z-04', 'Z-05', 'Z-06', 'Z-07', 'Z-08', 'Z-09', 'Z-10', 'Z-11', 'Z-12', 'Z-00', 'O5-01', 'O5-02', 'O5-03', 'O5-04', 'O5-05', 'O5-06', 'O5-07', 'O5-08', 'O5-09', 'O5-10', 'O5-11', 'O5-12', 'O5-13', 'admin']
};

const textContent = {
    'EthikText': 'This is the content of Text for Ethics Committee.',
    'ZifferText': 'This is the content of Text for Ziffer.',
    'O5Text': 'This is the content of Text for O5s.',
    'SCP-173': 'Item #: SCP-173\n\nObject Class: Euclid\n\nSpecial Containment Procedures: Item SCP-173 is to be kept in a locked container at all times. When personnel must enter SCP-173s container, no fewer than 3 may enter at any time and the door is to be relocked behind them. At all times, two persons must maintain direct eye contact with SCP-173 until all personnel have vacated and relocked the container.\n\nDescription: Moved to Site-19 1993. Origin is as of yet unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. Personnel assigned to enter container are instructed to alert one another before blinking. Object is reported to attack by snapping the neck at the base of the skull, or by strangulation. In the event of an attack, personnel are to observe Class 4 hazardous object containment procedures.\nPersonnel report sounds of scraping stone originating from within the container when no one is present inside. This is considered normal, and any change in this behavior should be reported to the acting HMCL supervisor on duty.\nThe reddish brown substance on the floor is a combination of feces and blood. Origin of these materials is unknown. The enclosure must be cleaned on a bi-weekly basis.'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (credentials[username] && credentials[username] === password) {
        res.json({ success: true, greeting: userGreetings[username], username });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.post('/access', (req, res) => {
    const { username, textName } = req.body;
    const usersWithAccess = accessibleTexts[textName];
    if (usersWithAccess && usersWithAccess.includes(username)) {
        res.json({ success: true, content: textContent[textName] });
    } else {
        res.json({ success: false, message: 'Access denied' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
