<template>
    <div class="home">
        <div class="wave__top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
        <img class="img d-flex col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" alt="logo" src="../assets/icon-left-font-monochrome-black.png">
        <div class="container">
            <div class="row">
                <div class="card">
                    <h1 class="card__title text-center mt-3" v-if="mode == 'login'">Connexion</h1>
                    <h1 class="card__title text-center mt-3" v-else>Inscription</h1>
                    <p class="card__content text-center " v-if="mode == 'login'">Pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
                    <p class="card__content text-center" v-else>Dejà inscrit(e) ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
                    <div class="form-row" v-if="mode == 'login'">
                        <LogIn/>
                    </div>
                    <div class="form-row" v-if="mode == 'create'">
                        <SignUp/>
                    </div>
                </div>
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

import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'

export default {
    name: 'Home',
    data() {
        return {
            active: true,
            mode: 'login',
        }
    },
    components: {
        SignUp,
        LogIn
    },
    methods: {
        switchToCreateAccount: function () {
            this.mode = 'create';
        },
        switchToLogin: function () {
            this.mode = 'login'
        },
    },
  } 
  
</script>
<style lang="scss" scoped>
/*Variables*/
$color-primary :#091f43 ;
$color-secondary : #d1515a;
$color-tertiary :  #d4d4d4;


.wave {
    &__top{
        position: relative;
        z-index: -2;
        margin-bottom: -170px;
        height: 94px; 
        width: 100%; 
        fill: $color-secondary; 
        opacity: 0.9; 
        transform:rotateY(180deg);
    }
    &__bottom{
        position: relative;
        bottom: 0 !important;
        z-index: -2;
        height: 94px; 
        width: 100%; 
        fill: $color-primary; 
        opacity: 0.8; 
        transform: rotateY(180deg) rotate(180deg);
    } 
}
</style>