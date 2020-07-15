import React, { createContext, useReducer, useContext } from 'react'
import { loadState, saveState, clearState } from '@helpers/persistData/localStorage'
import { examsReducer, examsInitialState } from './exams'
import { testimonialsReducer, testimonialsInitialState } from './testimonials'

const Context = createContext()

const reducer = ({ exams, testimonials }, action) => {
  const reducers = {
    exams: examsReducer(exams, action),
    testimonials: testimonialsReducer(testimonials, action)
  }
  // saveState(reducers)
  // clearState()
  return reducers
}

const initialState = loadState() || {
  exams: examsInitialState,
  testimonials: testimonialsInitialState
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
