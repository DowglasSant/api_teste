import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.post('/post', (req: Request, res: Response) => {
    const { nome, idade, rg } = req.body;

    res.send(nome + " " + idade + " " + rg);
})

app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at port 3000`);
});