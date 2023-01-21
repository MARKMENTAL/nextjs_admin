import { NextApiRequest, NextApiResponse } from 'next';

const distros = [
  {
    name: 'Ubuntu',
    version: '20.04 LTS',
    packageManager: 'apt',
  },
  {
    name: 'Debian',
    version: '10',
    packageManager: 'apt',
  },
  {
    name: 'Arch Linux',
    version: '2022.02.01',
    packageManager: 'pacman',
  },
  {
    name: 'Fedora',
    version: '33',
    packageManager: 'dnf',
  },
  {
    name: 'OpenSUSE',
    version: '15.3',
    packageManager: 'zypper',
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: distros });
};
