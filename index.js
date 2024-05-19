document.addEventListener("DOMContentLoaded",()=>{
    const list=document.querySelector(".name ul");
    const forms=document.forms;
    const addform =document.querySelector(".form");
    
    //del item
    list.addEventListener("click",(e)=>{
        if(e.target.className=="del"){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
    //add input
    addform.addEventListener("submit",(e)=>{
        e.preventDefault();
        //create element
        const value=addform.querySelector("input[type='text']").value;
        const li=document.createElement("li");
        const contName=document.createElement("span");
        const delBtn=document.createElement("span");
        ///add content
        contName.textContent=value;
        delBtn.textContent="delete";
        //add class
        contName.classList.add("chan");
        delBtn.classList.add("del");
        //appending to  DOM
        // if(value==''){
        //     alert("enter a valid chanel");
        //     return;
        //}
        li.appendChild(contName);
        li.appendChild(delBtn);
        list.appendChild(li)
        //clear form
        addform.querySelector('input[type="text"]').value="";


    })

})