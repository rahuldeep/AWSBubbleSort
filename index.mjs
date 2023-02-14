/*import * as router from 'aws-lambda-router'

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [
            {
                // request-path-pattern with a path variable:
                path: '/article/:id',
                method: 'GET',
                // we can use the path param 'id' in the action call:
                action: (request, context) => {
                    return "You called me with: " + request.paths.id;
                }
            },
             {
                // request-path-pattern with a path variable:
                path: '/',
                method: 'GET',
                // we can use the path param 'id' in the action call:
                action: (request, context) => {
                    return "You called me with: nothing" ;
                }
            },
            {
                // request-path-pattern with a path variable in Open API style:
                path: '/section/{id}',
                method: 'GET',
                // we can use the path param 'id' in the action call:
                action: (request, context) => {
                    return "You called me with: " + request.paths.id;
                }
            }
        ]
    }
})*/


export const handler =  async function(event, context) {
    let body = JSON.parse(event.body)
    const product = body.num1 * body.num2;
    const response = {
        statusCode: 200,
        body: "The product of " + body.num1 + " and " + body.num2 + " is " + product,
    };
    return response;
};