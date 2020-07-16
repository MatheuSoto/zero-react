import React, { createContext, useReducer, useContext } from 'react'
import { loadState, saveState } from '@helpers/persistData/localStorage'
import { counterReducer, counterInitialState } from './counter'

const Context = createContext()

const reducer = ({ counter }, action) => {
  const reducers = {
    counter: counterReducer(counter, action)
  }
  saveState(reducers)
  return reducers
}

const initialState = loadState() || {
  counter: counterInitialState
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
