import './Footer.css'
import FooterCard from './FooterCard';
import { title } from '../../common/Locale';
import { infoCards, networks } from '../../common/Locale';
import ScrollLink from '../ScrollLink/ScrollLink';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-aos="fade-in" data-aos-anchor="#trigger-footer" data-aos-anchor-placement="top-center" >
      <div className='footer-container'>
        <div className='footer-cards'>
          {
            infoCards.map((card, i) => <FooterCard title={card.title} description={card.description} key={i} />)
          }
        </div>
        <div className='networks'>
          {
            networks.map((network, i) => {
              return <a target="_blank" rel="noopener noreferrer" href={network.url} className='network-card' key={i}>{network.icon}</a>
            })
          }
        </div>

      </div>


      <div className='copyright'>
        Copyright © {year} All rights reserved | <ScrollLink to={'/'}>{title}</ScrollLink>
      </div>
    </footer>
  )
}

export default Footer
