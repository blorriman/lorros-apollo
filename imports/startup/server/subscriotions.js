import { WebApp } from 'meteor/webapp'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { myGraphQLSchema } from './my-schema'

new SubscriptionServer(
	{
		schema: myGraphQLSchema,
		execute,
		subscribe,
	},
	{
		server: WebApp.httpServer,
		path: '/subscriptions',
	}
)
