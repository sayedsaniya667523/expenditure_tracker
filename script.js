let items = [];
function display(){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    items.forEach(element => {
    let tr = document.createElement("tr");
    let date_div = document.createElement("td");
    date_div.innerText = element.date;
    tr.appendChild(date_div);
    let description_div = document.createElement("td");
    description_div.innerText = element.description;
    tr.appendChild(description_div);
    let amount_div = document.createElement("td");
    amount_div.innerText = element.amount;
    tr.appendChild(amount_div);
    let icon_td = document.createElement("td");
    let icon = document.createElement("i");
    let classname = document.querySelector("i").classList;
    icon.setAttribute("class", classname);
    icon_td.appendChild(icon);
    tr.append(icon_td)
    tbody.append(tr);
    });
}
function calculate(description, amount){
    event.preventDefault();
    let income = document.querySelector(".income-div");
    let expense = document.querySelector(".expenses-div");
    let balance = document.querySelector(".balance-div");
    let i = parseInt(income.innerText, 10);
    let e = parseInt(expense.innerText, 10);
    let b = parseInt(balance.innerText, 10);
    amount = parseInt(amount, 10);
    if(amount>0){
        let val = b+amount;
        income.innerText = val;
        balance.innerText = val;
    }else{
        let res = b+amount;
        let expval = e+(-1*amount);
        expense.innerText = expval;
        if(res>0){
            return alert("You do not have sufficient balance!");
        }
        else{
            console.log(res);
            balance.innerText = res;
        }
    }
}
function inc(){
    let val = document.querySelector(".income").value;
    document.querySelector(".income-div").innerText = val;
}
function addTransac(){
    event.preventDefault();
    let description = document.querySelector(".description").value;
    let amount = document.querySelector(".amount").value;
    items.push({"date" : new Date(Date.now()).toLocaleDateString('en-GB'),"description" : description, "amount" : amount});
    display();
    calculate(description, amount);
}
function clear(){
    event.preventDefault();
    document.querySelectorAll("input").value = null;
}