export function queryParser(err, req, res, next){
    if(err) next(req, res);

    const query = req.query;
    req.parsedQuery = query;
    next(req, res);
}