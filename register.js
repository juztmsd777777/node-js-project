function checkforuser(){
    console.log("Checking for user");
    return false;
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
