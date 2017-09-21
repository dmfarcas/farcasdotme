import React from 'react'
import './Header.css';

export const Header = () => {
  const ascii =`     __
    / _|
    | |_ __ _ _ __ ___ __ _ ___   _ __ ___   ___
    |  _/ _\` | '__/ __/ _\` / __| | '_ \` _ \\ / _ \\
    | || (_| | | | (_| (_| \\__ \\_| | | | | |  __/
    |_| \\__,_|_|  \\___\\__,_|___(_)_| |_| |_|\\___|`; //oh wow this looks so weird
  const linkList = [
    {
      'site': 'GitHub',
      'href': 'http://github.com/dmfarcas'
    },
    {
      'site': 'Instagram',
      'href': 'http://instagram.com/dmfarcas'
    },
    {
      'site': 'LinkedIn',
      'href': 'https://www.linkedin.com/in/farcas-dan-mihai-518376109'
    },
    {
      'site': 'Twitter',
      'href': 'http://twitter.com/dmfarcas'
    },
  ];
  const logo = <pre>{ascii}</pre>
  const link = (link, i) =>  <a key={i} rel="noopener noreferrer" href={link.href} target="_blank">{link.site}</a>
  const wrappedLinks = linkList.map((linkItem, i) => link(linkItem, i))

  return (
    <div className='Header'>
      {logo}
      <div className="links">
        {wrappedLinks}
      </div>
    </div>
  )
}
