import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function Nachricht(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'TEST';

    return { body: `Hello, ${name}!` };
};

app.http('Nachricht', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: Nachricht
});
