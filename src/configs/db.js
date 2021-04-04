module.exports = {
  dialect: 'mysql', // process.env.DIALECT,
  host: 'localhost', // process.env.HOST,
  username: 'root', // process.env.USERNAME,
  password: 'root', // process.env.PASSWORD,
  database: 'instadev', // process.env.DATABASE,
  port: 3308, // process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
