const ruser=require("./register");


const checkuser = ruser.checkforuser();
if(checkuser==false){
    ruser.registeruser();
}
else{
    console.log("User already exists");
}

