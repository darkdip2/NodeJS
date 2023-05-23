module.exports=(sequelize,dbConnection)=>{
    const Role=dbConnection.define('roles',{
        id:
        {
            primaryKey:true,
            notNull:true,
            type:sequelize.DataTypes.INTEGER,
            autoIncrement:true
        },
        name:
        {
            notNull:true,
            type:sequelize.DataTypes.STRING
        },
    },
    {
        timestamps:false
    });
    return Role;
};
