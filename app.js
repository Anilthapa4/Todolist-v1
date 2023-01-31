import express from "express";
import bodyParser from "body-parser";

const app = express();

var items=["Eat","Code","Sleep & Repeat"];

app.set('view engine', 'ejs');
//ejs template

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    const today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems:items});
});

app.post("/", function (req, res) {
   var item=req.body.newitem;
   items.push(item);
   //this pushes the new added item to the array called "items".
   res.redirect("/");
   //this redirect to our home route.
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

