import React from 'react'
import './Banner.css'

export default () => {
  return (
    <div className="container">
      {[...Array(35).keys()].map((e) => {
        return <div key={e} className="cell"></div>
      })}
    </div>
  )
}
