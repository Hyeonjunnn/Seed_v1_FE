import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import GlobalLoading from './components/GlobalLoading';
import Alert from './components/Alert';
import ConfirmDialog from './components/ConfirmDialog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-50 relative">
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
        <GlobalLoading />
        <Alert />
        <ConfirmDialog />
      </div>
    </QueryClientProvider>
  );
}

export default App;