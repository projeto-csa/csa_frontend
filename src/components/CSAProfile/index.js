import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Management from '../Management'
import request from './request.js'

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
      request(this.props.match.params.id, this.handleData)
  }

  handleData = (data) => {
    this.setState({csa: data})
  }

  render(){
    const { csa } = this.state
    const { tab } = this.state
    return(
      <div>
        { csa ?
          <div>
            CSA {csa.name}
            <Tabs value={tab} onChange={this.handleTab} variant='fullWidth'>
              <Tab label={"Sobre"}/>
              <Tab label={"Gestão"}/>
              <Tab label={"Outra"}/>
            </Tabs>
            { tab === 0 && <span>Sobre</span> }
            { tab === 1 && <Management />}
            { tab === 2 && <span>Outra</span> }
            </div>
          : <div>Carregando...</div>
        }
      </div>
    )
  }
}

export default CSAProfile
