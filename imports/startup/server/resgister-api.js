import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import merge from 'lodash/merge'
import { getUser } from 'meteor/apollo'

import { setup as createApolloServer } from 'meteor/swydo:ddp-apollo'
import { makeExecutableSchema } from 'graphql-tools'

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

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

createApolloServer({
	schema,
})
