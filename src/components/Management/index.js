import React from 'react'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'

import Variation from '../Variation'
import UserPortrait from '../UserPortrait'

class Management extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      csa: props.csa,
      showAll: false,
      addRoutine: false,
      routines: this.createRoutineList(props.csa),
      selectedRoutines: null
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
    variations.map((item, index) => routineMap.set(item.routine.id, item.routine))
    let routines = []
    routineMap.forEach((value, key) => routines.push({...value, variations: []}))
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
    console.log(routines)

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
              <div>Rotina: <Link to={`/rotina/${routine.id}`}>{routine.name}</Link></div>
              {routine.variations.map((variation, j)=>
                <div key={j}>
                  <Variation variation={variation} />
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
