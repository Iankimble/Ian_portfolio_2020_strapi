module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: `mongodb+srv://ianblog:${process.env.MONGO_PASSWORD}@cluster0.regpt.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
      },
      options: {
        ssl: "true",
      },
    },
  },
});
