<template>
    <div class="admin-post">
        <h1>{{ route.params.FilmId ? 'Admin Edit' : 'Admin Post' }}</h1>
        <div class="progress-bar">
            <div class="step">
                <span class="bullet" :class="{ done: step > 0 }">
                    {{ step > 0 ? '✔' : '1' }}</span>
                <p>Etape 1 </p>
            </div>
            <div class="step">
                <span class="bullet" :class="{ done: step > 1 }">
                    {{ step > 1 ? '✔' : '2' }}</span>
                <p>Etape 2 </p>
            </div>
            <div class="step">
                <span class="bullet" :class="{ done: step > 2 }">{{ step > 2 ? '✔' : '3' }}</span>
                <p>Etape 3</p>
            </div>
            <div class="step">
                <span class="bullet" :class="{ done: step > 3 }"><i class="fa-solid fa-eye"></i></span>
                <p>Apperçu</p>
            </div>
            <div class="step">
                <span :class="{ finaldone: step > 4 }" class="bullet"><i class="fa-solid fa-flag"></i></span>
                <p>Soumission</p>
            </div>
        </div>
        <Form @submit="MySubmit" v-slot="{ values, errors, meta }" keep-values :initial-values="initialValues">

            <div v-if="step === 0">
                <div class="label">
                    <label><i class="fa-solid fa-book"></i> Titre du film</label>
                    <Field :rules="nameValidator" name="name" type="text" placeholder="Titre du film ici..." />
                    <ErrorMessage class="error" name='name' />
                </div>
                <div class="label">
                    <label><i class="fa-solid fa-lines-leaning"></i> Categories</label>
                    <div class="label-Categories">
                        <div v-for="categories in state.category" class="categories-list">
                            <Field :rules="categoryValidator" name="categories" type='checkbox' :value="categories"
                                :id="categories" />
                            <label :for="categories"> {{ categories }} </label>
                        </div>


                    </div>
                    <ErrorMessage class="error" name="categories" />
                </div>

                <div v-show="values.categories.length" class="nb">
                    <p v-for="val in values.categories">{{ val }}</p>
                </div>

            </div>
            <div v-if="step === 1">
                <div class="label">
                    <label> <i class="fa-solid fa-video"></i> Showroom</label>
                    <Field :rules="showroomValidator" name="showroom" type="text"
                        placeholder="Le lien pour le showroom de l'image ici..." />
                    <ErrorMessage v-if="errors.showroom && meta.touched && meta.dirty" class="error" name="showroom" />
                </div>
                <div class="label">
                    <label> <i class="fa-solid fa-image"></i> Image</label>
                    <Field :rules="imageValidator" name="image" type="text" placeholder="Le lien de l'image ici..." />
                    <ErrorMessage v-if="errors.image && meta.touched && meta.dirty" class="error" name='image' />
                </div>
                <div class="label">
                    <label><i class="fa-solid fa-photo-film"></i> Trailer</label>
                    <Field :rules="trailerValidator" name="trailer" type="text"
                        placeholder="Le lien du trailer video ici..." />
                    <ErrorMessage v-if="errors.trailer && meta.touched && meta.dirty" class="error" name="trailer" />
                </div>
            </div>
            <div v-if="step === 2">
                <div class="label">
                    <fieldset>
                        <legend><i style="color: #1dd1a1 " class="fa-solid fa-circle-check"></i> Le film / Serie est-il
                            certifié GETFLIX ? </legend>
                        <div class="finger">
                            <div>
                                <Field :rules="CertifiedValidator" name="Certified" type='radio' value='Certified'
                                    id="True" />
                                <label for="True"> Oui</label>
                            </div>
                            <div>

                                <Field name="Certified" type='radio' value='Not Certified' id="False" />
                                <label for='False'> Non</label>

                            </div>
                        </div>


                    </fieldset>
                    <ErrorMessage v-if="errors.Certified && meta.touched && meta.dirty" class="error"
                        name="Certified" />
                </div>
                <div class="label">
                    <fieldset>
                        <legend> <i class="fa-solid fa-film"></i> Type</legend>

                        <div class="finger">
                            <div>

                                <Field :rules="TypeValidator" name="Type" type='radio' value="Film" id="film" />
                                <label for="film"> Film</label>
                            </div>
                            <div>

                                <Field name="Type" type='radio' value="Serie" id="serie" />
                                <label for='serie'> Serie </label>
                            </div>
                        </div>


                    </fieldset>
                    <ErrorMessage class="error" name="Type" />
                    <Transition name="fade">
                        <div class="label" v-if="values.Type === 'Serie'">
                            <label> Nombre de Saison </label>
                            <Field :rules="SeasonNumberValidator" name="SeasonNumber" type=number i />
                            <ErrorMessage class="error" name="SeasonNumber" />
                        </div>
                    </Transition>
                </div>
            </div>

            <div v-if="step === 3">
                <div class="label">
                    <label> <i class="fa-solid fa-text-height"></i> Description </label>
                    <Field :rules="descriptionValidator" name="description" as="textarea"
                        placeholder="Description du film...." />
                    <ErrorMessage class="error" v-if="errors.description && meta.touched" name="description" />
                    <p style="color: black ;" v-if="values.description">Nbres de caractères : {{
                            values.description.length
                    }}</p>
                </div>
            </div>
            <div class="overview" v-if="step === 4">

                <div class="img-container" :style="{ backgroundImage: `url('${values.image}')` }"></div>
                <div class="overview-container">
                    <p>
                    <h4>Nom : </h4> <span>{{ values.name }}</span>
                    </p>
                    <p>
                    <h4>Categories : </h4> <span class="category" v-for="categories in values.categories">{{ categories
                    }}</span></p>
                    <p>
                    <h4>Certifié : </h4> <span v-if="values.Certified === 'Certified'" style="color: #1dd1a1 ;">GetFlix
                        <i class="fa-solid fa-circle-check"></i></span>
                    <span v-else style="color : #eb4d4b">GetFlix <i class="fa-solid fa-ban"></i></span></p>
                    <p>
                    <h4>Nombres de Saison : </h4> <span>{{ values.SeasonNumber }}</span></p>
                    <p>
                    <h4>Type : </h4> <span>{{ values.Type }}</span></p>
                    <p>
                    <h4>Synopsis : </h4> <span>{{ values.description }}</span></p>

                </div>

            </div>


            <div class="final" v-if="step === 5">
                <h1>Felicitations votre {{ values.Type === 'Serie' ? "Serie" : "Film" }} a bien été créé</h1>
                <p style="color: black ">Vous allez maintenant être rediriger au page Admin Management <i
                        style="color: #1dd1a1 " class="fa-solid fa-circle-check"></i></p>
                <img src="https://www.gifcen.com/wp-content/uploads/2021/07/well-done-gif-16.gif" />
            </div>
            <div class=" button-container">
                <button v-if="step > 0 && step < 5" @click="step--" class="button" type="button"> ⇽ Previous
                </button>
                <button v-if="step < 3" class="button" type="submit"> Suivant ⇾ </button>
                <button v-if="step === 3" class="button" type="submit"> Apperçu <i class="fa-solid fa-eye"></i></button>
                <button v-else-if="step === 4" class="button" type="submit"> Publier <i
                        class="fa-solid fa-share-nodes"></i> </button>

            </div>

        </Form>

    </div>
</template>
<script setup lang="ts">


import { Form, ErrorMessage, Field, configure } from 'vee-validate'
import { z } from 'zod'
import { toFieldValidator } from '@vee-validate/zod'
import { Getfetch } from '@/shared/services';
import { useRoute, useRouter } from 'vue-router';
import type { carousselInterface } from '@/interface/caroussel.interface';
import { reactive, ref } from 'vue';
const route = useRoute()
const router = useRouter()
const film = ref<carousselInterface | null>(null)
const step = ref<number>(0)

const state = reactive<{
    category: Array<string>
}>({
    category: ['Anime', 'Policier', 'Sciences-Fiction', 'Comedies', 'Thriller', 'Documentaires', 'Horreur', 'Guerre', 'Fantastiques', 'Drames', 'Action', "Aventure", "Jeu d'argent"]
})

if (route.params.FilmId) {
    film.value = await Getfetch(route.params.FilmId as string)
}


const nameValidator = toFieldValidator(z.string({ required_error: 'Votre post doit avoir un titre .' }).min(1, { message: 'doit contenir au moins 1 caractères .' }).max(30, { message: 'Le titre ne peut excéder 20 caractères .' }))
const categoryValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide', }).array().min(1, { message: 'Doit contenir au moins une ou plusieurs categories' }),)
const descriptionValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(50, { message: "Ce champ doit contenir au moins 50 caractères" }),)
const showroomValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(1, ({ message: 'doit contenir plus de 1 caractères .' })),)
const imageValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(1, ({ message: 'doit contenir plus de 1 caractères .' })),)
const trailerValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(1, ({ message: 'doit contenir plus de 1 caractères .' })),)
const CertifiedValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(1, ({ message: 'Ce champ ne doit pas être vide' })),)
const TypeValidator = toFieldValidator(z.string({ required_error: 'Ce champ ne doit pas être vide' }).min(1, ({ message: 'Ce champ ne doit pas être vide' })),)
const SeasonNumberValidator = toFieldValidator(z.string().regex(new RegExp('[1-9]'), { message: 'le Nombre de saison doit être un chiffre ou 2 nombres maximum' }).min(1, { message: "doit contenir au moins 1 chiffre" }).max(2, { message: 'Seul Game Of Thrones peut avoir plus de 3000 épisodes' }))



const initialValues = {
    name: film.value ? film.value.name : '',
    categories: film.value ? film.value.categories : [],
    showroom: film.value ? film.value.showroom : '',
    image: film.value ? film.value.image : '',
    trailer: film.value ? film.value.trailer : '',
    description: film.value ? film.value.description : '',
    Type: film.value ? film.value.Type : '',
    Certified: film.value ? film.value.Certified : 'Not Certified',
    SeasonNumber: film.value ? film.value.SeasonNumber : '1',


}


configure({
    validateOnBlur: false, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});


async function MySubmit(values: carousselInterface) {
    step.value++
    if (step.value > 4) {
        try {

            if (film.value) {
                await fetch(`https://restapi.fr/api/getfilm/${film.value!._id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(values),
                    headers: {
                        'content-Type': 'application/json'
                    }

                })
            }
            else {
                await fetch('https://restapi.fr/api/getfilm', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'content-Type': 'application/json'
                    }

                })
            }


        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {
            router.push('/admin/management')
        }, 3000)

    }
}

</script>







<style scoped>
/* progress bar */
/* we will explain what these classes do next! */

.overview-container {
    display: flex;
    flex-direction: column;
    width: 700px;
}

.overview-container p {
    display: flex;
    margin: 5px;
    flex-wrap: wrap;

}

.overview-container p h4 {
    flex: 200px 0 0;

}

.overview p span {
    flex: 1 1 0;
}

.overview-container .category {
    border: 1px solid #1dd1a1;
    padding: 2px 10px;
    border-radius: 30px;
    margin: 0 5px 0 0;
    color: black;
    background-color: #74baff54;
    display: flex;
    align-items: center;
    justify-content: center;



}

.img-container {
    display: flex;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 250px;
    width: 250px;
}

.overview {
    color: #000000;
    display: flex;
    border: 1px solid black;
    padding: 5px;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.233);

}

.final {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(50%);
    opacity: 0;
}

.progress-bar {
    color: black;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.progress-bar .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 150px;

}

.progress-bar .step .bullet {
    border: 1px solid #74b9ff;
    background-color: #74b9ff;
    border-radius: 50%;
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}

.progress-bar .step .finaldone {
    background-color: #1dd1a1;
    border: 1px solid #1dd1a1;
}

.progress-bar .step .done {
    transition: 0.5s;
    background-color: #1dd1a1;
    border: 1px solid #1dd1a1;

}



.progress-bar .step:nth-child(5) .bullet::after {
    content: '';
    width: 0;
    height: 0;
}

.progress-bar .step .bullet::after {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    width: 16vw;
    height: 10px;
    border-bottom: 1px solid #74b9ff;
    border-Top: 1px solid #74b9ff;
    left: 100%;
}

.progress-bar .step .bullet::before {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 10px;
    background-color: #1dd1a1;
    left: 100%;
    transition: 0.5s;
}

.progress-bar .step .done::before {
    width: 16vw;
}



.admin-post {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80vw;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.24);
    flex-direction: column;
    margin: 0 10px;

}

h1 {
    color: black;
    margin-bottom: 50px;
    font-size: 60px;
}

.finger {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

}

.nb {
    width: 90%;
    display: flex;
    flex-direction: row;
    color: black;
    flex-wrap: wrap;

}

.nb p {
    color: black;
    margin-left: 10px;
    margin: 5px 5px;
    border: 1px solid #74b9ff;
    background-color: rgba(47, 130, 255, 0.185);
    border-radius: 15px;
    padding: 2px 15px;
}

form {
    min-height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

}

.label {
    color: black;
    display: flex;
    flex-direction: column;
    width: 65vw;
}

.label-Categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.label-Categories .categories-list {
    display: flex;
    align-items: center;
    width: 400px;

}


input {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.288);
    color: black;
    width: 100%;

}

input:focus {
    outline: none;
    border: 3px solid #74b9ff;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 1px 10px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    ;

}

input[type='radio'] {
    width: 50px;
}

input[type='checkbox'] {
    width: 50px;
}

input::placeholder {
    font-weight: 700;
}

label {
    color: black;
    font-size: 15px;
    font-weight: 700;
    margin: 15px 0;
}

textarea {
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    color: black;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    resize: none;
    font-family: 'Mark pro';
}

select {
    width: 100%;
    min-height: 250px;
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.288);
    padding: 15px;
    border-radius: 15px;
    overflow: hidden;
    resize: none;
}




.error {
    margin: 10px 0;
    color: #e74c3c;
}

.button-container {
    margin: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
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