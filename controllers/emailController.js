const sendEmail = require('../utils/email');
const validator = require('validator');


exports.sendEmailTemplate = async (req, res, next) => {

    const resetUrl = `http://katlehormakhoba.com`;

    if(!req.body.name || !req.body.email){
        return res.status(404).json({
            status: 'fail',
            message: 'Please enter name and email'            
        });
    }

    if(!validator.isEmail(req.body.email) || !validator.isAlpha(req.body.name)){
        return res.status(404).json({
            status: 'fail',
            message: 'Please enter valid name and email address'            
        });
    }


    try {
        await new sendEmail(req.body, resetUrl).sendHello();

        res.status(200).json({
            status: 'success',
            message: 'Email sent!'
        });

    } catch (err) {

        res.status(404).json({
            status: 'fail',
            message: 'Email not sent!',
            err
        });
    }
    

}