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
                                <a class="col-4 offset-1 btn btn-dark article-link">Modifier</a>
                                <a @click="deletePost(item.id)" class="col-4 offset-1 btn btn-danger article-link">Supprimer</a>
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
   methods: {
       deletePost(data) {
           if(confirm("Supprimer ce post ?")){
               axios.delete('http://localhost:3000/article/' + data, {
                   method: "DELETE",
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
}
</script>
<style>

</style>