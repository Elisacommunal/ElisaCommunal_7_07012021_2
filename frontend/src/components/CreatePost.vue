<template> 
<div class="container col-6 offset-3">
    <div class="row card center  pt-3 pb-3">
        <form  id="formChecked" class="col-8 offset-2" enctype="multipart/form-data">
         <div class="form-group col-10 offset-1 col-md-8 offset-md-2 mt-3">
            <input type="file" accept="image/*" id="imageInput" name="image" @change="onFileChange(e)">
            <img :src="imagePreview" v-if="imagePreview"  style="max-height: 100px;display:block;margin-top:10px">
        </div>
            <div class="col-10 offset-1 col-md-8 offset-md-2 form-group">
                <label for="articleTitle">Titre de l'article</label>
                <input type="text" class="form-control border-dark" v-model="titre" id="articleTitle" placeholder="Titre" aria-label="titre" required >
            </div>
            <div class="col-10 offset-1 col-md-8 offset-md-2 form-group">
                <label for="articleContent">contenu de l'article</label>
                <textarea class="form-control border-dark" id="articleContent" v-model="contenu" placeholder="Contenu" rows="3" required></textarea>
            </div>
        </form>
        <div>
            <button @click="createPost()"  class="btn btn__colorP col-4 offset-4 mt-2" id="validate"> Envoyer</button>
        </div>  
    </div>  
</div>   
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'create',
  data() {
      return {
            titre: '',
            contenu: '',
            user_name: '',
            user_firstName: '' ,
            id_User: '',
            image: '',
            imagePreview: ''
      }
  },
  methods:{
      /* submit : function(){
      this.$refs.form.submit()
    }, */
onFileChange(e) {
            const imageInput = document.querySelector('input[type="file"]')
            const file = imageInput.files[0];
            console.log(file);
            this.image = file;
            console.log(this.image);

            /* imageInput.setValue(file); /
           /  this.sauceForm.updateValueAndValidity(); */
            const reader = new FileReader();
            reader.onload = () => {
            this.imagePreview = reader.result ;
            };
            reader.readAsDataURL(file);
    },

      createPost() {
           const userId = sessionStorage.getItem("userId");
            const userFirstName = sessionStorage.getItem("userFirstName");
            const userName =  sessionStorage.getItem("userName");
            const titre = document.getElementById('articleTitle').value;
            const contenu = document.getElementById('articleContent').value;
            const user_profilPic =  sessionStorage.getItem("profilPic");
            console.log('test');
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('contenu', contenu);
        formData.append('user_name', userName);
        formData.append('user_firstName', userFirstName);
        formData.append('id_User', userId);
        formData.append('image', this.image);
        formData.append('user_profilPic', user_profilPic);


            axios.post("http://localhost:3000/article", formData ,{
                
                headers:{
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                    'content-Type' : 'multipart/form-data'
                }  
            }
            )
            .then(function(response) {
                console.log(response);
                 document.location.reload(); 
            })
            .catch(function(error) {
                console.log(error);
            }); 
      },
  }
} 
</script>
