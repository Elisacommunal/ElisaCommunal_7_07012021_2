<template>
    <div>
        <Navbar/> 
        <Profil/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Profil from '@/components/Profil.vue';
import Footer from '@/components/FooterProfil.vue'

import axios from 'axios';
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'Accueil',
  components: {
    Navbar,
    Profil,
    Footer
  }
}
</script>
