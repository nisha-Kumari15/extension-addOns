

let myLeads = [];
const url = "wwww.awesomelead.com";

let inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

let fromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(fromLocalStorage)
{
    myLeads = fromLocalStorage
    render();
}

// localStorage.setItem("myName", "Nisha");
// let name = localStorage.getItem("myName");
// console.log(name);

// localStorage.clear();
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render();
    console.log(myLeads);
})

function render(){

    let listItems = "";
for(let i=0; i<myLeads.length; i++)
{

    listItems += `
    <li>
    <a target='_blank' href = '${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>`;
}

ulEl.innerHTML = listItems;

}

