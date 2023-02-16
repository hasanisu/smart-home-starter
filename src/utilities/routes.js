import {createBrowserRouter} from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import About from '../components/About';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        loader: ()=> fetch('products.json'),
        children:[
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/shop', element: <Shop></Shop>},
            {path: '/cart', element: <Cart></Cart>},
            {path: '/about', element: <About></About>}
            
        ]
        
    },
])
export default router;