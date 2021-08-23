<template>
  <div>
    <Navbar/>
    <div>
    <button @click="active = !active" class="btn btn-dark bg-black col-4 offset-4 mt-3 mb-3" >Créer un post</button>
      <div v-if="active">
        <CreatePost/>
        </div>
        </div>
    <Articles/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Articles from '@/components/Articles.vue'
import CreatePost from '@/components/CreatePost.vue'

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
    
  }
}
</script>
