import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'

import UserPortrait from '../UserPortrait'

class Management extends React.Component{
  constructor(){
    super()
    this.state = {
      showAll: false
    }
  }
  showAll = () => {
      this.setState({showAll: !this.state.showAll})
  }
  render(){
    let colab = []
    for(let i = 0; i < 7; i++){
      colab.push(<GridListTile key={i}><UserPortrait /></GridListTile>)
    }
    const { showAll } = this.state
    return(
      <div>
        <h4>Colaboradores</h4>
        <GridList cols={3} cellHeight={'auto'}>
        {colab.slice(0, showAll ? colab.length : 6)}
        </GridList>
        {colab.length > 6 ? <Button onClick={this.showAll}>{showAll ? 'Ocultar alguns' : 'Mostrar todos'}</Button>: null}
        <hr/>
      </div>
    )
  }
}
export default Management
