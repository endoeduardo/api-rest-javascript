import mongoose from "mongoose";
import BadRequestError from "../errors/BadRequestError.js";
import BaseError from "../errors/baseError.js";
import NotFoundError from "../errors/NotFoundError.js";
import ValidationError from "../errors/ValidationError.js";

function errorHandler (err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        new BadRequestError(err).sendErrorResponse(res);
    } else if (err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendErrorResponse(res);
    } else if (err instanceof NotFoundError) {
        new NotFoundError(err).sendErrorResponse(res);
    } else {
        new BaseError(err).sendErrorResponse(res);
    }
};

export default errorHandler