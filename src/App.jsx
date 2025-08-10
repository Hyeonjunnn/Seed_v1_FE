import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import GlobalLoading from './components/GlobalLoading';

// React Query 클라이언트 생성 (필요시 옵션 추가 가능)
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
        <GlobalLoading />
      </div>
    </QueryClientProvider>
  );
}

export default App;