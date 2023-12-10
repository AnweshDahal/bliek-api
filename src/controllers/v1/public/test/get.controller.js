const testService = require("../../../../services/v1/public/test");
const {GenericError} = require("../../../../errors")

module.exports = async (req, res, next) => {
  try {
    const message = await testService.get(req.params)
    res.json(message)
  } catch (error){
    console.error("[Controller/Test:Error]", error);
    next(err)
  }
}
