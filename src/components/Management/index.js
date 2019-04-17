import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'

import RoutineListItem from '../RoutineListItem'
import Variation from '../Variation'
import UserPortrait from '../UserPortrait'

class Management extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      csa: props.csa,
      showAll: false,
      addRoutine: false,
      routines: null,
      selectedRoutines: null,
      routines: this.createRoutineList(props.csa)
    }
  }
  showAll = () => {
      this.setState({showAll: !this.state.showAll})
  }
  addRoutine = () => {
    this.setState({addRoutine: !this.state.addRoutine})
  }
  createRoutineList = (csa) => {
    const { variations } = csa

    let routineMap = new Map()
    variations.map((item, index) => routineMap.set(item.routine.id, item.routine.name))
    let routines = []
    routineMap.forEach((value, key) => routines.push({id: key, name: value, variations: []}))
    variations.map( v => routines.find( r => r.id === v.routine.id ).variations.push(v) )
    return routines
  }
  render(){
    let colab = []
    for(let i = 0; i < 7; i++){
      colab.push(<GridListTile key={i}><UserPortrait /></GridListTile>)
    }
    const { showAll } = this.state
    const { routines } = this.state

    return(
      <div>
        <h4>Colaboradores</h4>
        <GridList cols={3} cellHeight={'auto'}>
        {colab.slice(0, showAll ? colab.length : 6)}
        </GridList>
        {colab.length > 6 ? <Button onClick={this.showAll}>{showAll ? 'Ocultar alguns' : 'Mostrar todos'}</Button>: null}
        <hr/>
        <div>Como fazemos</div>
        <div>
          {routines.map((routine, i) =>
            <div key={i}>
              <div>Rotina: {routine.name}</div>
              {routine.variations.map((variation, j)=>
                <div key={j}>
                  <div>Variação: {variation.name}</div>
                  <p>{variation.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <Button onClick={this.addRoutine}>
          { this.state.addRoutine ? 'Cancelar' : 'Adicionar rotina' }
        </Button>
        { this.state.addRoutine ?
          <div>

          </div>
        : null}
      </div>
    )
  }
}
export default Management
