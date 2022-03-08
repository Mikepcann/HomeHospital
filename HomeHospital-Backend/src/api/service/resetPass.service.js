import PatientModel from '../../models/patient.Model.js'
import bcrypt from 'bcryptjs'



export async function updatePassword(uemail, newPassword) {
    const patient = await PatientModel.findOne({ email: uemail })
    console.log("Current patient password: " + patient.password);

    if(patient != null){
        const { genSalt, hash } = bcrypt;
	    const salt = await genSalt(10);
	    const hashedPassword = await hash(newPassword, salt);
        const filter = {email: uemail};
        const update = {password: hashedPassword};
        const updatedUser = await PatientModel.findOneAndUpdate(filter, update, {new: true});
        //const changedPatient = await PatientModel.findOne({ email: uemail })
        if(updatedUser.password === hashedPassword)
        {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }


}