# Gaël Rautureau · site d'auteur

Le site qui présente mes univers de fiction : science-fiction et fantasy. Chaque histoire a sa propre ambiance (couleurs, image de fond, typographie), avec un extrait, un résumé et une galerie de personnages.

**En ligne :** https://anotherj4ck.github.io/auteur/

## Ajouter ou modifier une image de la galerie

Tout se passe dans [`galeries.js`](galeries.js), sans toucher à la page :

```js
{
  mini: "assets/ascendant/perso-1-mini.webp",   // vignette 384 × 512
  grande: "assets/ascendant/perso-1.webp",      // plein écran 768 × 1024
  nom: "Elara Ashcroft",
  legende: "Une ligne de contexte, sans spoiler",
  alt: "Description de l'image pour les lecteurs d'écran"
}
```

Les images sont au format portrait 3:4, en WebP, avec une teinte commune par univers.

## Le Codex du Greatland

`codex.html` est l'archive du Greatland : des planches d'étude (peuples, lieux), jamais recadrées, avec un numéro de folio calculé automatiquement et une visionneuse qui permet de zoomer pour lire les annotations (molette, double-clic, boutons + et −, pincement sur téléphone).

Pour ajouter une planche ou écrire une entrée : [`codex.js`](codex.js).

## Tester en local

Double-clic sur `index.html` : le site fonctionne sans serveur.

## Technique

- HTML, CSS et JavaScript sans framework, hébergé sur GitHub Pages.
- Galerie construite en JavaScript à partir de `galeries.js`, textes insérés avec `textContent` (pas d'injection de code possible).
- Visionneuse accessible : clavier (flèches, Échap), balayage au doigt sur téléphone, retour du focus à la vignette.
- Mise en page adaptée au téléphone, animations coupées si le système demande moins de mouvement.

© Gaël Rautureau. Textes et illustrations : tous droits réservés.
