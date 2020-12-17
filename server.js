const dotenv = require('dotenv'); //FOR READING .env file
dotenv.config({ path: './.env' }); //FOR GETTING PATH OF .env file
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app running on port:",PORT);
})