const { app } = require('@azure/functions');

app.http('current-time', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const currentTime = new Date().toISOString();
        // const name = request.query.get('name') || await request.text() || 'world';

        return { body: {
            message: "Current server time",
            time: currentTime
          } 
        };
    }
});
