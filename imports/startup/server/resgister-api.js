import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql'

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`
const typeDefs = [testSchema, ResolutionsSchema]

const resolvers = {
	Query: {
		hi() {
			return 'Hello World!'
		},
		resolutions() {
			return [
				{
					_id: '12345',
					name: 'Bob',
				},
				{
					_id: '456789',
					name: 'Lily',
				},
			]
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.applyMiddleware({
	app: WebApp.connectHandlers,
	path: '/graphql',
})
