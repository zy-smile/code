try {
    throw "this is error"
} 
catch(e) {
        console.log(e);
}
try {
    throwerr()
}
catch(e) {
    console.log(e);
}
function throwerr() {
    console.log(123);
}