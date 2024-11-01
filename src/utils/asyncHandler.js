




const asyncHanlder = (requestHanlder) => {

    return (req, res, next) => {
        Promise.resolve(requestHanlder(req, res, next)).catch((err) => next(err))
    }

}


export { asyncHanlder }





// const asyncHanlder = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }