import React,{ Component } from 'react'
import CellList from '../cellList/cellList.js'
import ChessList from '../chessList/chessList.js'
import './chessBoard.css'
import { connect } from 'react-redux'


function mapStateToProps(state){
    return {
        // 这里的state的是整合过后的reducer执行的默认state
        // 特点reducer下的特定的state
        turn: state.change.turn,
        chess: state.toggle.chesses        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        putChess: (i,j,turn) => dispatch({type: 'PUTCHESS',i,j,turn}),
        changeTurn: () => dispatch({type: 'TOGGLETURN'})        
    }
}


class ChessBoard extends Component {
    constructor(props){
        super(props)
        // var {turn} = this.dataInit()
        // this.state = {
        //     turn: turn
        // }
    }
    // dataInit(){
    //     var chessBoardState = new Array(15)
    //     for(var i = 0 ; i < 15 ; i++){
    //         chessBoardState[i] = new Array(15)
    //         for(var j = 0 ; j < 15; j++){
    //             chessBoardState[i][j] = false
    //         }
    //     }
    //     var turn = Math.floor(Math.random() * 10) % 2 == 0 ? '黑子' : '白子'
    //     return {turn}
    // }
    componentDidUpdate(){
        if(this.winneris(this.props.chess,this.props.turn)){
            // 因为turn在组件更新前已经改变了，所以这里其实判定的是上一次下棋的玩家的胜利
            setTimeout(()=>{
                this.props.turn === '白子' ? alert('黑子赢了') : alert('白子赢了')
            })
        }
    }
    handleChess(event){
        // const chess = document.querySelector('.chessBoard'),
        const chess = this.refs.chessBoard,
              chessBoard = chess.getBoundingClientRect(),
              chessBoardL = chessBoard.left,
              chessBoardT = chessBoard.top,
              checkX = event.pageX,
              checkY = event.pageY,
              skewX = checkX - chessBoardL,
              skewY = checkY - chessBoardT  
              var i = Math.floor(skewY/20)
              var j = Math.floor(skewX/20)
              if(this.props.chess[i][j]){
                alert('此处已有人落子')
              }else{
                this.props.putChess(i,j,this.props.turn)                
                this.props.changeTurn()
            }
    }
    winneris(chessArr,turn){
        var whiteArr = []
        var blackArr = []
        chessArr.forEach((valArr,i) => {
            valArr.forEach((val,j)=>{
                if(val == 1){
                    // 取出棋盘中所有的白子
                     whiteArr.push([i,j])
                }
                if(val == 2){
                    blackArr.push([i,j])
                }
            })
        })
        if(turn === '黑子' && this.isWin(whiteArr)){
            return true
        }
        if(turn === '白子' && this.isWin(blackArr)){
            return true
        }
        return false
    }
    isWin(arr){
        var whertherWin = false
        if(arr.length < 4){
            return false
        }
        // 遍历所有棋子的位置
        arr.forEach(val=>{
            var heng = 0,
                shu = 0,
                pie = 0,
                na = 0,
                row = val[0],
                column = val[1],
                EncodeArr = JSON.stringify(arr)
            for(var k = 0 ; k < 5 ; k++){
                // 判断是否在同一行
                if(EncodeArr.indexOf(JSON.stringify([row,column+k])) > 0){
                    heng++
                }
                // 判断是否是同一列
                if(EncodeArr.indexOf(JSON.stringify([row+k,column])) > 0){
                    shu++
                }
                // 判断撇
                if(EncodeArr.indexOf(JSON.stringify([row-k,column+k])) > 0){
                    pie++
                }
                // 判断捺
                if(EncodeArr.indexOf(JSON.stringify([row+k,column+k])) > 0){
                    na++
                }
            }
            if(heng === 5 || shu === 5 || na === 5 || pie === 5){
                whertherWin = true
            }
            console.log(heng,shu,pie,na)
        })
        return whertherWin
    }
    render(){
        return (
            <div>
                <h2 style={{textAlign:'center',marginBottom:'10px'}}>{`现在是${this.props.turn}下棋`}</h2>                
                <div className="chessBoard" ref="chessBoard" onClick={(event)=>{this.handleChess(event)}}>
                    <ChessList numbers='225' />
                    <CellList numbers='196' />
                </div>
            </div>
        )
    }
}

ChessBoard = connect(mapStateToProps,mapDispatchToProps)(ChessBoard)

export default ChessBoard 