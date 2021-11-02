import LandingPage from './components/marketing/LandingPage'
import Login from './components/auth/Login'
import SearchBar from './components/search/SearchBar'

const routes = [
    {
        path : '/',
        name : 'home',
        component : LandingPage
    },
    {
        path : '/login',
        name : 'login',
        component : Login,
        // meta : {
        //     requiresVisitor : true,
        // }
    },
    {
        path : '/search',
        name : 'search',
        component : SearchBar,
        // meta : {
        //     requiresVisitor : true,
        // }
    }
]

export default routes
