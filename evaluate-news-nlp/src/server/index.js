var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const dotenv = require('dotenv');
const apiKey = process.env.API_KEY;
dotenv.config();
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
const { response } = require('express');
app.use(cors());

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const getData = ("/test/*", async(request,response) => {
    var url = '';
    const response = await fetch(`${apiUrl}?key=${apiKey}&url=${url}&lang=en`) ;
try {
      
    response.getData = {sentiment, agreement, subjectivity, confidence, irony} ;
    response.send({
      sentiment,
        agreement,
         subjectivity,
         confidence, 
        irony
    });
    
} catch (error) {
    console.log("error", error);
}
});


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Working on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



