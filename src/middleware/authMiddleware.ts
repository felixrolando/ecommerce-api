import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'

interface CustomRequest extends Request {
    token: string | JwtPayload;
}

const SECRET_KEY: Secret = process.env.JWT_TOKEN_SECRET as string;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

export default verifyToken
