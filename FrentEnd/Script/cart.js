async function cartFetch(){
    try {
        let response=await fetch("http://localhost:4300/cart/get");
        if(response.ok){
            let result=await response.json();
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}
cartFetch()