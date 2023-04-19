import {  combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import numerosReducer from "./reducers/numeros";

import { applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const store =configureStore(  {
    reducer:{
        numeros: numerosReducer,
    },
    middleware:[
        thunk, multi, promise
    ]

  })

//   const store = applyMiddleware(thunk, multi, promise)(configureStore)(   
  
//   )

export default  store;
