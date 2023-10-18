const db = require('../db')

module.exports.getAllUser = async () => {
    const [records] = await db.query("SELECT * FROM user")
    return records;
}

module.exports.getEmployeeById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM user WHERE id = ?", [id])
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM user WHERE id = ?", [id])
    return affectedRows;
}

module.exports.addOrEditEmployee = async (obj) => {
    var response= await db.query("INSERT INTO `user` ( `name`, `email`, `pasword`) VALUES ( '"+obj.name+"','"+obj.email+"', '"+obj.pasword+"')")
    return response;
}