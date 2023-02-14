import React  from 'react'
import { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,changename } from '../provider/provider'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input onChange={(event) => dispatch(changename({name:event.target.value}))} />
      </div>
      <h3>courage {name}</h3>
    </div>
  )
}


