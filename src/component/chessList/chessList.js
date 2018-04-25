import React,{ Component } from 'react'
import { connect } from 'react-redux'
import './chessList.css'

function mapStateToProps(state){
    return {
        // 这里的state的是整合过后的reducer执行的默认state
        // 特点reducer下的特定的state
        turn: state.change.turn,        
        chess: state.toggle.chesses
    }
}

class ChessList extends Component{
    constructor(props){
        super()
    }
    render(){
        const number = parseInt(this.props.numbers),
              chessItems = []
        for(let i = 0 ; i < number ; i++){
            var row = Math.floor(i / 15),
                column = i % 15 
            chessItems.push((<span className={
                !this.props.chess[row][column] ? 'chess hide' : (this.props.chess[row][column] === 2 ? 'chess black' : 'chess white')
            } key={i}></span>))
        }
        return(
            <div className={this.props.chess[0][0]?"chessWarp":'chessWarp aaa'}>
                {chessItems}
            </div>
        )
    }
}

ChessList = connect(mapStateToProps)(ChessList)


export default ChessList