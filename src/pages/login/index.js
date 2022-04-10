import react from 'react'

import './styles.css'
import user_login_img from './pic/user_login.png'
import user_login_pattern from './pic/user_login_pattern.png'
import user_signup_img from './pic/user_signup.png'
import user_signup_pattern from './pic/user_signup_pattern.png'

let flag = true
const login = () => {
	return (
		<div>
			<section id='login_container'>
				<section id='login_section'>
					<section id='login_section_title'></section>
					<section id='login_form'>
						<form>
							<h1>
								Hi !
								<br /> Log into your account <br />
							</h1>
							<h3>Account</h3>
							<input type='text' name='login_acc' />
							<h3>Password</h3>
							<input type='text' name='login_pas' />
							<br />
							<input type='submit' value='Log in' />
						</form>
					</section>
					<section id='signup_form'>
						<form>
							<h1>
								Hello, new friend!
								<br /> Get yourself a new account{' '}
							</h1>
							<h3>Your name</h3>
							<input type='text' name='signup_name' />
							<h3>Your account</h3>
							<input type='text' name='signup_acc' />
							<h3>Your password</h3>
							<input type='text' name='signup_pas' />
							<h3>Enter your password again</h3>
							<input type='text' name='confirm_pas' />
							<h3>Your Phone</h3>
							<input type='text' name='signup_phone' />
							<h3>Your Mail</h3>
							<input type='text' name='signup_mail' />
							<br />
							<input type='submit' value='Sign up' />
						</form>
					</section>
				</section>
				<section id='login_banner'>
					<div className='banner_container'>
						<img src={user_login_pattern} id='pattern_banner_container'></img>
					</div>
					<div className='banner_container'>
						<img src={user_login_img} id='img_banner_container'></img>
					</div>
				</section>
			</section>
			<button id='switch' onClick={Changepage}>
				{' '}
				You dont have an account? Create now{' '}
			</button>
		</div>
	)
}

export default login

function Changepage() {
	let login_form = document.getElementById('login_form')
	let signup_form = document.getElementById('signup_form')
	let pattern_banner_container = document.getElementById('pattern_banner_container')
	let img_banner_container = document.getElementById('img_banner_container')
	let banner_container = document.getElementsByClassName('banner_container')
	let login_banner = document.getElementById('login_banner')
	let Switch = document.getElementById('switch')

	if (flag) {
		login_form.style.display = 'none'
		signup_form.style.display = 'block'
		flag = false
		pattern_banner_container.src = user_signup_img
		img_banner_container.src = user_signup_pattern
		banner_container[0].style.zIndex = '100'
		banner_container[1].style.zIndex = '90'
		login_banner.style.marginTop = '6vw'
		Switch.innerHTML = 'You already have an account? Login now'
		Switch.style.color = '#293A46'
	} else {
		login_form.style.display = 'block'
		login_form.style.marginTop = '6vw'
		signup_form.style.display = 'none'
		flag = true
		login_banner.style.marginTop = '0vw'
		pattern_banner_container.src = user_login_pattern
		img_banner_container.src = user_login_img
		banner_container[0].style.zIndex = '90'
		banner_container[1].style.zIndex = '100'
		Switch.innerHTML = 'You dont have an account? Create now'
		Switch.style.color = '#452E22'
	}
}
