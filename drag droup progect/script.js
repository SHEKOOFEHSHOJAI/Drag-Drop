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

    [...richestPeple]
      .map((a) => ({ value: a, sort: Math.random() }))
     
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .forEach((person, index) => {
        console.log(person);
        const listItem = document.createElement("li");
      

        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `<
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
}