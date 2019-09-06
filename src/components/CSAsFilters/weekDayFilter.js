import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export const WeekDayFilterController = (props) => {
  return(
    <div>
      <div className={"title"}>QUANDO</div>
      <div>Dia do Ponto de Convivência</div>
      <div>
        <FormControlLabel control={<Checkbox/>} label={"Segunda"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Terça"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Quarta"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Quinta"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Sexta"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Sábado"} onClick={props.onFilterChanged}/>
        <FormControlLabel control={<Checkbox/>} label={"Domingo"} onClick={props.onFilterChanged}/>
      </div>
    </div>
  )
}

export const weekDayFilterFunction = (csas) => {
  return csas
}
