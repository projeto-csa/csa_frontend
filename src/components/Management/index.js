import React from 'react'
import { Link } from 'react-router-dom'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'

import Variation from '../Variation'
import UserPortrait from '../UserPortrait'
import { requestEdit, requestNewVariation } from './request.js'

class Management extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      csa: props.csa,
      showAll: false,
      openRoutineList: false,
      csaRoutines: this.createRoutineList(props.csa.variations),
      routines: props.routines,
      selectedVariations: props.csa.variations,
      otherVariations: new Array(props.routines.length)
                            .fill().map( () =>
                              ({ user: this.props.user._id,
                                csa: this.props.csa._id,
                                routine: '',
                                name: '',
                                description: ''
                              }))
    }
  }

  showAll = () => {
      this.setState({showAll: !this.state.showAll})
  }

  createRoutineList = (variations) => {
    let routineMap = new Map()
    variations.map((item, index) => routineMap.set(item.routine.id, item.routine))
    let routines = []
    routineMap.forEach((value, key) => routines.push({...value, variations: []}))
    variations.map( v => routines.find( r => r.id === v.routine.id ).variations.push(v) )
    return routines
  }

  toggleSelection = (variation) => () => {
    const { selectedVariations } = this.state
    if(selectedVariations.find( v => v.id === variation.id) === undefined){
      this.setState({selectedVariations: [...selectedVariations, variation]})
    }else{
      this.setState({selectedVariations: selectedVariations.filter( v => v.id !== variation.id)})
    }
  }

  openRoutineList = () =>{
    this.setState({openRoutineList: !this.state.openRoutineList, selectedVariations: this.state.csa.variations})
  }

  addVariations = () => {
    let payload = {
      id: this.state.csa.id,
      variations: [...this.state.selectedVariations.map( v => v.id)]
    }
    this.setState({openRoutineList: false})
    requestEdit(payload, this.handleData)
  }

  setOtherVariations = (index, type, routineId) => (e) => {
    let otherV = [...this.state.otherVariations]
    switch(type){
      case 'name':
        otherV[index].name = e.target.value
        break
      case 'description':
        otherV[index].description = e.target.value
        break
      default:
        break
    }
    otherV[index].routine = routineId
    this.setState({otherVariations: otherV})
  }

  handleData = (data) => {
    console.log('incoming csa data: ', data)
    this.setState({
      csa: data,
      selectedVariations: data.variations,
      routines: this.state.routines,
      csaRoutines: this.createRoutineList(data.variations)
    })
  }

  createVariation = (index) => () => {
    let payload = this.state.otherVariations[index]
    requestNewVariation(payload, this.handleNewVariation)
  }

  handleNewVariation = (data) => {

  }

  render(){
    let colab = []
    for(let i = 0; i < 7; i++){
      colab.push(<GridListTile key={i}><UserPortrait /></GridListTile>)
    }
    const { showAll } = this.state
    const { csaRoutines } = this.state
    const { routines } = this.state
    return(
      <div>
        {/*<Colabs />*/}
        <h4>Colaboradores</h4>
        <GridList cols={3} cellHeight={'auto'}>
        {colab.slice(0, showAll ? colab.length : 6)}
        </GridList>
        {colab.length > 6 ? <Button onClick={this.showAll}>{showAll ? 'Ocultar alguns' : 'Mostrar todos'}</Button>: null}
        <hr/>

        {/*<HowWeDo />*/}
        <div>Como fazemos:</div><br/>
        <div>
          {csaRoutines.map((routine, i) =>
            <div key={i}>
              <div><Link to={`/rotina/${routine.id}`}>{routine.name}</Link></div>
              {routine.variations.map((variation, j)=>
                <div key={j}>
                  <Variation variation={variation} />
                </div>
              )}
            </div>
          )}
        </div>
        { this.props.user._id === this.state.csa.users[0]._id ?
          <Button onClick={this.openRoutineList}>
            { this.state.openRoutineList ? 'Cancelar' : 'Adicionar rotina' }
          </Button>
        : null}
        {/*<VariationSelection />*/}
        { this.state.openRoutineList ?
          <Button onClick={this.addVariations} disabled={this.state.selectedVariations.length === 0}>
            Confirmar
          </Button>
          : null
        }
        { this.state.openRoutineList ?
          <List subheader={<li />}>
            { routines
              .map( (routine, i) =>
                <li key={i}>
                  <ul>
                    <ListSubheader>{routine.name}</ListSubheader>
                    {routine.variations.map( (variation, j) =>
                      <ListItem key={j}>
                        <Variation variation={variation} selectable
                          selected={this.state.selectedVariations.find( v => v.id === variation.id) !== undefined}
                          onClick={this.toggleSelection(variation)}/>
                      </ListItem>
                    )}
                  </ul>
                  <span>outra: </span>
                  <input type='text' value={this.state.otherVariations[i].name}
                    onChange={this.setOtherVariations(i, 'name', routine._id)} placeholder='Nome'/>
                  <input type='text' value={this.state.otherVariations[i].description}
                    onChange={this.setOtherVariations(i, 'description', routine._id)} placeholder='Descrição'/>
                  <Button onClick={this.createVariation(i)}>Criar</Button>
                </li>
            )}
          </List>
        : null}
      </div>
    )
  }
}

/*.filter( item => !csaRoutines.find( r => r.id === item.id))*/
export default Management
