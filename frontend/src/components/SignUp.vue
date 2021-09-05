<template>
    <div class="container">
    <form class="row col-10 offset-1" id="formChecked" enctype="multipart/form-data">
    <div class="form-group col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="file" accept="image/*" id="imageInput" name="profilPic" @change="onFileChange(e)" required>
            <img :src="imagePreview" v-if="imagePreview"  style="max-height: 100px;display:block;margin-top:10px">
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="email" class="form-control border-dark" id="inputEmail" placeholder="📧 E-mail" aria-label="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="text" class="form-control border-dark" id="inputPassword" placeholder="🔒 Mot de passe" aria-label="password" required>
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="text" class="form-control border-dark" id="inputName" placeholder="👉 Nom" aria-label="name" required>
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="text" class="form-control border-dark" id="inputFirstName" placeholder="👉 Prénom" aria-label="firstName" required>
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="text" class="form-control border-dark" id="inputProfession" placeholder="💼 Poste" aria-label="profession" required>
        </div>
    </form>
    <div>
        <a @click="createAccount()" class="btn btn__colorS col-4 offset-4 mt-3 mb-3" id="validate"><span class="white" >Valider</span></a>
    </div>
</div>
</template>
<script>

import axios from 'axios'

export default {
    name:'SignUp',
    data(){
        return{
            profilPic:'',
            imagePreview:'',
        }
    },
    methods:{
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
    createAccount(){
    let formChecked = document.getElementById('formChecked').checkValidity();
    if (formChecked == false) {
        alert('Merci de bien vouloir remplir tout les champs requis afin de valider votre commande');
    }else{
        console.log(this.profilPic);
            const firstName = document.getElementById('inputFirstName').value;
            const name = document.getElementById('inputName').value;
            const profession = document.getElementById('inputProfession').value;
            const password = document.getElementById('inputPassword').value;
            const email = document.getElementById('inputEmail').value;
            const profilPic = this.profilPic


            const formData = new FormData();
            formData.append('profilPic', profilPic);
            formData.append('firstName', firstName);
            formData.append('name', name);
            formData.append('profession', profession);
            formData.append('password', password);
            formData.append('email', email);
            console.log(formData);
        axios.post("http://localhost:3000/user/signup", formData,{
            
            headers:{
                'Authorization': 'Bearer ',
                'content-Type':'multipart/form-data'
            },
            
        })
        .then( async response =>{
            try{
                let confirmation = await response.data;
                console.log(confirmation);

                sessionStorage.setItem("token", confirmation.token)
                sessionStorage.setItem("email", confirmation.email)
                sessionStorage.setItem("admin", confirmation.isAdmin)
                sessionStorage.setItem("userName", confirmation.userName)
                sessionStorage.setItem("userFirstName", confirmation.userFirstName)
                sessionStorage.setItem("profession", confirmation.profession)
                sessionStorage.setItem("profilPic", confirmation.profilPic)
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
<style>

</style>