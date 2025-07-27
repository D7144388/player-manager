# Player Manager - Gestion de joueurs avec Google Sheet & GitHub Pages

## Description
Cette application web permet d'ajouter des joueurs avec une date d'expiration à un mois, de prolonger cette date en cliquant dessus, de compter le nombre de fois où cette date est prolongée, et de supprimer des joueurs manuellement. Les données sont stockées dans une Google Sheet via un script Google Apps Script.

---

## Installation & déploiement

### 1. Créer la Google Sheet
- Crée une nouvelle Google Sheet.
- Renomme la feuille par défaut en `Feuille 1` ou modifie la constante `SHEET_NAME` dans `script.gs`.
- Ajoute les en-têtes dans la première ligne (optionnel) : `Nom`, `Date`, `Clicks`.

### 2. Ajouter le script Apps Script
- Dans la Google Sheet, clique sur **Extensions > Apps Script**.
- Colle le contenu du fichier `script.gs`.
- Enregistre.

### 3. Déployer l'API Google Apps Script
- Clique sur **Déployer > Nouveau déploiement**.
- Choisis **Application web**.
- Exécuter en tant que : toi-même.
- Accès : Tout le monde (anonyme).
- Clique sur **Déployer** et copie l’URL fournie.

### 4. Configurer l'interface web
- Ouvre `index.html`.
- Remplace la valeur de la variable `API_URL` par l’URL du déploiement Apps Script (celle copiée à l’étape précédente).
- Héberge cette page sur GitHub Pages ou localement.

### 5. Héberger sur GitHub Pages (optionnel)
- Crée un dépôt GitHub.
- Ajoute `index.html` dans ce dépôt.
- Active GitHub Pages dans **Settings > Pages** en choisissant la branche `main` et le dossier `/root`.
- Ton site sera disponible à l’URL `https://<ton-nom-utilisateur>.github.io/<nom-du-depot>/`.

---

## Utilisation
- Ajouter un joueur avec son nom.
- Cliquer sur la date à côté du nom pour prolonger d’un mois et incrémenter le compteur.
- Supprimer un joueur via le bouton 🗑️.
- Les joueurs dont la date est dépassée apparaissent en grisé et barrés.

---

## Nettoyage automatique (optionnel)
- Le script contient une fonction `removeExpiredPlayers` qui supprime les joueurs expirés.
- Tu peux configurer un déclencheur dans Apps Script pour exécuter cette fonction régulièrement (ex : tous les jours).

---

## Support
Pour toute question, n’hésite pas à me demander !
