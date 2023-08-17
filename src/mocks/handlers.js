import { rest } from 'msw';

export const handlers = [
    rest.get('/title-entities', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [
                    {
                      id: 1,
                      title: 'Terminator 1',
                    },
                    {
                      id: 2,
                      title: 'Terminator 2',
                    },
                    {
                      id: 3,
                      title: 'Terminator 3',
                    },
                    {
                      id: 4,
                      title: 'Terminator 4',
                    },
                    {
                      id: 5,
                      title: 'Terminator 5',
                    },
                ]
            )
        );
    })
];
