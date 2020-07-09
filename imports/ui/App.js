import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ResolutionFrom from './resolutions/resolutionForm'
import RegisterForm from './auth/registerForm'
import LoginForm from './auth/loginForm'

const App = ({ loading, resolutions }) => {
	if (loading) return null
	return (
		<div>
			<h1>Welcome to Meteor!</h1>
			<LoginForm />
			<RegisterForm />
			<ResolutionFrom />
			<ul>
				{resolutions.map((resolution) => (
					<li key={resolution._id}>{resolution.name}</li>
				))}
			</ul>
		</div>
	)
}

const resolutionsQuery = gql`
	query Resolutions {
		resolutions {
			_id
			name
		}
	}
`
export default graphql(resolutionsQuery, {
	props: ({ data }) => ({ ...data }),
})(App)
