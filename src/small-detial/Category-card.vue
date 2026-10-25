<script setup>

</script>

<template>
    <div class="card mt-5 border overflow-hidden" style="width: 30rem;">
        <img alt="..." class="card-img-top" src="@/photos/sportcar.png">
        <div class="card-body d-flex justify-content-start align-items-center bg-dark bg-opacity-75 mt-5">
            <hr>
            <h5 class="card-title fs-2 text-white fw-bold">Sport</h5>
            <router-link
                to="/cards"
                class="btn rounded-circle fs-4 ms-auto
                                  text-white border border-light border-opacity-25"
                href="#"
            >
                -->
            </router-link>
        </div>
    </div>
    <!--                          Sportcar-->
    <div class="card mt-5 border overflow-hidden" style="width: 28rem;">
        <img alt="..." class="card-img-top pb-3" src="@/photos/SUV.png">
        <div class="card-body d-flex justify-content-start align-items-center bg-dark bg-opacity-75 mt-5">
            <hr>
            <h5 class="card-title fs-2 text-white fw-bold">SUV</h5>
            <a
                class="btn rounded-circle fs-4 ms-auto
                                  text-white border border-light border-opacity-25"
                href="#"
            >
                -->
            </a>
        </div>
    </div>
    <!--                          SUV-->
    <div class="card mt-5 border overflow-hidden" style="width: 28rem;">
        <img alt="..." class="card-img-top pb-3" src="@/photos/eletric.png">
        <div class="card-body d-flex justify-content-start align-items-center bg-dark bg-opacity-75 mt-5">
            <hr>
            <h5 class="card-title fs-2 text-white fw-bold">Electric</h5>
            <a
                class="btn rounded-circle fs-4 ms-auto
                                  text-white border border-light border-opacity-25"
                href="#"
            >
                -->
            </a>
        </div>
    </div>
    <!--                          elektr-->
    <div class="card mt-5 border overflow-hidden" style="width: 28rem;">
        <img alt="..." class="card-img-top mb-3" src="@/photos/luxury.png">
        <div class="card-body d-flex justify-content-start align-items-center bg-dark bg-opacity-75 mt-5">
            <hr>
            <h5 class="card-title fs-2 text-white fw-bold">Luxury</h5>
            <a
                class="btn rounded-circle fs-4 ms-auto
                                  text-white border border-light border-opacity-25"
                href="#"
            >
                -->
            </a>
        </div>
    </div>
    <!--                          ?luxury-->

</template>

<style scoped>
.card {
    background-image: url("@/photos/bg-card.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.card-img-top {
    transform: translateY(58px) scale(0.9);
    transform-origin: center bottom;
}

a:hover {
    background: rgba(255, 255, 255, .12);
    backdrop-filter: blur(8px);
}

@media (max-width: 1199.98px) {
    .card {
        width: 100% !important;
        max-width: 28rem;
    }
}

.card:hover {
    border-color: #2f6bff !important;
    box-shadow: 0 0 24px rgba(47, 107, 255, 0.55), inset 0 0 30px rgba(47, 107, 255, 0.2);
}

.card:hover {
    transform: scale(1.05);
    border-color: #2f6bff !important;
    box-shadow: 0 0 24px rgba(47, 107, 255, 0.55), inset 0 0 30px rgba(47, 107, 255, 0.2);
}

</style>