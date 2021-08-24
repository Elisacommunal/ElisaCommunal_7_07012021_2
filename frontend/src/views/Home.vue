<template>
    <div class="home">
        <img class="img d-flex col-4 offset-4" alt="logo" src="../assets/icon-left-font-monochrome-black.png">
        <div>
            <button @click="active = !active" class="btn btn-dark bg-black col-4 offset-4 mt-3 mb-3" >S'inscrire</button>
            <div v-if="active">
            <SignUp/>
            </div>
        </div>
        <div>
            <button @click="active = !active" class="btn btn-dark bg-black col-4 offset-4 mt-3 mb-3" >S'identifier</button>
            <div v-if="!active">
            <LogIn/>
            </div>
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
<style>
    .img{
        height: 500px;
        margin-top: -150px;
        margin-bottom: -150px;
    }
</style>