import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Meta from "./components/meta/Meta.jsx"
import {Provider} from "react-redux";
import store from './app/store.js';

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Meta/>}/>
    )
  )

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
