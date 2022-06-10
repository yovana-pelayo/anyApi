const pool = require('../utils/pool');

module.exports = class Coffee {
  id;
  name;
  type;
  price;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.price = row.price;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM coffee;');
    return rows.map((row) => new Coffee(row));
  }
};
