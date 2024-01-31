const mongoose=require("mongoose")
const housesSchema=new mongoose.Schema(
    {adress:{type:String, require:true},
    city:{type:String,require:true},
    price:{type:Number,require:true},
    rooms:{type:Number,require:true}

    },{
        timestamps:true,
        collection:"houses"
        
    }
)
const House=mongoose.model("houses",housesSchema,"houses")

module.exports=House