function checkforuser(){
    console.log("Checking for user");
    return true;
}

function registeruser(){
    console.log("User does not exist");
    console.log("we are registering the user.....");
    console.log("User is registered");
}

module.exports ={
    checkforuser: checkforuser,
    registeruser: registeruser
}
