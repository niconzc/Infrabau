export type ProjectCategory =
  | "leitungsbau"
  | "betonbau"
  | "freileitungsbau"
  | "erdbau-hangsicherung";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  client: string;
  volume?: string;
  period: string;
  coverImage: string;
  images: string[];
  description: string;
  scope: string[];
  featured?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  heroImage: string;
  scope: string[];
}

export interface Job {
  id: string;
  title: string;
  type: "Vollzeit" | "Teilzeit";
  location: string;
  description: string;
  requirements: string[];
  email: string;
}
