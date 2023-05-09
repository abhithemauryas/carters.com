function findme(){
    if(event.key==="Enter"){
        let searchbar=document.querySelector(".Drop_search").value
        if(searchbar=="newarrival"){
            window.location.href="newarrival.html"
        }else if(searchbar=="cart"){
            window.location.href="cart.html"
        }else if(searchbar=="signup"){
            window.location.href="signup.html"
        }else if(searchbar=="home"){
            window.location.href="index.html"
        }
    }
   }
console.log("hello ")

fethdata()
async function fethdata(){
    try {
        let response=await fetch("http://localhost:4300/get");
        if(response.ok){
            let res=await response.json();
            console.log("qwe",res);
            displayProduct(res)
        }
    } catch (error) {
        console.log(error);
    }
}

let container =document.getElementById("fetchCardData")
function displayProduct(data){
    data.forEach((element)=>{
        console.log(element)
        let card =document.createElement("div")
        card.setAttribute("class","api_div")

        let image=document.createElement("img")
        image.setAttribute("src",element.image);
        image.setAttribute("class","api_img")

        let div =document.createElement("div")

        let additional=document.createElement("p")
        additional.setAttribute("class","desc_name")

        let btn=document.createElement("button");
        btn.setAttribute('class',"cartbtn");
        btn.innerText="QUICK SHOP"
        btn.addEventListener("click",(e)=>{
            alert("Product Added To Cart")
            console.log("obje")
            cartfetch(element)
        })

        additional.innerText=element.additional
        div.append(additional)
        // let gender=document.createElement("p")
        // gender.setAttribute("class","gender")
        // gender.innerText=element.additional
      
        let price=document.createElement("p")
        price.setAttribute("class","price_name")
        price.innerText=element.price
       
        card.append(image,div,price,btn)
        container.append(card)

    })
}

async function  cartfetch(element){
    try {
        console.log(element)
        const res=fetch("http://localhost:4300/cart/post",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(element)
        });
        if(res.ok){
            const result=await res.json();
            console.log(result);
            window.location.href="./cart.html"
        }

    } catch (error) {
        console.log(error);
    }
}



