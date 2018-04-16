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

function addComment(){
    var name = localStorage.getItem("user_name");
    var comment = name + ":" + document.getElementById("myText").value;
    if(localStorage.getItem("ecomment1") == null){
        localStorage.setItem("ecomment1",comment)
    }else{
        var num = 1;
        var val = localStorage.getItem("ecomment" + num.toString());
        var element = document.getElementById("comment");
        while (element.firstChild) {
                element.removeChild(element.firstChild);
        }
        while(val != null ){
            var para = document.createElement("li");
            var node = document.createTextNode(val);
            para.appendChild(node);
            element = document.getElementById("comment");
            element.appendChild(para);
            num= num+1;
            val = localStorage.getItem("ecomment" + num.toString());
        }
        var para = document.createElement("li");
        var node = document.createTextNode(comment);
        para.appendChild(node);
        var element = document.getElementById("comment");
        element.appendChild(para);
        localStorage.setItem("ecomment" + num.toString(),comment)
    }

    var user = localStorage.getItem("user_name");
    if(user == null){
        alert("Sorry you have to be logged in to add a post");
    }
}
