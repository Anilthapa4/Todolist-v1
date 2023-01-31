import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    const today = new Date();
    var day = "";

    // switch (today.getDay()) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Thursday"
    //         break;
    //     case 4:
    //         day = "Wednesday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;

    //     default:
    //         console.log("Error");
    // }
    // res.render("list",{kindOfDay : day});
    if(today.getDay()===3){
        day="tuesday";
        res.render("list",{kindOfDay: day});
    } else {
        day="wednesday";
        res.render("list",{kindOfDay: day});
    }

});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

