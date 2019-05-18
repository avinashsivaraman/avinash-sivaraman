import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import './ParallexElement.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3}px,${y / 3}px,0)`
const trans5 = (x, y) => `translate3d(${x / 9}px,${y / 11}px,0)`
const trans6 = (x, y) => `translate3d(${x / 8 + 45}px,${y / 3 - 290}px,0)`
const trans7 = (x, y) => `translate3d(${x / 6 - 230}px,${y / 6 - 20}px,0)`
const trans8 = (x, y) => `translate3d(${x}px,${y}px,0)`
const trans9 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const trans10 = (x, y) => `translate3d(${x / 2 + 80}px,${y / 4 - 280}px,0)`
const trans11 = (x, y) => `translate3d(${x / 7 - 280}px,${y / 6 - 280}px,0)`
const trans12 = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`

const ParallexElement = ({color}) => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  useEffect(() => {
    const divElement = document.querySelectorAll('.parallex-element div');
    divElement.forEach(div => {
      div.style.backgroundColor = color
    })
  }, [color])
  return (
    <div className="parallex-element" onMouseMove={({ clientX: x, clientY: y }) => {
      console.log(x,y)
      set({ xy: calc(x, y) })}
      }>
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans4) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans5) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans6) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans7) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans8) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans9) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans10) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans11) }} />
      <animated.div className="card" style={{ transform: props.xy.interpolate(trans12) }} />
    </div>
  )
}

export default ParallexElement;