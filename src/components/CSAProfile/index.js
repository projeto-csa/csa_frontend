import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Management from '../Management'
import CSAAbout from '../CSAAbout'
import { requestCSA, requestRoutines } from './request.js'

class CSAProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      csa: null,
      tab: 0
    }
  }

  handleTab = (event, value) => {
    this.setState({tab: value})
  }

  componentDidMount(){
      requestCSA(this.props.match.params.id, this.handleData('csa'))
      requestRoutines(this.handleData('routines'))
  }

  handleData = (type) => (data) => this.setState({[type]: data})

  render(){
    const { csa } = this.state
    const { routines } = this.state
    const { tab } = this.state
    //weak condition
    let canEdit = csa ? this.props.logged && csa.users[0].id === localStorage.getItem('user') : false

    return(
      <div>
        { csa ?
          <div>
            <div>{csa.name}</div>
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
