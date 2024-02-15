const express = require('express')
const mysql = require('mysql2')
const cors = require("cors")
const multer = require("multer")
const path = require("path")
const session = require("express-session")
const store = new session.MemoryStore()
const cookieParser = require("cookie-parser")
const JWT = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.use(cors())
app.use(session({
    secret: "some secret",
    cookie: { maxAge: 300000 },
    saveUninitialized: false,
    store
}))
app.use(cookieParser())
app.use(express.static('public'))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "signup"
})

const conn2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "products"
})

app.post('/addproduct', (req, res) => {
    const { name, price, description, catogery } = req.body
    conn2.query(`INSERT INTO items(name, price,description,catogery) VALUES (?,?,?,?)`, [name, price, description, catogery], (err, data) => {
        if (err) {
            res.send("err")
        } else {
            res.send("done")
        }
    })
})
app.post('/adduser', (req, res) => {
    const { name, email, address1, address2, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    conn.query(sql, [email], (err, data) => {
        if (err) {
            res, send(err)
        } if (data.length > 0) {
            res.send("you already have an account please signin")
        } else {
            conn.query(`INSERT INTO users(name, email, address1, address2, password) VALUES (?,?,?,?,?)`, [name, email, address1, address2, password], (err, data) => {
                if (err) {
                    res.send("err")
                } else {
                    res.send("done")
                }
            })
        }
    })

})

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }

    // File uploaded successfully
    // Save file data to the database
    conn.query(`INSERT INTO products(title, description, price, catogery, image) VALUES (?,?,?,?,?)`, [req.body.title,req.body.description,req.body.price,req.body.catogery,req.file.filename], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send('An error occurred while saving the file.');
        }

        return res.status(200).send('File uploaded and saved to the database!');
    });
});
app.get('/fetch',(req,res)=>{
    const sql = `SELECT * FROM products`
    conn.query(sql, (err, data) => {
        if (err) {
            res.send("err")
        } else {
            res.send(data)
        }
    })
})

app.post('/admin',(req,res)=>{
    const { name, password } = req.body
    const sql = `SELECT * FROM admin WHERE name = ? AND password = ?`
    conn.query(sql, [name, password], (err, data) => {
        if (err) {
            return res.send("Error from server")
        }
        if (data.length > 0) {
            if (data.length > 0) {
                if (req.session.authenticated) {
    
                } else {
                    const name = data[0].name
                    const password = data[0].password
                    req.session.authenticated = true
                    req.session.user = {
                        name, password
                    }
                    res.send(req.session)
                }
            }
            else {
                return res.send("No email exits or password is wrong")
            }
}
})
})


app.post("/login", (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    // console.log(email)
    // console.log(password)
    conn.query(sql, [email, password], (err, data) => {
        if (err) {
            return res.send("Error from server")
        }
        if (data.length > 0) {
            if (req.session.authenticated) {

            } else {
                const name = data[0].name
                const email = data[0].email
                req.session.authenticated = true
                req.session.user = {
                    name, email
                }
                res.send(req.session)
            }
        }
        else {
            return res.send("No email exits or password is wrong")
        }
    })
})

app.post('/delete',(req,res)=>{
    const { id } = req.body
    console.log(id)
    const sql = `DELETE FROM products WHERE id = (?)`
    conn.query(sql, [id],(err, data) => {
        if (err) {
            res.send("err")
        } else {
            res.send("done")
        }
    })
})


app.get('/catogries',(req,res)=>{
    conn.query("SELECT * FROM `catogeries`",(err,data)=>{
        if(err){
            res.send("error")
        }else{
            res.send(data)
        }
    })
})


app.post('/addcategory',(req,res)=>{
    const { category} = req.body
    const sql = `INSERT INTO catogeries(catogeries) VALUES (?)`
    conn.query(sql, category, (err, data) => {
        if (err) {
            return res.send("Error from server")
        }else{
            res.send("added")
        }
})
})

app.post('/order',(req,res)=>{
    const {first_name,last_name,company_name,addrees,state,zip,phone,email,products,total} = req.body
    const sql = `INSERT INTO orders(first_name, last_name, company_name, address, state, zip, phone, email, products, total) VALUES (?,?,?,?,?,?,?,?,?,?)`
    conn.query(sql, [first_name,last_name,company_name,addrees,state,zip,phone,email,products,total], (err, data) => {
        if (err) {
            return res.send("Error from server")
        }else{
            res.send("added")
        }
    })
})

app.get("/getorders",(req,res)=>{
    const sql = `SELECT * FROM orders`
    conn.query(sql,(err,data)=>{
        if(err){
            res.send("error")
        }else{
            res.send(data)
        }
    })
})

app.get('/gethomecontrol',(req,res)=>{
    const sql = `SELECT * FROM homepage`
    conn.query(sql,(err,data)=>{
        if(err){
            res.send("error")
        }else{
            res.send(data)
        }
    })
})

app.post('/updatehomecontrol',(req,res)=>{
    const {catogery,catogery2,catogery3} = req.body
    const sql = `UPDATE homepage SET cat1=?,cat2=?,cat3=?`
    conn.query(sql,[catogery,catogery2,catogery3],(err,data)=>{
        if(err){
            res.send("error")
        }else{
            res.send("done")
        }
    })
})

app.listen(5000, () => {
    console.log("server is runnig")
})
