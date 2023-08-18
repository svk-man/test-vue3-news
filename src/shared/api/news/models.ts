export type NewsItem = {
  name: string;
  code: string;
  previewText: string;
  type: {
    value: string,
    xmlId: string,
  };
  date: number,
  image: string
};

export type Nav = {
  current: number;
  total: number;
};

export type NewsResponse = {
  data: {
    items: NewsItem[];
    nav: Nav;
  }
};
