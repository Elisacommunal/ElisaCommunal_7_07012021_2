<template>
    <div>
        <div class="container">
            <div>
                <img class="img d-flex col-10 offset-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3" alt="logo" src="../assets/icon-left-font-monochrome-black.svg">
            </div>
        <div class="card card--profil text-center pt-4 pb-4"> 
            <h1 class="text-center card__title--user">Profil</h1>
            <h2 class="">E-mail : {{email}}</h2>
            <h2 class="">Nom : {{userName}}</h2>
            <h2 class="article-content">Prénom : {{userFirstName}}</h2>
            <h2 class="article-content">Poste : {{profession}}</h2>
            <div class="row center">
                <button class="btn btn__colorP col-4 col-lg-2 m-2"  type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Modifier</button>
                    <div class="collapse" id="collapseExample">
                        <div class="card__comment">
                            <form class="row col-10 offset-1" id="formChecked">
                                <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="email" v-model="email" class="form-control border-dark" id="inputEmail" placeholder="📧 E-mail" aria-label="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
                                </div>
                                <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="text" class="form-control border-dark" id="inputPassword" placeholder="🔒 Mot de passe"  aria-label="password" required>
                                </div>
                                <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="text" v-model="userName" class="form-control border-dark" id="inputName" placeholder="👉 Nom"  aria-label="name" required>
                                </div>
                                <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="text" v-model="userFirstName" class="form-control border-dark" id="inputFirstName" placeholder="👉 Prénom" aria-label="firstName" required>
                                </div>
                                <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="text" v-model="profession" class="form-control border-dark" id="inputProfession" placeholder="💼 Poste"  aria-label="profession" pattern="[A-Z][a-z]{2,50}" required>
                                </div>
                            </form>
                            <div>
                                <a @click="updateProfil()" class="btn btn__colorP col-4 mt-2 mb-2" id="validate">Valider</a>
                            </div>
                        </div>
                    </div>
              <!-- <a @click="updateProfil()" class="btn btn__colorP col-4 col-lg-2 m-2" id="edit">Modifier</a> -->
              <a @click="deleteProfil(id)" class="btn btn__colorS col-4 col-lg-2 m-2" id="del">Supprimer</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import VueJwtDecode from "vue-jwt-decode";


export default {
  name: 'Accueil',
  data(){
    return{
      email: sessionStorage.getItem("email"),
      userName: sessionStorage.getItem("userName"),
      userFirstName: sessionStorage.getItem("userFirstName"),
      profession: sessionStorage.getItem("profession"),
      id: sessionStorage.getItem("userId")
    }
  },
  methods: {
    deleteProfil(data) {
        if(confirm("Supprimer le profil ?")){
            const user_id = VueJwtDecode.decode(sessionStorage.getItem("token")).id;
            console.log("User_id : ", user_id);
                axios.delete('http://localhost:3000/user/'+ user_id, {
                    method: "DELETE",
                    headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                }})
              .then(function(response) {
                  console.log(response);
                  sessionStorage.clear(),
                  window.location.href= "/";
              })
              .catch(function(error) {
                  console.log(error);
              }
          ); 
        }
    },
    updateProfil(){
    let formChecked = document.getElementById('formChecked').checkValidity();
    if (formChecked == false) {
        alert('Merci de bien vouloir remplir tout les champs requis afin de valider votre commande');
    }else{
        let contact = {
            email: document.getElementById('inputEmail').value,
            password: document.getElementById('inputPassword').value, 
            name: document.getElementById('inputName').value,
            firstName: document.getElementById('inputFirstName').value,
            profession: document.getElementById('inputProfession').value,
        };
        const user_id = VueJwtDecode.decode(sessionStorage.getItem("token")).id;
        console.log(user_id);
        const sendSignUp = fetch('http://localhost:3000/user/' + user_id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        sendSignUp.then( async response =>{

            try{
                let confirmation = await response.json();
                console.log(confirmation);
                sessionStorage.clear()
                console.log(sessionStorage);
                window.location.href = "/";
            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
}







      
    }
  }
}
</script>
<style lang="sass" scoped>

</style>