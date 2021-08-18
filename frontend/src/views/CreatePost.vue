<template>
    <form id="formChecked">
        <div class="col-10 offset-1 col-md-6 offset-md-0">
            <label for="articleTitle">Titre de l'article</label>
            <input type="text" class="form-control border-dark" id="articleTitle" placeholder="Titre" aria-label="titre" required >
        </div>
        <div class="col-10 offset-1 col-md-6 offset-md-0">
            <label for="articleContent">contenu de l'article</label>
            <textarea class="form-control border-dark" id="articleContent" placeholder="Contenu" rows="3" required></textarea>
        </div>
    </form>
    <div>
        <a @click="createPost()" class="btn btn-dark bg-black" id="validate">post</a>
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
            user_firstName: '',
            id_User: ''
      }
  },
  methods:{
      createPost() {
            const userName = sessionStorage.getItem("userName");
            const userFirstName = sessionStorage.getItem("userFirstName");
            const userId = sessionStorage.getItem("userId");
            console.log('test');
            axios.post("http://localhost:3000/article",{
                
                headers:{
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                },
                titre: document.getElementById('articleTitle').value,
                contenu: document.getElementById('articleContent').value, 
                user_name: userName,
                user_firstName: userFirstName,
                id_User: userId
            })
            .then(function(response) {
                console.log(response);
                window.location.href="/accueil";
            })
            .catch(function(error) {
                console.log(error);
            }); 
      }
  }
} 
</script>
