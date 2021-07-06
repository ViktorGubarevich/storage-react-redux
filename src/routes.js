import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';

export const routes = [{
        isNavBar: true,
        isExact: true,
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        isNavBar: true,
        path: '/profile',
        name: 'Profile',
        component: Profile,
        isPrivate: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];