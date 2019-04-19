

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        remote: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false


        },

        inperson: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false


        },
        subjects: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""


        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              isUrl: true,
            },
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    });
    return User;
};