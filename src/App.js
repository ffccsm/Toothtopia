
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/router';

function App() {
  return (
    <div className='mx-auto bg-[#f5f6fa]'>
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  );
}

export default App;
