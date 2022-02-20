import Home from '../pages/Home/Home';
import Order from '../pages/Order/Order';
import About from '../pages/About/About';

const routes = [
    {
        title: 'Acasă',
        path: '/',
        element: <Home />
    },
    {
        title: 'Despre',
        path: '/about',
        element: <About />
    },
    {
        title: 'Comandă',
        path: '/order',
        element: <Order />
    }
];

export default routes;