<template>
    <h1 class="text-center">Groupomania</h1>
    <div class="container-fluid d-flex flex-column align-items-center">
            <div class="row m-4 col-8 offset-2 ">
                <div class="container-article d-flex flex-column-reverse ">
                    <div class="card text-center" v-if="dataArticle" v-for="item in dataArticle" :key="item.id">  
                        <div class="card-body">
                            <div class="row">
                                <h2 class="card-title article-userName col-6 offset-3">{{ item.user_name }} {{ item.user_firstName }}</h2>
                            </div>
                            <h3 class="card-text article-title">{{ item.titre}}</h3>
                            <p class="card-text article-content">{{ item.contenu }}</p>
                            <div class="row">
                                <a @click="deletePost(item.id)" class="col-4 offset-4 btn btn-danger article-link">Supprimer</a>
                            </div>
                            <form id="formChecked">
                                <div class="col-10 offset-1 col-md-6 offset-md-3">
                                    <label for="commentContent">Contenu de l'article</label>
                                    <textarea class="form-control border-dark" v-bind:id="item.id" placeholder="Commentaire" rows="1" required></textarea>
                                </div>
                            </form> 
                        <div>
                            <a @click="createComment(item.id)" class="btn btn-dark bg-black col-4" id="validate">Commenter</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import axios from "axios"
import CreateComment from '@/components/CreateComment.vue'

export default {
   name: 'Articles',
   data(){
       return {
           dataArticle: 
           axios.get('http://localhost:3000/article', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }})
           .then((response) => {
               this.dataArticle = response.data
           })
       }
   },
   components :{
       CreateComment,
   },
   methods: {
       deletePost(data) {
           if(confirm("Supprimer ce post ?")){
               axios.delete('http://localhost:3000/article/' + data, {
                   method: "DELETE",
                   headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                }})
               .then(function(response) {
                    console.log(response);
                    document.location.reload();
                })
                .catch(function(error) {
                    console.log(error);
                }); 
           }
       },
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
      },
   }
}
</script>
<style>

</style>