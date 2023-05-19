let db={};
db.roles=require('./roles');
db.user=require('./user');
db.roles.belongsToMany(db.user,{
    as:'responsibility',
    through:'user_roles',
    foreignKey:'roleId',
    otherKey:'userId',
})
db.user.belongsToMany(db.user,{
    as:'person',
    through:'user_roles',
    foreignKey:'userId',
    otherKey:'roleId',
});
db.Roles=['user','admin'];
module.exports=db;