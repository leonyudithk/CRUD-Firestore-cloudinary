import { addDoc, collection, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"
import { typesPlanta } from "../types/typesPlanta"


//----------------------Listar Plantas------------------------------//
export const listPlantaAsync = ()=>{
    return async (dispath)=>{
       const collectionListar = await getDocs(collection(DB, "PlantasDB"))
       console.log(collectionListar)
        const plantas=[]
        collectionListar.forEach(lista =>{
            plantas.push({
                ...lista.data()
            })
        })
        dispath(listPlantasSync(plantas))

    }

}

export const listPlantasSync =(planta)=>{
    return{
        type: typesPlanta.list,
        payload: planta
    }
}
//----------------Agregar Planta-------------------------//
export const addPlantaAsync = (planta)=>{
    return (dispath)=>{
        // addDoc recibe dos parametros(donde lo voy a guardar, que voy a guardar)
        //collection recibe dos parametros( la coneccion FirebaseConfig, Nombre de la colleccion)    
        addDoc(collection(DB, "PlantasDB" ), planta)
        .then(resp=>{
            dispath(addPlantaSync(planta))
            dispath(listPlantasSync())

        })
        .catch(error =>{
            console.warn(error)
        })

    }
}

export const addPlantaSync = (planta)=>{
    return{
         type: typesPlanta.add,
         payload: planta    
    }
}