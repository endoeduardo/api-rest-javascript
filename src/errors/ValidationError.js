import BaseError from "./baseError.js";

class ValidationError extends BaseError {
    constructor (message="Internal server error occurred!", status=500) {
        super(message, status);
    };
};

export default ValidationError;