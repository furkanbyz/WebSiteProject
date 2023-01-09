/*module.exports((err,req,res,next) => { 
    // 4 parametreli bir middleware görüldüğü anda bunun bir error handling olduğu anlaşılmalı

})*/

module.exports = (err, req, res, next) => {
    res.status(err.statusCode).json(err);
  };
