<template>
  <div>
    <Navbar/>
    <div>
    <img class="img d-flex col-10 offset-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3" alt="logo" src="../assets/icon-left-font-monochrome-black.svg">
    <button @click="active = !active" class="btn btn__colorS col-8 offset-2 col-md-4 offset-md-4  mt-5 mb-3" >Créer un post</button>
      <div v-if="active">
        <CreatePost/>
        </div>
        </div>
    <Articles/>
    <FooterAccueil/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Articles from '@/components/Articles.vue'
import CreatePost from '@/components/CreatePost.vue'
import FooterAccueil from '@/components/FooterAccueil.vue'

export default {
  name: 'Accueil',
  data(){
    return{
      active: false
    }
    
  },
  components: {
    Articles,
    Navbar,
    CreatePost,
    FooterAccueil
  }
}
</script>
