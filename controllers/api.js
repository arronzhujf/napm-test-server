// 存储Product列表，相当于模拟数据库:
var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.response.status = 200;
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        // 设置Response Body:
        ctx.response.body = {
            products: products
        };
    },

    'GET /api/returnParam': async (ctx, next) => {
        if (ctx.request.querystring != "") {
            ctx.response.status = 200;
            ctx.response.type = 'application/json';
            ctx.response.body = ctx.request.query;
        } else {
            ctx.response.status = 200;
            ctx.response.type = 'text/plain; charset=utf-8';
            ctx.response.body = 'param not found';
        }
    }
}