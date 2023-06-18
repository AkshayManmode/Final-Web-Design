

// function loadData(){
//     console.log("I am in ----------------------------");
//     input = document.getElementById("myInput");
//     console.log("Input -----> ",input);
//     if(input === null || input.value.length<1){
//         ul = document.getElementById("myUL");
//         console.log("ul is : ", ul);
//         li = ul.getElementsByTagName("li");
//         console.log("li is : ", li);
//         for(i=0;i<li.length;i++){
//             li[i].style.display="none"
//         }
//     }
// }

function mouseIsOut(){
    console.log("I am out");
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    // inputText.style.width ="0px";
    
    for(i=0;i<li.length;i++){
        li[i].style.display="none"
    }
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    console.log("This is input ---> ",input.value.length)
    
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    var inputText = document.getElementById("myInput")

    if(input.value.length<1){
        console.log("i am at zero ---> ",input.value.length)
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        // inputText.style.width ="0px";
        for(i=0;i<li.length;i++){
            li[i].style.display="none"
        }
    }
    else{
        for (i = 0; i < li.length; i++) {
            // inputText.style.width ="200px";
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
                console.log("li ---> ",li[i]);
            } else {
                li[i].style.display = "none";
            }
        }

    }
}