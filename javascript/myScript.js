function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

function Hello(){
    var val = localStorage.getItem("user_name");
    if(val == null){
        document.getElementById("Hello").innerHTML = "Hello Guest";
        var sub = document.getElementById("sub");
        if(sub!=null){
            sub.style.display = "none";
        }
    }
    else{
        document.getElementById("Hello").innerHTML = "Hello " + val;
        var form = document.getElementById("form1");
        if(form!=null){
            form.style.display = "none";
        }
    }

}

function inputBar4Comments() {
    var y = document.getElementsByClassName("logDiscus2");
    y[0].style.visibility = "visible";
    y[1].style.visibility = "visible";
    y[2].style.visibility = "visible";
 
}
function validate(){
    if(localStorage.getItem("user") == document.getElementById("Email").value &&
        localStorage.getItem("pass") == document.getElementById("pass1").value){
            localStorage.setItem("user_name", localStorage.getItem("user"));
            return true;
    }
    else if(localStorage.getItem("user") != document.getElementById("Email").value){
        alert("User Account does not exist!");
        return false;
    }
    else if(localStorage.getItem("user") == document.getElementById("Email").value &&
            !(localStorage.getItem("pass") == document.getElementById("pass1").value) ){
                alert("Please check username/password and try again.");
                return false;
    }
}
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("commentList");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        //Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*check if the next item should
            switch place with the current item:*/
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /*if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop:*/
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark the switch as done:*/
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function addToList() {
    var name = localStorage.getItem("user");
    var comment = document.getElementsByName("comment")[0].value;
    var fullComment = name + ":" + comment;

    var node = document.createElement("li");
    var textnode = document.createTextNode(fullComment);
    node.appendChild(textnode);
    document.getElementById("commentList").appendChild(node);
    var myObj, myJSON;
    //storing data to local storage.
    myObj = { "name": name, "comment": comment };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}


function printComments() {
        document.getElementById("commentList");
    
        var text, obj;
        //Retrieving data:
        text = localStorage.getItem("testJSON");
        obj = JSON.parse(text);
    
        var fullComment = obj.name + ": " + obj.comment;
    
        var node = document.createElement("li");
        var textnode = document.createTextNode(fullComment);
        node.appendChild(textnode);
        document.getElementById("commentList").appendChild(node);
    
    
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.getElementById("myBtn");
    if(btn!=null){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function arrow(){
    var elem = document.getElementById("arrow");
    var pos = 50;
    var id = setInterval(frame, 50);
    function frame(event) {
            if (pos == 200) {
                clearInterval(id);
            } else {
                console.log(pos);
                pos+=10; 
                elem.style.left = pos + 'px'; 
            } 
    }
    var k = setInterval(function(event){ 
        arrow();
        clearInterval(k); 
    }, 2500);
}