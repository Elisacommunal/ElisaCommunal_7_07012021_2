<template>
    <div>
        <div class="container">
            <div>
                <img class="img d-flex col-10 offset-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3" alt="logo" src="../assets/icon-left-font-monochrome-black.svg">
            </div>
        <div class="card card--profil text-center pt-4 pb-4"> 
            <h1 class="text-center card__title--user">Profil</h1>
            <img class="pic" v-if="pic" :src="pic" alt=""> 
            <h2 class="">E-mail : {{email}}</h2>
            <h2 class="">Nom : {{userName}}</h2>
            <h2 class="article-content">Prénom : {{userFirstName}}</h2>
            <h2 class="article-content">Poste : {{profession}}</h2>
            <div class="row center">
                <button class="btn btn__colorP col-4 col-lg-2 m-2"  type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Modifier</button>
                    <div class="collapse" id="collapseExample">
                        <div class="card__comment">
                            <form class="row col-10 offset-1" id="formChecked" enctype="multipart/form-data">
                                <div class="form-group col-10 offset-1 col-md-8 offset-md-2 mt-3">
                                    <input type="file" accept="image/*" id="imageInput" name="profilPic" @change="onFileChange(e)" required>
                                    <img :src="imagePreview" v-if="imagePreview"  style="max-height: 100px;display:block;margin-top:10px">
                                </div>
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
              <a @click="deleteProfil(id)" class="btn btn__colorS col-4 col-lg-2 m-2" id="del">Supprimer</a>
            </div>
        </div>
        <div v-if="isAdmin == 1">
            <h2 class="text-center">Profil des utilisateurs</h2>
            <div class="container-fluid d-flex flex-column align-items-center">
            <div class="row m-4 col-8 offset-2 ">
                <div class="container-article d-flex flex-column-reverse ">
                    <div class="card text-center" v-if="dataUser" v-for="user in dataUser" :key="user.id"> 
                        <img class="pic pic__admin" v-if="user.profilPic" :src="user.profilPic" alt=""> 
                        <h2 class="">E-mail : {{user.email}}</h2>
                        <h2 class="">Nom : {{user.name}}</h2>
                        <h2 class="article-content">Prénom : {{user.firstName}}</h2>
                        <h2 class="article-content">Poste : {{user.profession}}</h2>    
                        <div class="row">
                            <a  @click="deleteUser(user.id)" class="col-4 offset-4 btn btn__colorS mt-2 mb-2">Supprimer</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
            
        </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import VueJwtDecode from "vue-jwt-decode";


export default {
  name: 'Profil',
  data(){
    return{
        isAdmin: VueJwtDecode.decode(sessionStorage.getItem("token")).isAdmin,
        email: VueJwtDecode.decode(sessionStorage.getItem("token")).email,
        userName: VueJwtDecode.decode(sessionStorage.getItem("token")).userName,
        userFirstName: VueJwtDecode.decode(sessionStorage.getItem("token")).userFirstName,
        profession: VueJwtDecode.decode(sessionStorage.getItem("token")).profession,
        id: VueJwtDecode.decode(sessionStorage.getItem("token")).id,
        pic : VueJwtDecode.decode(sessionStorage.getItem("token")).profilPic,
        imagePreview:'',
        profilPic:'',
        dataUser: 
           axios.get('http://localhost:3000/user', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }})
           .then((response) => {
               this.dataUser = response.data
               console.log(sessionStorage);
           })
       }
  },
  methods: {
      onFileChange(e) {
            const imageInput = document.querySelector('input[type="file"]')
            const file = imageInput.files[0];
            console.log(file);
            this.profilPic = file;
            console.log(this.profilPic);

            /* imageInput.setValue(file); /
           /  this.sauceForm.updateValueAndValidity(); */
            const reader = new FileReader();
            reader.onload = () => {
            this.imagePreview = reader.result ;
            };
            reader.readAsDataURL(file);
    },
     deleteProfil(data) {
        if(confirm("Supprimer le profil ?")){
            const user_id = VueJwtDecode.decode(sessionStorage.getItem("token")).id;
            console.log("User_id : ", user_id);
                axios.delete('http://localhost:3000/user/'+ user_id, {
                    method: "DELETE",
                    headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                    }
                })
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
           
            const firstName = document.getElementById('inputFirstName').value;
            const name = document.getElementById('inputName').value;
            const profession = document.getElementById('inputProfession').value;
            const password = document.getElementById('inputPassword').value;
            const email = document.getElementById('inputEmail').value;
            const Admin =  VueJwtDecode.decode(sessionStorage.getItem("token")).isAdmin;
            const profilPic = this.profilPic;
console.log("admin", Admin);


            console.log('test');
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('name', name);
        formData.append('profession', profession);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('Admin', Admin);
        formData.append('profilPic', profilPic);

        const user_id = VueJwtDecode.decode(sessionStorage.getItem("token")).id;
        console.log(user_id);
        axios.put('http://localhost:3000/user/' + user_id, formData,{
            
            headers:{
                'Content-Type' : 'multpart/form-data',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        .then( async response =>{

            try{
                let confirmation = await response.data;
                console.log(confirmation);
                sessionStorage.clear()
                console.log(sessionStorage);
                window.location.href = "/";
            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })} 
    },
    deleteUser(donnee) {
        if(confirm("Supprimer le profil ?")){
                axios.delete('http://localhost:3000/user/'+ donnee, {
                    method: "DELETE", 
                    headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                }})
              .then(function(response) {
                  console.log(response);
                  document.location.reload()
              })
              .catch(function(error) {
                  console.log(error);
              }
          ); 
        }
    },
  }
}
</script>
<style lang="scss" scoped>
$color-primary :#091f43 ;
$color-secondary : #d1515a;
$color-tertiary :  #d4d4d4;
.pic{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 15px;
    border-radius: 50% ;
    border: transparentize($color-secondary, .2) solid 4px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: 50% 50%;
    &__admin{
        width: 100px;
        height: 100px;
    }
}

</style>