import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";
// import https from "https";
const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "posts",
    password: "M1n1p1l1!",
    port: "5432",
});

db.connect();
// this is middleware 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async(req,res) => {
    try{
        const result = await db.query("SELECT * FROM public.posts ORDER BY id DESC ");
        const posts = result.rows;
        res.render("index.ejs", {posts});
    }
    catch (error){
        console.log("here get");
        console.log("failure");
    }
})

app.post("/add", async (req,res) => {
    try {
        const name = req.body.name;
        const book = req.body.book;
        const img = `https://covers.openlibrary.org/b/isbn/${book}-M.jpg`;
        const thoughts = req.body.thoughts;
        console.log(name);
        try{
            await db.query("INSERT INTO posts (name, thoughts, cover) VALUES ($1,$2,$3)",[name,thoughts,img])
        }
        catch (error){
            console.log("here post");
            console.log("failure")
        }
        res.redirect("/");
    }
    catch (error){
        console.log(error)
        console.log("fail");
    }
})

app.post("/edit", async (req,res) => {
    const newT = req.body.updatedThoughts;

    const newId = req.body.updatedID;

    await db.query("UPDATE posts SET thoughts = ($1) WHERE id = ($2)", [newT,newId]);
    res.redirect("/");
})

app.post("/delete", async(req,res) => {
    const newID = req.body.updatedID;
    await db.query("DELETE FROM posts WHERE id = ($1)", [newID]);
    res.redirect("/");
})





app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});