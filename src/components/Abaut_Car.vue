<script setup>
import { ref } from "vue";

const menuOpen = ref(false)
</script>

<template>
    <div class="container-fluid min-vh-100 ">
        <div class="row ">
            <div class="col-12 d-flex align-items-center position-relative mt-4">
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
            <div v-if="menuOpen" class="col-12 d-lg-none d-flex flex-column gap-3 mt-4">
                <a class="text-white text-decoration-none fs-5" href="#">Bosh sahifa</a>
                <a class="text-white text-decoration-none fs-5" href="#">Mashinalar</a>
                <a class="text-white text-decoration-none fs-5" href="#">Kategoryalar</a>
                <a class="btn btn-outline-light rounded-4 px-4 py-3" href="#">Login</a>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center mt-5 ">
                <div id="carouselExampleIndicators" class="carousel slide rounded-5 overflow-hidden" data-bs-ride="carousel" data-bs-interval="2000">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/cars/jesco.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/cars/jesco2.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/cars/jesco3.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/cars/jesco4.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/cars/jesco5.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/cars/jesco6.webp" class="d-block w-100 rounded-5" alt="...">
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div class="box mt-5 px-3 px-md-5 py-4">
                    <p class="text-primary fw-bolder ">Sportcar · 2020</p>
                    <p class="text-white fs-1 fw-bolder">Koenigsegg Jesko</p>
                    <hr class="text-light-emphasis">
                    <p class="text-light fs-4 mt-4 ">Texnik xususiyatlari:</p>
                    <div class="d-flex flex-column w-100 mt-4">
                        <div class="s-box gap-3 d-flex d-flex flex-wrap align-content-start w-100 ">
                            <p class="text-dark-emphasis col-5 rounded-3 pt-2 fw-bolder ps-3">
                                Yil <br/>
                                <strong class="text-white">
                                    2020
                                </strong>
                            </p>
                            <p class="text-dark-emphasis col-5 rounded-3 pt-2 fw-bolder ps-3">
                                Yil <br/>
                                <strong class="text-white">
                                    2020
                                </strong>
                            </p>
                            <p class="text-dark-emphasis col-5 rounded-3 pt-2 fw-bolder ps-3">
                                Yil <br/>
                                <strong class="text-white">
                                    2020
                                </strong>
                            </p>
                            <p class="text-dark-emphasis col-5 rounded-3 pt-2 fw-bolder ps-3">
                                Yil <br/>
                                <strong class="text-white">
                                    2020
                                </strong>
                            </p>
                        </div>
                        <p class="mt-5 text-light fw-bolder">
                            Bu Agera afsonaviy modelining vorisi bo'lgan va mutlaq tezlik
                            rekordlarini o'rnatish uchun yaratilgan shved giperkari.
                            Avtomobil kompaniya asoschisi Kristian fon Kenigseggning otasi
                            Yesko fon Kenigsegg sharafigacha nomlangan. Jami 125 ta nusxani
                            ishlab chiqarish rejalashtirilgan bo'lib, uning butun seriyasi
                            e'lon qilingan bosqichdayoq 3 milliondan 4 million dollargacha
                            bo'lgan narxda to'liq sotib bo'lingan edi.
                        </p>
                        <a  href="https://www.koenigsegg.com/model/jesko-attack"
                            target="_blank"
                            class="btn btn-primary buy-btn rounded-4 mt-3 fs-3 d-flex align-items-center justify-content-center fw-bolder">
                            <i class="bi bi-cart3 me-2"></i>Sotib olish
                        </a>
                        <p class="text-body-emphasis mt-3 d-flex justify-content-center">
                            Rasmiy Sotib olish Joyi · Kirib toliq malumot oling
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.container-fluid{
    padding: 0 80px;
}
.box{
    height: 100%;

    width: 70%;
    margin-left: 100px;
    background-color: #18263d;
    border-radius: 5%;
    border: solid 2px #212137;
}
.carousel,
.box{
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(47, 107, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.12);
}
.text-dark-emphasis{
    background-color: #181f2e;
}
.buy-btn{
    height: 80px;
    transition: all 0.3s ease;
}
.buy-btn:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(13, 110, 253, 0.6);
}
@media (max-width: 991.98px){
    .container-fluid{
        padding: 0 16px 2rem;
    }
    .box{
        width: 100%;
        margin-left: 0;
    }
    .carousel{
        width: 100%;
    }
    .text-dark-emphasis{
        width: calc(50% - 0.5rem);
    }
    .buy-btn{
        height: 60px;
    }
}
</style>
<style>
body{
    background-color: #0e131c;
}
</style>