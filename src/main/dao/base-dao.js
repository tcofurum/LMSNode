const pageSize = 5;

function getLimit(pageNo, sql){
    if(pageNo > 0) sql += ' LIMIT '+(pageNo - 1)*pageSize+' ,'+pageSize;
    return sql;
}

module.exports = {
    getLimit
}