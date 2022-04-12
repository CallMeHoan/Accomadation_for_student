import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Homepage = lazy(() => import('./pages/homepage'))
const Roompage = lazy(() => import('./pages/roompage'))
const Roomdetail = lazy(() => import('./pages/roomdetail'))
const Login = lazy(() => import('./pages/login'))
const Contact = lazy(() => import('./pages/contact'))
const Aboutpage = lazy(() => import('./pages/storypage'))

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Header />

					<Switch>
						<Route component={Homepage} path='/' exact />
						<Route component={Roompage} path='/rooms' exact />
						<Route component={Roomdetail} path='/rooms/:id' exact />
						<Route component={Login} path='/login' exact />
						<Route component={Aboutpage} path={'/story'} exact></Route>
						<Route component={Aboutpage} path={'/story'} exact />
						<Route component={Contact} path={'/contact'} exact />
					</Switch>
					<Footer />
					<ToastContainer
						position='top-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<ToastContainer />
				</Suspense>
			</Router>
		</QueryClientProvider>
	)
}

export default App
