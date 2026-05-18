// ═══════════════════════════════════════════════════════════════
// DONNÉES DU PLAN — 52 semaines
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = {
  excel: { label: "Excel", color: "#22D3EE", icon: "📊" },
  technical: { label: "Technical", color: "#A78BFA", icon: "🧮" },
  networking: { label: "Networking", color: "#FB923C", icon: "🤝" },
  reading: { label: "Marché", color: "#34D399", icon: "📰" },
  cv: { label: "CV / Stage", color: "#F472B6", icon: "📝" },
  academics: { label: "Académique", color: "#FCD34D", icon: "🎓" },
  mindset: { label: "Mindset", color: "#E879F9", icon: "🧠" },
  ai: { label: "AI", color: "#06B6D4", icon: "🤖" },
  entrepreneur: { label: "Entrepreneur", color: "#FB7185", icon: "🚀" },
};

// Date de début du plan : mi-juillet 2026 (Week 1)
const PLAN_START_DATE = new Date('2026-07-13');

// Échéances clés
const KEY_DEADLINES = [
  { date: '2026-09-14', label: 'Rentrée HSG (AY)', icon: '🎓' },
  { date: '2026-12-07', label: 'Examens AY S1', icon: '📝' },
  { date: '2027-05-25', label: 'Examens finaux AY', icon: '🔥' },
  { date: '2027-06-15', label: 'Décision Major Bachelor', icon: '📚' },
  { date: '2027-06-20', label: 'Début stage fiduciaire', icon: '💼' },
  { date: '2027-10-01', label: 'Applications Big 4 ouvrent', icon: '📋' },
  { date: '2028-06-15', label: 'Stage Big 4', icon: '🏢' },
  { date: '2028-07-15', label: 'Applications Summer Analyst BB', icon: '🚀' },
  { date: '2028-11-01', label: 'Superdays BB', icon: '🎯' },
];

// XP système : un stagiaire JPM typique cumule ~2000h de prep avant d'être recruté
// Référence : prep IB d'un candidat compétitif (BIWS + 2 stages + networking + technique)
const XP_PER_TASK = {
  excel: 8,
  technical: 12,
  networking: 10,
  reading: 5,
  cv: 8,
  academics: 6,
  mindset: 4,
  ai: 10,
  entrepreneur: 8,
};

// XP cumulé d'un "stagiaire JPM type" sur 24 mois (référence comparative)
// Calibré pour qu'à la fin des 52 semaines, le stagiaire JPM type ait ~2000 XP
// Tu compares ta progression à ce benchmark
const JPM_INTERN_TOTAL_XP = 2000;
const JPM_XP_PER_WEEK = JPM_INTERN_TOTAL_XP / 52; // ~38 XP/semaine en moyenne

const WEEKS = [
  {
    week: 1, phase: "Pré-HSG", month: "Mi-juillet 2026",
    focus: "🚨 Tuteur maths — priorité absolue",
    tasks: [
      { cat: "academics", task: "PRIORITÉ N°1 : trouver un tuteur de maths AVANT la rentrée HSG. Le Gymnasium suisse a un niveau supérieur au bac français — c'est la cause #1 d'échec en AY. Plateformes : tutorsplus.ch, studyhelp.ch. Budget : 60-100 CHF/h × 3-4 séances/sem × 4-6 sem." },
      { cat: "academics", task: "Sujets à couvrir avec le tuteur : (1) Algèbre linéaire — matrices, vecteurs. (2) Analyse — dérivées partielles, intégrales. (3) Probabilités — distributions, loi normale. (4) Statistiques — régression linéaire. Test diagnostique en première séance." },
      { cat: "mindset", task: "Repos post-bac BFI : 1-2 semaines de décompression totale. Pas de finance, pas de maths, juste vivre. Le cerveau a besoin de consolider 2 ans de prépa intensive." },
      { cat: "excel", task: "EN PARALLÈLE du tuteur : 20 min/jour d'Excel. Maîtriser 10 raccourcis : Ctrl+C/V/Z/A/S, Ctrl+Shift+Flèche, Alt+=, F2, F4, Ctrl+Z. Pratique quotidienne avec un dataset." },
      { cat: "reading", task: "Créer compte Financial Times (gratuit étudiants HSG, sinon 1€/mois). Routine : 1 article 'Companies' chaque matin, 5-10 min. Objectif : t'habituer au vocabulaire IB." },
      { cat: "cv", task: "Centre de commandement informatique. Dossier '00_Career' avec 6 sous-dossiers : CV, LinkedIn, Excel models, Networking tracker, Reading notes, Applications." },
    ],
  },
  {
    week: 2, phase: "Pré-HSG", month: "Mi-juillet 2026",
    focus: "Excel + LinkedIn",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Devoirs entre séances (1-2h/jour). Objectif : à l'aise avec algèbre linéaire de base." },
      { cat: "excel", task: "5 fonctions de base : SUM, AVERAGE, IF, COUNTIF, VLOOKUP. Une par jour. Samedi : 'Budget personnel 2026' avec tes vraies dépenses utilisant ces 5 fonctions." },
      { cat: "cv", task: "Profil LinkedIn : Photo pro, Headline 'Incoming HSG Student | Aspiring Investment Banking', About 3-4 phrases, Education LFiZ+HSG, Languages FR/DE/EN." },
      { cat: "reading", task: "S'abonner à 1 podcast : 'Acquired' (histoire d'entreprises) ou 'Odd Lots' (Bloomberg marché). 1 épisode pendant tes trajets." },
      { cat: "networking", task: "Observation passive LinkedIn. Suivre 12 pages : JPM, GS, MS, UBS, Rothschild, Lazard, WSO, M&I, SGFC HSG, Bloomberg Markets, FT." },
    ],
  },
  {
    week: 3, phase: "Pré-HSG", month: "Fin juillet 2026",
    focus: "Excel intermédiaire + Rosenbaum",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Focus analyse — dérivées partielles, interprétation économique (coût marginal, productivité marginale)." },
      { cat: "excel", task: "VLOOKUP vs INDEX/MATCH (obligatoire en IB). Exercice Kaggle : ~100 lignes, créer table de référence, utiliser les deux méthodes, comparer." },
      { cat: "technical", task: "Commander 'Investment Banking' de Rosenbaum & Pearl (~50€ Amazon). LA bible IB. En attendant : Wikipedia 'Discounted Cash Flow' + 'Comparable Company Analysis'." },
      { cat: "reading", task: "Construire 'Glossaire Finance' personnel. Format : Terme | Définition | Exemple | Quand l'utiliser. 10 termes cette semaine : EBITDA, P&L, Bilan, Cash Flow, M&A, IPO, Multiple, Valuation, DCF, Comparable." },
      { cat: "mindset", task: "Article 'How to break into investment banking' sur mergersandinquisitions.com (gratuit, 20 min). Boussole à relire 1 fois par trimestre." },
    ],
  },
  {
    week: 4, phase: "Pré-HSG", month: "Fin juillet 2026",
    focus: "Comprendre le bilan",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Focus probabilités — distribution normale, théorème central limite, intervalles de confiance." },
      { cat: "excel", task: "Formatage IB pro : Calibri 10/11, bleu inputs, noir formules, vert liens. Pas de gridlines. Bordures sur sous-totaux. Reformater 'Budget 2026' selon ces standards." },
      { cat: "technical", task: "Bilan en profondeur. Équation : Actif = Passif + Capitaux propres. Dessiner 5 fois un bilan T-shape. 6 postes Actif + 6 Passif. Test : redessiner en 2 min sans aide." },
      { cat: "reading", task: "Premier rapport annuel : nestle.com → Investors → Annual Report 2025. Aller directement à 'Consolidated Balance Sheet'. Lire chaque ligne avec ton glossaire." },
      { cat: "networking", task: "Cartographier clubs finance HSG : SGFC (le plus prestigieux), Investment Club, Capital Markets Club. Noter présidents actuels, dates 'Welcome Event'." },
    ],
  },
  {
    week: 5, phase: "Pré-HSG", month: "Début août 2026",
    focus: "Comprendre le P&L",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Statistiques inférentielles — tests d'hypothèse, p-value, régression linéaire." },
      { cat: "excel", task: "SUMIF, SUMIFS, COUNTIF, AVERAGEIFS. Exercice Kaggle 'Walmart sales' (~500 lignes) : ventes par catégorie, transactions par mois, ticket moyen par magasin." },
      { cat: "technical", task: "P&L en profondeur. Chaîne : Revenue → COGS → Gross Profit → SG&A → EBITDA → D&A → EBIT → Interest → Tax → Net Income. P&L Nestlé : calculer manuellement chaque marge." },
      { cat: "reading", task: "Premier 'Deal of the Week'. FT section M&A. Fiche : Acheteur, Cible, EV, Multiple EV/EBITDA, Banques conseillères, Rationale. Stocker dans 'Deal Library'." },
      { cat: "mindset", task: "Mapper alumni HSG. LinkedIn : HSG + JPM/GS/MS. Excel 'Career Map' : Position, Localisation (Zurich/London/NYC), Stages, Temps entre promos. Identifier pattern Londres → NYC." },
    ],
  },
  {
    week: 6, phase: "Pré-HSG", month: "Début août 2026",
    focus: "Cash flow + premier modèle",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Exercices d'application — annales Maturité économique suisse sous chrono." },
      { cat: "excel", task: "Graphiques pro. P&L Nestlé 5 ans. Line chart Revenue, Bar chart par segment, Combo chart (barres revenue + ligne EBITDA margin). Formatage IB strict." },
      { cat: "technical", task: "Cash Flow Statement en 3 sections. Operating CF (Net Income + D&A + ΔWC), Investing CF (CapEx, M&A), Financing CF (dette, dividendes). 'Cash is King' — concept central (Enron)." },
      { cat: "reading", task: "Premier equity research. Compte gratuit Seeking Alpha. Article récent Apple/Microsoft. Identifier 4 sections : Investment Thesis, Valuation, Catalysts, Risks." },
      { cat: "cv", task: "Première version CV. Format WSO standard (1 page MAX). Header, Education, Experience (vide), Skills, Activities. Calibri 10, marges 1.5cm." },
    ],
  },
  {
    week: 7, phase: "Pré-HSG", month: "Mi-août 2026",
    focus: "Connecter les 3 états financiers",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 séances. Test diagnostique mi-parcours (2h niveau Maturité). Ajuster les 3 dernières séances sur les lacunes." },
      { cat: "excel", task: "Pivot Tables. Reprendre ventes Walmart. 4 vues : ventes par catégorie, par mois, top 10 produits, comparaison année-sur-année. Test : top 10 Q3 en moins de 30 sec." },
      { cat: "technical", task: "🔥 QUESTION #1 EN ENTRETIEN : 'How are the 3 financial statements connected?' À mémoriser. P&L → Net Income → Bilan (Retained Earnings) + Cash Flow (Operating). D&A et CapEx → PP&E. Répéter à voix haute 5 fois." },
      { cat: "reading", task: "Bilan mi-été. Expliquer 2 min sans notes : (1) Bilan ? (2) P&L et marges ? (3) Cash Flow et pourquoi critique ? (4) Les 3 liés ?" },
      { cat: "networking", task: "Construire 'Networking Tracker' Excel. Colonnes : Nom, Banque, Division, Position, École, Statut, Date dernière interaction, Notes. Identifier 5 analysts/associates juniors HSG." },
    ],
  },
  {
    week: 8, phase: "Pré-HSG", month: "Fin août 2026",
    focus: "Récap + préparation rentrée",
    tasks: [
      { cat: "academics", task: "Tuteur maths : 3 dernières séances. Focus chapitres faibles. Test diagnostique final. Garder tuteur dispo pour octobre/novembre si besoin." },
      { cat: "excel", task: "Test final pré-HSG (chrono 90 min). Recréer modèle Budget 2026 : Inputs, Calculations (SUMIF+VLOOKUP), Pivot Table, Graphique combo, formatage IB." },
      { cat: "technical", task: "Cheat Sheet ultime A4 recto-verso : équation comptable, structure P&L, FCF, WACC, EV vs Equity Value, connexions 3 états, 5 multiples. Plastifier." },
      { cat: "cv", task: "Logistique HSG : logement, ordi performant, carnets, calculatrice, compte bancaire suisse, carte étudiant, 1-2 tenues semi-formelles." },
      { cat: "mindset", task: "Journal d'ambition. Carnet papier. 'Pourquoi je veux faire de l'IB ?' (3-5 raisons profondes). Tu le reliras en novembre 2027 quand tu seras épuisé." },
    ],
  },
  {
    week: 9, phase: "Assessment Year", month: "Sept 2026",
    focus: "🚨 Rentrée HSG — Mode survie académique",
    tasks: [
      { cat: "academics", task: "🚨 PRIORITÉ ABSOLUE : survivre l'AY. 30-40% des étudiants échouent. Pour 5.0+, top 25%. Première semaine : aller à TOUS les cours, repérer 4-5 cours principaux, acheter manuels (~250-300 CHF), identifier Lehrstühle et assistants." },
      { cat: "mindset", task: "📚 Réflexion progressive sur le Major Bachelor (décision officielle en juin 2027). Pendant l'AY tu fais tous les cours fondamentaux. À noter : quels cours te plaisent vraiment ? Business Administration (BWL) probablement meilleur pour TON profil — JPM/GS recrutent autant des BWL que des BF. Décision finale en S30." },
      { cat: "academics", task: "Routine d'étude pour 5.0+ : 30-40h/semaine HSG. Lundi-Jeudi 17-21h, Vendredi 14-18h, Samedi 9-13h + 14-18h, Dimanche 14-19h. Pour 5.5+, monter à 40h." },
      { cat: "academics", task: "Méthode HSG : examen final = 100%. (1) Comprendre concepts le jour même. (2) Refaire TOUS les exercices. (3) Fichier de notes par cours. (4) Jamais plus d'1 semaine de retard." },
      { cat: "academics", task: "Identifier IMMÉDIATEMENT les anciens examens (Altklausuren). Via associations étudiantes, Lehrstühle. LA ressource qui sépare les 5.0+ des 4.5. Faire les 5 dernières années pour chaque matière." },
      { cat: "networking", task: "Première réunion SGFC. Arriver 10 min en avance. Te présenter à 2-3 personnes : 'Je suis [Prénom], en AY, j'aimerais en apprendre plus.' Identifier les seniors actifs." },
      { cat: "reading", task: "Routine FT : 15 min chaque matin. Companies + Markets. Termes incompris → Glossaire." },
      { cat: "mindset", task: "Mindset AY : tu es entré, mais le vrai filtre c'est l'AY. Mentalité 'maintenant je dois prouver que je mérite ma place' (vs 'j'ai été admis, c'est bon')." },
    ],
  },
  {
    week: 10, phase: "Assessment Year", month: "Sept 2026",
    focus: "Construire le système d'étude AY",
    tasks: [
      { cat: "academics", task: "Identifier ton groupe d'étude AY. 2-3 personnes max. Niveau égal ou légèrement supérieur. Sérieux démontré. Proposer : 'Tu veux qu'on révise Accounting samedi ?'" },
      { cat: "academics", task: "Système de notes par cours. Google Doc structuré : Intro (objectifs, prof, syllabus, dates examens), Chapitre 1 avec Concepts/Formules/Exemples/Questions test. Double-écriture le soir même." },
      { cat: "academics", task: "Office hours stratégie. Aller à TOUTES les office hours des assistants. Préparer 1-2 questions précises avant chaque visite. Te faire connaître augmente tes chances en cas de note limite." },
      { cat: "academics", task: "Identifier le 'pace' de chaque cours. Pages par semaine ? Exercices par chapitre ? Si Accounting demande 50p + 20 exo/sem, bloquer 8h/semaine sur cette matière." },
      { cat: "excel", task: "Maintenance Excel : 30 min/jour. Excel Trainer (excel-easy.com/exercises). Naviguer sans souris pendant 5 min consécutives." },
      { cat: "networking", task: "🔑 PREMIERS MESSAGES LINKEDIN (1h max). 3 alumni HSG juniors : 2 IB pur, 1 RE PE (Patrimonium, Empira). Message personnalisé : 'J'ai vu votre parcours [détail SPÉCIFIQUE]. 15 min virtuelles pour partager votre expérience ?'" },
    ],
  },
  {
    week: 11, phase: "Assessment Year", month: "Oct 2026",
    focus: "Accounting profondeur + premier coffee chat",
    tasks: [
      { cat: "academics", task: "🎯 ACCOUNTING — LE COURS PIVOT DE L'AY. Principal responsable des échecs. (1) Recopier syllabus complet. (2) Bilan honnête : où tu en es. (3) Si retard : office hours + groupe d'étude. (4) 5 exercices min par concept. 8h/semaine MIN." },
      { cat: "academics", task: "À 6 semaines des examens : check progression. Premiers quiz/midterms. 5.0+ : excellent. 4.5-5.0 : +5h/semaine ciblées. <4.5 : alerte rouge, tuteur HSG." },
      { cat: "academics", task: "Méthode 'Active Recall' pour Accounting/Statistics. Fermer le manuel après chaque chapitre. Écrire de mémoire. Comparer pour identifier les trous. 3x plus efficace que la relecture." },
      { cat: "technical", task: "Rosenbaum chapitre 1 : Comparable Companies Analysis (~30 pages). 1h le samedi soir uniquement. Maintenance IB pendant l'AY." },
      { cat: "networking", task: "🎯 PREMIER COFFEE CHAT (15-20 min Zoom). Prep 30 min : profil LinkedIn, 4-5 questions personnalisées, papier-stylo." },
      { cat: "networking", task: "🔑 RÈGLE D'OR : NE JAMAIS demander de referral. Termine : 'Merci. Si cela ne vous dérange pas, j'aimerais rester en contact et vous tenir au courant.' La permission de te recontacter = ta vraie victoire." },
      { cat: "reading", task: "Glossaire : 5 nouveaux termes. Working Capital, CapEx, OpEx, Goodwill, Multiple Expansion." },
    ],
  },
  {
    week: 12, phase: "Assessment Year", month: "Oct 2026",
    focus: "Multiples + premier follow-up",
    tasks: [
      { cat: "academics", task: "Cours Accounting HSG devient dur (consolidation, retraitements). Si tu as les bases du Pré-HSG, tu suis. Sinon, +5h sur Accounting." },
      { cat: "academics", task: "Méthode 'Anciens examens en mode léger' : 1 par semaine en condition (partiel car tous les chapitres pas vus). Identifier types de questions récurrents." },
      { cat: "technical", task: "Multiples de valuation. EV/EBITDA (le plus utilisé) : TMT 15-25x, Industrials 8-12x, Banks N/A. P/E sensible structure capital. EV/Revenue non profitables. 5 entreprises suisses : calculer EV/EBITDA." },
      { cat: "technical", task: "🔥 ENTERPRISE VALUE vs EQUITY VALUE. EV = Market Cap + Total Debt − Cash + Minority Interest + Preferred Stock. EV = valeur pour TOUS financeurs. Equity Value = ce qui reste pour actionnaires." },
      { cat: "excel", task: "Template 'Comp Sheet' réutilisable. Colonnes : Company, Ticker, Market Cap, Debt, Cash, EV, Revenue, EBITDA, multiples, Growth %. Populer 5 entreprises suisses." },
      { cat: "networking", task: "Follow-up 24-48h après coffee chat. Email court : 'Merci. J'ai noté votre conseil sur [détail]. Je vais commencer à [action]. Excellent week-end.'" },
    ],
  },
  {
    week: 13, phase: "Assessment Year", month: "Oct 2026",
    focus: "Premier modèle 3-statement",
    tasks: [
      { cat: "academics", task: "À 4 semaines des examens. Créer fiches de révision pour cours HSG. Fiches A4 recto-verso : concepts clés, formules, exemples." },
      { cat: "excel", task: "Premier modèle P&L historique 3 ans Nestlé. Annual Reports 2023-2025. Fichier 'Nestle_Model_v1.xlsx'. P&L_Historical avec colonnes 2023A/2024A/2025A. Calculer marges manuellement. 3h." },
      { cat: "technical", task: "Intro DCF. Time Value of Money. WACC = taux d'actualisation. PV = FV / (1+r)^n. 5 exercices : 'Combien valent 1000 CHF dans 5 ans à 8% ?'" },
      { cat: "networking", task: "Élargir pipeline : 5 nouveaux messages LinkedIn. Cible : associates 2-3 ans XP (ils se souviennent du recrutement)." },
      { cat: "reading", task: "Deal of the Week #2. Deal européen cette fois. Approfondir : avocats, multiple vs comps, management commentary." },
    ],
  },
  {
    week: 14, phase: "Assessment Year", month: "Nov 2026",
    focus: "Free Cash Flow",
    tasks: [
      { cat: "academics", task: "À 3 semaines des examens. Étude HSG à 35h/semaine. Prep IB max 4h/semaine. GPA AY NON NÉGOCIABLE." },
      { cat: "technical", task: "DCF étape 1 : Free Cash Flow. FCF = EBIT × (1-Tax) + D&A − CapEx − ΔWC. Calculer FCF historique Nestlé 5 ans. Identifier tendances." },
      { cat: "excel", task: "Étendre modèle Nestlé : Bilan historique. Lier retained earnings au Net Income. Lier PP&E à CapEx − D&A. Le modèle devient vivant." },
      { cat: "networking", task: "Deuxième coffee chat. Montrer progression : 'Depuis le début du semestre, j'ai construit mon premier modèle 3-statement Nestlé. Cela m'a aidé à mieux comprendre [insight].'" },
      { cat: "reading", task: "Glossaire : 5 termes. FCF, Operating CF, CapEx Maintenance vs Growth, Working Capital, DSO." },
    ],
  },
  {
    week: 15, phase: "Assessment Year", month: "Nov 2026",
    focus: "Terminal Value et WACC",
    tasks: [
      { cat: "academics", task: "À 2 semaines des examens. Mode pré-révision intensive. Reprendre tous chapitres 4 cours principaux. Concepts encore flous → revus." },
      { cat: "technical", task: "DCF étape 2 : Terminal Value. (1) Gordon Growth : TV = FCF₅ × (1+g) / (WACC−g). Sensible à g (max 2-3%). (2) Exit Multiple : TV = EBITDA₅ × multiple sortie. Calculer TV Nestlé deux méthodes." },
      { cat: "technical", task: "WACC complet Nestlé. WACC = (E/V) × CoE + (D/V) × CoD × (1−Tax). À toi de trouver chaque input : Rf (snb.ch), β (Yahoo Finance NESN.SW), MRP (Damodaran), CoD (rapport annuel), Tax effectif." },
      { cat: "excel", task: "Compléter modèle Nestlé : Cash Flow + lier les 3 états. Test : changer revenu +10%, modèle doit s'ajuster, bilan TOUJOURS équilibrer." },
      { cat: "networking", task: "Maintenir relations : message court à 5 contacts. 'Période d'examens. Je reprends en janvier. Bonnes fêtes en avance.'" },
    ],
  },
  {
    week: 16, phase: "Assessment Year", month: "Nov 2026",
    focus: "🚨 J-4 semaines examens — bascule complète",
    tasks: [
      { cat: "academics", task: "🚨 EXAMENS DANS 4 SEMAINES. Bascule HSG. Prep IB max 2h/sem. 45-50h/semaine d'étude." },
      { cat: "academics", task: "Mode 'Past Papers'. Récupérer TOUS les anciens examens 5 dernières années (associations, Lehrstühle, Telegram). 1 ancien examen par matière par semaine pendant 4 semaines." },
      { cat: "academics", task: "Méthode anciens examens : (1) En conditions réelles (chrono, sans aide). (2) Corriger rigoureusement. (3) Identifier patterns récurrents. (4) 70-80% des concepts reviennent d'année en année." },
      { cat: "academics", task: "Tutoring si nécessaire. HSG Tutoring Service. Membre du groupe d'étude. Office hours intensifs : 1 visite par cours min." },
      { cat: "excel", task: "Maintenance : 10 min/jour raccourcis." },
      { cat: "technical", task: "Maintenance : 10 min/jour flashcards Anki. 30 cartes (3 statements, EV vs EqV, WACC, DCF, multiples)." },
      { cat: "networking", task: "Pause networking jusqu'à fin décembre. Aucun message." },
    ],
  },
  {
    week: 17, phase: "Assessment Year", month: "Déc 2026",
    focus: "🔥 J-3 semaines — révisions à 50h+",
    tasks: [
      { cat: "academics", task: "🔥 Révisions intensives. 50-55h cette semaine. Prep IB = 0. (1) Tous chapitres dans l'ordre du syllabus. (2) 1 ancien examen par jour (4-5 cette semaine). (3) Expliquer concepts à voix haute. (4) 50% du temps sur 3 chapitres faibles par matière." },
      { cat: "academics", task: "Examens blancs avec groupe. 90 min sur un sujet sans aide. 30 min débrief. Refaire le lendemain en revisant erreurs. 4-5 examens blancs, 1 par cours." },
      { cat: "academics", task: "Office hours 'questions ciblées'. Préparer 3 questions précises sur points flous. Pas pour 'tout revoir' — pour cibler trous spécifiques." },
      { cat: "academics", task: "'Last Year Patterns'. 3-5 sujets qui tombent chaque année. Concentrer révision dessus en priorité absolue." },
      { cat: "mindset", task: "Hygiène vie : 7-8h sommeil (le cerveau consolide), 30 min sport 3x/sem, alimentation propre. PAS d'all-nighters." },
      { cat: "technical", task: "Maintenance : 10 min flashcards Anki." },
    ],
  },
  {
    week: 18, phase: "Assessment Year", month: "Déc 2026",
    focus: "🔥 EXAMENS AY S1",
    tasks: [
      { cat: "academics", task: "🔥 SEMAINE D'EXAMENS. Tout focus académique. Aucune autre activité." },
      { cat: "academics", task: "Méthode pendant l'examen : (1) 20 min en avance, place au calme. (2) 5 min respiration profonde. (3) Écrire formules clés au verso du brouillon. (4) Lire TOUTES les questions (5 min). (5) Commencer par la plus facile." },
      { cat: "academics", task: "Entre examens : interdire la révision du suivant la nuit précédente. Sommeil > révision dernière minute." },
      { cat: "mindset", task: "Stress : blanching sur une question → passer immédiatement à la suivante. Revenir 20 min plus tard. JAMAIS bloqué 20 min." },
      { cat: "reading", task: "Aucune. Repos cognitif total." },
    ],
  },
  {
    week: 19, phase: "Assessment Year", month: "Déc 2026",
    focus: "Décompression",
    tasks: [
      { cat: "mindset", task: "🎉 EXAMENS AY S1 TERMINÉS. Repos total 7-10 jours. Voir amis, voyager (4-5 jours), déconnecter." },
      { cat: "academics", task: "Premières notes (mi-janvier) : analyser objectivement. >5.0 partout : excellent. Note basse : identifier cause (méthode ? compréhension ? gestion temps ?) et ajuster S2." },
      { cat: "mindset", task: "🛡️ PLAN B mental si AY compromise : autres universités suisses (UZH, EPFL), Bachelor Allemagne (Mannheim, Frankfurt School), MBA international plus tard. Tes compétences restent." },
      { cat: "reading", task: "Lecture loisir. 'When Genius Failed' (LTCM) ou 'Liar's Poker' (Michael Lewis)." },
      { cat: "cv", task: "Bilan 2026 LinkedIn post léger : 'Premier semestre HSG terminé. Prochaine étape : approfondir [domaine] et chercher mon premier stage été 2027.'" },
    ],
  },
  {
    week: 20, phase: "Assessment Year S2", month: "Jan 2027",
    focus: "Reprise — DCF complet",
    tasks: [
      { cat: "academics", task: "Reprise cours HSG S2. Nouveaux cours (Finance I, Macroeconomics, Statistics II, Business Law). Routine d'étude 30h/semaine fixe." },
      { cat: "technical", task: "Compléter DCF Nestlé. (1) FCF projetés 2026-2030. (2) Terminal Value. (3) Actualiser avec WACC. (4) Sommer = EV. (5) Soustraire dette, ajouter cash = Equity Value. (6) Diviser par actions = Prix théorique." },
      { cat: "excel", task: "Sensitivity Analysis pro. Data → What-If Analysis → Data Table. Matrice 5×5 : prix par action selon WACC et Terminal Growth. Conditional Formatting." },
      { cat: "mindset", task: "Comparer ton DCF au prix réel marché. DCF X CHF vs marché Y CHF : soit marché sous-évalue, soit hypothèses optimistes. Pensée d'investisseur." },
      { cat: "networking", task: "Reprendre networking. Message UPDATE : 'Bonne année. (1) DCF Nestlé construit. (2) Résultat AY S1. (3) Préparation stage été 2027. Vos conseils sur [détail] utiles. 15-20 min pour nouvel échange ?'" },
    ],
  },
  {
    week: 21, phase: "Assessment Year S2", month: "Jan 2027",
    focus: "Découvrir le LBO",
    tasks: [
      { cat: "academics", task: "Nouveaux cours HSG S2. Difficulté, rythme, prof. Ajuster ton plan d'étude première semaine." },
      { cat: "technical", task: "Rosenbaum chapitre 5 : LBO. Acheter entreprise principalement avec dette (60-70%). Cash flows remboursent dette. Revendre 5-7 ans. Le PE garde majorité du profit." },
      { cat: "technical", task: "Valeur LBO via 3 leviers : (1) Multiple expansion (8x → 10x). (2) EBITDA growth (cost cutting, croissance). (3) Debt paydown (dette diminue, equity value augmente)." },
      { cat: "excel", task: "Premier Paper LBO sur papier. Cas : 1000 CHF, 8x EBITDA. EBITDA 125. Equity 30%=300, Dette 70%=700. 5 ans : EBITDA +8%/an → 175. Exit 8x = 1400. Dette restante 400. Equity 1000. Multiple 3.3x. IRR ~27%." },
      { cat: "cv", task: "CV pour stages été 2027 (fiduciaire/PME). Update : résultat AY S1 si solide, clubs HSG actifs, compétences techniques. Relire par senior SGFC." },
    ],
  },
  {
    week: 22, phase: "Assessment Year S2", month: "Jan 2027",
    focus: "Paper LBO sous chrono",
    tasks: [
      { cat: "academics", task: "Routine d'étude installée. Maintenir 30h/semaine. Si tu glisses, te recadrer immédiatement." },
      { cat: "technical", task: "Paper LBO en 5 min. Refaire calcul S21 sur papier blanc, chrono, 5 fois cette semaine. Varier : Entry Multiple (6/8/10x), Debt % (50/70%), Growth (5/8/12%), Exit. Question #1 en entretien IBD." },
      { cat: "excel", task: "LBO model basique Excel. Sources & Uses, Debt Schedule (intérêts + remboursement), Returns Analysis (IRR, MoM). 4-5h." },
      { cat: "cv", task: "Postuler 5-8 stages été. Cibles : fiduciaires (Reichlin Hess, BDO, Mazars), banques cantonales (BCV, ZKB), PME industrielles, family offices." },
      { cat: "networking", task: "Pipeline actif : 5 NOUVEAUX messages. Cible : analysts/associates juniors HSG. 5-10 conversations potentielles en permanence." },
    ],
  },
  {
    week: 23, phase: "Assessment Year S2", month: "Fév 2027",
    focus: "Stories behavioral STAR",
    tasks: [
      { cat: "academics", task: "Mid-S2 check : premiers quiz/midterms. Solides → continuer. Fragiles → ajuster." },
      { cat: "technical", task: "3 'Behavioral Stories' framework STAR. (1) Leadership/Initiative. (2) Équipe sous pression. (3) Échec et apprentissage. 200 mots, STAR clair, 90 sec à l'oral. Répéter 5 fois." },
      { cat: "technical", task: "🔥 'Why Investment Banking?' en 60 sec. (1) Hook personnel. (2) Compétences à développer. (3) Why now. (4) Long-term vision (RE PE). Authentique > parfait. JAMAIS 'gagner beaucoup'." },
      { cat: "networking", task: "Coffee chat #2. Conseils concrets : '2-3 modèles à maîtriser avant SA applications ?', 'Quels deals suivre ?', 'Quels livres utiles ?' Appliquer les conseils dans la semaine." },
      { cat: "reading", task: "Deal Library : 8-10 deals. Test : discuter chacun en 60 sec (acheteur, cible, prix, multiple, rationale) sans notes." },
    ],
  },
  {
    week: 24, phase: "Assessment Year S2", month: "Fév 2027",
    focus: "Premier vrai stock pitch",
    tasks: [
      { cat: "academics", task: "Notes S2 importantes : elles consolident ton dossier pour candidatures Big 4 automne 2027." },
      { cat: "technical", task: "Premier Stock Pitch complet. (1) Entreprise (varier : Nestlé une fois, Swiss Prime Site une fois). (2) Investment Thesis 3 raisons. (3) Valuation : comps + DCF. (4) Catalysts. (5) Risks. 1-2 slides PowerPoint." },
      { cat: "technical", task: "Présenter en 3 min max. Filme-toi. Note défauts : 'euh', hésitations, posture, contact caméra. Refaire 3 fois cette semaine." },
      { cat: "networking", task: "🎯 Si accepté stage été : célébrer. Si rejeté : pas un drame, 5 nouvelles candidatures cette semaine. Le rejet n'est pas personnel, c'est statistique." },
      { cat: "cv", task: "Update LinkedIn léger. Stage obtenu → annoncer pro après confirmation officielle. Sinon → 1 post par mois sur ce que tu apprends." },
    ],
  },
  {
    week: 25, phase: "Assessment Year S2", month: "Mars 2027",
    focus: "Merger model basics + START Summit",
    tasks: [
      { cat: "academics", task: "À ~6 semaines des examens finaux AY. Augmenter étude HSG. Ces examens décident officiellement Bachelor." },
      { cat: "technical", task: "Merger Model concept. A acquiert B : (1) Combiner P&L. (2) Synergies. (3) Coûts de financement. (4) Output : Accretion ou Dilution EPS de A." },
      { cat: "technical", task: "🔥 'Stock vs Cash deal — what's the difference?' (1) Cash : utiliser cash existant ou s'endetter. Pas de dilution. EPS impact via intérêts. (2) Stock : émettre actions A. Dilution. Pas d'intérêts. Préféré si A surévaluée." },
      { cat: "excel", task: "Merger model simplifié. 2 entreprises P&L 2025. 3 scénarios : 100% cash, 100% stock, 50/50. EPS pré/post, % accretion/dilution. Break-even multiple." },
      { cat: "networking", task: "Coffee chat #3. Question stratégique : '2-3 priorités de préparation pour SA applications dans 18 mois ?' Te calibre sur ce qui est important." },
      { cat: "entrepreneur", task: "🚀 START SUMMIT (mars 2027, campus HSG). Plus grand événement étudiant entrepreneurial d'Europe (7000+ participants). Inscription startsummit.ch, gratuit pour étudiants HSG. Pas d'engagement. Objectifs : (1) 3-4 keynotes founders. (2) Identifier 2-3 startups suisses dont le modèle te parle. (3) Parler à 3-5 jeunes entrepreneurs HSG. (4) Noter dans 'Idées potentielles' toutes les frustrations marquantes. Tu construis ton intuition entrepreneuriale." },
    ],
  },
  {
    week: 26, phase: "Assessment Year S2", month: "Mars 2027",
    focus: "BIWS sérieusement",
    tasks: [
      { cat: "academics", task: "À 5 semaines des examens. Plan de révision détaillé. Chapitres faibles identifiés et priorisés." },
      { cat: "technical", task: "🎯 S'inscrire à BIWS (~$300-400 promos pour 'Premium'). Standard de l'industrie, 80%+ des candidats IB sérieux. Moins cher qu'un cours universitaire." },
      { cat: "technical", task: "BIWS modules 1-2 : Excel & Financial Modeling. (1) Vidéos avec Excel en parallèle. (2) Refaire chaque exercice 2 fois. (3) Si bloqué, repasser 1 fois sans solutionnaire. (4) 5-7h par module, 1/semaine pendant 8 semaines." },
      { cat: "cv", task: "Update CV : ligne discrète Skills 'Currently completing BIWS Financial Modeling Program (Premium)'." },
      { cat: "reading", task: "Market view mars 2027. Tendances sectorielles (tech, healthcare, énergie, RE), gros deals, environnement taux. Note dans 'Market Pulse'." },
    ],
  },
  {
    week: 27, phase: "Assessment Year S2", month: "Mars 2027",
    focus: "Plan stage été 2027",
    tasks: [
      { cat: "academics", task: "À 4 semaines des examens. Prep IB max 4h/semaine. Toute énergie sur HSG." },
      { cat: "cv", task: "Status stages été 2027. Combien envoyées ? Réponses positives/négatives/silence ? <1 offre en vue : élargir (autres villes, télétravail partiel, PME hors Zurich, family offices Genève)." },
      { cat: "cv", task: "Prep entretiens stages. 30-45 min/entretien : recherche entreprise, motivations, compétences techniques, soft skills, 3 questions à poser." },
      { cat: "technical", task: "Paper LBO chronométré (1h). 5 paper LBO secteurs différents : Industrial, Tech, Healthcare, Consumer, Real Estate (foncière). 5 min chacun sur papier. Hypothèses variées. Te prépare à n'importe quel secteur." },
      { cat: "networking", task: "Update LinkedIn : ajouter BIWS. Connect 3 nouveaux alumni HSG finance — 2 IB pur, 1 RE PE (Patrimonium, Empira, Pictet Alternative Advisors)." },
    ],
  },
  {
    week: 28, phase: "Assessment Year S2", month: "Avril 2027",
    focus: "Approche finals AY",
    tasks: [
      { cat: "academics", task: "🚨 EXAMENS FINAUX AY DANS 6 SEMAINES. Focus académique total. Prep IB max 3h/semaine." },
      { cat: "academics", task: "Plan révision détaillé. (1) Tous cours, tous chapitres. (2) Temps par chapitre selon maîtrise. (3) Jour par jour pour 5 prochaines semaines. (4) 2 dernières semaines : examens blancs + révisions ciblées faiblesses." },
      { cat: "technical", task: "Maintenance technique : flashcards Anki + 1 paper LBO/semaine. Pas plus." },
      { cat: "networking", task: "Pause networking. Message à contacts : 'Période d'examens finaux. Je reprends en juin. Merci pour votre soutien continu.'" },
      { cat: "mindset", task: "Routine sommeil-sport-alimentation stricte. Le cerveau performe mieux en bonne santé. Ne pas négocier." },
    ],
  },
  {
    week: 29, phase: "Assessment Year S2", month: "Avril 2027",
    focus: "Révisions intensives",
    tasks: [
      { cat: "academics", task: "Révisions HSG intensives. 35+ heures par semaine. Examens blancs avec groupe. Chapitres difficiles en priorité." },
      { cat: "academics", task: "Concepts flous : tuteur HSG (peer tutoring) ou office hours profs. Ne pas attendre — chaque jour compte." },
      { cat: "mindset", task: "Hygiène vie escaladée : 8h sommeil obligatoire, 30 min sport quotidien, alimentation propre. Pas de junk food, pas d'alcool, pas de soirées tardives." },
      { cat: "technical", task: "Flashcards Anki uniquement. 10 min par jour." },
      { cat: "reading", task: "Aucune lecture finance. Repos cognitif. Toute énergie examens." },
    ],
  },
  {
    week: 30, phase: "Assessment Year S2", month: "Mai 2027",
    focus: "🔥 EXAMENS FINAUX AY",
    tasks: [
      { cat: "academics", task: "🔥 SEMAINE EXAMENS FINAUX. Tout le reste s'arrête. Seuls amis qui comprennent : ton groupe d'étude." },
      { cat: "mindset", task: "📚 DÉCISION FINALE MAJOR BACHELOR. À soumettre à HSG avant rentrée septembre. Recommandation forte : Business Administration (BWL). Raisons : (1) JPM/GS recrutent autant BWL que BF. (2) Plus de bandwidth pour START et entrepreneuriat. (3) Cours plus larges (marketing, ops, strategy). (4) Optionalité consulting/entrepreneuriat. Choisir BF uniquement si passion pure modélisation quantitative." },
      { cat: "mindset", task: "Confiance : tu as bossé toute l'année, tu as les compétences. Calme + méthode > stress + panique. Question déstabilisante → passer à la suivante." },
      { cat: "academics", task: "Entre examens : sommeil + nourriture + sport léger. Pas d'all-nighters. Pas de révision dernière minute la nuit précédente." },
      { cat: "mindset", task: "Après le dernier examen : célébrer modérément. AY presque terminée." },
      { cat: "reading", task: "Aucune. Repos." },
    ],
  },
  {
    week: 31, phase: "Stage fiduciaire", month: "Juin 2027",
    focus: "Décompression + préparation stage",
    tasks: [
      { cat: "mindset", task: "🎉 AY TERMINÉ. Notes 5.0+ : officiellement admis en Bachelor. Repos 1-2 semaines. Voyager si possible. Grand jalon." },
      { cat: "cv", task: "Stage fiduciaire confirmé été ? Logistique : transport, 3-4 chemises pro, 1-2 pantalons, carnet, stylo. Confirmer : dates, horaires, code vestimentaire, équipement." },
      { cat: "technical", task: "Reprise douce prep technique : 2-3h/semaine BIWS. Pas plus, profite des 2 semaines break." },
      { cat: "reading", task: "Bilan FT du semestre. Top deals M&A 6 derniers mois. Update Deal Library." },
      { cat: "networking", task: "Reprendre contact 5 contacts les plus intéressants. 'Examens AY terminés avec [résultat]. Stage en fiduciaire dans 2 semaines. Je vous tiendrai au courant.'" },
      { cat: "entrepreneur", task: "🚀 Routine 'Frustration Log' pendant le stage (5 min/jour, 30 min/semaine). Carnet ou Notion. Chaque jour, noter : (1) Tâche manuelle qui pourrait être automatisée. (2) Process inefficace. (3) Besoin client non satisfait. (4) Outil détesté mais utilisé faute de mieux. Ne juge pas si 'bonne idée'. 6 sem × 5 frustrations = 30 observations brutes. Ton premier terreau d'idées." },
    ],
  },
  {
    week: 32, phase: "Stage fiduciaire", month: "Juin 2027",
    focus: "🚀 Premier jour de stage",
    tasks: [
      { cat: "cv", task: "🚀 STAGE FIDUCIAIRE COMMENCE. Premier jour : (1) 15 min en avance. (2) Vêtements propres repassés. (3) Attitude humble, curieuse. (4) Carnet et stylo. (5) Te présenter à TOUS les collègues." },
      { cat: "cv", task: "Première semaine : observer comment seniors travaillent. Routines, outils, vocabulaire interne. Questions intelligentes (pas Google-ables). Ne pas montrer ce que tu sais déjà." },
      { cat: "technical", task: "Demander à voir vrais bilans clients (avec accord manager). Identifier ajustements réels : provisions, amortissements dégressifs, retraitements IFRS, consolidations multi-entités." },
      { cat: "networking", task: "Identifier 2-3 personnes intéressantes : senior au-dessus de ton manager, partner, ancien employé revenu après banque. Demander 5 min en fin de semaine." },
      { cat: "excel", task: "Excel au travail : observer templates seniors. Formatage, formules récurrentes, raccourcis. Techniques pratiques que BIWS ne couvre pas." },
    ],
  },
  {
    week: 33, phase: "Stage fiduciaire", month: "Juil 2027",
    focus: "Performance en stage",
    tasks: [
      { cat: "cv", task: "Semaine 2 : prendre responsabilités concrètes. Demander : 'Y a-t-il un projet sur lequel je peux contribuer ?' Proactif. Tâche finie en avance → demander la suivante." },
      { cat: "excel", task: "Apporter valeur via Excel. Task répétitif manuel → proposer automatisation : 'Cela vous dérangerait-il si j'essaye un template Excel pour automatiser ce reporting ?'" },
      { cat: "technical", task: "Le soir 45 min : BIWS modules 5-6. Mode dual : stage jour, apprentissage soir. 4 soirs/semaine max. Préserver énergie." },
      { cat: "reading", task: "FT background. Lecture légère 10-15 min/jour. Maintenir contact avec le marché." },
      { cat: "networking", task: "Avec manager direct : observer rituels (café, déjeuner). Conversations informelles sur son parcours, tes aspirations. Pas intrusif, juste humain." },
    ],
  },
  {
    week: 34, phase: "Stage fiduciaire", month: "Juil 2027",
    focus: "Apprendre du terrain",
    tasks: [
      { cat: "cv", task: "Semaines 3-4. Journal quotidien Google Doc : (1) Tâche du jour. (2) Ce que tu as appris. (3) Difficultés. (4) Nouvelles personnes. Précieux pour CV et futures interviews." },
      { cat: "technical", task: "Approfondir pratique : passer du bilan brut au retraité. 5 ajustements typiques vus en stage : stocks FIFO/LIFO, normalisation EBITDA, provisions, pensions, leases IFRS 16." },
      { cat: "networking", task: "Demander à manager informellement (café) : 'Connaissez-vous des personnes passées de fiduciaire au M&A ou IB ? J'aimerais comprendre leur parcours.'" },
      { cat: "cv", task: "LinkedIn update : réflexion authentique sur ce que tu apprends en stage. '3 choses que mon stage en fiduciaire m'a apprises sur la finance d'entreprise.' 1 post/mois max, qualité > quantité." },
      { cat: "excel", task: "Projet personnel pauses déjeuner/soir : template Excel pro inspiré des outils vus en stage. Servira pour futurs modèles HSG." },
    ],
  },
  {
    week: 35, phase: "Stage fiduciaire", month: "Août 2027",
    focus: "Projet personnel + recommandation",
    tasks: [
      { cat: "cv", task: "Semaines 5-6. Identifier UN projet/réalisation pour CV. (1) Quantifier. (2) Verbe action fort. (3) Résultat tangible. Ex : 'Analysé 30 dossiers clients dans le cadre de l'audit annuel', 'Construit modèle Excel utilisé par l'équipe de 5'." },
      { cat: "excel", task: "Projet perso le soir (1h max) : DCF complet Roche, ABB, ou Swiss Prime Site (foncière, varier exemples). Ton 'portfolio piece' pour futures interviews. P&L 3 ans → projections 5 ans → WACC → TV → EV → Equity Value → Prix théorique." },
      { cat: "technical", task: "BIWS LBO module : finir complètement. LBO de A à Z en autonomie." },
      { cat: "networking", task: "Solidifier relation avec manager. Café informel : '15 min pour retours sur mon stage ?' Pendant ce café : 'Si je voulais demander lettre de recommandation à la fin, sur quoi me concentrer dans ces dernières semaines ?'" },
      { cat: "reading", task: "Notes pour débrief final stage : apprentissages importants, concepts maîtrisés, vocabulaire/processus. Tes bullet points CV." },
    ],
  },
  {
    week: 36, phase: "Stage fiduciaire", month: "Août 2027",
    focus: "Fin de stage + transition",
    tasks: [
      { cat: "cv", task: "Demander officiellement lettre de recommandation à manager. 'J'aimerais conserver une trace écrite de mon stage. Seriez-vous disposé à me rédiger une lettre ?'" },
      { cat: "cv", task: "Update CV immédiate post-stage. 5 bullet points concrets avec verbes action et résultats quantifiés. Relire par 2 personnes : senior SGFC + mentor extérieur." },
      { cat: "networking", task: "🔑 ÉTAPE CRUCIALE : demander manager intro à 1-2 personnes en banque ou M&A. 'Vous avez mentionné des contacts dans le monde bancaire. J'aimerais, si approprié, être introduit à 1 ou 2 pour échange informationnel.' Intro d'un partner fiduciaire à un MD M&A vaut 100 messages LinkedIn cold." },
      { cat: "technical", task: "Récap apprentissages stage. Google Doc : 20 choses concrètes apprises. Utilisable en interview : 'Pendant mon stage, j'ai vu X, qui m'a fait comprendre Y, et m'a permis de Z.'" },
      { cat: "mindset", task: "Bilan personnel honnête. Le stage a-t-il confirmé ton intérêt pour la finance ? Identifié nouvelles passions ? Révélé aversions ? Introspection aussi importante que compétences." },
    ],
  },
  {
    week: 37, phase: "Bachelor 1", month: "Sept 2027",
    focus: "🎯 Rentrée Bachelor",
    tasks: [
      { cat: "academics", task: "🎯 RENTRÉE BACHELOR 1. Major déjà choisi en juin (idéalement Business Administration). Cours clés : Corporate Finance (LE cours pivot pour l'IB), Financial Accounting (consolidation), Statistics II. Routine 16h/semaine fixe." },
      { cat: "ai", task: "🤖 LANCEMENT MODULE AI (1-2h/semaine). Règle d'or : maîtriser fondamentaux MANUELLEMENT d'abord, puis IA pour scaler. Sans fondamentaux, IA te rend dangereux. Cette semaine : créer compte Claude Pro ($20/mois) et ChatGPT Plus pour comparer. Tester 'explique WACC à un débutant'. Comparer qualité." },
      { cat: "networking", task: "🚨 APPLICATIONS BIG 4 OUVRENT OCT-NOV pour stages été 2028. Commencer : (1) Lister 4 Big 4 Transaction Advisory. (2) Portails de candidature, dates exactes. (3) Cover letters templates." },
      { cat: "cv", task: "Update CV : stage fiduciaire + lettre de recommandation. Candidat crédible pour Big 4 TAS. Relire par 2 personnes du SGFC." },
      { cat: "mindset", task: "Mindset rentrée B1 : tu n'es plus débutant. AY validée, stage solide, compétences techniques, réseau naissant. Te tenir droit, prendre la parole, te présenter comme référence." },
      { cat: "mindset", task: "🌍 Décision géographique cristallisée. NYC long terme = Londres pour premier poste IB. Raisons : (1) Hub européen vers NYC. (2) Salaires plus élevés. (3) Réseau anglo-saxon. (4) Transfert NYC réaliste via visa L-1 après 2-3 ans. Networking vers VP/MD basés à Londres en priorité." },
      { cat: "entrepreneur", task: "🚀 S'inscrire communauté HSG Entrepreneurship. (1) Newsletter startuphsg.unisg.ch. (2) Slack/Discord communauté. (3) Suivre 5 alumni HSG founders : Coppetti (On), Miggiano (Carvolution), Reichmuth, Bieri (Planted), Wohlgensinger (Formo). (4) Visite HSG Founders Garage ce mois-ci pour observer. Aucun engagement, juste curiosité. Temps : 1h max." },
    ],
  },
  {
    week: 38, phase: "Bachelor 1", month: "Sept 2027",
    focus: "Lancement candidatures Big 4",
    tasks: [
      { cat: "cv", task: "POSTULER aux 4 Big 4 TAS : (1) PwC Deals (Zurich/Genève) — plus prestigieux M&A. (2) Deloitte FA — fort distressed M&A. (3) EY TAS — focus mid-market. (4) KPMG Deal Advisory — généraliste. Cover letter STRICTEMENT personnalisée. Si firme a département RE Transaction Advisory : indiquer préférence — alignement avec ton objectif RE long terme." },
      { cat: "networking", task: "🎯 STRATÉGIE BIG 4 : pour CHAQUE firme, identifier 1-2 alumni HSG sur LinkedIn travaillant actuellement. Message AVANT réponse à candidature : 'Je vais postuler à [firme] pour stage été 2028. 15 min pour me parler de votre expérience en TAS ?' Coffee chat avant candidature = infos précieuses + référent interne." },
      { cat: "ai", task: "Prompt engineering pour la finance (1.5h). (1) Lire 'Prompt Engineering Guide' Anthropic (gratuit). (2) 4 piliers d'un bon prompt finance : contexte, données, output format, contraintes. (3) Exercice : comparer 'Construis DCF Nestlé' (mauvais) vs 'En tant qu'analyste IB, construis DCF Nestlé avec 5 ans projections, format X. Liste hypothèses explicitement.'" },
      { cat: "technical", task: "BIWS modules avancés : Merger Model + Advanced LBO. 4-5h/semaine. Finir avant Superdays Big 4 en novembre." },
      { cat: "reading", task: "Routine FT quotidienne reprise. Deal of the Week reprend." },
      { cat: "academics", task: "Premiers cours B1 S1. Identifier difficultés. Corporate Finance dense → +temps." },
    ],
  },
  {
    week: 39, phase: "Bachelor 1", month: "Oct 2027",
    focus: "Tests Big 4 + spécialisation sectorielle",
    tasks: [
      { cat: "cv", task: "Tests en ligne Big 4 (numerical, verbal, situational). 'Practice Aptitude Tests' (gratuit). 1-2h/soir pendant 3-4 jours. Se chronométrer." },
      { cat: "networking", task: "🔑 LANCEMENT NETWORKING SÉRIEUX BB. (1) Identifier 20 VP/MD chez JPM, GS, MS, UBS sur LinkedIn — préférer alumni HSG. (2) PRIORITÉ GÉOGRAPHIQUE : 70% Londres, 20% NYC (préparer transfert futur), 10% Zurich/Genève. (3) 20 messages personnalisés (pas copy-paste). (4) Stocker drafts dans 'Networking'." },
      { cat: "networking", task: "Envoyer 5 premiers messages. Format : 'Étudiant HSG B1, fini stage fiduciaire l'été dernier, m'intéresse à [secteur — un de leurs deals]. Vu votre travail sur [détail]. 15-20 min virtuelles ?'" },
      { cat: "technical", task: "Approfondir secteur d'expertise (2h). Choisir 2 secteurs : (1) Mainstream IB (TMT, Healthcare, Consumer, Industrials). (2) Niche différenciante (Real Estate / REITs). Pour chaque : 5 plus grandes entreprises, multiples typiques, 3 deals récents, drivers spécifiques." },
      { cat: "academics", task: "Premier mid-term Bachelor 1. Maintenir rythme. GPA non négociable — sur CV pour SA applications dans 9 mois." },
    ],
  },
  {
    week: 40, phase: "Bachelor 1", month: "Oct 2027",
    focus: "Premiers entretiens Big 4",
    tasks: [
      { cat: "cv", task: "Premiers entretiens Big 4 (téléphone/Zoom). Prep 45 min/entretien : recherche entreprise (derniers deals, structure département), motivation spécifique, compréhension TAS (FDD, Valuation, M&A advisory), exemples du stage fiduciaire, 5 questions à poser." },
      { cat: "networking", task: "Continuer messages BB : 5 nouveaux. Pipeline cible : 15-20 envoyés, 5-7 réponses positives, 3-5 coffee chats." },
      { cat: "technical", task: "BIWS modules 5-6. Construire DCF en 60 min, LBO en 90 min, merger model en 60 min, depuis fichier vierge. Si pas le cas, repratiquer modules précédents." },
      { cat: "networking", task: "Premier coffee chat VP/MD réussi : notes ULTRA détaillées juste après. (1) Conseils mot pour mot. (2) Anecdotes. (3) Personnes mentionnées. (4) Prochaines étapes." },
      { cat: "reading", task: "Update 'Market Pulse' avec derniers développements. Discuter intelligemment marché actuel = impressionne en coffee chat." },
    ],
  },
  {
    week: 41, phase: "Bachelor 1", month: "Nov 2027",
    focus: "Superdays Big 4 + audit IA",
    tasks: [
      { cat: "cv", task: "Superdays Big 4 (3-4 entretiens en 1 journée). Prep intensive : (1) Case study type (DD financière simplifiée, ajustements EBITDA). (2) 5 questions pertinentes par entretien. (3) Costume sombre, chaussures cirées. (4) 30 min en avance." },
      { cat: "networking", task: "🔑 PREMIER FOLLOW-UP BB (4-6 semaines après coffee chat). 'Suite à nos échanges en septembre, je voulais vous informer que (1) j'ai appliqué votre conseil sur [détail], (2) cela m'a aidé à [résultat tangible], (3) je suis en process Superday chez [Big 4]. Vos conseils ont eu un impact réel.'" },
      { cat: "networking", task: "5 nouveaux messages BB. Pipeline cible : 15-20 envoyés, 5-7 réponses, 3-5 coffee chats." },
      { cat: "ai", task: "Auditer DCF généré par IA (2h). (1) Demander à Claude de construire DCF complet Roche. (2) Imprimer le résultat. (3) En auditor : vérifier ligne par ligne — hypothèses justifiables ? WACC correct ? TV growth rate raisonnable ? (4) Identifier ≥3 erreurs ou points discutables. Compétence que recruteurs JPM testent en 2029 : 'peux-tu identifier les erreurs dans ce DCF ?'" },
      { cat: "technical", task: "Mock interview avec ami SGFC : 30 min fit + 30 min technical. Feedback brutalement honnête." },
      { cat: "academics", task: "À 4-5 semaines des examens B1 S1. Commencer fiches de révision." },
    ],
  },
  {
    week: 42, phase: "Bachelor 1", month: "Nov 2027",
    focus: "Offers Big 4 + intensification BB",
    tasks: [
      { cat: "cv", task: "Réception offers Big 4. Plusieurs offres : choisir selon (1) qualité programme, (2) team fit Superday, (3) deal flow et secteur, (4) ouverture vers IB. PwC Deals et Deloitte FA = meilleure réputation IB Europe. Si une firme a département RE, demander placement en priorité." },
      { cat: "cv", task: "Pas d'offer Big 4 (5-10% des cas) : élargir mid-tier (Grant Thornton, BDO, Mazars) ou boutiques M&A (Alantra, DC Advisory, Oaklins). Signal 'Transaction Advisory' importe plus que nom Big 4." },
      { cat: "networking", task: "Premier vrai coffee chat VP ou MD : prep détaillée 60 min min. (1) LinkedIn entier, posts récents. (2) Derniers deals (Mergermarket si accès HSG, sinon FT et Bloomberg). (3) 5-7 questions ULTRA personnalisées. (4) Stock pitch prêt." },
      { cat: "technical", task: "Mock interview technique avancée (2h). Questions IBD types : (1) Walk me through a DCF en 90 sec. (2) EV vs Equity Value ajustements. (3) Comment évaluer banque ? foncière (REIT) ? assurance ? — chacune méthode différente. (4) EBITDA négatif, comment valoriser ? (5) EV/EBITDA vs P/E pour comparer 2 entreprises ?" },
      { cat: "academics", task: "À 3-4 semaines des examens B1 S1. Plan de révision. Chapitres difficiles priorisés." },
      { cat: "reading", task: "Glossaire : 5 termes. Synergies (cost vs revenue), Goodwill impairment, Working Capital normalization, EBITDA bridge, Quality of Earnings." },
    ],
  },
  {
    week: 43, phase: "Bachelor 1", month: "Déc 2027",
    focus: "Approche examens B1 S1",
    tasks: [
      { cat: "academics", task: "🚨 EXAMENS DANS 3-4 SEMAINES. Focus académique. Prep IB max 3h/semaine. GPA priorité absolue." },
      { cat: "academics", task: "Plan révision détaillé chaque cours B1. Groupe d'étude actif. Office hours profs si concepts difficiles. Chapitres faibles priorisés." },
      { cat: "networking", task: "Maintenir relations : message court à 5-10 contacts actifs. 'Période d'examens. Je reprends en janvier. Belles fêtes en avance.'" },
      { cat: "technical", task: "Maintenance : flashcards Anki uniquement. 10 min/jour." },
      { cat: "reading", task: "FT background. Pas de profondeur. Préserver énergie." },
    ],
  },
  {
    week: 44, phase: "Bachelor 1", month: "Déc 2027",
    focus: "🔥 EXAMENS B1 S1",
    tasks: [
      { cat: "academics", task: "🔥 EXAMENS B1 S1. Tout focus. Méthode anti-stress : sommeil, sport léger, nutrition propre. Pas d'all-nighters." },
      { cat: "mindset", task: "Confiance : tu as bossé 4 mois, tu as les compétences. Calme + méthode > stress + panique." },
      { cat: "academics", task: "Entre examens : repos. Ne pas sur-réviser. Le cerveau récupère." },
      { cat: "reading", task: "Aucune. Repos cognitif." },
      { cat: "mindset", task: "Après dernier examen : célébrer modérément. Reprendre élan en janvier." },
    ],
  },
  {
    week: 45, phase: "Bachelor 1", month: "Jan 2028",
    focus: "Reprise + relations VP/MD",
    tasks: [
      { cat: "academics", task: "🎉 Examens B1 S1 terminés. Notes : analyser objectivement quand elles arrivent. Tendance 5.0+ : parfait. Note basse : identifier cause et ajuster S2." },
      { cat: "networking", task: "Reprendre networking VP/MD avec MESSAGE D'UPDATE. 'Bonne année. Suite à novembre : (1) Offer Big 4 pour cet été 2028. (2) B1 S1 validé avec [résultat]. (3) Continue prep BIWS. Vos conseils sur [détail] particulièrement utiles. 15-20 min ce mois-ci ?'" },
      { cat: "networking", task: "Pas de réponse certains contacts initiaux : 1 RELANCE polie après 2-3 mois. 'Je voulais m'assurer que mon précédent message vous est bien parvenu. Comprends totalement si pas eu le temps. [Question spécifique].' Toujours pas de réponse : passer au suivant." },
      { cat: "technical", task: "Reprise BIWS. À 80% du programme. Continuer modules avancés." },
      { cat: "cv", task: "Update CV avec offer Big 4 confirmée. Section Experience : 'Incoming Summer Intern, [Big 4] — TAS, Summer 2028'. Change la perception du recruteur." },
      { cat: "entrepreneur", task: "🚀 PARTICIPER À UN START HACK (hackathon HSG, 48h sur un weekend). Inscription startuphsg.unisg.ch. Objectifs : (1) Rencontrer étudiants ETH techniques (futurs co-fondateurs potentiels). (2) Travailler sur une idée en équipe pendant 48h — expérience condensée de 'créer quelque chose'. (3) Observer comment les autres pitchent. (4) Te tester sur 'idée → MVP → pitch'. Coût : 48h weekend. Pas d'engagement après. Plusieurs entrepreneurs HSG (Yokoy, Carvolution) ont commencé via ces hackathons." },
    ],
  },
  {
    week: 46, phase: "Bachelor 1", month: "Jan 2028",
    focus: "Approfondir les relations VP/MD",
    tasks: [
      { cat: "networking", task: "🎯 STRATÉGIE LONG GAME : nourrir relations VP/MD en permanence. 1 fois/mois min : (1) Like sur leur post LinkedIn. (2) Commentaire pertinent sur article qu'ils partagent. (3) Message court avec question spécifique sur deal ou sujet macro. Diversifier types d'interaction." },
      { cat: "networking", task: "Audit du réseau (1h). Sur tes 30-40 contacts actifs : combien IB pur ? Combien diversifié (RE PE, AM, boutiques) ? Idéal : 70% IB + 30% diversifié. Si 95% IB pur : ajouter 3-5 contacts RE PE / foncières / mid-market." },
      { cat: "networking", task: "Identifier 2-3 contacts particulièrement réceptifs = 'CHAMPIONS' potentiels. Investir plus : message tous les 3-4 semaines, jamais plus de 5 min de leur temps." },
      { cat: "technical", task: "Mock interview avec coffee-chat partner : demander à analyst/associate junior de te faire passer mock entretien. 30 min fit + 30 min technical. Feedback détaillé." },
      { cat: "reading", task: "Deal Library : 20-30 deals analysés sur 12 mois. Discuter chacun en 60-90 sec. Inclure 3-5 deals immobiliers majeurs (Blackstone, Brookfield, Patrizia)." },
      { cat: "academics", task: "Cours B1 S2 commencent. Identifier profs et difficulté. Routine d'étude immédiate." },
    ],
  },
  {
    week: 47, phase: "Bachelor 1", month: "Fév 2028",
    focus: "Préparation pré-applications",
    tasks: [
      { cat: "technical", task: "Sprint final BIWS : finir TOUS modules d'ici fin février. De mémoire : DCF en 45 min, LBO 60 min, Merger 45 min, Trading Comps 30 min. Chronométrer pour valider." },
      { cat: "technical", task: "Modeling sprint final (3h). À la suite, en autonomie, fichier vierge : (1) DCF complet foncière suisse (Swiss Prime Site, Mobimo) — bonus : DCF immobilier (NOI, cap rates vs WACC corporate). (2) LBO complet mid-market industriel. (3) Merger accretion/dilution. Total chrono : <4h pour les 3 modèles. Top 5% techniques de tous les candidats SA européens." },
      { cat: "technical", task: "Cheat Sheet finale 'Application-Ready' : 2 pages recto-verso. Toutes formules clés, frameworks, walk-throughs, market views. Tu reliras 200 fois avant Superdays. Plastifier." },
      { cat: "networking", task: "Audit pipeline réseau : 30-40 connexions LinkedIn actives, 8-12 coffee chats sur 12 mois, 3-5 champions chez banques cibles. En dessous : intensifier cette semaine." },
      { cat: "cv", task: "CV version 'application-ready' : update finale. (1) Big 4 stage confirmé. (2) BIWS completed. (3) GPA Bachelor 1 S1. (4) Leadership clubs HSG. (5) Compétitions/awards. Relire par 3 personnes min : senior IB, coach carrière HSG, mentor extérieur." },
      { cat: "entrepreneur", task: "🚀 START SUMMIT 2028 — édition 2 (plus engagé). Différence vs S25 : 12 mois d'observation + Frustration Log du stage + plus de maturité. Objectifs : (1) Identifier 1-2 problèmes spécifiques intéressants (pas encore 'idées startup', juste problèmes). (2) Parler à 5-10 personnes pour valider chaque problème. (3) Évaluer si l'un mérite d'être exploré sérieusement. Oui : mini-side project pendant été Big 4 (1-2h/soir). Non : continue à observer." },
      { cat: "academics", task: "Cours B1 S2 : maintenir rythme. Pas de relâchement parce que examens sont loin." },
    ],
  },
  {
    week: 48, phase: "Bachelor 1", month: "Fév 2028",
    focus: "Stress test + group preferences",
    tasks: [
      { cat: "technical", task: "🔥 STRESS TEST Superday complet. (1) 4 entretiens fictifs en 1 jour (4×45 min). (2) Mix : 2 fit + 2 technical. (3) Interviewers : 1 ami SGFC, 1 alumni HSG, 1 mentor extérieur, 1 inconnu via réseau. (4) Feedback brutalement honnête. (5) Identifier 3 axes amélioration." },
      { cat: "technical", task: "Préparer 'group preference' applications IB (1.5h). RAPPEL : M&A, LevFin, FSG sont des GROUPES À L'INTÉRIEUR de l'IBD, pas alternatives. Top choices = M&A, LevFin, FSG. Meilleurs exits PE et RE PE. Si banque a groupe Real Estate IB dédié (rare mais existe JPM, GS, MS) : idéal pour ton objectif RE long terme. Préparer 'Why this group ?' pour M&A et LevFin." },
      { cat: "networking", task: "Préparer 'activation' champions pour dans 4 mois. Pour chaque champion : brouillon de message de demande de referral à utiliser quand applications ouvriront en juillet. Personnalisé. Pas envoyé maintenant." },
      { cat: "technical", task: "Stock pitch finalisé : 2-3 stock pitches absolument fluides, présentables en 3 min sans hésiter. Filme-toi une dernière fois pour valider." },
      { cat: "reading", task: "Market view solide : vision structurée prête à présenter en 60 sec. Macro (taux, inflation, croissance), M&A (volumes, secteurs hot), tendances sectorielles, ton opinion." },
      { cat: "cv", task: "Dossier 'Application Pack' : tous documents prêts pour juillet. CV final, cover letters templates par banque, transcripts HSG, lettre fiduciaire, références." },
    ],
  },
  {
    week: 49, phase: "Bachelor 1", month: "Mars-Avril 2028",
    focus: "Approche finals B1 + Big 4",
    tasks: [
      { cat: "academics", task: "🚨 EXAMENS FINALS B1 DANS 6-8 SEMAINES. Mode focus académique. Prep IB max 3h/semaine. GPA Bachelor 1 sur CV final pour SA applications juillet." },
      { cat: "cv", task: "Logistique stage Big 4 été 2028. Confirmer : (1) Dates exactes (fin juin à mi-août). (2) Logement à la ville du stage (Zurich généralement). (3) Matériel fourni vs à acheter. (4) Code vestimentaire. (5) Onboarding day. Tout réglé d'ici fin avril." },
      { cat: "networking", task: "Maintenance réseau pendant phase examens : 1 like/semaine sur posts champions. Pas de messages substantiels. Présence passive." },
      { cat: "technical", task: "Maintenance : 1 paper LBO/semaine + flashcards Anki quotidiens. Pas de nouveau contenu." },
      { cat: "mindset", task: "Préserver énergie. Période exigeante (examens + stage + applications). Sommeil 8h non négociable. Sport 3x/semaine. Alimentation propre." },
    ],
  },
  {
    week: 50, phase: "Bachelor 1", month: "Mai 2028",
    focus: "🔥 EXAMENS B1 S2",
    tasks: [
      { cat: "academics", task: "🔥 EXAMENS FINAUX BACHELOR 1. Tout focus. Dernière fois GPA testé avant applications BB. Ne pas relâcher." },
      { cat: "mindset", task: "Tu as bossé toute l'année. Tu sais ce que tu sais. Calme, méthode, performance. Respiration profonde avant chaque épreuve. Formules clés sur brouillon dès copie distribuée." },
      { cat: "cv", task: "Préparer en parallèle (soir, brièvement) matériel application JPM/GS/MS pour début juillet. Drafts CV, cover letters, réponses questions standard. Finaliser dès post-examens." },
      { cat: "academics", task: "Après examens : 1 semaine repos total. Cerveau consolide." },
      { cat: "mindset", task: "Reconnaître le moment : 24 mois de préparation intense. 5 semaines : stage Big 4 + applications JPM. Phase finale. Confiance et exécution." },
    ],
  },
  {
    week: 51, phase: "Stage Big 4 + Applications", month: "Juin 2028",
    focus: "🚨 Lancement double activité",
    tasks: [
      { cat: "cv", task: "🚀 STAGE BIG 4 COMMENCE (mi-juin). Première semaine : performance maximale, attitude humble. Tu sais quoi faire en TAS/Deals. Rapidement productif. Si firme a département Real Estate : demander placement pour exposure RE concret." },
      { cat: "cv", task: "🚨 APPLICATIONS SUMMER ANALYST OUVRENT JUILLET-OCTOBRE. Calendrier : (1) JP Morgan : mi-juillet. (2) Goldman Sachs : début août. (3) Morgan Stanley : courant août. (4) UBS : septembre. (5) Boutiques (Rothschild, Lazard) : échelonnées. Surveiller sites carrière dès 1er juillet." },
      { cat: "ai", task: "Au stage Big 4 : observer comment pros utilisent l'IA. Big 4 ont déployé Claude/Copilot massivement en 2026. Observer : (1) Quels prompts utilisent seniors ? (2) Workflows automatisés ? (3) Règles de gouvernance (que partager avec IA, que pas) ? (4) Outils internes propriétaires ? Noter dans 'AI_in_Big4'. Servira chez JPM ensuite." },
      { cat: "networking", task: "🔑 ACTIVATION CHAMPIONS. Pour tes 3-5 champions sur 12-18 mois : message stratégique. 'Je vais postuler aux SA de [banques cibles] cet été. Suite à vos conseils sur [X] et nos échanges sur [Y], je me sens bien préparé. Si vous avez d'autres recommandations avant que je postule, je serais ravi de les entendre.'" },
      { cat: "networking", task: "🎯 SUBTIL : ne PAS demander referral explicitement. Tu informes. La plupart des champions vont spontanément proposer 'quand tu postules officiellement, fais-moi signe'. Pas spontané après 1 semaine : demander explicitement en S52." },
      { cat: "academics", task: "Validation officielle Bachelor 1. Résultats sur CV immédiatement." },
    ],
  },
  {
    week: 52, phase: "Stage Big 4 + Applications", month: "Juillet-Août 2028",
    focus: "🔥 EXÉCUTION FINALE",
    tasks: [
      { cat: "cv", task: "🔥 POSTULER 12-14 positions ciblées. PRIORITÉ GÉOGRAPHIQUE : LONDRES (passerelle vers NYC), puis Suisse backup. Liste prioritaire LONDRES (6-8) : (1) JPM IBD London, (2) GS IBD London, (3) MS IBD London, (4) Evercore London (boutique élite, présence NYC), (5) Centerview London, (6) PJT Partners London, (7) Lazard London, (8) Rothschild London. Backup SUISSE (4-6) : (9) UBS IBD Zurich, (10) JPM Zurich (rare), (11) GS Zurich, (12) Berenberg. Cover letter STRICTEMENT personnalisée. PRÉFÉRENCES DE GROUPE : M&A / LevFin / FSG en priorité." },
      { cat: "cv", task: "🌍 STRATÉGIE VISA & TRANSFERT NYC. Postuler à Londres : (1) Pas besoin de visa initialement (UE/AELE) mais employeur peut sponsoriser Skilled Worker Visa UK selon nationalité. (2) AVANTAGE Londres : programmes Internal Mobility de JPM, GS, MS rodés. Après 2-3 ans : transfert NYC via visa L-1 (pas de loterie) ou H-1B (loterie 20-25%). (3) Lors superdays Londres, NE PAS mentionner NYC. (4) Backup : MBA US (Wharton, Columbia, HBS) à 27-28 ans = 3 ans OPT + meilleures chances H-1B." },
      { cat: "cv", task: "Postuler EN PARALLÈLE 2-3 positions RE PE / Investment juniors backup. Cibles Londres : Blackstone Real Estate London, Brookfield London, Starwood Capital London, Patrizia London. Backup Suisse : Patrimonium (Lausanne), Empira AM (Zurich), Pictet Alternative Advisors (Genève). Ne PAS mentionner aux banques IB." },
      { cat: "networking", task: "🎯 DEMANDE FINALE REFERRALS : pour chaque banque où tu as un champion, message direct 24-48h après candidature. 'Je viens de soumettre candidature pour [position] chez [banque]. Comme convenu, seriez-vous disposé à faire un referral interne si RH vous contactent ? Comprends totalement si pas possible.' Sur 5 champions : 2-3 oui." },
      { cat: "cv", task: "Performer au stage Big 4 PENDANT applications. Jour : 100% Big 4 (manager peut être référent IB plus tard). Soir/weekend : applications. Exactement ce que recruteurs BB veulent voir." },
      { cat: "mindset", task: "🧠 RÉALITÉ FINALE : 24 mois de préparation, 2 stages, 30-50 contacts, 2-3 referrals activés. Top 5% des candidats SA européens. Probabilité ≥1 offre : 40-60%. Pas garanti, mais très solide." },
    ],
  },
];

// Total XP du plan (calculé automatiquement)
const TOTAL_PLAN_XP = WEEKS.reduce((sum, w) =>
  sum + w.tasks.reduce((s, t) => s + (XP_PER_TASK[t.cat] || 5), 0)
, 0);

// Export pour le navigateur
if (typeof window !== 'undefined') {
  window.PLAN_DATA = {
    CATEGORIES,
    PLAN_START_DATE,
    KEY_DEADLINES,
    XP_PER_TASK,
    JPM_INTERN_TOTAL_XP,
    JPM_XP_PER_WEEK,
    WEEKS,
    TOTAL_PLAN_XP
  };
}
