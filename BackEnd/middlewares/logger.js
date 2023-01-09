module.exports=(req,res,next) => {
    const date = new Date()
    const time = new Date()
    const timeresult=time.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})
    
    console.log("Time of Request:",timeresult,"   Requested by:",req.hostname,"   Request Method:",req.method,"   Endpoint:",req.url);

    next()
  }