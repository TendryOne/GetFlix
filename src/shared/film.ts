import data from "@/data/data";
import type { carousselInterface } from "@/interface/caroussel.interface";
import type { notifInterface } from "@/interface/notif.interface";

import { computed, reactive } from "vue";

 

export const state = reactive<{
    caroussel: carousselInterface[];
    Affichage: carousselInterface[];
    message: boolean;
    favoris : carousselInterface[];
    favoritebtn : boolean
    Unfavoritebtn : boolean
    search : string
    notif : boolean
    notifCaroussel : carousselInterface[]
    Notifblink : boolean 
    season : string

}>({
    caroussel: [],
    message: false,
    Affichage: [],
    favoris: [],
    favoritebtn : false,
    search : '',
    Unfavoritebtn : false,
    notif :false,
    notifCaroussel : [],
    Notifblink : false,
    season : '0'

});
export function show(Id: string): void {
    const caroussel = state.caroussel.find((caroussel) => caroussel._id === Id);
    if (caroussel && !state.Affichage.find((caroussel) => caroussel._id === Id)) {
        state.Affichage.push({ ...caroussel });
        state.message = true;

    }
}

export function retire(Id: string) {
    const caroussel = state.caroussel.find((caroussel) => caroussel._id === Id);
    if (caroussel && state.Affichage.find((caroussel) => caroussel._id === Id)) {
        state.Affichage = [];
        state.message = false;
    }
}


export function AddToFavoris(Id : string ) : void
{
    const caroussel = state.caroussel.find((caroussel)=> caroussel._id === Id);
    if(caroussel && !state.favoris.find((favoris)=> favoris._id === Id))
    { 
       state.favoris.push({...caroussel})
       state.notifCaroussel.push({...caroussel})
        state.favoritebtn = true
        state.Unfavoritebtn = false
        state.notif = true
       setTimeout(()=> {
            state.favoritebtn = false
        }, 2000)

    }
    
   
}


export function UnaddToFavoris(Id : string) :void
{
    state.favoris = state.favoris.filter((favoris)=> favoris._id !== Id)
    state.notifCaroussel = state.notifCaroussel.filter((favoris)=> favoris._id !== Id)

    state.Unfavoritebtn = true
    state.favoritebtn = false
    state.notif = false
    setTimeout(()=> {
        state.Unfavoritebtn = false
    }, 2000)
}

 export const search = computed(() => {
    return state.caroussel.filter((f) => {
      if(f.name.toUpperCase().includes(state.search.toUpperCase())) {
        return true
      }
      else
      {
        return false
      }
    })
    
  })

  export function notifEraser (Id : string) : void{
        state.notifCaroussel = state.notifCaroussel.filter((f)=> f._id !== Id)

  }

  export function notifEraserAll (){
    state.notifCaroussel = []
    state.Notifblink = false
  }