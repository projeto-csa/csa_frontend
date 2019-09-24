import React from 'react'
import Topics from '../Topics'
import request from './request.js'

class Routine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      routine: null
    }
  }

  componentDidMount(){
    request(this.props.match.params.id, this.handleData)
  }

  handleData = (data) =>{
    this.setState({routine: data})
  }

  render(){
    const { routine } = this.state
    return(
      <div className='Routine'>
        {routine ?
          (<div>
            <p>{routine.description}</p>
            <div className='title-medium'>QUANDO PODE ACONTECER</div>
            <div>um dia</div>
            <div className='title-medium'>ONDE PODE ACONTECER</div>
            <div>na rua</div>
            <hr/>

            <div className='title-medium'>COMO FAZER</div>
            <ul>
              <li>jeito 1</li>
              <li>jeito 2</li>
              <li>jeito 3</li>
            </ul>
            <hr/>
            <p>
              A forma de realizar esta prática na sua CSA ainda não está listada?
              Que tal compartilhar com a rede como vocês fazem?
            </p>
            <div>acrescentar como fazemos</div>
            <hr/>

            <div className='title-medium'>DOCUMENTOS USADOS</div>
            <ul>
              <li><span>icone</span><span>Documento 1</span><span>data</span></li>
              <li><span>icone</span><span>Documento 2</span><span>data</span></li>
              <li><span>icone</span><span>Documento 3</span><span>data</span></li>
            </ul>
            <p>
              A sua CSA usa outro tipo de documento para ajudar a realizar essa prática?
              Que tal compartilhar com a rede como vocês fazem?
            </p>
            <div>acrescentar documento que usamos</div>
            <hr/>

            <div className='title-medium'>PRATICAS RELACIONADAS</div>
            <ul>
              <li>Pratica 1</li>
              <li>Pratica 2</li>
              <li>Pratica 3</li>
            </ul>
            <hr/>

            <div className='title-medium'>CONVERSAS SOBRE</div>
            <div className='title-medium'>{routine.name}</div>
            <Topics user={this.props.user} routine={{id: routine.id, name: routine.name}} topics={routine.topics}/>

          </div>) :
          <div>
            Making request.......
          </div>}
      </div>
    )}
}

export default Routine
