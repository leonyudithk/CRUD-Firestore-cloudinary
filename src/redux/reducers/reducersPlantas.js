import { typesPlanta } from "../types/typesPlanta"

const initialState ={
    plantas : []
}

export const reducersPlantas =(state= initialState, action)=>{
    switch (action.type) {
        case typesPlanta.add:
            return{
                plantas: [action.payload]
            }

        case typesPlanta.list:
            return {
                plantas: [...action.payload]
            }

        case typesPlanta.delete:
            return{
                state
            }
        default:
            return state 
    }
}