import React from 'react'
import { connect } from 'react-redux'

import { RegionFilterController, regionFilterFunction } from './regionFilter'
import { WeekDayFilterController, weekDayFilterFunction } from './weekDayFilter'

import { filterCSAs } from '../../actions'

class CSAsFilters extends React.Component{
  constructor(){
    super()
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

  onFilterChanged = () => {
    var csas = this.state.filters.reduce((csas, filter) => csas = filter(csas), this.props.csas)
    this.props.dispatch(filterCSAs(csas))
  }

  render(){
    return(
      <div>
        <div>
          Filtros
        </div>
        <hr/>
        {this.state.filtersControllers.map( (item, index) =>
          React.cloneElement(item, {
            key: index,
            onFilterChanged: this.onFilterChanged
          }))
        }
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
