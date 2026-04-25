import profile from "@/public/Ambassador/profile.png"
import { StaticImageData } from "next/image";

interface ambassadorsLists {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | StaticImageData;
  location: string;
  name: string;
  type: string;
  description: string;
  recipe: string;
}

export const ambassadors: ambassadorsLists[] = [
  {
    image: profile,
    location: "CAMBODIA",
    name: "Sothea Narith",
    type: "Heritage Preservationist",
    description:
      "As a guardian of our ancestral recipes, I am selective. Mak honors the stone carvings of Angkor not just in design, but in the depth of its lemongrass and galangal profile.",
    recipe:
      "Whisked into fresh coconut milk for a morning 'Sac Ko Ang' marinade that tastes like childhood.",
  },
  {
    image: profile,
    location: "CAMBODIA",
    name: "Sothea Narith",
    type: "Heritage Preservationist",
    description:
      "As a guardian of our ancestral recipes, I am selective. Mak honors the stone carvings of Angkor not just in design, but in the depth of its lemongrass and galangal profile.",
    recipe:
      "Whisked into fresh coconut milk for a morning 'Sac Ko Ang' marinade that tastes like childhood.",
  },
  {
    image: profile,
    location: "CAMBODIA",
    name: "Sothea Narith",
    type: "Heritage Preservationist",
    description:
      "As a guardian of our ancestral recipes, I am selective. Mak honors the stone carvings of Angkor not just in design, but in the depth of its lemongrass and galangal profile.",
    recipe:
      "Whisked into fresh coconut milk for a morning 'Sac Ko Ang' marinade that tastes like childhood.",
  },
  {
    image: profile,
    location: "CAMBODIA",
    name: "Sothea Narith",
    type: "Heritage Preservationist",
    description:
      "As a guardian of our ancestral recipes, I am selective. Mak honors the stone carvings of Angkor not just in design, but in the depth of its lemongrass and galangal profile.",
    recipe:
      "Whisked into fresh coconut milk for a morning 'Sac Ko Ang' marinade that tastes like childhood.",
  },
];