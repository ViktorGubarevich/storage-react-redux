export function checkCredentials(params) {
    if (
        params.username.toLowerCase() !== 'admin' ||
        params.password !== 'admin'
    ) {
        return false
    }

    return true
}
