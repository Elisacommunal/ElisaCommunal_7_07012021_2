<template>
<div class="navbar__Wave">
    <svg id="wave" viewBox="0 0 1440 210" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,21L48,38.5C96,56,192,91,288,105C384,119,480,112,576,101.5C672,91,768,77,864,59.5C960,42,1056,21,1152,14C1248,7,1344,14,1440,24.5C1536,35,1632,49,1728,52.5C1824,56,1920,49,2016,49C2112,49,2208,56,2304,56C2400,56,2496,49,2592,38.5C2688,28,2784,14,2880,24.5C2976,35,3072,70,3168,94.5C3264,119,3360,133,3456,143.5C3552,154,3648,161,3744,140C3840,119,3936,70,4032,45.5C4128,21,4224,21,4320,24.5C4416,28,4512,35,4608,63C4704,91,4800,140,4896,143.5C4992,147,5088,105,5184,84C5280,63,5376,63,5472,59.5C5568,56,5664,49,5760,49C5856,49,5952,56,6048,66.5C6144,77,6240,91,6336,112C6432,133,6528,161,6624,157.5C6720,154,6816,119,6864,101.5L6912,84L6912,210L6864,210C6816,210,6720,210,6624,210C6528,210,6432,210,6336,210C6240,210,6144,210,6048,210C5952,210,5856,210,5760,210C5664,210,5568,210,5472,210C5376,210,5280,210,5184,210C5088,210,4992,210,4896,210C4800,210,4704,210,4608,210C4512,210,4416,210,4320,210C4224,210,4128,210,4032,210C3936,210,3840,210,3744,210C3648,210,3552,210,3456,210C3360,210,3264,210,3168,210C3072,210,2976,210,2880,210C2784,210,2688,210,2592,210C2496,210,2400,210,2304,210C2208,210,2112,210,2016,210C1920,210,1824,210,1728,210C1632,210,1536,210,1440,210C1344,210,1248,210,1152,210C1056,210,960,210,864,210C768,210,672,210,576,210C480,210,384,210,288,210C192,210,96,210,48,210L0,210Z"></path></svg>
</div>
 <div class="navbar__wave">
    <svg id="wave" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,21L48,38.5C96,56,192,91,288,105C384,119,480,112,576,101.5C672,91,768,77,864,59.5C960,42,1056,21,1152,14C1248,7,1344,14,1440,24.5C1536,35,1632,49,1728,52.5C1824,56,1920,49,2016,49C2112,49,2208,56,2304,56C2400,56,2496,49,2592,38.5C2688,28,2784,14,2880,24.5C2976,35,3072,70,3168,94.5C3264,119,3360,133,3456,143.5C3552,154,3648,161,3744,140C3840,119,3936,70,4032,45.5C4128,21,4224,21,4320,24.5C4416,28,4512,35,4608,63C4704,91,4800,140,4896,143.5C4992,147,5088,105,5184,84C5280,63,5376,63,5472,59.5C5568,56,5664,49,5760,49C5856,49,5952,56,6048,66.5C6144,77,6240,91,6336,112C6432,133,6528,161,6624,157.5C6720,154,6816,119,6864,101.5L6912,84L6912,210L6864,210C6816,210,6720,210,6624,210C6528,210,6432,210,6336,210C6240,210,6144,210,6048,210C5952,210,5856,210,5760,210C5664,210,5568,210,5472,210C5376,210,5280,210,5184,210C5088,210,4992,210,4896,210C4800,210,4704,210,4608,210C4512,210,4416,210,4320,210C4224,210,4128,210,4032,210C3936,210,3840,210,3744,210C3648,210,3552,210,3456,210C3360,210,3264,210,3168,210C3072,210,2976,210,2880,210C2784,210,2688,210,2592,210C2496,210,2400,210,2304,210C2208,210,2112,210,2016,210C1920,210,1824,210,1728,210C1632,210,1536,210,1440,210C1344,210,1248,210,1152,210C1056,210,960,210,864,210C768,210,672,210,576,210C480,210,384,210,288,210C192,210,96,210,48,210L0,210Z"></path>
    </svg>
</div>
    <nav class="navbar navbar-expand  navbar__bgColor"> 
        <div class="container-fluid ">
        <router-link class="navbar-brand navbar--title" to="/accueil">Groupomania</router-link>
            <div class="navbar" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="d-flex row nav-item active">   
                        <router-link class="navbar--text col-4 nav-link" to="/profil">Profil</router-link>
                        <router-link @click="returnAccueil()" class="navbar--text nav-link col-4" to="/">Déconnexion</router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
</template>
<script>

export default {
    name: 'Navbar',
    methods: {
        returnAccueil(){
            sessionStorage.clear();  
        }
    }
}
</script>
<style lang="scss" scoped>
/*Variables*/
$color-primary :#091f43 ;
$color-secondary : #d1515a;
$color-tertiary :  #d4d4d4;


.navbar{
    &__wave{
        position: absolute;
        top: 0 !important;
        width: 100%; 
        fill: $color-primary; 
        opacity: 0.9; 
        transform: rotateY(180deg) rotate(180deg);
        @media screen and (max-width: 975px) {
            display: none;
        }
    }
    &__Wave{
        display: none;
        position: absolute;
        top: 0 !important;
        width: 100%; 
        fill: $color-primary; 
        opacity: 0.9; 
        transform: rotateY(180deg) rotate(180deg);
        @media screen and (max-width: 975px) {
            display: block;
        }
        @media screen and (max-width:650px) {
            display: none;
        }
    }
    &--text{
        color: $color-tertiary !important;
        &:hover{
            transition: 600ms;
            color: $color-secondary !important;     
        }
    }
    &--title{
            font-weight: 600;
            color: $color-tertiary !important
        }
    &__bgColor{
        position: relative;
        background-color: transparentize($color-primary, 1);
        height: 60px;
        @media screen and (max-width: 650px) {
            background-color:$color-primary;
        } 
    }  
}

</style>