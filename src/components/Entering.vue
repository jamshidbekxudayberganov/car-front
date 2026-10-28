<script setup>
import {ref} from 'vue'

const menuOpen = ref(false)
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center position-relative">
                <router-link class="fs-1 text-white fw-bolder text-decoration-none" to="/">CarWorld</router-link>
                <nav class="d-none d-lg-flex gap-4 position-absolute top-50 start-50 translate-middle">
                    <router-link to="/" class="text-white text-decoration-none fs-5" href="#">Bosh sahifa</router-link>
                    <router-link to="/cards" class="text-white text-decoration-none fs-5" href="#">Mashinalar</router-link>
                    <router-link to="/category" class="text-white text-decoration-none fs-5" href="#">Kategoryalar</router-link>
                </nav>
                <div class="d-flex justify-content-end align-items-center ms-auto gap-4">
                    <a class="text-white fs-4 text-decoration-none" href="#">
                        <i class="bi bi-search"></i>
                    </a>
                    <a class="btn btn-outline-light rounded-4 px-4 py-3 d-none d-lg-inline-block" href="#">Login</a>
                    <button
                        :aria-expanded="menuOpen"
                        aria-label="Menyu"
                        class="btn btn-outline-light rounded-4 px-3 py-2 d-lg-none" type="button"
                        @click="menuOpen = !menuOpen"
                    >
                        <i :class="menuOpen ? 'bi-x-lg' : 'bi-list'" class="bi fs-5"></i>
                    </button>
                </div>
            </div>
            <div :class="{ show: menuOpen }" class="col-12 d-lg-none collapse">
                <nav
                    class="d-flex flex-column mt-3 px-3 rounded-4 bg-dark bg-opacity-75 border border-light border-opacity-25"
                >
                    <a
                        class="text-white text-decoration-none fs-5 py-3 border-bottom border-light border-opacity-25"
                        href="#"
                        @click="menuOpen = false"
                    >
                        Bosh sahifa
                    </a>
                    <a
                        class="text-white text-decoration-none fs-5 py-3 border-bottom border-light border-opacity-25"
                        href="#"
                        @click="menuOpen = false"
                    >
                        Mashinalar
                    </a>
                    <a
                        class="text-white text-decoration-none fs-5 py-3 border-bottom border-light border-opacity-25"
                        href="#"
                        @click="menuOpen = false"
                    >
                        Kategoriyalar
                    </a>
                    <a
                        class="btn btn-outline-light rounded-4 py-2 my-3"
                        href="#">Login</a>
                </nav>
            </div>
            <div class="col-12  mt-4 pt-4 mt-lg-5 pt-lg-5">
                <h1 class="display-1 fw-bolder text-white mb-0 ">
                    Yangi Mashinalar<br>
                    <span class="text-primary">Bilan Tanishing</span>
                </h1>
                <p class="fs-3 text-dark-emphasis fw-light mt-3">
                    Dunyoning eng yahshi avtomabillari <br class="d-none d-md-inline"> endilikda bir joyda
                </p>
                <router-link class="btn btn-primary mt-4 fs-1 rounded-4 tugmacha d-block d-md-inline-block"
                             href="#" to="/category"
                >
                    Mashinalar bilan tanishing ->
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    min-height: 100vh;
    width: 100%;
    background-image: url("src/photos/carworld-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flow-root;
}

.row {
    margin: 20px 110px;
}

:global(body) {
    margin: 0;
}

.tugmacha {
    padding: 25px 35px;
}

@media (max-width: 991.98px) {
    .row {
        margin: 12px 16px;
    }

    .display-1 {
        font-size: clamp(2rem, 9vw, 3.5rem);
    }
}

@media (max-width: 991.98px) and (orientation: portrait) {
    .container-fluid {
        background-image: linear-gradient(#0e131c 45%, transparent 65%), url("src/photos/carworld-background.jpg");
        background-size: 100% 100%, auto 55%;
        background-position: 0 0, 88% 100%;
        background-attachment: scroll;
    }
}

@media (max-width: 767.98px) {
    .tugmacha {
        padding: 16px;
        font-size: 1.05rem !important;
    }
}
</style>