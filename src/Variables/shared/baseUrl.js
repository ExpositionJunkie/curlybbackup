export let baseUrl

switch (process.env.NODE_ENV) {
    case ("development"):
        baseUrl = "https://localhost:3443/"
        break;
    case ("production"):
        baseUrl = "https://api.curlybrackets.me/"
        break;
    default:
        baseUrl = "https://api.curlybrackets.me"
}
