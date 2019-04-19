import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Management from '../Management'
import CSAAbout from '../CSAAbout'
import { requestCSA, requestRoutines, requestUpdate } from './request.js'

class CSAProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      csa: null,
      tab: 0,
      editName: false,
      nameValue: ''
    }
  }

  componentDidMount(){
      requestCSA(this.props.match.params.id, this.handleData('csa'))
      requestRoutines(this.handleData('routines'))
  }

  handleTab = (event, value) => {
    this.setState({tab: value})
  }

  handleData = (type) => (data) => this.setState({[type]: data})

  //weak condition
  editCondition = () => {
    return this.state.csa ? this.props.logged && this.state.csa.users[0].id === localStorage.getItem('user') : false
  }

  editName = () => this.setState({editName: !this.state.editName, nameValue: ''})

  changeName = () => {
    let payload = {
      id: this.state.csa.id,
      name: this.state.nameValue
    }
    this.setState({editName: false, nameValue: ''})
    requestUpdate(payload, this.handleData('csa'))
  }

  render(){
    const { csa } = this.state
    const { routines } = this.state
    const { tab } = this.state

    let canEdit = this.editCondition()

    return(
      <div>
        { csa ?
          <div>
            <div>{csa.name}</div>
            { this.state.editName ?
              <input type='text' value={this.state.nameValue} onChange={(e) => this.setState({nameValue: e.target.value})} />
              : null
            }
            { canEdit ?
              <Button onClick={this.editName} >{this.state.editName ? 'Cancelar' : 'Editar'}</Button>
              : null
            }
            { this.state.editName ?
              <Button onClick={this.changeName} >Confirmar</Button>
              : null
            }
            <div><img src={'https://via.placeholder.com/328x188'} alt={csa.name}/></div>
            <Tabs value={tab} onChange={this.handleTab} variant='fullWidth'>
              <Tab label={"Sobre"}/>
              <Tab label={"Gestão"}/>
            </Tabs>
            { tab === 0 && <CSAAbout csa={csa} canEdit={canEdit}/> }
            { tab === 1 && <Management csa={csa} routines={routines}/>}
            </div>
          : <div>Carregando...</div>
        }
      </div>
    )
  }
}

export default CSAProfile
