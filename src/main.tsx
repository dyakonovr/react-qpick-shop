import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/index.scss';

ReactDOM.createRoot(document.querySelector('.root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
