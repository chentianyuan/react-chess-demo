
// initState
let initialState = {
    turn: Math.floor(Math.random() * 10) % 2 == 0 ? '黑子' : '白子'
}

// type
const TOGGLETURN = 'TOGGLETURN'

// action
// export function changeTurn(){
//     return {
//         type: TOGGLETURN 
//     }
// }

// reducer
export function change(state = initialState, action){
    switch(action.type){
        case TOGGLETURN:
            return{
                ...state,
                turn: state.turn == '白子' ? '黑子' : '白子'
            }
        default:
            return state    
    }
}