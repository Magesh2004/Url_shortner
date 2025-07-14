const prisma = require('../config/db')
const {nanoid} = require('nanoid')
const sendResponse = require('../utils/sendResponse')


module.exports.createUrl = async(req,res)=>{
    const {url} = req.body
    let shortUrl 
    let exist = true;
    while(exist){
        shortUrl = nanoid(7);
        const existUrl = await prisma.shortUrl.findUnique({
            where:{
                shortUrl
            }
        })
        if(!existUrl)exist=false
    }
    const Url = await prisma.shortUrl.create({
        data:{
            url,
            shortUrl
        }
    })
    sendResponse(res,201,Url)
}

module.exports.FetchUrl = async(req,res)=>{
    const {shUrl} = req.params;
    const data = await prisma.shortUrl.findUnique({
        where:{
            shortUrl:shUrl
        }
    })
    if(!data)return sendResponse(res,404,{message:"date not found"})
    await prisma.shortUrl.update({
        where:{
            shortUrl:shUrl
        },data:{
            views:{increment:1}
        }
    })
    sendResponse(res,200,data)
}

module.exports.UpdateUrl = async(req,res)=>{
    const {shUrl} = req.params;
    const {url} = req.body;
    const existUrl = await prisma.shortUrl.findUnique({
        where:{
            shortUrl:shUrl
        }
    });
    if(!existUrl)return sendResponse(res,404,{message:"date not found"})
    const updatedUrl = await prisma.shortUrl.update({
        where:{
            shortUrl:shUrl
        },
        data:{
            url
        }
    })
    sendResponse(res,200,updatedUrl)
}

module.exports.DeleteUrl = async(req,res)=>{
    const {shUrl} = req.params;
    const existUrl = await prisma.shortUrl.findUnique({
        where:{
            shortUrl:shUrl
        }
    });
    if(!existUrl)return sendResponse(res,404,{message:"date not found"})
    await prisma.shortUrl.delete({
        where:{
            shortUrl:shUrl
        }
    })
    sendResponse(res,204,{message:"date deleted"})
}