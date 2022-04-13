export type DataType = {
  accelerator: string;
  video: string;
  about: {
    description: string;
    picture: string;
  }
};

export type ProjectType = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  role: string;
  technologies: string;
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
