const form=document.getElementById("form")
const tbody=document.querySelector("tbody")

let todoarr=JSON.parse(localStorage.getItem("data")) || []

window.addEventListener("load",()=>{
    CreateTr()
})

form.addEventListener("submit",(event)=>{
    event.preventDefault()

    let task=document.getElementById("task").value
    let priority=document.getElementById("priority").value

    let todoobj={
        task,
        priority
    }

    console.log(todoobj)
    todoarr.push(todoobj)
    document.getElementById("task").value=""
    document.getElementById("priority").value=""
    console.log(todoarr)
    localStorage.setItem("data",JSON.stringify(todoarr))

    CreateTr()
})


function CreateTr(){

    tbody.innerHTML=null
    todoarr.forEach((el,index)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")

        td1.innerText=el.task
        td2.innerText=el.priority
        td3.innerText="delete"

        td3.addEventListener("click",()=>{
            DeleteTr(index)
        })

        tr.append(td1,td2,td3)

        tbody.append(tr)
    })

}

function DeleteTr(index){
    todoarr.splice(index,1)
    localStorage.setItem("data",JSON.stringify(todoarr))
    CreateTr()
}