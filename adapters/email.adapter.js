import User from '../models/user.model.js'

export const emailAdapter = async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findById(userId)
        const adaptedEmail = user.email
        return adaptedEmail
    }
    catch (error) {
        console.log(error)
    }

}