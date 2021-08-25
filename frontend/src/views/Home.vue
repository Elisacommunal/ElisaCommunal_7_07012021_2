<template>
    <div class="home">
        <div class="wave__top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
        <img class="img d-flex col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" alt="logo" src="../assets/icon-left-font-monochrome-black.png">
        <div>
            <button @click="active = !active" class="btn btn__colorP col-4 offset-4 mt-3 mb-3" >S'inscrire</button>
            <div v-if="active">
            <SignUp/>
            </div>
        </div>
        <div>
            <button @click="active = !active" class="btn btn__colorP col-4 offset-4 mt-3 mb-3">S'identifier</button>
            <div v-if="!active">
            <LogIn/>
            </div>
        </div>
        <div class="wave__bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'

export default {
    name: 'Home',
    data() {
        return {
            active: true,
        }
    },
    components: {
        SignUp,
        LogIn
    }
  }
</script>