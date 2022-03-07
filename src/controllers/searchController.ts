import express, { Request, Response, Router } from 'express';

export const search = (req: Request, res: Response) => {  
    res.send('página search!')  
}