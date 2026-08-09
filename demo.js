const ruser=require("./register");
const login=require("./login");

const checkuser = ruser.checkforuser();
if(checkuser==false){
    ruser.registeruser();
}
else{
    console.log("User already exists");
    login.login();
}

