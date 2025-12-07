import { NavItem, NewsItem, TaskItem, Alumni, BookReference } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Басты бет', href: '#hero' },
  { label: 'Адаптация', href: '#adaptation' },
  { label: 'Пәндер', href: '#subjects' },
  { label: 'Дайындық есептері', href: '#tasks' },
  { label: 'Выпускники', href: '#alumni' },
  { label: 'Әдебиеттер', href: '#references' },
  { label: 'Кері байланыс', href: '#contact' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'Халықаралық Жәутіков Олимпиадасының жеңімпаздары',
    date: '12 Қазан 2023',
    category: 'Жетістіктер',
    imageUrl: 'https://izho.kz/wp-content/uploads/2018/01/MG_2198.jpg' 
  },
  {
    id: 2,
    title: 'Мектеп парламентінің жаңа құрамы сайланды',
    date: '05 Қараша 2023',
    category: 'Мектеп өмірі',
    imageUrl: 'https://almaty.fizmat.kz/wp-content/uploads/sites/2/2025/11/img_20251107_182952_202.jpg'
  },
  {
    id: 3,
    title: 'Робототехника көрмесіндегі жаңа жобалар',
    date: '10 Желтоқсан 2023',
    category: 'Ғылым',
    imageUrl: 'https://mugalzhar.kz/wp-content/uploads/2025/05/c12cb056-4146-4b58-aa9d-b62b4e657417.jpg'
  }
];

export const TASKS: TaskItem[] = [
  {
    id: 1,
    topic: 'Натурал көрсеткішті дәреже',
    question: 'Есептеңіз: (2³ · 2⁵) / 2⁶',
    hint: 'Негіздері бірдей дәрежелерді көбейткенде дәреже көрсеткіштері қосылады, ал бөлгенде азайтылады. Формула: aⁿ · aᵐ = aⁿ⁺ᵐ'
  },
  {
    id: 2,
    topic: 'Стандарт түр',
    question: 'Санды стандарт түрде жазыңыз: 45 000 000',
    hint: 'Санның стандарт түрі: a · 10ⁿ, мұндағы 1 ≤ a < 10. Үтірді 4-тен кейін қойып, неше орынға жылжытқаныңызды санаңыз.'
  },
  {
    id: 3,
    topic: 'Жуық мән',
    question: 'Санды ондық үлеске дейін дөңгелектеңіз: 12.378',
    hint: 'Ондық үлес – үтірден кейінгі бірінші цифр (3). Одан кейінгі цифрға қараңыз (7). Егер ол 5 немесе одан үлкен болса, алдыңғы цифрды 1-ге арттырамыз.'
  },
  {
    id: 4,
    topic: 'Бөлінгіштік және ЕҮОБ',
    question: '18 және 24 сандарының Ең Үлкен Ортақ Бөлгішін (ЕҮОБ) табыңыз',
    hint: 'Екі санды да жай көбейткіштерге жіктеңіз. Екеуінде де бар ортақ көбейткіштерді теріп жазып, оларды көбейтіңіз.'
  }
];

export const ALUMNI_LIST: Alumni[] = [
  {
    id: 1,
    name: 'ТИМУР ҚҰЛЫБАЕВ',
    role: 'Қоғам қайраткері, ірі кәсіпкер, «KazEnergy» қауымдастығының төрағасы',
    imageUrl: 'https://iy.kommersant.ru/Issues.photo/Partners_Docs/2024/02/06/KMO_111307_55337_1_t222_183113.jpg'
  },
  {
    id: 2,
    name: 'ВЯЧЕСЛАВ КИМ',
    role: 'Мемлекет қайраткері, генерал-майор, ҚР ҰҚК бұрынғы төрағасы',
    imageUrl: 'https://img.forbes.kz/forbes-photobank/media/2024-05-16/26256718-5f8d-46da-97e4-3e410449a262.jpeg'
  },
  {
    id: 3,
    name: 'НҰРЛАН ҚАППАРОВ',
    role: 'Мемлекет қайраткері, кәсіпкер, «Lancaster Group» негізін қалаушы (естелік)',
    imageUrl: 'https://img.forbes.kz/forbes-photobank/media/2024-06-20/96ab77a9-57ad-4e57-8f7c-172af5691494.webp' 
  },
  {
    id: 4,
    name: 'ЕРБОЛАТ ДОСАЕВ',
    role: 'Мемлекет қайраткері, Алматы қаласының әкімі',
    imageUrl:'https://inbusiness.kz/uploads/2024-1/AiiMpsbX.jpg'
  },
  {
    id: 5,
    name: 'БЕРИК КАНИЕВ',
    role: '«LANCASTER GROUP KAZAKHSTAN» Компаниясының директоры, «РФММ», КЕАК Баскармасы директорлар кенесінің терарасы',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Photo_of_Berik_Kaniyev.jpg'
  }
];

export const BOOK_REFERENCES: BookReference[] = [
  { id: 1, text: 'Қ.Ә. Есімова. «Алгебра 7-сынып». «Мектеп» баспасы.' },
  { id: 2, text: 'Ә.Н. Шыныбеков, Д.Ә. Шыныбеков. «Алгебра 7-сынып». «Атамұра», 2017 ж.' },
  { id: 3, text: 'Г.З. Бак, Б.А. Голуб. «Алгебра 7-класс. Дидактические материалы».' }
];

export const SCHEDULE_DATA = [
  { time: '08:00 - 08:45', subject: 'Алгебра', room: '304' },
  { time: '08:55 - 09:40', subject: 'Геометрия', room: '304' },
  { time: '09:50 - 10:35', subject: 'Физика', room: '201' },
  { time: '10:55 - 11:40', subject: 'Ағылшын тілі', room: '105' },
];