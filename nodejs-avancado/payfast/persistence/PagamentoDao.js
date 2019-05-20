function PagamentoDao(connection) {
    this._connection = connection;
}

PagamentoDao.prototype.save = function(pagamento, callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentoDao.prototype.update = function(pagamento, callback) {
    this._connection.query('UPDATE pagamentos set status = ? WHERE id = ?',
    [pagamento.status, pagamento.id],
    callback);
}

PagamentoDao.prototype.list = function(callback) {
    this._connection.query('SELECT * FROM pagamentos', callback);
}

PagamentoDao.prototype.findById = function(id, callback) {
    this._connection.query('SELECT * FROM pagamentos WHERE id = ?', id, callback);
}

module.exports = () => {
    return PagamentoDao;
};