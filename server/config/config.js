let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 8080;
    
    //link to mongoDB cluster
    process.env.MONGODB_URI = 'mongodb+srv://admin:admin@cluster0-j29ua.mongodb.net/test?retryWrites=true&w=majority';
}