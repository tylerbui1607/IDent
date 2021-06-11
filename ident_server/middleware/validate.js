module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) {
            console.log('line 5 validate.js data has error');
            console.log(error.details[0].message);
            res.status(400).json({ 
                message : error.details[0].message.replace(/"/g, '')
            });
            return;
        }
        next();
    }
}