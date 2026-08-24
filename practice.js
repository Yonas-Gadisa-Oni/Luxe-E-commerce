function finish () {
    console.log("Finished !");
}

function doSomething (callback) {
    console.log("doing some thing ....");
    callback();
}

doSomething(finish);