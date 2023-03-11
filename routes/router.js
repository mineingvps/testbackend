const express = require('express');
const db = require("../config/db.js");
const router = express.Router(); // ฟังก์ชั่นเราเตอร์เป็นฟังชั่นไว้เรียกเส้นทาง
const app = express(); //
app.use(express.json); // ตั้งไว้ว่าการส่งข้อมูลเป็น JSON คือการแปลง OBJECT เป็น JSON


router.get("/",(req,res) => {
    db.all("SELECT * FROM user" , (error,row)=>{
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(row);
        }
    })
});

module.exports = router;