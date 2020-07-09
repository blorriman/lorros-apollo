import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import merge from 'lodash/merge'
import { getUser } from 'meteor/apollo'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

//test one

const testSchema = `
type Query {
  resolutions: [Resolution]
}
`
const typeDefs = [testSchema, ResolutionsSchema]

const resolvers = merge(ResolutionsResolvers)

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.applyMiddleware({
	app: WebApp.connectHandlers,
	path: '/graphql',
})
