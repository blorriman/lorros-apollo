import Resolutions from './resolutions'

export default {
	Query: {
		resolutions(obj, args, { userId }) {
			console.log(userId)
			// resolutions(obj, args, { user }) {
			// if (!user) return null
			return Resolutions.find({
				userId: userId,
			}).fetch()
		},
	},

	Mutation: {
		createResolution(obj, { name }, { userId }) {
			console.log(userId)
			const resolutionId = Resolutions.insert({
				name,
				userId: userId,
			})
			return Resolutions.findOne(resolutionId)
		},
	},
}
