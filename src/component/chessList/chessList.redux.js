// type
const PUTCHESS = 'PUTCHESS'

// action
// export function putChess(row,column){
//     return {
//         type: 'PUTCHESS',
//         row,
//         column
//     }
// }

// initialState
let initialState = {
    chesses: []
}
for(var i = 0 ; i < 15 ; i++){
    initialState.chesses[i] = new Array(15)
    for(var j = 0 ; j < 15 ; j++){
        initialState.chesses[i][j] = 0
    }
}

// reducer
export function toggle(state = initialState, action){
    switch(action.type){
        case PUTCHESS:
            // state中存在arr两层嵌套，Object.assign已不适用
            // const newState = Object.assign({},state)
            const newState = JSON.parse(JSON.stringify(state))
            const { chesses } = newState
            chesses[action.i][action.j] = action.turn == '白子' ? 1 : 2
            return {
                ...newState,
                chesses
            }
        default:
            return state
    }
}