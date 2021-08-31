<template>
<div>
    <div class="footer__Wave mt-5">
        <svg id="wave" class="footer__Wave" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,21L34.3,17.5C68.6,14,137,7,206,3.5C274.3,0,343,0,411,7C480,14,549,28,617,38.5C685.7,49,754,56,823,49C891.4,42,960,21,1029,24.5C1097.1,28,1166,56,1234,66.5C1302.9,77,1371,70,1440,80.5C1508.6,91,1577,119,1646,115.5C1714.3,112,1783,77,1851,70C1920,63,1989,84,2057,98C2125.7,112,2194,119,2263,129.5C2331.4,140,2400,154,2469,157.5C2537.1,161,2606,154,2674,147C2742.9,140,2811,133,2880,126C2948.6,119,3017,112,3086,101.5C3154.3,91,3223,77,3291,59.5C3360,42,3429,21,3497,17.5C3565.7,14,3634,28,3703,38.5C3771.4,49,3840,56,3909,77C3977.1,98,4046,133,4114,133C4182.9,133,4251,98,4320,80.5C4388.6,63,4457,63,4526,66.5C4594.3,70,4663,77,4731,70C4800,63,4869,42,4903,31.5L4937.1,21L4937.1,210L4902.9,210C4868.6,210,4800,210,4731,210C4662.9,210,4594,210,4526,210C4457.1,210,4389,210,4320,210C4251.4,210,4183,210,4114,210C4045.7,210,3977,210,3909,210C3840,210,3771,210,3703,210C3634.3,210,3566,210,3497,210C3428.6,210,3360,210,3291,210C3222.9,210,3154,210,3086,210C3017.1,210,2949,210,2880,210C2811.4,210,2743,210,2674,210C2605.7,210,2537,210,2469,210C2400,210,2331,210,2263,210C2194.3,210,2126,210,2057,210C1988.6,210,1920,210,1851,210C1782.9,210,1714,210,1646,210C1577.1,210,1509,210,1440,210C1371.4,210,1303,210,1234,210C1165.7,210,1097,210,1029,210C960,210,891,210,823,210C754.3,210,686,210,617,210C548.6,210,480,210,411,210C342.9,210,274,210,206,210C137.1,210,69,210,34,210L0,210Z"></path>
        </svg>
    <router-link class="footer__bgColor navbar-brand footer--text" to="/accueil">Groupomania - 2021</router-link>
    </div>
    <div class="footer__bgColor">
        <router-link class=" navbar-brand footer--text" to="/accueil">Groupomania - 2021</router-link>
    </div>
</div>
</template>
<script>
import Articles from './Articles.vue';

export default {
  components: { Articles },
    name: 'Footer',
    methods: {
        returnAccueil(){
            sessionStorage.clear();
            
        }
    }
}
</script>
<style lang="scss">
$color-primary :#091f43 ;
$color-secondary : #d1515a;
$color-tertiary :  #d4d4d4;
.footer{
    &__Wave{
        display: block;
        position:  absolute;
        z-index: -2;
        width: 100%; 
        bottom: 0;
        fill: $color-primary; 
        opacity: 0.9; 
        @media screen and (max-width:650px) {
            display: none;
        }
    }
    &--text{
        color: $color-secondary !important;
        margin-right: 0 !important;
        @media screen and (max-width:650px) {
            margin-bottom: 0px;
            margin-right: 0 !important;
        }
    }
    &__bgColor{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: transparentize($color-primary, 1);
        
        width: 100%;
        @media screen and (max-width: 650px) {
            background-color:$color-primary !important;
            display: block;
        } 
    } 
}

</style>