<template>
  <div>
    <router-link class="col-10 offset-1 mt-2 btn btn-dark article-link" to="/creer">Créer un post</router-link>
    <Articles/>
  </div>
</template>

<script>
// @ is an alias to /src
import Articles from '@/components/Articles.vue'

export default {
  name: 'Accueil',
  components: {
    Articles
  }
}
</script>
