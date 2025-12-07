export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface TaskItem {
  id: number;
  topic: string;
  question: string;
  hint: string;
}

export interface Alumni {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface BookReference {
  id: number;
  text: string;
}