import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import e from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    try {
        const { data } = await axios.get('https://bored-api.appbrewery.com/random');
        res.render('index.ejs', { data });
    }
    catch (error) {
        console.log(error);
    }
});

app.post('/activity', async(req, res) => {
    console.log(req.body);
    const activity = req.body.activity;
    const participants = req.body.people;
    try {
        const { data } = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activity}`, {
        });
        res.render('index.ejs', { data });
    }
    catch (error) {
        console.log(error);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});