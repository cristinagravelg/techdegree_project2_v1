/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Cristina Gravel Gamero
******************************************/

/*** 
   Definition of global variables that store the DOM elements
   for reference and manipulate. 
***/

//DOM selection of the li elements. These are stored in an array that we will be able to manipulate later
const fullStudentList = document.getElementsByTagName("li");

//log to test the content of the Student li selector
console.log(fullStudentList);

//Variable to define number of elements to be shown per page
const elementsPerPage = 10;

/*** 
   Definition of the `showPage` function to hide all of the items in the list except for the ten to be shown.
***/

const showPage = (list, page) => {
    //definition of first item to be displayed in the page
    const startIndex = page * elementsPerPage - elementsPerPage;
    //definition of last item to be displayed in the page
    const endIndex = page * elementsPerPage;
    
    //definition of items to hide or show depending on page number
    for(let i=0; i<list.length; i++){
        if(i>=startIndex && i<endIndex){
            list[i].style.display = "";
        }else{
            list[i].style.display = "none";
        }
    }
}

/*** 
   Definition of the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
    //dynamic creation of the html elements for the pagination button displays
    let parentNode = document.getElementsByClassName("page")[0];
    let div = document.createElement("div");
    div.className = "pagination";
    parentNode.appendChild(div);
    let ul = document.createElement("ul");
    div.appendChild(ul);
    const numberOfPages = list.length/elementsPerPage;
    let li = document.createElement("li");
    
    //code to figure out how many page buttons to add based on the total number of student records available
    for (let i=0; i<numberOfPages; i++){
        ul.appendChild(li);
        let a = document.createElement("a");
        a.href = "#";
        a.innerHTML = i+1;
        li.appendChild(a);
    }
    
    //code to make the first button the one highlighted by default once page is launched
    ul.firstChild.firstChild.className="active";

    //code to highlight the different page buttons upon selection and to display the appropriate list of 10 students on each page
    const aElements = document.getElementsByTagName("A");

    for(let j =0; j<aElements.length;j++){
        aElements[j].addEventListener("click", (e)=> {
            //for loop de-highlights all pagination buttons
            for(let h =0; h<aElements.length;h++){
                aElements[h].className = "";
            }
            //code highlights the clicked pagination button and prompts the correct page and list of students to be displayed
            e.target.className = "active";
            if(aElements[j].className === "active"){
                showPage(fullStudentList,e.target.textContent);
            }  
            li.style.display="";  
        });
    
    }                      
}

//function calls to trigger the list and pagination codes  
showPage(fullStudentList,1);
appendPageLinks(fullStudentList);
