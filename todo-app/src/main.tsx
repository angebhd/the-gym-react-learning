import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import tasks from './feature/tasks.ts'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: { tasks }
})



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

