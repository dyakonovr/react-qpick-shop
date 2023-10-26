import { Toaster } from "@/components/ui/toaster";
import store from "@/store/store";
import { Provider } from 'react-redux';
import Paths from "./components/routes/Paths";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Paths />
      </div>
      <Toaster />
    </Provider>
  )
}

export default App;