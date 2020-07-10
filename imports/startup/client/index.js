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
	link: new DDPLink(),
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

// import React from 'react'
// import { Meteor } from 'meteor/meteor'
// import { render } from 'react-dom'
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
// import { ApolloLink, from } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { DDPLink } from 'apollo-link-ddp'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { MeteorAccountsLink } from 'meteor/apollo'

// import App from '/imports/ui/App'

// const client = new ApolloClient({
// 	link: ApolloLink.from([
// 		new MeteorAccountsLink(),
// 		new HttpLink({
// 			uri: '/graphql',
// 		}),
// 		new DDPLink({
// 			connection: Meteor.connection,
// 		}),
// 	]),
// 	cache: new InMemoryCache(),
// })

// const ApolloApp = () => (
// 	<ApolloProvider client={client}>
// 		<App />
// 	</ApolloProvider>
// )

// Meteor.startup(() => {
// 	render(<ApolloApp />, document.getElementById('app'))
// })
