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

const persons = [
    {
        'image': 'person-vlad.jpg',
        'description': 'Oenolog de aproximativ 2 ani, iubitor al vinului dintotdeauna.',
        'name': 'Vlad G.',
        'title': 'Fondator'
    },
    {
        'image': 'person-ralu.jpg',
        'description': 'Specialist PR & social media, iubitoare al vinului dulce',
        'name': 'Raluca G.',
        'title': 'Co-fondator'
    },
    {
        'image': 'person-oana.jpg',
        'description': "Una dintre persoanele din 'prima linie' care au ajutat la făurirea acestui vin",
        'name': 'Oana S.',
        'title': 'Asociată'
    },
];

const sliders = [
    {
        img: 'home-1.jpg',
        caption: 'Crescuți\ncu răbdare',
        button: "Află mai multe",
        button_url: "/about"
    },
    {
        img: 'home-2.jpg',
        caption: 'Adunați\ncu grijă',
        button: "Comandă",
        button_url: "/order"
    },
    {
        img: 'home-3.jpg',
        caption: 'Selecționati\ncu atenție',
        button: "Află mai multe",
        button_url: "/about"
    },
    {
        img: 'home-4.jpg',
        caption: 'Preparați\ncu pasiune',
        button: "Comandă",
        button_url: "/order"
    },
];

export { title, infoCards, sliders, networks, persons }