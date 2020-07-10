import React, { useState } from 'react'
import { Accounts } from 'meteor/accounts-base'

const RegisterForm = ({ client }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registerUser = (e) => {
		e.preventDefault()
		Accounts.createUser(
			{
				email,
				password,
			},
			(error) => {
				if (!error) {
					client.resetStore()
				}
				console.log(error)
			}
		)
	}

	return (
		<div>
			<form onSubmit={registerUser}>
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
				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default RegisterForm
