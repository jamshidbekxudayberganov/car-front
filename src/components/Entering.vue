<script setup>

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center position-relative">
                <p class="fs-1 text-white fw-bolder">CarWorld</p>
                <nav class="d-flex gap-4 position-absolute top-50 start-50 translate-middle">
                    <a href="#" class="text-white text-decoration-none fs-5">Bosh sahifa</a>
                    <a href="#" class="text-white text-decoration-none fs-5">Bosh sahifa</a>
                    <a href="#" class="text-white text-decoration-none fs-5">Bosh sahifa</a>
                </nav>
                <div class="d-flex justify-content-end align-items-center ms-auto gap-4">
                    <a href="#" class="text-white fs-4 text-decoration-none">
                        <i class="bi bi-search"></i>
                    </a>
                    <a href="#" class="btn btn-outline-light rounded-4 px-4 py-3">Login</a>
                </div>
            </div>
            <div class="col-12  mt-5 pt-5">
                <h1 class="display-1 fw-bolder text-white mb-0 ">
                    Yangi Mashinalar<br>
                    <span class="text-primary">Bilan Tanishing</span>
                </h1>
                <p class="fs-3 text-dark-emphasis fw-light mt-3">
                    Dunyoning eng yahshi avtomabillari <br> endilikda bir joyda
                </p>
                <a href="#" class="btn btn-primary mt-4 fs-1 rounded-4 tugmacha">Mashinalar bilan tanishing -></a>
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
.row{
    margin: 20px 110px ;
}

:global(body) {
    margin: 0;
}
.tugmacha {
    padding: 25px 35px;
}
</style>