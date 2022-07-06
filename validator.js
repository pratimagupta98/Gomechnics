 const validator = (schema) => (payload) =>

 schema.validate(payload,{abortEarly:false})

 const signupSchema = joi.object({
 email:joi.string().email().required(),
 password:joi.string().main(3).max(10).required()
 })
 

 exports.validateSignup = validator(signupSchema)