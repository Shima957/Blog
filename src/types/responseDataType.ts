export type cmsData = {
  contents: categories[] | blog[];
  totalCount: number;
  offset: number;
  limit: number
}

export type categories = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export type blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  category: categories | null
}
