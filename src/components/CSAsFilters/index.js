import React from 'react'
import { connect } from 'react-redux'

import RegionFilterController, { regionFilterFunction } from './regionFilter'
import WeekDayFilterController, { weekDayFilterFunction } from './weekDayFilter'

import { filterCSAs } from '../../actions'

class CSAsFilters extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      filters: [
        regionFilterFunction,
        weekDayFilterFunction
      ],
      filtersControllers: [
        <RegionFilterController />,
        <WeekDayFilterController />
      ]
    }
  }

  onFilterChanged = (stateData) => {
    var csas = this.state.filters.reduce((csas, filter) => filter(csas, stateData), this.props.csas.csas)
    this.props.dispatch(filterCSAs(csas))
  }

  render(){
    return(
      <div>
        <div>
          Filtros
        </div>
        <hr/>
          <RegionFilterController onFilterChanged={this.onFilterChanged}/>
          <WeekDayFilterController onFilterChanged={this.onFilterChanged}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    csas: state.csas,
    filteredCSAs: state.filteredCSAs
  }
}
export default connect(mapStateToProps)(CSAsFilters)
