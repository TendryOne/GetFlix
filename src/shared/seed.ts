import data from "@/data/data"
import episodeData from "@/data/episode.data"


export const seed = async (collectionName : string)=> 
{
        await fetch(`https://restapi.fr/api/${collectionName}` , {
            method  : "POST",
            body : JSON.stringify(data),
            headers : 
            {
                'content-type' : 'application/json'
            }
            
        })
}