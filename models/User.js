const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connection")

//create a user model
class User extends Model {}

User.init(
    //table deffinitions
    {
        id:{
            type: DataTypes.INTEGER,
            //equivellant to NOT NULL
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            //there can be no duplicate email values
            unique: true,
            //if allowNul is false we can run data through validators
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    //table configurations
    {
        //pass in the connection to database
        sequelize,
        //dont create createdAt/updatedAt timestamp fields
        timestamps: false,
        //dont pluralize name of database table
        freezeTableName: true,
        //use this_type_of_text instead of thisTypeOfText
        underscored: true,
        //model name stays lowercased
        modelName: "user"
    }
)

module.exports = User