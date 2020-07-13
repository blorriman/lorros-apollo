import Resolutions from './resolutions'

export default {
	Query: {
		resolutions(obj, args, { userId }) {
			return Resolutions.find({
				userId: userId,
			}).fetch()
		},
	},

	Mutation: {
		createResolution(obj, { name }, { userId }) {
			const resolutionId = Resolutions.insert({
				name,
				userId: userId,
			})
			return Resolutions.findOne(resolutionId)
		},
	},
}
