const pool = require('../utils/pool');

module.exports = class Coffee {
  id;
  name;
  type;
  money;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.money = row.money;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name  FROM coffee;');
    return rows.map((row) => new Coffee(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM coffee WHERE id=$1;', [
      id,
    ]);

    if (!rows[0]) return null;
    return new Coffee(rows[0]);
  }
};
