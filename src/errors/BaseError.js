class BaseError extends Error {
    constructor (message="Internal server error occurred!", status=500) {
        super();
        this.message = message;
        this.status = status;
    };

    sendErrorResponse(res) {
        res
        .status(this.status)
        .send({
            status: this.status,
            message: this.message
        });
    };
};

export default BaseError