// Get the modal
//var modal = document.getElementById('Modal');

// Get the button that opens the modal
//var btn = document.getElementById("mybtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
//   modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
    //if (event.target == modal) {
        //modal.style.display = "none";
    //}
//} 

function f() {
    var modal = document.getElementById('Modal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    var cancel = document.getElementById("cancel")
    span.onclick = function() {
        modal.style.display = "none";
    }
    cancel.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
}

function choose(tab) {
    var i;
    var x = document.getElementsByClassName("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}

function g() {
    var modal = document.getElementById('Modal1');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close1")[0];
    var cancel = document.getElementById("cancel1")
    span.onclick = function() {
        modal.style.display = "none";
    }
    cancel.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
}

function detail() {
    var id = document.getElementById("details");
    var d = document.getElementById("div2");
    d.style.display = "none";
    id.style.display = "block";
    var hide = document.getElementById("back");
    hide.onclick = function() {
        id.style.display = "none";
        d.style.display = "block";
    }
}

function authord() {
    var id = document.getElementById("author-details");
    var d = document.getElementById("author-main");
    d.style.display = "none";
    id.style.display = "block";
    var hide = document.getElementById("back2");
    hide.onclick = function() {
        id.style.display = "none";
        d.style.display = "block";
    }
}

function expand() {
    var id = document.getElementById("more");
    id.style.overflow = "none";
    id.style.height = "70px";
    var list = document.getElementById("list");
    list.style.paddingBottom = "15px"
    list.onclick = function() {
        id.style.overflow = "hidden";
        id.style.height = "18px";
    }
}

function select(tab) {
    var f = document.getElementById("focus-1");
    var s = document.getElementById("focus-2");
    if(tab==='book'){
        s.style.width = "0";
        f.style.width ="10px";
    }
    else if (tab==='author'){
        f.style.width = "0";
        s.style.width = "10px";
    }
    
}