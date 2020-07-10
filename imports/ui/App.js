import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import ResolutionForm from './resolutions/resolutionForm'
import RegisterForm from './auth/registerForm'
import LoginForm from './auth/loginForm'

const App = ({ loading, resolutions, client }) => {
	console.log(resolutions)
	if (loading) return null
	return (
		<div>
			<h1>Welcome to Meteor!</h1>
			<button
				onClick={() => {
					Meteor.logout()
					client.resetStore()
				}}
			>
				Logout
			</button>
			<LoginForm client={client} />
			<RegisterForm client={client} />
			<ResolutionForm />
			{resolutions && (
				<ul>
					{resolutions.map((resolution) => (
						<li key={resolution._id}>{resolution.name}</li>
					))}
				</ul>
			)}
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
})(withApollo(App))
