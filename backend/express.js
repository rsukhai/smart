// import { USERS } from "./db.js"


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server is running on port 3001");
});
app.get('/api/db_users', (req, res) => {
  res.sendFile(path.join(__dirname, 'db_users.json'));
});

app.post('/signup', (req, res) => {
    const newUser = req.body;
    fs.readFile('db_users.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            let users = [];
            if (data) {
                try {
                    users = JSON.parse(data);
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
            }
            const existingUser = users.find(user => user.username === newUser.username);
            if (existingUser) {
                res.status(400).json({ error: 'User already exists' });
                return;
            }
            // Додавання нового користувача до масиву користувачів
            users.push(newUser);
            // Запис оновленого масиву користувачів у файл JSON
            fs.writeFile('db_users.json', JSON.stringify(users, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to file:', writeErr);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    console.log('Data appended to file:', newUser);
                    res.status(200).json({ message: 'Data received and saved successfully' });
                }
            });
        }
    });
});





// app.post("/signup", (req, res) => {
//     const { body } = req

//     console.log(`body`, JSON.stringify(body))
  
//     const isUserExist = USERS.some((el) => el.login === body.login)
//     if (isUserExist) {
//       return res
//         .status(400)
//         .send({ message: `user with login ${body.login} already exists` })
//     }
  
//     USERS.push(body)
  
//     res.status(200).send({ message: "User was created" })
// })