const express = require('express');
const authorsRouter = express.Router();
function router(nav){

    var books = [
        {
            title: 'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"jb2"

            // img:" jk rowling.webp"
        },
        {
            title: 'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:"jk rowling.webp"
        },
        {
            title: 'Pathumayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"Basheer1.jpg"
        }
    ]
    // 2nd router method
    authorsRouter.get('/',function(req,res){
        res.render("author",{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Library',
            books
        });
    });
    
    
    // booksRouter.get('/single',function(res,res){
    //     res.send("Hey Iam a Single Book");
    // });
    
    authorsRouter.get('/:iv',function(req,res){
        const iv = req.params.iv
        res.render('authorsi',{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Library',
            book: books[iv]
        })
    });
    return authorsRouter;
}



module.exports = router;

