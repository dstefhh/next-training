// const { Client } = require('@vercel/postgres');
const { Client } = require('pg');
// const { Client } = require('@vercel/postgres-kysely');
// const {sql} = require('@vercel/postgres-kysely');

// const {
//   invoices,
//   customers,
//   revenue,
//   users,
// } = require('../app/lib/placeholder-data.js');
// const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     await client.query`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.query`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.query`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

// async function seedInvoices(client) {
//   try {
//     await client.query`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.query`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//     console.log(`Created "invoices" table`);

//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.query`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedInvoices.length} invoices`);

//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }

// async function seedCustomers(client) {
//   try {
//     await client.query`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.query`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;

//     console.log(`Created "customers" table`);

//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.query`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCustomers.length} customers`);

//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.query`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "revenue" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.query`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function main() {

  // const password = 'postgres';
  // const quotedPassword = '"' + password + '"';
  // const client = await db.connect();
  const client = new Client({ user: 'postgres', password: 'postgres', host: '127.0.0.1', port: 5432, database: 'postgres' });
  
  const databaseName = process.env.POSTGRES_URL.split('/')[3];
  console.log(`the ENV database name is: ${databaseName}`)

  const password = process.env.POSTGRES_PASSWORD;
  console.log(`the ENV Password is: ${password}`)

  const allObject = process.env.POSTGRES_URL
  console.log(`the all connection string is: ${allObject}`)
// await sql `      CREATE TABLE IF NOT EXISTS public.users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );`

// const client = new Client();
// client.connect();
// const client = new Client({
//   user: 'postgres',
//   password,
//   host: 'localhost',
//   port: 5432,
//   databaseName
// });
// client.connect();

//   client.connectionConfig.database = databaseName;
// client.connectionConfig.password = password;

  if (client) {
    console.log('Client object is initialized.');
    console.log(`Database name: ${client.database}`);
    console.log(`Database password: ${client.password}`);
    console.log(`Database port: ${client.port}`);
    console.log(`Database host: ${client.host}`);
  } else {
    console.error('Client object is not initialized.');

  }
  // client.connectionConfig.password = quotedPassword;
  // const connectionConfig = client.connectionConfig;
  
  // console.log(`the password is: ${connectionConfig.password}`)
  // console.log(`the database is: ${connectionConfig.database}`)
  // console.log(`the Host is: ${connectionConfig.host}`)
  // console.log(`the Port is: ${connectionConfig.port}`)
  // console.log(`the Username is: ${connectionConfig.username}`)
  // client.connect();
  // try{
  //   const connectPromise = client.connectAsync();
  // }catch (error){
  //   console.error('caught the error', error);
  // }
  client.connect();
  // console.log('the connection is');
  // console.log(client);
  // client.connect().then(() => {
  //   console.log('Connected to PostgreSQL database.');
  // });

  const isConnected = client._connected;
  console.log('Is connected:', isConnected);

  // if (client.connected) {
  //   console.log('Client is connected to the database.');
  // } else {
  //   console.error('Client is not connected to the database.');
  // }
  client.query(`
  CREATE TABLE IF NOT EXISTS public.users2 (
    id int PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`);

    // try {
    // client.query(`
    //   CREATE TABLE IF NOT EXISTS public.users2 (
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     email TEXT NOT NULL UNIQUE,
    //     password TEXT NOT NULL
    //   );
    // `);

    //     console.log(`Created "users" table`);
    // } catch (error) {
    // console.error('Error seeding users:', error);
    // throw error;
    // }
  // await seedUsers(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);

  // client.end();
  client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
