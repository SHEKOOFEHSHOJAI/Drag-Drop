const drggableList = document.getElementById("drggable-list");
const check = document.getElementById("check");

const richestPeple = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];
//storage listitems

const listItems=[];

let dragStartIndex;

createList()

//insert listitem into DOM

function createList() {
  //spread

    [...richestPeple]
      .map((a) => ({ value: a, sort: Math.random() }))
     
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .forEach((person, index) => {

        console.log(person);
        const listItem = document.createElement("li");
      

        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
        
    
        `;
        console.log(listItem);
        listItems.push(listItem);
        drggableList.append(listItem);
      });
      addEventListener()
}

//////////////////////
// DRAGS etc
/////////////////////

//FUNCTION dragStart

function dragStart() {

// console.log('Event','dragstart');
dragStartIndex = +this.closest("li").getAttribute("data-index");
console.log(this.closest("li"));
console.log(dragStartIndex);
}

//FUNCTION dragEnter
function dragEnter() {
  console.log("Event", "dragEnter");
  this.classList.add("over");
}

//FUNCTION dragOver

function dragOver(e) {
  console.log("Event", "dragOver");
   this.classList.remove("over");
   e.preventDefault()
}

//FUNCTION dragLeave
function dragLeave() {
  console.log("Event", "dragLeave");
}

//FUNCTION DROP

function dragDrop() {
  console.log("Event", "dragDrop");
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex,dragEndIndex)
  this.classList.remove('over')
}

// Swap list items that are drag and drop

function swapItems(fromIndex,toIndex) {

const itemOne = listItems[fromIndex].querySelector(".draggable");
const itemTwo = listItems[toIndex].querySelector(".draggable");

// move index and 
listItems[toIndex].appendChild(itemOne);
listItems[fromIndex].appendChild(itemTwo);

}

// Check the order of list item

check.addEventListener("click", checkOrder);

//FUNCTION checkOrder
function checkOrder() {

listItems.forEach((listitem,index)=>{
  const personeName = listitem.querySelector(".draggable")
  .innerText.trim();

  if (personeName !== richestPeple[index]) {

    listitem.classList.add("wrong");
  }
   else {
    listitem.classList.remove("wrong");
    listitem.classList.add("right");
  }

})

}


function addEventListener(){
    const dragables = document.querySelectorAll(".draggable");
      const dragListItems = document.querySelectorAll(".drggable-list  li"); 

       dragables.forEach(draggable=>{

           draggable.addEventListener("dragstart", dragStart);
       })

        dragListItems.forEach((item) => {

           item.addEventListener("dragover", dragOver);
           item.addEventListener("dragenter", dragEnter);
           item.addEventListener("dragleave", dragLeave);
           item.addEventListener("drop", dragDrop);

        });
}