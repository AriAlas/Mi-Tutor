module.exports = function(sequelize, DataTypes) {
    var Tutor = sequelize.define("Tutor", {
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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
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
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              isUrl: true,
            },
        },
    });
    return Tutor;
};