import { 
  Wind, 
  Flame, 
  Droplets, 
  Mountain, 
  Sparkles 
} from 'lucide-react';

import imgAbhyanga from '../assets/images/Abhyanga.webp';
import imgShiroabhyanga from '../assets/images/SHIROABHYANGA.webp';
import imgMukhabhyanga from '../assets/images/MUKHABHYANGA.webp';
import imgPottali from '../assets/images/POTTALI.webp';
import imgOrientalny from '../assets/images/ORIENTALNY DOTYK.webp';

export const RITUALS = [
  {
    id: 'abhyanga',
    title: 'ABHYANGA',
    shortDesc: 'Całościowy masaż ajurwedyjski z aktywacją punktów marma.',
    fullDesc: `Masaż ajurwedyjski Abhyanga to półtoragodzinny kompletny masaż całego ciała włączający dodatkowo akupresurę punktów marma. Ma na celu zrównoważenie ciała, umysłu i ducha. Jest częścią holistycznej, tradycyjnej praktyki sięgającej 5000 lat.

Rytuał wykonywany jest przy użyciu ciepłego oleju z dodatkiem ajurwedyjskich mieszanek ziołowych opartych na tradycyjnych recepturach. Koncentruje się na stymulacji drenażu limfatycznego, usuwaniu toksyn i redukcji stresu, aby przywrócić harmonię doszy. W trakcie masażu rozluźniamy mięśnie i ścięgna, równoważymy energię w ciele, osiągamy głęboki relaks, który działa na poziomie fizycznym i psychicznym.

Abhyangę wykonuję powolnymi, płynnymi ruchami, poczynając od stóp w kierunku serca, obejmując całe ciało: nogi, plecy, ręce, brzuch, kark, głowę i twarz. Ciepłe oleje (najczęściej sezamowy, kokosowy lub migdałowy) dobieram do pory roku i typu doszy, aby odżywić skórę i poprawić jej kondycję. Po masażu wyraźnie zmniejsza się napięcie mięśniowe, poprawia się jakość snu, rytuał ujędrnia skórę oraz wpływa na ogólną witalizację organizmu.`,
    notes: [
      'Na życzenie możliwa jest wersja Abhyangi bez stymulacji punktów marma. Trwa wtedy 60 minut.',
      'Należy wziąć pod uwagę, że skóra głowy jest masowana przy użyciu olejów i pozostałości mogą zostać na włosach.',
    ],
    duration: '1.5h',
    price: '210 zł',
    image: imgAbhyanga,
    color: 'bg-spa-terracotta/10'
  },
  {
    id: 'shiroabhyanga',
    title: 'SHIROABHYANGA',
    shortDesc: 'Ajurwedyjski masaż głowy, karku i ramion z ciepłymi olejami ziołowymi.',
    fullDesc: `Shiroabhayanga jest staroindyjską techniką masażu głowy, ramion i karku. W tradycji ajurwedyjskiej masaż głowy zawsze wykonywany jest z użyciem ciepłych, naturalnych olejów: sezamowego lub lżejszego, ochładzającego - kokosowego. Stosuje się także specjalistyczne mieszanki ziołowe (np. z dodatkiem oleju bhringraj lub amli).

Masując, skupiam się na głowie, ale zabieg obejmuje również kark i ramiona. Masaż ma na celu pielęgnację skóry głowy, włosów oraz relaksację całego ciała. Wprowadza równowagę energetyczną, stan błogości i głębokiego odprężenia. Rytuał uwzględnia stymulację energetycznych punktów marma licznie rozmieszczonych na głowie.`,
    notes: [
      'Należy wziąć pod uwagę, że masaż wykonywany jest ciepłymi olejami i pozostawia ich część na skórze głowy i włosach.',
    ],
    duration: '45 min',
    price: '89 zł',
    image: imgShiroabhyanga,
    color: 'bg-spa-olive/10'
  },
  {
    id: 'mukhabhyanga',
    title: 'MUKHABHYANGA',
    shortDesc: 'Tradycyjny ajurwedyjski masaż twarzy odmładzający i głęboko relaksujący.',
    fullDesc: `Mukhabhayanga to tradycyjny staroindyjski masaż twarzy. Rytuał czerpie z kilkutysięcznej tradycji wywodzącej się z Indii i stanowi część holistycznej filozofii ajurwedy. Skupia się na maksymalnym odprężeniu mięśni i powięzi twarzy.

Powolne, rytmiczne ruchy dłoni z pomocą ciepłego oleju łagodzą wszelkie napięcia tkanek, wygładzają zmarszczki, pobudzają krew do krążenia, odprowadzają limfę i opuchliznę z twarzy. Masaż działa bardzo uspokajająco i relaksująco, wygładza zmarszczki, rozjaśnia, nawilża i odmładza skórę. Ma działanie zarówno pielęgnujące i przeciwdziałające upływowi czasu, jak i głęboko oddziałujące na odprężenie i relaksację umysłu. Masaż zakończony jest akupresurą punktów marma.`,
    notes: [],
    duration: '45 min',
    price: '69 zł',
    image: imgMukhabhyanga,
    color: 'bg-spa-secondary'
  },
  {
    id: 'pottali',
    title: 'POTTALI',
    shortDesc: 'Masaż pleców gorącymi stemplami ziołowo-solnymi o działaniu leczniczym.',
    fullDesc: `Ajurwedyjski masaż pleców z stemplami ziołowymi to wyjątkowa technika rozluźniająca mięśnie pleców za pomocą indywidualnie dobranych i wykonanych bawełnianych sakiewek ziołowo-solnych. W zależności od wybranych typów stempli i użytych w nich mieszanek ziołowych może mieć działanie:

• rozluźniające, łagodzące bóle mięśniowe
• energetyzujące, przywracające siły witalne, usprawniające krążenie
• relaksacyjne, wprowadzające układ nerwowy w stan ukojenia
• oczyszczające - usuwa toksyny z organizmu

Zabieg ten łączy techniki masażu z głębokim rozgrzewaniem, co ma na celu detoksykację, relaks i poprawę krążenia. Masaż wykonuję za pomocą robionych przeze mnie organicznych, bawełnianych stempli wypełnionych ziołami, z dodatkiem soli morskiej, ryżu lub kawy, które są wcześniej podgrzewane i zanurzane w oleju sezamowym. Przykładane i rytmicznie przesuwane po ciele ciepłe stemple uwalniają bogactwo aromatów i działają leczniczo na organizm.`,
    notes: [
      'Używam świeżych stempli — ich zawartość (wybór ziół) uzgadniamy minimum dzień wcześniej, abym mogła je przygotować.',
      'Stemple dedykowane są wyłącznie osobie otrzymującej masaż, ale można ich użyć dwukrotnie (dwa masaże w sesjach dzień po dniu).',
    ],
    duration: '60 min',
    price: '150 zł',
    image: imgPottali,
    color: 'bg-spa-terracotta/5'
  },
  {
    id: 'orientalny-dotyk',
    title: 'ORIENTALNY DOTYK',
    shortDesc: 'Autorski rytuał olejowy łączący masaż intuicyjny z orientalnymi technikami Wschodu.',
    fullDesc: `Orientalny Dotyk to autorski masaż olejowy, który przynosi głęboki relaks i wewnętrzne oczyszczenie. Zatrzymuje w czasie i uwalnia od nadmiaru stresu i przebodźcowania. Jest to połączenie masażu intuicyjnego ze starymi orientalnymi technikami masaży czerpiącymi z kilkutysięcznej mądrości Wschodu.

Masaż wykonuję na bazie ciepłego oleju sezamowego z domieszką aromatycznych olejków eterycznych. Wybór zapachu dobierany jest indywidualnie w zależności od potrzeb, temperatury i preferencji zapachowych osoby przyjmującej masaż.

Orientalny Dotyk to uważny rytuał, który skupia się na tu i teraz. Zatrzymuje w czasie i daje całą energię i uwagę osobie masowanej. Jest to rodzaj medytacji dla obu stron - osoby dającej i przyjmującej masaż. Działam na niemal wszystkie zmysły: Dotyk, Zapach, Dźwięk łączą się w jedno, harmonizując ciało i duszę.

Dłonie prowadzone intuicyjnymi ruchami w rytmie dźwięków tradycyjnych instrumentów i dalekowschodnich pieśni pomagają uwolnić się od stresu, zmęczenia i zatopić się w błogości.`,
    notes: [],
    duration: '90 min',
    price: '280 zł',
    image: imgOrientalny,
    color: 'bg-spa-olive/5'
  }
];


export const ELEMENTS = [
  { 
    name: 'Ziemia', 
    label: 'DOTYK', 
    desc: 'Ugruntowanie i stabilność przez głęboki ucisk tkanek.', 
    icon: Mountain,
    fullDesc: `Złocista kropla oleju niesie w sobie słońce i siłę rośliny. Namaszczając ciało, karmię je czystym życiem. To najprostsza forma naturopatii: powrót do tego, co wyrasta z ziemi. W duchu Ajurwedy dotyk masażysty nie jest mechanicznym uciskiem mięśni, lecz transferem prany (energii życiowej) i głębokim aktem komunikacji bez słów. To moment, w którym dłonie stają się przedłużeniem serca.

W tradycyjnej Abhyandze zapraszam do powrotu do równowagi. Dotyk jest pewny, ale miękki; głęboki, ale nie bolesny.
Dotyk w Ajurwedzie to także akupresura punktów Marma – energetycznych miejsc, gdzie materia spotyka się z duchem. Dotykam ich z ogromną uważnością, wiedząc, że pod moimi palcami pulsuje życiowa esencja. To tutaj, pod wpływem ciepłego oleju i świadomego nacisku, uwalniają się stare emocje i blokady. To dotyk, który mówi: „Jesteś tu bezpieczna. Możesz puścić kontrolę”.
Moje dłonie poruszają się w rytmie, który synchronizuje się z Twoim oddechem. To tempo Sattva – czyste, harmonijne, nieśpieszne. W tym dotyku nie ma pośpiechu współczesnego świata. Jest tylko obecność.`
  },
  { 
    name: 'Woda', 
    label: 'ZAPACH', 
    desc: 'Przepływ emocji wspierany przez aromaterapię ziołową.', 
    icon: Droplets,
    fullDesc: `Niezwykle ważny element rytuału to zapach. Podczas masażu olejami ajurwedyjskimi, uwalniają się aromaty indyjskich ziół, zmieszanych z rozgrzanym olejem sezamowym. Podczas masażu stemplami, mieszanki ziół, kawy, płatków kwiatów czy skórki cytrusów uwalniają swoje cudowne właściwości i zapachy pod wpływem pary wodnej i zostają z nami przez cały rytuał. 

W masażu autorskim otulają nas zapachy olejków eterycznych. Sandałowca, cedru, werbeny, lawendy, trawy cytrynowej, róży lub tulsi. Czyste olejki eteryczne, komunikują się bezpośrednio z Twoim układem nerwowym: dają poczucie bezpieczeństwa i spokoju.`
  },
  { 
    name: 'Ogień', 
    label: 'WZROK', 
    desc: 'Transformacja i światło w ciepłych tonach wnętrza.', 
    icon: Flame,
    fullDesc: `Przestrzeń w której masuję stworzona jest tak, aby działała kojąco. Kolory ziemi, naturalne materiały, rośliny i ciepłe światło świec pozwalają na oddech i wyciszenie. Sól himalajska i lampy solne przywodzą blask zachodzącego słońca i jonizują powietrze przygotowując organizm do głębokiego odpoczynku.`
  },
  { 
    name: 'Powietrze', 
    label: 'DŹWIĘK', 
    desc: 'Lekkość bytu wprowadzana przez misy tybetańskie.', 
    icon: Wind,
    fullDesc: `Dźwięk towarzyszący masażowi jest tłem, które nie narzuca się umysłowi ale dopełnia rytuał i pozwala wprowadzić się w nastój relaksacji. Często są to mantry staroindyjskie, dźwięki gongów i mis tybetańskich, odgłosy natury. 

W masażu autorskim wykorzystuję również Binaural beats lub Solfeggio (528 Hz): Częstotliwości wspierające regenerację komórkową. Ta częstotliwość ma działanie terapeutyczne. Wibracje rozchodzą się po ciele zatapiając w poczuciu absolutnego spokoju.`
  },
  { 
    name: 'Eter', 
    label: 'SMAK', 
    desc: 'Przestrzeń dla duszy przy filiżance ajurwedyjskiego naparu.', 
    icon: Sparkles,
    fullDesc: `Często proponuję zakończenie masażu ciepłym napojem, który domyknie proces detoksykacji, nawadnia tkanki po olejowaniu i rozpala ogień trawienny.
    
Może to być zielona herbata, napar z imbiru i miodu lub ciepła woda z cytryną.`
  },
];

export const PRICING = [
  {
    name: 'Całościowy ajurwedyjski Abhayanga',
    time: '1,5h',
    price: '210 zł',
    desc: 'Pełny masaż ciała ciepłymi olejami ziołowymi z aktywacją punktów marma. Rytuał usuwa toksyny, poprawia krążenie i przywraca jasność umysłu. Fundament ajurwedyjskiej praktyki uzdrawiania.'
  },
  {
    name: 'Abhayanga + oleje ziołowe',
    time: '1,5h',
    price: '230 zł',
    desc: 'Rozszerzona wersja masażu Abhayanga wzbogacona o spersonalizowaną mieszankę premium olejów ziołowych dobranych do Twojej konstytucji (dosha). Głębsza regeneracja i silniejszy efekt detoksykacyjny.'
  },
  {
    name: 'Masaż stóp z akupresurą',
    time: '40 min',
    price: '79 zł',
    desc: 'Intensywna praca na punktach refleksologicznych stopy oddziałująca na cały organizm. Rozluźnia napięcia, poprawia krążenie i przynosi ulgę zmęczonym nogom. Idealne uzupełnienie dłuższego rytuału.'
  },
  {
    name: 'Masaż twarzy, głowy i karku',
    time: '45 min',
    price: '89 zł',
    desc: 'Ukojenie dla zestresowanego umysłu — praca na głowie, karku i ramionach z użyciem indyjskich ziół bhringraj i amla. Poprawia koncentrację i wzmacnia cebulki włosowe.'
  },
  {
    name: 'Masaż twarzy z punktami marma',
    time: '30 min',
    price: '69 zł',
    desc: 'Rytuał odmładzający twarzy z precyzyjną pracą na punktach energetycznych marma. Przywraca naturalny blask, napięcie skóry i uwalnia napięcia emocjonalne gromadzone w mięśniach twarzy.'
  },
];

export const NAV_LINKS = [
  { name: 'Kim jesteśmy', href: '#idea', view: 'about' as const },
  { name: 'Oferta', href: '#oferta', view: 'home' as const },
  { name: 'Jak Się\nPrzygotować', href: '#przygotowanie', view: 'home' as const },
  { name: 'Cennik', href: '#cennik', view: 'home' as const },
  { name: 'Kontakt', href: '#kontakt', view: 'home' as const },
  { name: 'Czym Jest Masaż\nAjurwedyjski', href: '#filozofia', view: 'home' as const },
];
