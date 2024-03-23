import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        passHash: { type: String, required: true },
        role: { type: String, defaultValue: "USER" }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', UserSchema)

// export const UserFoto = sequelize.define('user_foto',
//     { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } }
// )

// export const Foto = sequelize.define('foto', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     img: { type: DataTypes.STRING, allowNull: false }
// })

// export const Year = sequelize.define('year', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     year: { type: DataTypes.INTEGER, unique: true, allowNull: false }
// })

// export const Place = sequelize.define('place', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false }
// })

// export const YearPlace = sequelize.define('year_place', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
// })

// User.hasMany(UserFoto)
// UserFoto.belongsTo(User)

// Foto.hasMany(UserFoto)
// UserFoto.belongsTo(Foto)

// Year.hasMany(Foto)
// Foto.belongsTo(Year)

// Place.hasMany(Foto)
// Foto.belongsTo(Place)

// Place.belongsToMany(Year, { through: YearPlace })
// Year.belongsToMany(Place, { through: YearPlace })

