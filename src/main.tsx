import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"
import { BrowserRouter } from 'react-router';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor='indigo'  grayColor="gray" radius="large" scaling="95%" appearance='dark'>
      <App />
    </Theme>
    </BrowserRouter>
   

  </StrictMode>,
)
