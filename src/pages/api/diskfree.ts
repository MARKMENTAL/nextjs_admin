import { spawnSync } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Runcmd(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { stdout, stderr } = spawnSync('df', ['-h']);
      if (stdout) {
        res.status(200).json({
          message: stdout.toString()
        });
      } else {
        res.status(500).json({
          message: stderr.toString()
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'An error occurred while running the command'
      });
    }
  }
