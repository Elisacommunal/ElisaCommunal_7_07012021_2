<template>
    <div class="container-fluid d-flex flex-column align-items-center">
        <div class="row m-4 col-12 col-md-8 offset-md-2 ">
            <div class="container-article d-flex flex-column-reverse ">
                <div class="card text-center" v-if="dataArticle" v-for="item in dataArticle" :key="item.id">  
                    <div class="card-body">
                        <button class="btn--collapse offset-11" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" :data-target="'#collapseExample'+item.id" aria-controls="collapseExample"><i class="fas fa-ellipsis-v"></i></button>
                        <div class="collapse" :id="'collapseExample'+item.id">
                            <div class="row">
                                <a v-if="item.id_User == sessionUserId || isAdmin == 1" @click="deletePost(item.id)" class="offset-10 col-2 btn btn__colorS mt-2 mb-2"><i class="fas fa-trash-alt"></i></a>
                            </div>
                        </div>
                        <img class="article__profilPic " v-if="item.user_profilPic" :src="item.user_profilPic" alt=""> 
                        <div class="row">
                            
                            <h2 class="card__title--user article-userName col-6 offset-3">{{ item.user_name }} {{ item.user_firstName }}</h2>
                        </div>
                        <div>
                            <h3 class="card__title article-title">{{ item.titre}}</h3>
                            <p class="article-content">{{ item.contenu }}</p>
                            <img class="article__img" v-if="item.image" :src="item.image" alt=""> 
                        </div>  
                        <button @click="getComments(item.id)" type="button" id="btnModal" class="btn btn__colorP col-8 col-md-4 " data-toggle="modal" :data-target="'#myModal'+item.id" aria-expanded="false">Commenter</button>
                        <div class="modal fade" :id="'myModal'+item.id" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close btn btn-close" data-dismiss="modal"></button>
                                </div>
                                <div class="card__comment card-body" v-if="comment" v-for="comm in comment" :key="comm.id">
                                    <h5>{{comm.user_name}} {{comm.user_firstName}}</h5>
                                    <p>{{comm.commentaire}}</p>
                                    <a v-if="comm.id_User == sessionUserId || isAdmin == 1" @click="deleteComment(comm.id)"  class=" offset-8 col-4 offset-1 btn btn__colorS"><span class="gradient">Supprimer</span></a>
                                </div>
                                <div class="card__comment card-body" v-else>
                                    <h5>Il n'y a pas de commentaire pour l'instant 🤔</h5>
                                </div>
                                <div class="card__comment">
                                    <form id="formChecked">
                                        <div class="col-10 offset-1 col-md-8 offset-md-2 pt-4 pb-2">
                                            <textarea class="form-control card__comment" v-bind:id="item.id" placeholder="Commentaire" rows="1" aria-label="Textarea" required></textarea>
                                        </div>
                                    </form> 
                                <div>
                                <a @click="createComment(item.id)" class="btn btn__colorP col-8 col-md-4 mt-2 mb-2" id="validate">Commenter</a>
                                </div>
                                </div>
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
import VueJwtDecode from "vue-jwt-decode";

export default {
   name: 'Articles',
   data(){
       return {
           sessionUserId: VueJwtDecode.decode(sessionStorage.getItem("token")).id,
           comment: '',
           isAdmin: VueJwtDecode.decode(sessionStorage.getItem("token")).isAdmin,
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
            const userName = VueJwtDecode.decode(sessionStorage.getItem("token")).userName;
            const userFirstName = VueJwtDecode.decode(sessionStorage.getItem("token")).userFirstName;
            const userId = VueJwtDecode.decode(sessionStorage.getItem("token")).id;
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
        }
    },
}}
</script>
<style lang="scss" scoped>
$color-primary :#091f43 ;
$color-secondary : #d1515a;
$color-tertiary :  #d4d4d4;
.article{
    &__img{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        height: 400px;
        object-fit: cover;
        object-position: 50% 50%;
        margin-bottom: 30px;
        border-radius: 15px;
        box-shadow: rgba(12, 12, 39, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 20px 20px -20px;
        @media screen and (max-width: 767px) {
                width: 350px;
                height: 350px;
        }
        @media screen and (max-width: 568px) {
                width: 250px;
                height: 250px;
        }
        @media screen and (max-width: 400px) {
                width: 200px;
                height: 200px;
        }   
    }
    &__profilPic{
        border-radius: 50% ;
        border: transparentize($color-secondary, .2) solid 4px;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: 50% 50%;
    }
}
.btn-close{
    background-color: $color-secondary;
}
.btn--collapse{
    background-color: none;
    border: none; 
}

.fa-ellipsis-v{
    color: $color-secondary;
    font-size: 25px;
}
</style>