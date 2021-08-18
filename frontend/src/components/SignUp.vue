<template>
<div class="container">
    
<form class="row col-10 offset-1" id="formChecked">
        <div class="col-10 offset-1 col-md-6 offset-md-0 space">
            <input type="email" class="form-control border-dark" id="inputEmail" placeholder="email" aria-label="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
        </div>
        <div class=" col-10 offset-1 col-md-6 offset-md-0 space">
            <input type="text" class="form-control border-dark" id="inputPassword" placeholder="password" aria-label="password" required>
        </div>
        <div class="col-10 offset-1 col-md-12 offset-md-0 space">
            <input type="text" class="form-control border-dark" id="inputName" placeholder="name" aria-label="name" required>
        </div>
        <div class="col-10 offset-1 col-md-12 offset-md-0 space">
            <input type="text" class="form-control border-dark" id="inputFirstName" placeholder="firstName" aria-label="firstName" required>
        </div>
        <div class="col-10 offset-1 col-md-12 offset-md-0 space">
            <input type="text" class="form-control border-dark" id="inputProfession" placeholder="profession" aria-label="profession" pattern="[A-Z][a-z]{2,50}" required>
        </div>
        <div class="col-10 offset-1 col-md-5 offset-md-0 space">
            <input type="text" class="form-control border-dark" id="admin" placeholder="admin" aria-label="admin" >
        </div>
    </form>
    <div>
        <a href="#" class="btn btn-dark bg-black col-4 offset-4 mt-3 mb-3" id="validate"><span class="white" >Valider</span></a>
    </div>
</div>
</template>
    


<script>


export default {
    name:'SignUp'
}
</script>
<style>

</style>