import pool from "../database/database.js"

import { addNewUserToTable, loginUserToSystem } from "../service/user.service.js"


export async function addNewUser(req, res, next) {
    try {
        const userDataFromBody = req.body;
        const lamp = await addNewUserToTable(userDataFromBody);
        const { success } = lamp; 
        if (success) {
            return res.status(201).send("User created successfully");
        } else {
            throw new Error(lamp.err); 
        }
    } catch (error) {
        next(error); 
    }
}


export function loginIn (req, res, next) {
    try {
        const {username, password} = req.body
        const result = loginUserToSystem(username, password)
        const {success} = result
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}