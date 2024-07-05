const express = require('express');

const router = express.Router();

const {handleUser,handleFetchingUser,handleCreateUser,handleAdmin,handleEditor,handleViwer} = require("../controllers/user.controller")

router.get("/",handleUser)

router.get('/register', handleFetchingUser);

router.post('/register',handleCreateUser)  

router.get('/dashboard/admin',handleAdmin)

router.get('/dashboard/editor',handleEditor)

router.get('/dashboard/viewer',handleViwer)

module.exports = router;