export function cookieParser(err, req, res, next){
    if(err) next(req, res);

    const cookies = req.headers.cookies;
    req.parsedCookies = cookies;
    next(req, res);
}