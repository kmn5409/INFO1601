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

function Hello2(){
    var val = localStorage.getItem("user_name");
    if(val == null){
        document.getElementById("Hello").innerHTML = "Hello Guest";
        var form = document.getElementById("usrform");
        var my = document.getElementById("myText");
        form.style.display = "none";
        my.style.display = "none";
    }
    else{
        document.getElementById("Hello").innerHTML = "Hello " + val;
    }
    var num = 1;
    var val1 = localStorage.getItem("ecomment" + num.toString());
    while(val1 != null && val!=null){
        var para = document.createElement("li");
        var node = document.createTextNode(val1);
        para.appendChild(node);
        var element = document.getElementById("comment");
        element.appendChild(para);
        num= num+1;
        val1 = localStorage.getItem("ecomment" + num.toString());
    }
}

function inputBar4Comments() {
    var y = document.getElementsByClassName("logDiscus2");
    y[0].style.visibility = "visible";
    y[1].style.visibility = "visible";
    y[2].style.visibility = "visible";
 
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
    var name = document.getElementsByName("fullname")[0].value;
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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
