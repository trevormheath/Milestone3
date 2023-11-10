let express = require("express")
let app = new express();
app.set("view engine", "ejs")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host:"paradisedonutcompany.c13xzbdqwvjw.us-east-2.rds.amazonaws.com",
        user:"admin",
        password:"Password1",
        database:"paradisedonutcompany",
        port:3306,
    },
});

app.get("/",(req,res) => {
    knex
    .select()
    .from("flavor")
    .then((result) => {
    console.log(result);
    res.render("index", {aDonutList: result});
    });
    });
    app.listen(3000);

