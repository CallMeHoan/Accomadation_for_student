import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import Hotel_room_img_1 from './assets/roompage/room_1.png'
import Hotel_room_img_2 from './assets/roompage/room_2.png'
import Hotel_room_img_3 from './assets/roompage/room_3.png'
import Hotel_room_img_4 from './assets/roompage/room_4.png'
import Hotel_room_img_5 from './assets/roompage/room_5.png'
import Hotel_room_img_6 from './assets/roompage/room_6.png'
import Hotel_room_img_7 from './assets/roompage/room_7.png'
import Hotel_room_img_8 from './assets/roompage/room_8.png'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const Homepage = lazy(() => import('./pages/homepage'))
const Roompage = lazy(() => import('./pages/roompage'))
const Roomdetail = lazy(() => import('./pages/roomdetail'))
const Login = lazy(() => import('./pages/login'))
const Contact = lazy(() => import('./pages/contact'))
const Aboutpage = lazy(() => import('./pages/storypage'))

function App() {
	return (
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
	)
}

export default App
