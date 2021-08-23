<template>
<div class="container">
    <form id="formChecked">
        <div class="col-10 offset-1 col-md-6 offset-md-3">
            <label for="commentContent">contenu de l'article</label>
            <textarea class="form-control border-dark" id="commentContent" placeholder="Commentaire" rows="1" required></textarea>
        </div>
    </form>
</div>   
<div>
    <a @click="createComment(data)" class="btn btn-dark bg-black col-4" id="validate">Commenter</a>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'CreateComment',
  data() {
      return {
            commentaire: '',
            id_article: '',
            user_name: '',
            user_firstName: '',
            id_User: ''
      }
  },
  methods:{
      createComment(data) {
            const userName = sessionStorage.getItem("userName");
            const userFirstName = sessionStorage.getItem("userFirstName");
            const userId = sessionStorage.getItem("userId");
            console.log('testCom');
            axios.post("http://localhost:3000/comment/",{
                
                headers:{
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                },
                commentaire: document.getElementById(data).value,
                id_article: data, 
                user_name: userName,
                user_firstName: userFirstName,
                id_User: userId
            })
            .then(function(response) {
                console.log(response);
                document.location.reload();
            })
            .catch(function(error) {
                console.log(error);
            }); 
      }
  }
} 
</script>