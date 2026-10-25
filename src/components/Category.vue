<script setup>

import CategoryCard from "@/small-detial/Category-card.vue";
</script>

<template>
    <div class="container-fluid d-flex justify-content-center align-items-center p-3">
        <div class="row w-100">
            <div class="col-12">
                <div class="box p-4 p-md-5 rounded-4 mx-auto">
                    <div class="row">
                        <div class="col-12 m-md-5 mb-3 d-flex align-items-center gap-3 ">
                            <div class="dot"></div>
                            <div class="fs-4 text-white">KATEGORIYALAR</div>
                        </div>
                        <div class="col-12 ms-md-4">
                            <p class="display-2 text-white fw-bolder">Ozingizga mos <br/>
                                <strong class="text-primary">mashinani tanlang</strong>
                            </p>
                        </div>
                        <div class="col-12 d-flex flex-column flex-xl-row align-items-center gap-xl-5">
                            <CategoryCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background-image: url("@/photos/bacground_category.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
}

.box {
    width: 92vw;
    max-width: 100%;
    min-height: 86vh;
    background: rgba(10, 18, 30, 0.15);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.dot {
    width: 100px;
    background-color: blue;
    height: 8px;
    border-radius: 4px;
    border: red;
}

@media (max-width: 767px) {
    .display-2 {
        font-size: 2rem;
    }
}

</style>