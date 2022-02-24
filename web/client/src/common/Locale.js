import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const title = 'Valea Tocului';

const infoCards = [
    {
        title: 'Valea Tocului',
        description: 'Dacă vrei să ne urmarești progresul, sau pur si simplu îți place vinul natural, urmărește-ne pe una din rețelele de socializare de mai jos !'
    },
    {
        title: 'Livrare',
        description: 'Livrare personală în: Arad, Timișoara. În afara acestor orașe se percepe o taxă suplimentară de livrare.'
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
    {
        'url': 'tel:+40732819631',
        'icon': <WhatsAppIcon style={{ fontSize: 'xxx-large' }} />
    },
    {
        'url': 'mailto:tocwine@gmail.com',
        'icon': <EmailIcon style={{ fontSize: 'xxx-large' }} />
    },
    {
        'url': 'https://www.google.com/maps/place/Toc/@46.0163342,22.29995,14z/data=!3m1!4b1!4m5!3m4!1s0x474f101d4ef5b2e1:0x37c84f1bb90a8eee!8m2!3d46.0063961!4d22.3193622',
        'icon': <LocationOnIcon style={{ fontSize: 'xxx-large' }} />
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
        'description': 'Specialist PR & social media, iubitoare al vinului dulce.',
        'name': 'Raluca G.',
        'title': 'Co-fondator'
    },
    {
        'image': 'person-oana.jpg',
        'description': "Una dintre persoanele din 'prima linie' care au ajutat la făurirea acestui vin.",
        'name': 'Oana S.',
        'title': 'Student'
    },
    {
        'image': 'person-romeo.jpg',
        'description': "Persoana responsabilă de minunățiile de imagini ale produselor noastre.",
        'name': 'Romeo B.',
        'title': 'Fotograf'
    }
];

const sliders = [
    {
        img: 'home-1.jpg',
        caption: 'Vin cu adevărat dulce',
        button: "Comandă",
        button_url: "/order"
    },
    {
        img: 'home-2.jpg',
        caption: 'Din struguri adunați cu grijă',
        button: "Află mai multe",
        button_url: "/about"
    },
    {
        img: 'home-3.jpg',
        caption: 'Și preparați cu pasiune',
        button: "Comandă",
        button_url: "/order"
    },
    {
        img: 'home-4.jpg',
        caption: 'De pe Valea Tocului',
        button: "Află mai multe",
        button_url: "/about"
    },
];

const about = {
    title: 'Despre "Valea Tocului"',
    description: 'Valea Tocului este un proiect început de un grup de tineri din jud. Arad, Sat. Toc, care și-au găsit pasiunea în culegerea & selectarea strugurilor pentru crearea unui vin de casă natural. Satul Toc se află în comuna Săvârșin din județul Arad, la limita între regiunile istorice Banat și Crișana. Satul Toc este așezat pe Valea Tocului. Se învecinează la nord cu Troașul, la est cu Ilteul, la vest se află Cuiașul, iar la sud Mureșul. Înființat în anul 1715, până în prezent, satul nu a reușit să găzduiască mai mult de câteva sute de locuitori (<250). Datorită numărului mic de locuitori, lipsei unei industrii, și a separării terenurilor arabile de restul satului, acesta a rămas mereu protejat din punctul de vedere al poluării. Aproape la fiecare casă din sat se găsește o vie, fie ea departe în grădină sau împăienjenind intrarea în curte, viile din Toc sunt în cea mai mare parte îngrijite de către localnici, care nu prea au mult folos pentru cantitățile de struguri rodite toamna. Noi ne-am propus, să colaborăm cu producătorii locali, să-i ajutăm să-și îngrijească via, și să vă oferim vouă un vin curat, creat doar prin fermentație naturală, fără urme de sulf sau drojdii adăugate, de care să se poată bucura întreaga comunitate.'
}

export { title, infoCards, about, sliders, networks, persons }