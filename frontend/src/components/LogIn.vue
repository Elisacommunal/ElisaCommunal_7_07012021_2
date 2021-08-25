<template>
    <div class="container">
    <form class="row col-10 offset-1" id="formChecked">
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="email" class="form-control border-dark" id="inputEmail" placeholder="📧 E-mail" aria-label="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="password" class="form-control border-dark" id="inputPassword" placeholder="🔒 Mot de passe" aria-label="password" required>
        </div>
    </form>
    <div>
        <a @click="checkAccount()" class="btn btn__colorS col-4 offset-4 mt-3 mb-3" id="validate"><span class="white" >Connexion</span></a>
    </div>
</div>

</template>
<script>


export default {
    name: 'LogIn',
    methods: {
checkAccount(){

    let formChecked = document.getElementById('formChecked').checkValidity();

    
    if (formChecked == false) {
        alert('Merci de bien vouloir remplir tout les champs requis afin de valider votre commande');

    
    }else{
        let contact = {
            email: document.getElementById('inputEmail').value,
            password: document.getElementById('inputPassword').value, 
        };
        const sendLogin = fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify(contact),
            headers:{
                'Content-Type' : 'application/json',
            }
        })
        sendLogin.then( async response =>{

            try{
                let confirmation = await response.json();
                console.log(confirmation);
              
                    sessionStorage.setItem("token", confirmation.token)
                    sessionStorage.setItem("admin", confirmation.isAdmin)
                    sessionStorage.setItem("userName", confirmation.userName)
                    sessionStorage.setItem("userFirstName", confirmation.userFirstName)
                    sessionStorage.setItem("userId", confirmation.id)
                    console.log(sessionStorage);
                    window.location.href = "/accueil";

            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
    }
}
}
    }
    
</script>
<style scoped>

</style>