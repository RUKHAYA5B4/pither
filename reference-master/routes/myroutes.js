//importing packages
const express=require('express')
const mongoose=require('mongoose')
const passport=require('passport')
const router=express.Router()

//just seperating functionality of route to avoid clumsyness
const gotoContol = require('../control/mycontrol');
const jhelper = require('../configuration/jhelper');

//routers
router.post('/signin',gotoContol.postsignin)
router.get('/signin',gotoContol.getsignin)
router.get('/signin/:id',gotoContol.getUser)

//router.delete('/signin/:id',gotoContol.delUser)
//router.put('/signin/:id',gotoContol.putUser);

router.post('/authenticate',gotoContol.authenticate);
router.get('/userprofile',jhelper.verifyJwtToken,gotoContol.userprofile);

router.get('/google',passport.authenticate('google',{scope:['email','profile']}))

router.get('/google/callback',
passport.authenticate('google',{failureRedirect:'/auth/signin'}),
(req,res)=>{
    res.redirect('/auth/authenticate')
})

//   router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
//         return res.status(200).json({});
//     };

//routes for pitcher schema

router.post('/addpitch',((jhelper.verifyJwtToken)|| (jhelper.ensureAuth)),gotoContol.addpitch);
router.get('/getallpitches',((jhelper.verifyJwtToken)|| (jhelper.ensureAuth)),gotoContol.getallpitches);
router.get('/getpitchbyid/:id',((jhelper.verifyJwtToken)|| (jhelper.ensureAuth)),gotoContol.getpitchesById);
router.delete('/deletepitch/:id',((jhelper.verifyJwtToken)|| (jhelper.ensureAuth)),gotoContol.delete);
router.get('/getbyemail',((jhelper.verifyJwtToken)|| (jhelper.ensureAuth)),gotoContol.getByEmail);

/*router.get('/google',gotoContol.googleauth);
router.get('/google/callback',gotoContol.sendtopage);*/
//making this available globally
module.exports=router;