const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const profileSchema=new Schema({ 
    name:{type:"string", required:"true"},
    branch:{type:"string", required:"true"},
    club:{type:"string", required:"true"} ,
    links:{type:"string", required:"true"},
    skills:{type:"string", required:"true"} ,
    year:{type:"string", required:"true"},
    description:{type:"string", required:"true"},
    userId:{type:"string", required:"true"}
});
module.exports=mongoose.model('Profile',profileSchema);