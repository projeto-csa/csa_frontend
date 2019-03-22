import React from 'react'

const About = () =>{
  return(
    <div>
      <h1>Sobre o site</h1>
      <h3>Proposta da plataforma</h3>
      <p>
        (texto provisório) Esta plataforma foi desenvolvida com o intuito de
        melhorar a comunicação entre as comunidades do DF e aprimorar a tecnologia
        social empregada nas CSAs
      </p>
      <hr/>
      <h3>Possibilidade de replicação</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <hr/>
      <h3>Autoria</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <hr/>
      <h3>Políticas de uso</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Para acessar a documentação da plataforma, visite o nosso Github!
      </p>
      <h3>Fale com os desenvolvedores</h3>
      <p>
        Caso tenha críticas, elogios ou sugestões, envie-nos uma mensagem!
      </p>

      <div>Seu nome:</div>
      <input type="text" placeholder="Digite seu nome"/>

      <div>CSA a que pertence:</div>
      <input type="text" placeholder="Digite o nome da CSA à qual pertence"/>

      <div>Sua mensagem:</div>
      <input type="text" placeholder="Digite sea mensagem"/>


      <hr/>
    </div>
  )
}
export default About
