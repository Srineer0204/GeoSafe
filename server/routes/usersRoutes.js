const express = require("express");

const router = express.Router();
const connection = require("../config/db");

const bcrypt = require("bcrypt");

router.post("/register", (req,res) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({
            message: "Name, email and password are required"
        });
    }

    bcrypt.hash(password,10,(err,hashedPassword) => {
        if(err) {
            return res.status(500).json({
                message: "Passowrd hashing failed"
            });
        }

        const query = "INSERT INTO users(name,email,password) VALUES (?,?,?)";

        connection.query(query,[name,email,hashedPassword],(err,result) => {
            if(err) {
                if(err.code === "ER_DUP_ENTRY") {
                    return res.status(409).json({
                        message: "Email already registered"
                    });
                }
                return res.status(500).json({
                    message: "User registration failed"
                });
            }
            return res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: result.insertId,
                    name,
                    email
                }
            });
        });
    });
});

module.exports = router;