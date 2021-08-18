<template>
    <div class="container">
        <h2 class="text-center">S'identifier</h2>
    <form class="row col-10 offset-1" id="formChecked">
        <div class="col-10 offset-1 col-md-6 offset-md-0">
            <input type="email" class="form-control border-dark" id="inputEmail" placeholder="email" aria-label="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
        </div>
        <div class=" col-10 offset-1 col-md-6 offset-md-0">
            <input type="text" class="form-control border-dark" id="inputPassword" placeholder="password" aria-label="password" required>
        </div>
    </form>
    <div>
        <a href="#" class="btn btn-dark bg-black col-4 offset-4 mt-3 mb-3" id="validate"><span class="white" >Connexion</span></a>
    </div>
</div>
</template>
<script>


export default {
    
}
</script>
<style scoped>

</style>