let form = document.querySelector('form');
let itemList = document.querySelector('ul');


let clear = document.querySelector('button');
let itemList2 = document.querySelector('ul');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clear.addEventListener('click', clearAll);
itemList2.addEventListener('click', lineThrough)

function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('write').value;

    let li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    let cutBtn = document.createElement('button');
    cutBtn.className = 'tsk-done';
    cutBtn.appendChild(document.createTextNode('Task Done'));
    li.appendChild(cutBtn);
    
    

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'dlt-button';
    deleteBtn.appendChild(document.createTextNode('Delete Task'));
    li.appendChild(deleteBtn);



    if(newItem ===""){
        li.style.display = 'none';
    }

    document.getElementById('write').value = '';

}



function clearAll(e){
    let deleteAll = document.querySelectorAll('li');
    for (let i = 0; i< deleteAll.length; i++){
        deleteAll[i].remove();
    }
}

function removeItem(e){
    if(e.target.classList.contains('dlt-button')){
        let li = e.target.parentElement;
        itemList.removeChild(li)
    }
}


function lineThrough(e){
    if(e.target.classList.contains('tsk-done')){
      let li = e.target.parentElement;
      li.style.textDecoration = 'line-through'
    }

    
}