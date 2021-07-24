const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejsdb',
    password: '123',
    port: 5432,
});


client.connect();

// Create Table
/* const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`; */

// Insert Data
/* const query = `
INSERT INTO users (email, firstName, lastName, age)
VALUES ('johndoe@gmail.com', 'john', 'doe', 21)
`; */

// Select Data
/* const query = `
SELECT *
FROM users
`; */

// Update Data
/* const query = `
UPDATE users
SET age = 22
WHERE email = 'johndoe@gmail.com'
`; */

// Delete Data
const query = `
DELETE FROM users
WHERE email = 'johndoe@gmail.com'
`;

/* 
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
}); */

/* client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
}); */

/* client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});
 */

/* client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data update successful');
    client.end();
}); */

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data delete successful');
    client.end();
});