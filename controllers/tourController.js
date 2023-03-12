const fs = require("fs");

const tour = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

const checkId = (req,res,next,val)=>{
    console.log(val);
    if(val > tour.length){
        return res.status(404).json({
            status: "failed",
            message: "no id"
        });
    }
    next()
}

const middlewareTour =(req,res,next)=>{
    console.log(req.body);
    const keysToCheck = ['name', 'price'];

    let allKeysPresent = true;
    keysToCheck.forEach(key => {
        if (!req.body.hasOwnProperty(key)) {
            allKeysPresent = false;
        }
    });
    if(!allKeysPresent){
        return res.status(400).json({
            status: "failed",
            message:"some keys are missing"
        })
    }
    next();
}

const deleteTour = (req,res) =>{
    if(req.params.id > tour.length){
        return res.status(404);
    }
    res.status(200).json({
        status: "success",
        data: null
    })

}

const getSingleTour=(req,res)=>{
    const id = +req.params.id;
    console.log(id);
   
    const singleTour = tour.find((elem)=> +elem.id === id);
    if(!singleTour){
        return res.status(404).json({
            status: "failed",
            message:"tour not found"
        });
    }
    console.log(singleTour);
    res.status(200).json({
        status:'success',
        singleTour
    });
}

const getAllTours = (req,res)=>{
    res.status(200).json({
        status:'success',
        tour
    });
}

const updateTours = (req,res)=>{
   
    res.status(200).json({
        status: "success",
        data:"updated"
    })
}

const createTour = (req,res)=>{

    const newId = tour[tour.length - 1].id + 1
    console.log(req.body);
    const newTour = {id : newId , ...req.body};
    tour.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json` , JSON.stringify(tour) ,err=>{
        console.log(err);
    })
    res.status(201).json({
        status:'success',
        data : {tour}

    })

}

module.exports ={createTour,updateTours,getAllTours,getSingleTour,deleteTour,checkId,middlewareTour}