import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, from } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { MeteorAccountsLink } from 'meteor/apollo'

import App from '/imports/ui/App'

const client = new ApolloClient({
	link: ApolloLink.from([
		new MeteorAccountsLink(),
		new HttpLink({
			uri: '/graphql',
		}),
	]),
	cache: new InMemoryCache(),
})

const ApolloApp = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)

Meteor.startup(() => {
	render(<ApolloApp />, document.getElementById('app'))
})
