import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
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
        path: '/contact',
        element: <Contact />
    }
];

export default routes;