// heart icon handle
let hearts=  document.getElementsByClassName("heartBtn");

for(let heart of hearts)
{
    heart.addEventListener("click",function(){
        let count = document.getElementById("heartNumber")

        count.innerText = parseInt(count.innerText) + 1;
    })
}

//  call button handler
 //function for getelementid
 function getElement(id){
    let element = document.getElementById(id);
    return element;
 }

 // function for alert message
function getalert(name,number){
    alert(` 📞 Calling ${name} ${":"} ${number}`)
}

let calls = document.getElementsByClassName("callBtn");

for(let call of calls){
    call.addEventListener("click",function(){

    let serviceName = call.parentNode.parentNode.childNodes[5].innerText;
    let serviceNumber = call.parentNode.parentNode.childNodes[7].innerText;
   

        let coin = document.getElementById("coinBtn");
          if(coin.innerText < 20  )
        {
            alert("You do not have sufficient balance. Keep minimum 20 coins to call.");
            return;
        }

        coin.innerText =  Number(coin.innerText) - 20;

        getalert(serviceName,serviceNumber);

      

            let data = {
                name:serviceName,
                num: serviceNumber,
                time:new Date().toLocaleTimeString()

            }

            let historyCard = document.getElementById("history-section");

          
            let div = document.createElement("div");
            div.innerHTML = `
            <section id="Remove">
             <div id="history-contain" class="history flex  p-2 items-center justify-between my-4 rounded-lg bg-[#F2F2F2]">
                    <div class="content">
                    <h1 id="serviceh" class="font-bold">${data.name}</h1>
                    <p id="servicehno" class="text-gray-600">${data.num}</p>
                    </div>
                    <div id="local-time" class="time">
                        <h2>${data.time}</h2>
                    </div>
                </div>
            </section>
           `;

            historyCard.appendChild(div);

               
    })
    
}