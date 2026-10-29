const express = require("express");

const router = express.Router();
const connection = require("../config/db");

const bcrypt = require("bcrypt");

router.post("/register", (req,res) => {
    const {name,email,password} = req.body;

    if(
        typeof name !== "string" || !name.trim() ||
        typeof email !== "string" || !email.trim() ||
        typeof password !== "string" || !password
    ) {
        return res.status(400).json({
            message: "Name, email and password are required"
        });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if(!cleanEmail.includes("@") || !cleanEmail.includes(".")) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    if(password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters long"
        });
    }

    bcrypt.hash(password,10,(err,hashedPassword) => {
        if(err) {
            return res.status(500).json({
                message: "Password hashing failed"
            });
        }

        const query = "INSERT INTO users(name,email,password) VALUES (?,?,?)";

        connection.query(query,[cleanName,cleanEmail,hashedPassword],(err,result) => {
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
                    name: cleanName,
                    email:cleanEmail,
                }
            });
        });
    });
});

module.exports = router;