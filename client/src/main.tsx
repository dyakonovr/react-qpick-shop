import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/index.scss';
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.querySelector('.root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
