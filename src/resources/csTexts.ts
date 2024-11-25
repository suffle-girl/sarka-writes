interface Text {
  title: string;
  origin:
    | "báseň"
    | "připravované knihy"
    | "krátký příběh"
    | "povídka"
    | "překlad pro World of Tanks";
  content: string;
}

type Texts = Text[];

export const csTexts: Texts = [
  {
    title: "Úryvek z druhé kapitoly",
    origin: "připravované knihy",
    content: `
Viktorie třeštila oči střídavě nalevo, napravo, až nakonec spatřila to, čeho se obávala. Ze zatáčky vzdálené asi čtyři sta metrů se vyřítil vlak. Téměř okamžitě k nim i přes zavřená okénka dolehl pronikavý tón výstražné sirény, jíž je strojvedoucí upozorňoval, že se mocný kovový kolos blíží. Vlak sice troubil, ale nezpomaloval ani nebrzdil, což působilo zdáním, že ani tam nefunguje všechno tak, jak by mělo. 

V poslední marné snaze ještě Vojtěch odbrzdil auto a kymácivými, zpola vzteklými pohyby se jej pokusil dát do pohybu. Auto sedělo na kolejích jako přibité. Kdyby nebyli na přejezdu úplně osamoceni a měli by více času, snad by bylo možné jej odtlačit z kolejí pomocí několika párů lidských rukou. Takhle však byly jejich šance nulové. Vlak i zvuk sirény se neúprosně přibližovaly. Viky chytila v poslední chvíli svého muže pevně za ruku. 

Připravila se na náraz. Pevně semknula víčka. 

Ozval se sotva postřehnutelný zvuk, jako když někdo svět kolem vás přiklopí zavařovací sklenicí.

Viktorie otevřela nejprve jedno oko a pak přidala i druhé. Překvapeně zalapala po dechu. 

Vlak stál pouhých pár metrů od jejich BMW. Za předním oknem modrožluté lokomotivy stál nehybně strojvedoucí s hrůzyplným výrazem ve tváři. Působil jako momentka, kterou se fotografovi nevědomky podařilo zachytit vteřinu před katastrofou. Teprve teď měla Viky možnost zaregistrovat typ vlaku – jednalo se zřejmě o jeden z rychlíků, o něž na zdejší trati nebylo nouze. Musel být plný lidí stejně vyděšených, jako byla ona sama i její rozlícený manžel. 

Přesunula pohled na svého muže. Ani on se nehýbal a oči plné hrůzy a frustrace přitom třeštil na ni. Stále držela jeho ruku ve své, měla ovšem pocit, jako by jeho stisk ztratil veškerou sílu i razanci. Zdálo se, že zároveň bdí i spí. Auta na blízkém obchvatu stála. Nikde se nehýbla ani sýkorka, ani stéblo trávy. Svět se zastavil. 

„Chyběl jsem vám?“ ozval se jí za zády chladný, temnotou zastřený hlas. Nadskočila a leknutím upustila Vojtovu ruku na opěrku mezi sedačkami. Otočila se tak, aby viděla na zadní sedadla, kde ležérně opřený dřepěl cizinec. Musel to být on, i když vypadal úplně jinak než před pár hodinami. Staromódní oblečení vystřídaly džíny, sportovní tenisky a černá mikina s kapucí, kterou měl přetaženou přes hlavu. Jeho tmavé oči plály zlověstným ohněm, ale už se nepropadaly do neutěšené temnoty. Po čerstvě oholené tváři mu pomalu stékal krvavý stříkanec. Co mohla Viky soudit, krev rozhodně nebyla jeho. Pobaveně se usmál a vytáhl z kapsy bílý bavlněný kapesník, aby si mohl nečistotu setřít. Odhalil tak dokonale bílé, leč trochu nepravidelné zuby. „Po dvou stech letech v pekle jednomu trvá, než se dá znovu do kupy,“ poznamenal suše, jako by četl Viktorii myšlenky. 

„Takže tohle je tvoje práce?“ zaskřehotala Viky ochablým hlasem. Odkašlala si, aby si vyčistila vyschlé hrdlo. Chtěla znít sebevědomě. Přestože se tak vůbec necítila. 

Uchechtl se. „Jistě. Cos myslela?“ zeptal se poněkud zklamaně. Na vteřinu nebo dvě na ni upřel zkoumavý pohled, úšklebek z jeho rtů však nemizel. „Každopádně jsem tu proto, abys nezapomínala na naši úmluvu. Ani tvůj drahý choť.“ Naklonil hlavu mírně napravo a zkoumavě si nehybného statného muže prohlížel. „Víš, kdybys mu teď chtěla vrazit pár facek, nikdy by se nedozvěděl, že ‘s to udělala,“ poznamenal pobaveně. 
    `,
  },
  {
    title: "Cesta za vlčí písní",
    origin: "povídka",
    content: `
Záblesk světla v krajině, v níž vše již potemnělo. Doprovázen vlčím zpěvem v dáli, jako by ti určoval směr. Terén pod tvýma nohama přechází z mechového porostu v kamení, z kamení v balvany z balvanů na propastná údolí a z propastných údolí v ostrá skaliska.

U posledního balvanu smeká se ti krok, ty padáš, padáš, a tvé teplo, tvé světlo, spolu s tebou.

Tvůj pád zastaví až samotné dno propasti.

Chvíli bez dechu ležíš a zdá se, že vše je ztraceno. Vlčí píseň v dáli zní najednou jinak. Zmateně. Ztraceně. Přejde v kníkot. Až zanikne docela.

Tvé světlo skomírá, plápolá jako plamen svíce ve větru.

Na kraj padá ticho. Děsivé. Dusivé. Tísnivé.

Už nikdy nemá zazpívat kos, zabzučet včela. Už nikdy nemáš slyšet ten zvonivý smích.

Už nikdy nemá vyjít slunce. Už nikdy nespatříš ten bezstarostný úsměv, po kterém srdce jihne a duše ví, že našla svého druha.


Do ticha ozve se poslední zavytí. Mělo by znít zoufale, tklivě, jeho síle se však nedá odporovat. Jeden z vlků se dostal blíž, blíž na dosah, a naposledy zpívá. O naději, o důvěře… o domově.

Ozve se hlasité BUCH! a ty zhluboka nabereš vzduch do plic.

V dáli se ozývá vítězoslavná vlčí píseň. Znovu. Ze všech různých stran.

Tvé světlo hoří dál. Ještě ne tak silně, ale hoří soustavně a neúnavně.

Vstáváš.

Stíny okolo tě sledují, ale s tvým světlem po tvém boku si na tebe nedovolí.

Rovná ramena. Jasný krok. Neměnné tempo. Ať už míříš vzhůru k oblakům nebo strmě dolů do propasti, na kadenci tvých kroků se nic nemění. Spolu s vlčí písní, ke které se každým krokem blížíš, tvoří nesmrtelnou symfonii.

Pramálo záleží na temnotě okolo. Nezajímá tě, kolik démonů si na tebe ve tmě brousí zuby. Dokud má tvé světlo pro co hořet, záleží na nich pramálo.

S každým dalším vlkem, se kterým se setkáš, tušíš, že cíl tvé cesty je blíž a blíž. Ona už je nadosah.

Až konečně dospěješ k palouku na vrcholu jedné z hor. Kolem dokola se tyčí do výše ohromné balvany a uprostřed kruhu stojí ledová kra. Přistoupíš k ní. Tvé světlo tě k ní táhne, jako by vědělo daleko víc, snad víc než ty i já kdy budeme vědět.

Beze slova poklekneš. Nepřemýšlíš nad tím, co bude, pokud neuspěješ. Teď není ta chvíle a stíny okolo nesmí dostat příležitost.

Pohlédneš do tváře ženě uvězněné v ledu. Hlavou ti proběhne vzpomínka na její smích, její štěstí, polibky, doteky; její pravdu, soucit i břemena, která si s sebou nosí a o která se s tebou bála podělit, aby o tebe nepřišla. Tvé světlo zaplane zářivým plamenem. Stíny opustí kruh, jste v něm konečně jen vy dva, vy dva a teplé, blyštící, zářící světlo, které vychází z tvé staré, nesmrtelné duše.

„Vrať se mi,“ zašeptáš něžně, jako bys jí šeptal do vlasů. Pak povolíš a necháš světlo vstoupit do ledové kry.

Světlo imploduje a tebe následně oslepí oslňující září znásobenou pevnou ledovou schránkou, kterou si kolem sebe tak pracně vybudovala. A pak zhasne docela.

Padneš k zemi. Nejsi mrtvý, ještě ne. Ale pramálo na tom záleží. Udělal jsi vše, co bylo v tvých silách.

Stíny, démoni a monstra se k tobě okamžitě stahují. Svět bez světla, svět bez zvuku. Tvůj bezhlesý křik už nikdo neuslyší. Propadáš se do bezvěké temnoty.

Udělal jsi vše, co bylo v tvých silách. Vlastně víc. A selhal. Její démoni s tebou nebudou mít slitování.

BUCH, ozve se konečně mocně, jako hrom rozléhající se nad krajinou. Stíny ustrnou. BUCH, uslyšíš znovu. V dáli zavyje vlk. Stíny se semknou v okrajích kamenného kruhu.

Se třetím mocným odbitím jejího srdce se uvnitř ledové kry znovu rozžehne tvé světlo. Tak mocně, jako nikdy předtím.

Prvním mocným výbojem led popraská. Se druhým se rozletí do všech stran, ale tebe jako zázrakem všechny úlomky minou. A se třetím exploduje svět.

.

Když si tvé oči konečně přivyknou světlu, všemu porozumíš. Noc, která neměla nikdy skončit, skončila. Nahradil ji den, nový den, bílý jako nepopsaný list papíru. A ona stojí před tebou. V celé své kráse. Otřesená, ale šťastná.

„Myslím, že mám něco, co patří tobě,“ usměje se nesměle a v natažené ruce třímá tvé světlo.

Konečně se můžeš usmát. Snad po tisíci letech. „Vezmu si ho,“ odpovídáš po krátké odmlce, „ale jen abych ho mohl každý den nosit pro tebe.“

Obejmeš ji, jako by to bylo poprvé i naposled zároveň. „Už nikdy tě nenechám odejít,“ šeptáš jí láskyplně do vlasů.

Pevně tě objímá rukama kolem krku a tiskne se k tobě každým kouskem svého těla. „Už nikdy nenech,“ odpoví.
    `,
  },
  {
    title: "Štěstí",
    origin: "báseň",
    content: `
Ležíš na zádech.
Protáhneš svá křídla do šířky.
Z hrudi ti kdosi
zrovna sestoupil.
Necítíš už
tu tíhu
všech rozpínajících se vesmírů;
neneseš odpovědnost
za blaho všech.

Zhluboka se nadechneš.
Poprvé
po tisíci letech.
Něco tě pošimrá na tváři.
Ty se usměješ,
snad nakrčíš nos,
a budeš vědět:
Tohle
je ta muška zlatá.
    `,
  },
  {
    title: "Horizont událostí",
    origin: "báseň",
    content: `
Létám v čase zpět
a zase se vracím.
Životem proplouvám,
jako by neměl sám
žádné konsekvence.
Vyčkávám, krájím, zapomínám.
Jen některé věci
zapomenout nelze.

Díváš se. Díváš
jako před lety.
Těžko uvěřit
jak silná vzpomínka
může být.

A já se ptám
– zas a znova –
jak jiný život
mohl být?
Kdybych já měla rozum
a ty jiný čas.

Když staré příběhy ožívají
a všechno vrací se zpět,
vzpomínám
na Větrnou Hůrku,
na úplně první pár
těch nejsmutnějších tenisek.
Na jeden jediný západ slunce,
vytržený,
vystřižený
jak z jiného světa.
Na chaos a divokost,
na někoho, kým jsem mohla být.
A nikdy nebudu.

Život se kroutí
v podivných křečích.
Zdánlivě nechává zapomenout.
A někdy –
opravdu jen někdy –
když potkáme se s minulostí,
pro jednou nechá nás
znovu se nadechnout.
Zalapat po dechu,
než nám znovu skončí
hlava pod hladinou.
    `,
  },
  {
    title: "Ledové království",
    origin: "krátký příběh",
    content: `
Hleděla z hlavního balkonu na právě vycházející slunce. Vycházelo rudé. Tak rudé, že dokonce i její zmrzlé srdce na pár okamžiků pookřálo. Všude vládlo nic nenarušující ticho. Vítr z předešlých dní se uklidnil a s ním ustala hrát i ledová zvonkohra rampouchů a krápníků. Čerstvě napadaný sníh utlumil vše ostatní, co ještě v ledovém království zbývalo. V hradbě zasněžených lesů se nepohnul ani list, nenadechlo se jediné stvoření.

Vstoupila na balkón a šustot jejího pláště nebývale ostře prořízl mrtvé mlčení. Slunce ji vábilo nenechavými prstíky tepla, dotíralo na její tvář a připomínalo, že kdysi žila cosi, co vzdáleně připomínalo život. Že jí kdysi v žilách proudila krev a v hrudi jí tlouklo skutečné srdce. Přivřela oči a na kratičkou chvíli zapomněla na veškerou svou bolest. Pomalu svlékla obě bílé rukavičky a nastavila slunečním paprskům své vždy ledově prochřadlé dlaně.

Buch. Ozvalo se její srdce.

Kéž bych nebyla na světě tak sama, problesklo jí hlavou.

Buch. Ozvalo se znovu.

Ach, co jsem to jen provedla, ptala se znenadání sama sebe.

Buch.

Buch.

Zastesklo se jí po lidech, které nechala spát ledovým spánkem.

Zeširoka otevřela oči, a poháněna každým dalším úderem svého procitajícího srdce, toužila se rozeběhnout a vše napravit.

Potom zašlo slunce za mraky. Buch, ozvalo se o poznání pomaleji.

Však jim ve spánku nic nechybí, ozval se chladný protihlas v její hlavě. Nevěděla, jak by mu mohla odporovat. Jeho slova zněla jasně a pravdivě. A další lidé v jejím životě by stejně přinesli jen další bolest. Jeden člověka – ona sama – v jejím životě bohatě stačil.

Buch, ozvalo se naposledy.

Potom svět znovu utichl. Oněměl.

Otevřela zeširoka oči. Po radosti ze slunečních paprsků nezbylo ani stopy. Bezvýrazně si znovu navlékla rukavice. Co ji to vůbec napadlo, postávat tu v tom mrazu? Vešla zpět do zamrzlého hradu a pevně za sebou zavřela francouzské okno vedoucí na balkon.
    `,
  },
  {
    title: "Vůně všech mládí",
    origin: "báseň",
    content: `
Vonělo podzimem,
první návštěvou Prahy.
Vonělo mládím,
rebelstvím v ulicích prastarého města.

Vonělo zimou a skořicí,
rebarborovým koláčem
na verandě domu u jezera.
Vonělo písmenky, rukopisem.
Vonělo svěžími slovy.
Letmými úsměvy
a sny,
sny o zakázaném a tolik touženém.

Vonělo samostatností
a potřesením ruky
jen o zlomek vteřiny delším,
než by se slušelo.
Vonělo protřelým rebelstvím,
vědoucím úsměvem
a dvěma osudy,
které se nikdy nepropletou.

Vonělo čísly, vonělo studem.
Nesmělostí v očích
a rozhodností v úsměvech.
Vonělo náhlým poznáním,
tisíciletým vzdechem.
Vonělo dalekými končinami
a zářnou budoucností.
Vonělo jedinou otázkou,
na které by mělo záležet.

Už nevoní.
Svíce zhasínají.
Život mění se.
Koroduje, karikuje.
Sám sebe. Nás.

Vůně všech mých mládí
mizí v nedohlednu.

Bojím se,
že už ho nechytím...
  `,
  },
  {
    title: "Barvy podzimu",
    origin: "báseň",
    content: `
V barvách podzimu
lásky ztrácí se.
Ze soch kamení,
to rozdrolí se na písek.

V barvách podzimu
naděje se rozpíjí.
Ty mizíš. 
A chvíle kouzelné pomíjí.
Do knížek se vrátím,
snad potkáme se v nich.
V ohbí svých představ
budu hledat smích.

V barvách podzimu
ruce křehnou.
Skořice provoní můj stín.
Ve vzduchu visí vůně sněhu.
Čekat budu dlouho
na mátožení kopretin.
    `,
  },
  {
    title: "Poslední lom světla",
    origin: "báseň",
    content: `
Naposled, možná naposled.
Tomu střetu nedalo se vyhnout.
Snad on by rád,
však ona nesmí zapomenout.
Dva světy a jedna vteřina.
Sytit ji bude mnoho let.
Nahá. Obnažená. Nevinná.
Naposled, snad naposled.

Myšlenky v soumraku víří,
rozum chystá se tnout.
Dát na první dojem?
Nebo snad rozum poslechnout?

Jeden druh, snad jeden cíl
a paralely světa.
Už není čas a není bod,
kde osud by je stmelil.

Snad zapomenou oba dva
a život k nepoznání je změní.
Jen chladné ruce, teplý čaj
a dobrodružství v zapomnění.

Naposled zataví se do paralelních osudů.

Už nikdy víc, žádné klopení očí.
Už nikdy víc, tvé mámení tím skončí.

A pak už nic.
A nic, i kdyby něco.

Prostě jen tma.
    `,
  },
];
