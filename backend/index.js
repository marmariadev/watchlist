// /backend/index.js
const database = require('./src/database');
const app = require('./src/app');
const { port } = require('./src/vars');

database.connect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});