module.exports = {
    DB_HOST: "127.0.0.1",
    DB_PORT: "3306",
    DB_USER: "root",
    DB_PASSWORD: "root",
    DB_DATABASE: "mall",
    
    DEFAULT_AVATAR: "http://127.0.0.1:3000/public/images/avatar.jpg",
    
    ALLOW_ORIGIN: "http://127.0.0.1:8080",
    ALLOW_HEADER: "content-type",
    ALLOW_METHOD: "POST, GET",
    ALLOW_CREDENTIAL: true,
    
    REQUEST_PREFIX: "api",

    SESSION_SECRET: "moremall",

    REQUIRE_LOGIN_URLS: ["/user/profile", "/cart/add", "/cart/list", "/cart/checked", "/cart/quantity", "/contact/list", "/order/buy", "/order/pay", "/order/list"]
}
