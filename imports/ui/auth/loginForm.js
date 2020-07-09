import React, { useState } from 'react'
import { Accounts } from 'meteor/accounts-base'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const loginUser = (e) => {
		e.preventDefault()
		Meteor.loginWithPassword(email, password, (error) => {
			console.log(error)
		})
	}

	return (
		<div>
			<form onSubmit={loginUser}>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default LoginForm
