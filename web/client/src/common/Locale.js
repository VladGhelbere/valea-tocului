import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const title = 'Valea Tocului';

const infoCards = [
    {
        title: 'Valea Tocului',
        description: 'Dacă vrei să ne urmarești progresul, sau pur si simplu îți place vinul natural, urmărește-ne pe una din rețelele de socializare de mai jos !'
    },
    {
        title: 'Locație',
        description: 'Țara: România\nLocația: Toc, Arad, 317277\nLivrare personală în: Arad, Timișoara'
    }
];

const networks = [
    {
        'url': 'https://www.facebook.com/valeatocului',
        'icon': <FacebookIcon style={{ fontSize: 'xxx-large' }} />
    },
    {
        'url': 'https://www.instagram.com/valeatocului/',
        'icon': <InstagramIcon style={{ fontSize: 'xxx-large' }} />
    },
];

export { title, infoCards, networks }