/*jshint esversion: 9 */
//imports
const express = require('express');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'online_store'
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("MySQL Connected");
// });


//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Set Views

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

// app.get('/admin', function(req, res) {
//     let sql = "SELECT * FROM Customer_Order WHERE approval='NOT APPROVED'";
//     let query = db.query(sql, (err, rows) => {
//         if (err) throw err;
//         res.render('main', {
//             users: rows
//         });
//     });
// });

// app.get('/update/:userContact', function(req, res) {
//     var userContact = req.params.userContact;
//     let sql = "UPDATE Customer_Order SET approval = 'APPROVED' WHERE contact= '" + userContact + "'";
//     let query = db.query(sql, (err, results) => {
//         if (err) throw err;
//         console.log(results);
//         res.redirect('/admin');
//     });
// });

app.post('/place_order', function(req, res) {
    // var details = req.body;
    // var fname = details.firstName;
    // var lname = details.lastName;
    // var houseNo = details.houseNo;
    // var streetNo = details.streetNo;
    // var city = details.city;
    // var state = details.state;
    // var country = details.country;
    // var pincode = details.pincode;
    // var address1 = houseNo + ", " + streetNo + ", " + city + ", " + state + ", " + country + ", " + pincode;
    // var name1 = fname + " " + lname;
    // var email1 = details.email;
    // var mobile1 = details.contactNo;
    // var cookie = req.cookies;
    // var total1 = cookie.Total;
    // var items1 = cookie.Items;
    // res.clearCookie('Total');
    // res.clearCookie('Items');
    // let post = { name: name1, email: email1, contact: mobile1, address: address1, items: items1, total: total1, approval: "NOT APPROVED" };
    // let sql = 'INSERT INTO Customer_Order SET ?';
    // let query = db.query(sql, post, (err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    // });
    return res.render('checkout1');
});

app.post('/feedback', function(req, res) {
    // var Feedback = req.body;
    // var FirstName = Feedback.fname;
    // var LastName = Feedback.lname;
    // var Name = FirstName + " " + LastName;
    // var Email = Feedback.email;
    // var Message = Feedback.message;
    // let post1 = { name: Name, email: Email, message: Message };
    // let sql1 = 'INSERT INTO Feedback SET ?';
    // let query1 = db.query(sql1, post1, (err, result1) => {
    //     if (err) throw err;
    //     console.log(result1);
    // });
    return res.render('checkout2');
});

//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));