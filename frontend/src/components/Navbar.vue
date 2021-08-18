<template>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid ">
            <router-link class="navbar-brand" to="/accueil">Groupomania</router-link>
              <div class="navbar" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="d-flex row nav-item active">
                        <router-link class="col-3 nav-link" to="/">Home</router-link>
                        <router-link class="col-3 nav-link" to="/about">About</router-link>

                    <a class="nav-link col-3" href="" title="Déconnexion">Déconnexion</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <!-- <img class="center2 row col-12 col-sm-8 col-md-6 col-lg-4" src="https://user.oc-static.com/upload/2019/09/04/15675819263013_image1.png" alt="Logo Orinoco"> -->
</template>
<script>

export default {
    name: 'Navbar'
}
</script>
<style scoped>

</style>