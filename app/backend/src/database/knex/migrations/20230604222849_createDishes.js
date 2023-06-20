exports.up = (knex) =>
  knex.schema.createTable('dishes', (table) => {
    table.increments('id').primary();
    table.text('image');
    table.text('name');
    table.text('ingredients');
    table.integer('price');
    table.text('category');
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('dishes');
