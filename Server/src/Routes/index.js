const {getCharById} =require("../Controllers/getCharById");
const login = require("../Controllers/login");
const postUser = require("../Controllers/postUser");
const postFav = require("../Controllers/postFavs");
const deleteFav= require("../Controllers/deleteFav");



const router = require('express').Router();


router.get('/character/:id', getCharById);
router.get('/login', login );
router.get('/login', postUser );
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;