import React,{ Component } from 'react'

class CellList extends Component{
    constructor(props){
        super()
    }
    render(){
        const number = parseInt(this.props.numbers),
              cellItems = []
        for(let i = 0 ; i < number ; i++){
            cellItems.push((<li className="chess-cell" key={i}></li>))
        }
        return(
            <ul>
                {cellItems}
            </ul>
        )
    }
}

export default CellList