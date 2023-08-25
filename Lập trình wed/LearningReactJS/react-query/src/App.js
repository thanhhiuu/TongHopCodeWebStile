
import './App.css';
import { QueryClient, QueryClientProvider} from 'react-query';
import UserList from './Components/Query_React';

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}}); // Khi chuyển sang tah mới vẫn giữ nguyên hiển thị không cập nhật API
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserList/>
    </QueryClientProvider>
    </div>
  );
}

export default App;
