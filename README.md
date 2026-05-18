# 🎯 JPM Tracker — Guide d'installation

App de suivi personnalisée pour ton parcours **du Bac BFI à JP Morgan Londres en 52 semaines**.

---

## ⚡ Démarrage rapide (5 minutes)

### Option 1 : Test immédiat sur ton ordi

1. Décompresse le ZIP dans un dossier sur ton ordi
2. Ouvre le terminal dans ce dossier
3. Lance un serveur local :

```bash
# Si tu as Python 3 installé (probablement déjà le cas)
python3 -m http.server 8000

# OU avec Node.js
npx serve
```

4. Ouvre http://localhost:8000 dans Chrome/Safari/Edge
5. L'app fonctionne immédiatement, données stockées en local

### Option 2 : Installation sur iPhone/Android (PWA)

Une fois que l'app tourne en local (voir Option 1) :

**Sur iPhone (Safari) :**
1. Connecte ton iPhone au même WiFi que ton ordi
2. Sur ton ordi, lance `python3 -m http.server 8000`
3. Trouve l'IP locale de ton ordi : Réglages → Wi-Fi → ton réseau → IPv4 (ex: 192.168.1.50)
4. Sur Safari iPhone, va à `http://192.168.1.50:8000`
5. Bouton Partage (en bas) → "Sur l'écran d'accueil"
6. L'app s'installe comme une vraie app native ✨

**Sur Android (Chrome) :**
1. Même chose, accède via Chrome à l'IP locale
2. Menu (3 points) → "Installer l'application"
3. Icône ajoutée sur ton écran d'accueil

---

## 🚀 Installation permanente (recommandé) — Déploiement gratuit

Pour avoir l'app accessible **partout, tout le temps**, sans avoir besoin de ton ordi :

### Étape 1 : Compte GitHub (gratuit, 2 min)
1. Créer compte sur github.com
2. Nouveau repository "jpm-tracker", public
3. Upload tous les fichiers (index.html, app.js, data.js, sw.js, manifest.json, dossier icons/)

### Étape 2 : Activer GitHub Pages (gratuit, 1 min)
1. Dans ton repo → Settings → Pages
2. Source : "main branch" → Save
3. Ton app sera accessible à `https://TON-USERNAME.github.io/jpm-tracker/`

### Étape 3 : Installation comme app native
- iPhone Safari → Partage → "Sur l'écran d'accueil"
- Android Chrome → Menu → "Installer"
- Desktop Chrome → Icône d'installation dans la barre d'adresse

**Résultat : app accessible partout, fonctionne offline, mêmes données sync via le navigateur.**

---

## 📱 Fonctionnalités

### 🏠 Dashboard
- **XP cumulé** : chaque tâche complétée donne des XP (5-12 par tâche selon catégorie)
- **Comparaison vs Stagiaire JPM moyen** : barre de progression qui te montre si tu es en avance/retard
- **Streak** : jours consécutifs d'activité (cochage de tâches ou journal)
- **Stats** : tâches complétées, semaine actuelle, contacts, GPA

### 📋 Tâches
- Navigation rapide entre les 52 semaines (barre horizontale en haut)
- Coche les tâches au fur et à mesure
- Filtrage par catégorie via les couleurs visuelles
- Auto-scroll sur ta semaine actuelle

### 📔 Journal
- **Mood** : ton humeur du jour (5 émojis)
- **Énergie** : niveau d'énergie (1-10)
- **Notes** : journal libre quotidien
- **Objectifs hebdomadaires** : tes 3 priorités de la semaine

### 📊 Tracker
- **GPA prévisionnel** : ajoute tes cours HSG et tes notes pour suivre ton GPA en temps réel (cible 5.0+)
- **Tracker réseau** : tes contacts IB (nom, banque, position, statut, notes)

---

## 🔧 Synchronisation entre appareils (avancé, optionnel)

Pour synchroniser tes données entre iPhone, Android et ordi, configure Supabase (gratuit) :

1. Créer compte sur supabase.com (gratuit, illimité pour usage perso)
2. Nouveau projet → noter URL et anon key
3. Ouvre `app.js` et ajoute en haut du fichier :

```javascript
const SUPABASE_URL = 'https://TON-PROJET.supabase.co';
const SUPABASE_KEY = 'TA-ANON-KEY';
```

4. Crée une table `user_state` avec colonnes : `id` (text primary), `data` (jsonb)
5. L'app détectera et synchronisera automatiquement

**Pas besoin de faire ça pour démarrer.** Le localStorage marche très bien pour usage personnel sur un seul appareil.

---

## 💡 Conseils d'usage

- **Coche les tâches en temps réel**, pas en fin de semaine. C'est ce qui maintient ton streak et tes XP à jour.
- **Journal quotidien**, même 30 secondes. Ça crée une habitude et te permet de revenir en arrière pour voir ton évolution.
- **Compare-toi à JPM régulièrement**, mais ne te démoralise pas si tu es derrière. Le but est de finir à parité ou devant à la fin des 52 semaines.
- **Garde le GPA tracker à jour** quand tes notes HSG arrivent. C'est ton indicateur académique principal.
- **Le réseau LinkedIn** : ajoute chaque nouveau contact dès le coffee chat, avec ses notes. À 18 mois, tu auras 30-50 contacts trackés.

---

## 🆘 Problèmes courants

**Mes données ont disparu après avoir vidé le cache du navigateur**
→ Le localStorage est lié au navigateur. Pour éviter ce risque, configure Supabase (section sync ci-dessus).

**L'app ne s'installe pas en PWA sur iPhone**
→ Vérifie que tu utilises Safari (pas Chrome iOS). Et que l'URL est en HTTPS (donc déploie sur GitHub Pages, pas en local sur ton iPhone).

**Le streak ne se met pas à jour**
→ Il faut au moins 1 tâche cochée ou 1 entrée journal par jour. Le streak reset si tu sautes plus d'1 jour.

---

## 🎯 La philosophie

Cette app n'est pas un to-do list classique. C'est un **système de feedback** :

- Tu vois ta progression vs un benchmark (stagiaire JPM moyen)
- Tu gardes la trace de tes apprentissages quotidiens
- Tu visualises tes échéances importantes
- Tu mesures ton GPA et ton réseau dans le temps

L'objectif : **rester en phase avec le plan sans te perdre dans les détails**. À utiliser 5-10 minutes par jour, pas plus.

**Bon parcours. Objectif JPM Londres → NYC → REPE → fortune long terme. 🚀**
