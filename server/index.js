const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '$G9$#3z9qUWuQP',
    database: 'learning_management'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Close the connection

    


app.post('/verify', async (req, res) => {

    const { username,  password } = req.body;
    const email = ''; // Placeholder value
    const fullname = ''; // Placeholder value

    


    try {

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user data into the database

        db.query(
            'INSERT INTO users (username, email, full_name, password) VALUES (?, ?, ?, ?)',
            [username, email, fullname, hashedPassword],
            (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Internal server error' });
                }
                return res.status(200).json({ message: 'User created successfully' });
            }
        );
    } catch (error) {
        console.error(error);
        return res.status().json({ error: 'Internal server error' });
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
