import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import { UserPostData } from "./Pages/UserPostData";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="Form" element={<Form />} />
        <Route path="/" element={<UserPostData />} />
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
