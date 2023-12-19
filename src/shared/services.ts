import type { carousselInterface } from "@/interface/caroussel.interface";
import type { episodeInterface } from "@/interface/episode.interface";
import { ref, type Ref } from "vue";
import { array, ZodNumber } from "zod";







export function usefetch() : { caroussel : Ref<carousselInterface[] | null> , loading : Ref<boolean> , error : Ref<any> }  {
        const caroussel = ref<carousselInterface[] | null >(null);
        const loading = ref<boolean>(true);
        const error = ref<any>(null);



        (async()=>
        {
            try {
                const car = await (await fetch('https://restapi.fr/api/getfilm')).json()  
                if(Array.isArray(car))
                {
                    caroussel.value = car
                }
                else
                {
                    caroussel.value = [car]
                }
                
            } catch (e) {
                error.value = e
            }
            finally
            {
                loading.value = false
            }
        })()


        return {caroussel , loading , error
            
        }
    }


export async function   deleteFetch(id : string) : Promise<string> {
    await fetch(`https://restapi.fr/api/getfilm/${id}` , {
        method : 'DELETE'
    })
    return id
}

export async function Getfetch(id : string ) : Promise<carousselInterface> {
    const film = await (await fetch(`https://restapi.fr/api/getfilm/${id}`)).json()
    return film
}

export async function GetEpisode(name : string) : Promise<carousselInterface> {
    const film = await (await fetch(`https://restapi.fr/api/${name}`)).json()
    return film
}



export async function usefetchEpisode(name : string) {

    const car = await (await fetch(`https://restapi.fr/api/${name}`)).json()
    return car 
}