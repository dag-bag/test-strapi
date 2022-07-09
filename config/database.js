module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'sql610.main-hosting.eu'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u779264867_demo'),
      user: env('DATABASE_USERNAME', 'u779264867_demo'),
      password: env('DATABASE_PASSWORD', 'demo@1Dddd'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
