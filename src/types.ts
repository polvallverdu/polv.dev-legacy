export type DataType = {
  accelerator: string;
  video: string;
  about: {
    description: string;
    picture: string;
  },
  contact: ContactInfo;
};

export type ProjectType = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  role: string;
  highlight_tech?: string;
  technologies: string[];
  images: string[];
};

export type ReviewType = {
  user: string;
  subtitle: string;
  description: string;
  rating: number;
  pp: string;
};

export type ProjectListFilter = "code" | "video" | "music";

export type ContactInfo = {
  email: string;
  discord: string;
  twitter: string;
  linkedin: string;
  socialmedia: string;
  form: string;
}
