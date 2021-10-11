exports.lambdaHandler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=UTF-8'
        },
        body: 'Hello, world.'
    };
    return response;
}