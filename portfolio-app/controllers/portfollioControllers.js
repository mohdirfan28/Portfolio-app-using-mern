const sentEmailController=(req,res)=>{
    try{
        return res.status(200).send({
            success: true,
            message:'ypur msg sent successfully'
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).sent({
            success:false,
            message:"Send email failed",
            error,
        })
    }
};

module.exports={sentEmailController};