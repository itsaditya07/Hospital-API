const Doctor = require('../models/doctor');
const Patient = require('../models/patient');


// For sign in the employee
module.exports.registerDoctor = async (req, res, next) =>{
    try{
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message:"doctor created successfully",
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message:"could not create a doctore, internal server error",
        });
    }
};

// module.exports.registerPatient = async (req, res, next) =>{
//     try{
//         req.body.doctor="63eyv3y93n3uyi33y63"
//         const patient = await Patient();

//         // res.status(200).json({
//         //     success: true,
//         //     message:"doctor created successfully",
//         // });
//     }catch(error){
//         res.status(500).json({
//             success: false,
//             message:"could not create a patient, internal server error",
//         });
//     }
// };
