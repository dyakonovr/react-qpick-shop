import { Provider } from 'react-redux';
import Layout from '@/components/layout/Layout';
import store from "@/store/store";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Provider store={store}>
      <Layout />
      <Toaster />
    </Provider>
  )
}

export default App;