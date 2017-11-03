module.exports = {
    'GET /test/ajax': async (ctx, next) => {
        ctx.render('ajax-test.html', {
            title: 'AJAX Test'
        });
    }
};