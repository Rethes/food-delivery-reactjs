import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      {/*support of context API in the project*/}
      <StoreContextProvider>
          <App />
      </StoreContextProvider>
  </BrowserRouter>,
)
