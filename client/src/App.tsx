import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Paths from './components/routes/Routes';
import { persistor, store } from './store/store';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Paths />
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
