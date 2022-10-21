import { FC } from "react";
import MainLayout from "./layout/MainLayout";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
