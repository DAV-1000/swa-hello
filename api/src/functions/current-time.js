const { app } = require('@azure/functions');

app.http('current-time', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';
        const currentTime = new Date().toISOString();

        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ time: currentTime, message: `Hello, ${name}` }),
        };
    }
});
