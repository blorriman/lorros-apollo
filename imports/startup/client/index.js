import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import React from 'react'
import gql from 'graphql-tag'

import ApolloClient from 'apollo-client'
import { DDPLink } from 'meteor/swydo:ddp-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloProvider } from 'react-apollo'

import App from '/imports/ui/App'

const client = new ApolloClient({
	link: new DDPLink({
		connection: Meteor.connection,
	}),
	cache: new InMemoryCache(),
})

Meteor.startup(() => {
	render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,
		document.getElementById('app')
	)
})
