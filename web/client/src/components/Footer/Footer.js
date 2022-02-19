import './Footer.css'
import FooterCard from './FooterCard';

import { infoCards, networks } from '../../common/Locale';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-cards'>
          {
            infoCards.map((card, i) => <FooterCard title={card.title} description={card.description} key={i} />)
          }
        </div>
        <div className='networks'>
          {
            networks.map((network, i) => {
              return <a href={network.url} className='network-card' key={i}>
                {network.icon}
              </a>
            })
          }
        </div>

      </div>


      <div className='copyright'>
        Copyright © 2022 All rights reserved | Valea Tocului
      </div>
    </footer>
  )
}

export default Footer
