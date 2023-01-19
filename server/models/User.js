const { Schema, model }= require('mongoose');
const { hash, compare }= require('bcrypt');

const UserSc= new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            unique: true
        },
        boards:[{
            type: Schema.Types.ObjectId,
            ref: 'Board'
        }]
    }    
);
    
UserSc.pre("save", function(next){
    let user= this;

    hash(user.password, 10, (err, res)=>{
        if(err) return next(err);

        user.password= res;
        next();
    })
})

UserSc.methods.checkPw = async function(pw) {
    return compare(pw, this.password)
};

module.exports= model("User", UserSc);;