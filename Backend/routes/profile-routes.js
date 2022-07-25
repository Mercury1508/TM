const express= require('express');

const profileController = require('../controllers/profile-controller');
const Profile= require('../models/profile');


const router=express.Router();

router.get('/:pid',profileController.getProfileById);
router.post('/',profileController.createProfile);
router.get('/:uid',profileController.getProfileByUser)
router.patch('/:pid',profileController.updateProfile);
router.route("/profiles").post((req,res)=>{
    const name=req.body.name;
    const branch=req.body.branch;
    const newprofile=new Profile({
        name,
        branch
    });
    newprofile.save();
});

module.exports = router;