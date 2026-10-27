# Portfolio — Majda Ablaoui

Site statique (HTML / CSS / JS, aucune dépendance ni étape de build).
FR / EN, thème clair / sombre (mémorisés), animations respectant `prefers-reduced-motion`.

## Fichiers
- `index.html` — contenu (texte français)
- `main.js` — traductions anglaises (objet `EN`) + interactions
- `styles.css` — design system (variables en haut du fichier) et animations
- `assets/CV_Majda_Ablaoui_FR.pdf`, `assets/CV_Majda_Ablaoui_EN.pdf` — servis selon la langue
- `assets/matching/1.png … 4.png` — captures facultatives (masquées si absentes)

Pour modifier un texte : changez-le dans `index.html` (FR) **et** dans `main.js` (EN, même clé `data-i18n`).

## Aperçu local
    python -m http.server 8000   # puis http://localhost:8000

## Déploiement
Vercel : importer le dépôt, framework « Other », aucun build. Ou GitHub Pages sur la branche main.
