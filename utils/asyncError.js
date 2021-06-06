// async error handler for non route related stuff
exports.AsyncError = async (func) => {
    try {
        await func
    } catch (error) {
        console.error(error.message)
    }
}
