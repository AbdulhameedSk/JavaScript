// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let c=1;
function count(){
    //Time represents how much time counter counts in seconds
    console.log(c);
    c++;
    if(c>time){
        clearInterval(out);
    }
}
const time=30;
const out=setInterval(count,1000);