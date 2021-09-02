<template>
    <div class="container-fluid d-flex flex-column align-items-center">
        <div class="row m-4 col-8 offset-2 ">
            <div class="container-article d-flex flex-column-reverse ">
                <div class="card text-center" v-if="dataArticle" v-for="item in dataArticle" :key="item.id">  
                    <div class="card-body">
                        <div class="row">
                            <h2 class="card__title--user article-userName col-6 offset-3">{{ item.user_name }} {{ item.user_firstName }}</h2>
                        </div>
                        <h3 class="card__title article-title">{{ item.titre}}</h3>
                        <p class="article-content">{{ item.contenu }}</p>
                        <img v-if="item.image" :src="item.image" alt="">
                        
                        <div class="row">
                            <a v-if="item.id_User == sessionUserId || isAdmin == 1" @click="deletePost(item.id)" class="col-4 offset-4 btn btn__colorS mt-2 mb-2">Supprimer</a>
                        </div>
                        <button @click="getComments(item.id)" id="bttn" class="btn btn__colorP col-4" type="button" data-toggle="collapse" :data-target="'#collapseExample'+item.id" aria-expanded="false" aria-controls="collapseExample">
                            Commentaires
                        </button>
                        <div class="collapse" :id="'collapseExample'+item.id">
                            <div class="card__comment card-body" v-if="comment" v-for="comm in comment" :key="comm.id">
                                <h5>{{comm.user_name}} {{comm.user_firstName}}</h5>
                                <p>{{comm.commentaire}}</p>
                                <a v-if="comm.id_User == sessionUserId || isAdmin == 1" @click="deleteComment(comm.id)"  class=" offset-8 col-4 offset-1 btn btn__colorS"><span class="gradient">Supprimer</span></a>
                            </div>
                            <div class="card__comment">
                                <form id="formChecked">
                                    <div class="col-10 offset-1 col-md-8 offset-md-2 pt-4 pb-2">
                                        <textarea class="form-control card__comment" v-bind:id="item.id" placeholder="Commentaire" rows="1" aria-label="Textarea" required></textarea>
                                    </div>
                                </form> 
                            <div>
                            <a @click="createComment(item.id)" class="btn btn__colorP col-4 mt-2 mb-2" id="validate">Commenter</a>
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
import axios from "axios"


export default {
   name: 'Articles',
   data(){
       return {
           sessionUserId: sessionStorage.getItem("userId"),
           comment: '',
           isAdmin: sessionStorage.getItem("admin"),
           dataArticle: 
           axios.get('http://localhost:3000/article', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }})
           .then((response) => {
               this.dataArticle = response.data
               console.log(sessionStorage);
           })
       }
   },
   methods: {
       deletePost(data) {
           if(confirm("Supprimer ce post ?")){
               axios.delete('http://localhost:3000/article/'+ data, {
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
            console.log("userName:", userName);
            console.log("userFirstName:", userFirstName);
            console.log("userId:", userId);
            console.log("sessionStorage", sessionStorage);
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
   getComments(data){
       let bttn = document.getElementById('bttn')
       bttn.addEventListener("click", (e) => {
           document.querySelector('.collapse').add("hide")
       })
        this.comment = ''
            axios.get("http://localhost:3000/comment/" +  data  + "/comment", {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                }})
            .then((response) => {
            this.comment = response.data;
            console.log(this.comment);
            })
            .catch((err) => console.log("Erreur : " + err));
   },
   deleteComment(data) {
        if(confirm("Voulez-vous vraiment supprimer ce commentaire ?")){
        axios.delete("http://localhost:3000/comment/" + data, {
            method: "DELETE",
            headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("token"),
            }, 
        })
            .then(function(response) { 
                console.log(response);
                document.location.reload();
            }) 
            .catch(function(error) { 
                console.log(error); 
            });
        }},
}}
</script>
<style>

</style>