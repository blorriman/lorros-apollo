import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import merge from 'lodash/merge'
import { getUser } from 'meteor/apollo'

import { setup as createApolloServer } from 'meteor/swydo:ddp-apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

//test

const testSchema = `
type Query {
  resolutions: [Resolution]
}
`
const typeDefs = [testSchema, ResolutionsSchema]

const resolvers = merge(ResolutionsResolvers)

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// 	context: async ({ req }) => ({
// 		user: await getUser(req.headers.authorization),
// 	}),
// })

// server.applyMiddleware({
// 	app: WebApp.connectHandlers,
// 	path: '/graphql',
// })

// WebApp.connectHandlers.use('/graphql', (req, res) => {
// 	if (req.method === 'GET') {
// 		res.end()
// 	}
// })

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

createApolloServer({
	schema,
})
