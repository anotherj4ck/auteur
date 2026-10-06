/* =====================================================================
   Galeries des univers
   ---------------------------------------------------------------------
   Pour ajouter une image : copie un bloc { ... } et change les valeurs.
   - mini   : la vignette (384 x 512)
   - grande : la version plein écran (768 x 1024)
   - nom    : affiché sous la vignette
   - legende: une ligne de contexte, sans spoiler (laisser "" pour aucune)
   - alt    : description de l'image, lue par les lecteurs d'écran
   - presentation : 2 ou 3 phrases, affichées dans la visionneuse ("" = rien)
   - traits : 2 ou 3 mots-clés, affichés en étiquettes ([] = rien)

   Ce fichier est un script (et pas un .json) pour que le site marche
   aussi en ouvrant index.html d'un double-clic, sans serveur.
   ===================================================================== */
window.GALERIES = {
  ascendant: [
    {
      mini: "assets/ascendant/perso-1-mini.webp",
      grande: "assets/ascendant/perso-1.webp",
      nom: "Elara Ashcroft",
      legende: "",
      presentation: "Membre de la Maintenance, Elara a grandi à Londinium, l'une des dernières cités-États encore debout. Vive et sensible, elle n'abandonne jamais personne.",
      traits: ["Loyale", "Protectrice", "Intuitive"],
      alt: "Une jeune femme aux cheveux courts, lunettes de soudeur autour du cou, dans un tunnel éclairé par un ciel orangé."
    },
    {
      mini: "assets/ascendant/perso-2-mini.webp",
      grande: "assets/ascendant/perso-2.webp",
      nom: "Edgard Crane",
      legende: "Primus Commandant",
      presentation: "Plus haut gradé de la Milice, Edgard Crane est craint de tous. Son œil cybernétique est toujours braqué sur vous, et il fait régner l'ordre d'une main de fer.",
      traits: ["Implacable", "Autoritaire", "Vigilant"],
      alt: "Un homme aux cheveux gris et à l'œil rouge, en uniforme noir, le bras gauche mécanique."
    },
    {
      mini: "assets/ascendant/perso-3-mini.webp",
      grande: "assets/ascendant/perso-3.webp",
      nom: "Amira",
      legende: "",
      presentation: "Guerrière Naraéenne, Amira a parcouru les sous-sols de Londinium aux côtés d'Elara, son amie. Puis elle a disparu, dans des circonstances étranges.",
      traits: ["Farouche", "Fidèle", "Insaisissable"],
      alt: "Une femme aux longs cheveux noirs, cicatrice au front, en manteau usé dans un désert de ruines."
    },
    {
      mini: "assets/ascendant/perso-4-mini.webp",
      grande: "assets/ascendant/perso-4.webp",
      nom: "Erika Thorne",
      legende: "Matriarche de Londinium",
      presentation: "Au plus haut rang des Nourrices, Erika Thorne veille sur Londinium. Derrière une apparence chaleureuse et maternelle se cache une femme au regard et à l'analyse acérés.",
      traits: ["Maternelle", "Perspicace", "Calculatrice"],
      alt: "Une femme aux longs cheveux blancs attachés, vêtue d'une veste blanche à col montant, au regard calme et perçant."
    },
    {
      mini: "assets/ascendant/perso-5-mini.webp",
      grande: "assets/ascendant/perso-5.webp",
      nom: "Yuna Yamamoto",
      legende: "",
      presentation: "Fille d'Ichiro Yamamoto, l'autre Primus Commandant de Londinium, Yuna a reçu une éducation stricte et ne rêve que d'émancipation. Aux côtés de Soren Ashcroft, elle suivra le Cursus Langford.",
      traits: ["Disciplinée", "Rêveuse", "Indocile"],
      alt: "Une jeune fille en tunique bleue, assise à un pupitre de bois, regarde par la fenêtre d'une salle de classe."
    },
    {
      mini: "assets/ascendant/perso-6-mini.webp",
      grande: "assets/ascendant/perso-6.webp",
      nom: "Soren Ashcroft",
      legende: "",
      presentation: "Frère d'Elara, Soren est un garçon naïf et rêveur qui aime sa sœur plus que tout. Aux côtés de Yuna, son potentiel se révélera.",
      traits: ["Rêveur", "Dévoué", "Prometteur"],
      alt: "Un garçon souriant, des livres sous le bras, dans un jardin à fontaine devant un bâtiment classique."
    }
  ],
  labyrinthe: [
    {
      mini: "assets/labyrinthe/perso-1-mini.webp",
      grande: "assets/labyrinthe/perso-1.webp",
      nom: "Aidan",
      legende: "",
      alt: "Un homme brun en long manteau noir marche seul sur un trottoir, au coucher du soleil."
    },
    {
      mini: "assets/labyrinthe/perso-2-mini.webp",
      grande: "assets/labyrinthe/perso-2.webp",
      nom: "Marine",
      legende: "",
      alt: "Une jeune femme aux longs cheveux blonds et aux yeux bleus, assise au soleil dans une rue de pierre."
    }
  ]
};
