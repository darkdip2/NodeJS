module.exports=(sequelize,dbConnection)=>{
    let Category=dbConnection.define('categories',{
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
        }
    },
    {
        timestamps:false
    });
    return Category;
};
