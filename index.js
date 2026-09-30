const jsonServer=require('json-server')
const stServer=jsonServer.create()
const router= jsonServer.router('db.json')
const middleware=jsonServer.defaults()

const PORT=4000

stServer.use(middleware)
stServer.use(router)

stServer.listen(PORT,()=>{
    console.log(`ST_Server started running at PORT:${PORT} successfully`);
    
})

