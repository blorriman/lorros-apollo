import Resolutions from './resolutions'

export default {
	Query: {
		resolutions(obj, args, { user }) {
			if (!user) return null
			return Resolutions.find({
				userId: user._id,
			}).fetch()
		},
	},

	Mutation: {
		createResolution(obj, { name }, { user }) {
			const resolutionId = Resolutions.insert({
				name,
				userId: user._id,
			})
			return Resolutions.findOne(resolutionId)
		},
	},
}
