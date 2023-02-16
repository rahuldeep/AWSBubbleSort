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


/*export const handler =  async function(event, context) {
    const body = JSON.parse(event.body);
    const product = body.num1 * body.num2;
    const response = {
        statusCode: 200,
        body: "The product of is " + product,
    };
    return response;
};*/


export const handler =  async function(event, context) {
    
    //get the query parameters and split them into inutArray
    const inputString = event.queryStringParameters.slist;
    const inputArrayString = inputString.split(",");
    const inputArray = inputArrayString.map(Number);
    

    let swapCount = 0;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        //parse through the array swapping elements
        inputArray.forEach((currentValue, index) => {
            if (currentValue > inputArray[index + 1]) {
                swapElements(index);
                swapCount++;
                //since an element was swapped, it is still not sorted
                isSorted = false;
            }
        });
    }
    //send response (array)
    const response = {
        statusCode: 200,
        body: JSON.stringify("Here is the sorted list " + inputArray),
    };
    return response;
    

//swap element function
function swapElements(index) {
    [inputArray[index], inputArray[index + 1]] = [inputArray[index + 1], inputArray[index]];
}
};



