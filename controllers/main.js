module.exports = {
    'GET /': async (ctx, next) => {
        ctx.response.status = 200;
        ctx.type = 'text/plain';
        ctx.body = 'Welcome to napm test server!';
    }
};