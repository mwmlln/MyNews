export interface NewsResponse {
  status: string;
  totalResults: number;
  articles?: ArticlesEntity[] | any;
}

export interface ArticlesEntity {
  source: Source;
  author?: string | null;
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}

export interface Source {
  id?: string | null;
  name: string;
}
