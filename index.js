import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import e from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});