<template>

    <div class="footer">
        <div class="social-link">
            <a href="https://www.facebook.com/IncognitoGamingMada"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/_tendryone_/"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="link">
            <div class="link-content">
                <a href="#">Audiodescritpion</a>
                <a href="#">Relations Investisseurs</a>
                <a href="#">Informations légales</a>

            </div>
            <div class="link-content">
                <a href="#">Centre d'aide</a>
                <a href="#">Recrutement</a>
                <a href="#">Préférences de cookies</a>

            </div>
            <div class="link-content">
                <a href="#">Cartes Cadeaux</a>
                <a href="#">Conditions d'utilisation</a>
                <a href="#">Mentions Légales</a>

            </div>
            <div class="link-content">
                <a href="#">Presse</a>
                <a href="#">Confidentialité</a>
                <a href="#">Nous contacter</a>

            </div>

        </div>
        <div class="button-container">
            <a href="#">Code Service</a>
        </div>
        <div class="copyright">
            <p>TendryOne 2022 | All copyrights reserved</p>
        </div>
    </div>

</template>

<script lang="ts" setup>


</script>

<style>
.footer {
    height: 100%;
    background-color: #141414;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.footer .social-link {
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 50%;
}

.footer .social-link a {
    margin: 10px;
    font-size: 30px;
    color: white;
}

.footer .copyright {
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    color: rgba(128, 128, 128, 0.493);
}

.footer .link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
}

.footer .link .link-content {
    display: flex;
    flex-direction: column;
}

.footer .link .link-content a {
    color: gray;
    text-decoration: none;
    margin: 5px;
    font-size: 14px;
}

.footer .link .link-content a:hover {

    text-decoration: underline;

}

.button-container {
    display: flex;
    width: 50%;
    justify-content: flex-start;
    align-items: center;
}

.button-container a {
    border: 1px solid gray;
    background-color: transparent;
    color: gray;
    padding: 5px 10px;
    text-decoration: none;
}

.button-container a:hover {
    color: white;
}
</style>