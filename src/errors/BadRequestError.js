import BaseError from "./baseError.js";

class BadRequestError extends BaseError {
    constructor(message="Bad Request", status=400){
        super(message=message, status=status);
    };
};

export default BadRequestError;