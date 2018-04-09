console.log('Hello World')

var myName = '邱诚'
var EnName ='Cheng Qiu'
console.log(myName)

window.alert(myName)


function changetext(id){
    id.innerHTML ="邱诚";
}


function visibility(){
    if (document.getElementById("about").style.visibility = "visible"){
        document.getElementById("about").style.visibility = "hidden";
    }
    if(document.getElementById("about").style.display = "none"){
        document.getElementById("about").style.display = "";
    }

}

function link(){
    document.getElementById("profile").style.visibility = "hidden"
}