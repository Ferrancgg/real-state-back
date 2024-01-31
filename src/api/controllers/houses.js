const House = require("../models/houses")

const getHouses=async(req,res,next)=>{
    try{
        const house=await House.find()
        return res.status(200).json(house)
   
        

    }
    catch(error){console.log("error in controllers")


    }
}

const getHousesById=async(req,res,next)=>{
    try{
    const {id}=req.params
    const houseById=await House.findById(id)
    return res.status(200).json(houseById)


    }
    catch(error){console.log("error in controllers")


    }
}

const postHouses=async(req,res,next)=>{
    try{
        const newHouse= new House(req.body)
        const houseSaved= await newHouse.save()
        return res.status(201).json(houseSaved)

    }
    catch(error){
        res.status(400).json(error)
        console.log("error in controllers")

    }
}
const putHouses=async(req,res,next)=>{
    // try{
    //     const {id}=req.params
    //     const newHouse= new House(req.body)
    //     newHouse._id=id
    //     const newHouseUpdate=await newHouse.findByIdAndUpdate(id,newHouse,{new:true})
        

    // }

    try {
        const { id } = req.params;
        const updatedHouse = await House.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedHouse) {
            return res.status(404).json({ error: 'Casa no encontrada' });
        }

        res.json(updatedHouse);}
    catch(error){console.log("error in controllers")


    }
}

const deleteHouses=async(req,res,next)=>{
    try{
        const{id}=req.params
        const houseDelete=await House.findByIdAndDelete(id)
        return res.status(200).json(houseDelete)
   
        

    }
    catch(error){console.log("error in controllers")


    }
}


module.exports={
    getHouses,getHousesById,postHouses,putHouses,deleteHouses
}