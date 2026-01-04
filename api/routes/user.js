
import express from 'express'
import { getAllUser, insertUserBulk, register } from '../controllers/user.js';

const router= express.Router();


router.post("/register",register);
router.get("/",getAllUser)
router.post('/bulk',insertUserBulk)


export default router;