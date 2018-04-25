import { combineReducers } from 'redux'

// 导入reducer
import { toggle } from './component/chessList/chessList.redux' 
import { change } from './component/chessBoard/chessBoard.redux'

// 整合并导出所有的reducer
export default combineReducers({toggle, change})