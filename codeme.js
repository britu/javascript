

//Access children of a node
var bodyChildren = document.body.children;
console.log(bodyChildren);

//To see the ul children
var ulChildren = document.querySelector('ul');
console.log(ulChildren);

//add a new child to the body
    //Html selctor pointing out
    
    var h1 = document.querySelector('h1');
    var p = document.createElement('p');
    var divselector = document.querySelector('div');
    var textnode = document.createTextNode("Hey I am newly added");
    console.log(divselector);
    p.append(textnode);
    divselector.append(p);

 //Adding paragraph
    var h1 = document.querySelector('h1');
    var p = document.createElement('p');
    var textnode = document.createTextNode('this is a next paragraph 4');
    console.log(p);
    p.append(textnode);

//Adding in class name is a html collection
    var newdiv = document.getElementsByClassName('new');
    var p10 = document.createElement("p");
    var node1 = document.createTextNode("Hey I am in the htmlCollection");
    HTMLCollection.prototype.foreach = Array.prototype.forEach;
        newdiv.foreach(function(event){
            event.node1;
        })

//add a new child to the body
    var para = document.createElement('li');
    var text = document.createTextNode('Hey this is second ok');
    para.appendChild(text);
    console.log(para);
    

// Access a sibling
    var sibling = p1.nextElementSibling.nextElementSibling;
    console.log(sibling);
    

//access first child and last
        var list = document.querySelector("ul");
        console.log(list.firstChild);
        console.log(list.lastChild);

// To go to the parent node
        var bmw = document.querySelector("li");
        console.log(bmw.parentNode);
      
//change new text/ Change the paragraph like java script is fun and html Style
    var p2 = document.getElementById("p2");
    p2.innerHTML = "This is a fun lanugage";
    p2.style.backgroundColor = "red";
    p2.style.color = "white";

//Set attribute link
    var link = document.querySelector('a');
    link.setAttribute('href', 'http://forcescabs.co.uk');

// using the foreach method, need to add new brand to each list:
    
    var newul = document.getElementsByTagName('ul');
        newul.foreach(function(event){
            event.innerHTML += "<li>Ford</li>";
            event.style.backgroundColor = "Green";
            event.style.color="white";
        })
// by class name
    var pink = document.getElementsByClassName('green');
    pink.foreach(function(event){
        event.style.backgroundColor= "pink";
    })

// //Remove a child Element
// // var list1 =  document.getElementById("list1");
// // var item1 = document.getElementById("item1");
// // list1.removeChild(item1);

// //There is no any method for remove an item we need to build ourself
// //Global cunstructure calle Element represent html element like .remove or any

// // Element.prototype.remove = function(){
// //     var parent = this.parentElement;
// //     parent.removeChild(this);
// // }
// // list1.remove();

// * Event listner Mouse down
    //All Element
     var button1 = document.getElementById("button1"); 
     var img = document.querySelector("img");

    button1.addEventListener('mousedown', fmousedown);

    function fmousedown(event){
        if(event.which == 1){
            newdiv.foreach(function(event){
                event.innerHTML = "you clicked left button";
            });
        };
        if(event.which == 3){
            newdiv.foreach(function(event){
                event.innerHTML = "you clicked right button";
            });
        }
        console.log(event);
       
    }
    //mouse move 
  
    //mousemove
    addEventListener("mousemove", fmousemove);
    function fmousemove(event){
        img.style.left = event.pageX + "px";
        img.style.top = event.pageY + "px";
    }
    
addEventListener('mousedown',fmousedown);

function fmousedown(event){
    var img2 = document.createElement("img");
    img2.setAttribute("src","http://pngimg.com/uploads/butterfly/butterfly_PNG1066.png");
    img2.setAttribute("height","40px");
    img2.setAttribute("width","40px");
    img2.style.position = "fixed";
    document.body.appendChild(img2);
   img2.style.left = event.pageX + "px";
   img2.style.top = event.pageY + "px";
}

