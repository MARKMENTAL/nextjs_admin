import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise((resolve, reject) => {
        exec(`ping -c 3 ${req.query.urlip}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                const data = { message: stdout }
                resolve(data);
            }
        });
    }).then((data) => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).json({ message: "Ping Failed. No Response..." });
    });
};



