<template>
    <div class="Admin-Episode-Form">
        <h1>{{ route.params.filmAdd ? 'Admin Episode Post' : 'Admin Episode Edit' }}</h1>
        <Form @submit="MySubmit" v-slot="{ values, errors, meta }">

            <div class="label">
                <label> Episode : </label>
                <Field name="Episode" type="number" placeholder="numero de l'episode" />
            </div>

            <div class="label">
                <label> Lien Video </label>
                <Field name="videoLink" type="text" placeholder="Le lien pour le showroom de l'image ici..." />
            </div>
            <div class="label">
                <label> Durée de l'episode </label>
                <Field name="duration" type="number" placeholder="Le lien de l'image ici..." />
            </div>
            <div class="label">
                <label> Saison</label>
                <Field name="season" type='number' placeholder="Saison" />
            </div>
            <div class="label">
                <label> Description de l'épisode</label>
                <Field name="description" as="textarea" />
                <p v-if="values.description">Nbres de caractères : {{ values.description.length }}</p>
            </div>
            <div class="button-container">
                <button class="button" type="submit"> submit </button>
            </div>
            <pre style="color : black"> {{ values }}</pre>
        </Form>
    </div>


</template>


<script setup lang="ts">
import { useForm, useField, Form, ErrorMessage, Field, configure } from 'vee-validate'
import type { episodeInterface } from '@/interface/episode.interface';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';



// _id : string
//     Episode : string
//     videoLink : string
//     duration : number
//     description : string
//     season : string
//     createdAt : string  

const episode = ref<episodeInterface | null>(null)

const route = useRoute()
const router = useRouter()


async function MySubmit(values: episodeInterface) {
    try {
        if (route.params.filmAdd) {
            await fetch(`https://restapi.fr/api/${route.params.filmAdd}`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'content-Type': 'application/json'
                }
            })
        }
    }

    catch (error) {
        console.log(error)
    }
    router.push(`/admin/addEpisode/${route.params.filmAdd}`)
}


</script>


<style scoped>
form {
    min-height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.Admin-Episode-Form {
    color: black;
    min-width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.label {
    width: 80vh;
}

.button-container {
    margin: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 60%;
    height: 100%;

}

.button {
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    font-size: 15px;
    margin-right: 10px;
    border-radius: 3px;
    background-color: rgba(38, 187, 187, 0.795);
}

.button:hover {
    opacity: 0.8;
}
</style>