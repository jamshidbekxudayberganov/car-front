<script setup>
import { ref } from "vue";

const menuOpen = ref(false)
</script>

<template>
    <div class="container-fluid min-vh-100 ">
        <div class="row">
            <div class="col-12 d-flex align-items-center position-relative mt-4">
                <router-link class="fs-1 text-white fw-bolder text-decoration-none" to="/">CarWorld</router-link>
                <nav class="d-none d-lg-flex gap-4 position-absolute top-50 start-50 translate-middle">
                    <a class="text-white text-decoration-none fs-5" href="#">Bosh sahifa</a>
                    <a class="text-white text-decoration-none fs-5" href="#">Mashinalar</a>
                    <a class="text-white text-decoration-none fs-5" href="#">Kategoryalar</a>
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
            <div class="col-12">
                <p class="display-3 fw-bolder text-white mt-5">
                    Mashinalar
                </p>
            </div>
            <div class="row">
                <div class="col-12  mt-4 row g-4">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 gap-6">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100">
                            <img src="@/cars/koenigsegg-jesko.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bolder d-flex justify-content-center">Keonigsegg Jesko</h5>
                                <p class="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <router-link to="/inside"  class="btn btn-primary d-flex justify-content-center a">
                                    To'liq malumot
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid{
    background-color: #0e131c;
    padding: 0 80px ;

}
.card{
    background-color: #0e131c;
    border: 2px solid #ff9f43;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7),
    0 0 25px rgba(255, 159, 67, 0.3);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.card-title{
    color: #ff9f43;
}
.a{
    background-color: #ff9f43;
    border: #ff9f43;
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.9),
    0 0 35px rgba(255, 159, 67, 0.6);
}
@media (max-width: 991.98px){
    .container-fluid{
        padding: 0 16px;
    }
}
@media (max-width: 767px){
    .display-3{
        font-size: 2.2rem;
    }
}

</style>