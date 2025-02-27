interface PublishbalesI {
  title: string;
  content: string;
}

interface BlogI extends PublishbalesI {
  description: string;
}

interface NewsI extends PublishbalesI {
  snipet: string;
  date: Date;
  author: string;
}

const blog: BlogI = {
  description: "lorem Ipsum",
  title: "Blog 1",
  content: "lorem ipsum dolor sit amet, consectetur adip",
};

const news: NewsI = {
  snipet: "lorem ipsum d",
  date: new Date(),
  author: "M'hamed",
  title: "Karim killed by a lama",
  content: "lorem ipsum dolor sit amet, consectetur adip",
};

interface PublicI<X> {
  publishable: X;
  isPublic: boolean;
  order: number;
}

export const publicNews: PublicI<NewsI>[] = [
  {
    publishable: news,
    isPublic: true,
    order: 0,
  },
];

export const publicBlog: PublicI<BlogI>[] = [
  {
    publishable: blog,
    isPublic: false,
    order: 0,
  },
];
