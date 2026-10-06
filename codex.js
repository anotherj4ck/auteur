/* =====================================================================
   Codex du Greatland
   ---------------------------------------------------------------------
   Pour ajouter une planche : copie un bloc { ... } dans "planches".
   - rubrique : l'identifiant d'une rubrique de la liste "rubriques"
   - image    : la planche entière (jamais recadrée)
   - mini     : la vignette
   - nom      : le titre de la planche
   - entree   : le texte de l'entrée du codex ("" = pas encore écrit)
   - alt      : description de l'image pour les lecteurs d'écran
   Les numéros de folio (I, II, III…) sont calculés automatiquement,
   dans l'ordre des rubriques puis des planches.
   ===================================================================== */
window.CODEX = {
  rubriques: [
    { id: "peuples", titre: "Peuples" },
    { id: "lieux", titre: "Lieux et demeures" }
  ],
  planches: [
    {
      rubrique: "peuples",
      image: "assets/codex/planche-3.webp",
      mini: "assets/codex/planche-3-mini.webp",
      nom: "Les elfes",
      entree: "",
      alt: "Planche anatomique : un elfe et une elfe aux longs cheveux, de face et de profil, avec études de l'œil, de l'oreille, de la main et du crâne."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-9.webp",
      mini: "assets/codex/planche-9-mini.webp",
      nom: "La croissance elfique",
      entree: "",
      alt: "Planche d'étude : un enfant elfe de la naissance à l'adolescence, avec l'évolution de l'oreille, des proportions, du visage et de la main."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-5.webp",
      mini: "assets/codex/planche-5-mini.webp",
      nom: "Les humains",
      entree: "",
      alt: "Planche anatomique : un homme et une femme, de face et de profil, avec études de l'œil, de l'oreille, de la main, du crâne et des proportions."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-2.webp",
      mini: "assets/codex/planche-2-mini.webp",
      nom: "Les êtres ailés",
      entree: "",
      alt: "Planche anatomique : un homme et une femme ailés, de face et de dos, avec études des plumes et du squelette des ailes."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-7.webp",
      mini: "assets/codex/planche-7-mini.webp",
      nom: "Les nains",
      entree: "",
      alt: "Planche anatomique : un nain barbu et une naine aux tresses, tatoués, de face et de profil, avec études de la main, du pied et des os."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-8.webp",
      mini: "assets/codex/planche-8-mini.webp",
      nom: "Les orcs",
      entree: "",
      alt: "Planche anatomique : un orc et une orque massifs, avec études du squelette, de la colonne, du crâne à défenses et des os des membres."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-4.webp",
      mini: "assets/codex/planche-4-mini.webp",
      nom: "Les gobelins",
      entree: "",
      alt: "Planche anatomique : un gobelin et une gobeline maigres aux longues oreilles, de face et de profil, avec études de la main à quatre doigts et du crâne."
    },
    {
      rubrique: "peuples",
      image: "assets/codex/planche-6.webp",
      mini: "assets/codex/planche-6-mini.webp",
      nom: "Les Iti",
      entree: "",
      alt: "Planche d'étude : un petit être aux longs cheveux, couvert de haillons et de bijoux, tenant dans une main humaine, à côté d'un sac de trésors."
    },
    {
      rubrique: "lieux",
      image: "assets/codex/planche-1.webp",
      mini: "assets/codex/planche-1-mini.webp",
      nom: "L'habitat sous l'arbre",
      entree: "",
      alt: "Planche d'architecture : un abri de branches tressées au pied d'un arbre immense, vu de l'extérieur et en coupe, avec détails des ligatures."
    }
  ]
};
