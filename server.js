const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname +'/index.html');

});

app.post("/", function(req, res) {
    var weight = Number(req.body.pWeight);
    var height = Number(req.body.pHeight);
    var result = weight/((height/100)**2);
    css = "<style>body {width: 500px;border: 15px solid green;padding: 50px;margin: 20px;border-radius: 25px;}</style>";
    html = "<div> <img src='https://media.giphy.com/media/kgsBIWtPd5Q5Pw11Rq/giphy.gif' alt='globe' width='250'/></div>";
    if (weight && height) {
        res.send(css + "Your BMI is " + Math.round((result + Number.EPSILON) * 10) / 10 + html);
    } else {
        res.send(css + "Nothing here!" + html)
    }

});

app.post("/standard", function(req, res) {

    var weight = Number(req.body.weightInLbs);
    var height = Number(req.body.heightInches);
    var result = (weight/height/height) * 703;
    css = "<style>body {width: 500px;border: 15px solid green;padding: 50px;margin: 20px;border-radius: 25px;}</style>";
    html = "<div> <img src='https://media.giphy.com/media/kgsBIWtPd5Q5Pw11Rq/giphy.gif' alt='globe' width='250'/></div>"
    if (weight && height) {
        res.send(css + "<p>Your BMI is: </p>" + Math.round((result + Number.EPSILON) * 10) / 10 + html);
    } else {
        res.send(css + "Nothing here!" + html)
    }

});


app.listen(3000, function() {
    console.log("Server has started on port 3000");
});
