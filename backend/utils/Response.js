class Response{
    constructor(data, message, status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }
}
function Success(data) {
    return new Response(data,null,true);
}
function Error(error) {
    return new Response(null,error.message,false);
}
module.exports = {
    Success,
    Error
};