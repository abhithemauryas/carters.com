document.querySelector("#formlogin").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email=document.querySelector("#useremail").value
    let pass=document.querySelector("#userpassword").value
    if(email=="" && pass==""){
      alert("Fill the all credentials")
    
    }else{
        let obj={email,pass}
        loginFetch(obj)
    }
    })
   
    async function  loginFetch(obj){
        try {
            let responce =await fetch("http://localhost:4300/login",{
               method:"POST",
               headers:{
                'Content-Type':"Application/json"
               },
               body:JSON.stringify(obj)
            })
            if(responce.ok){
                let ans=await responce.json()
                console.log(ans)
                alert(ans.msg);
                localStorage.setItem("token",ans.token)
                window.location.href="./FrentEnd/index.html"
                console.log(ans)
            }
        } catch (error) {
            console.log(error)
        }
    }
    