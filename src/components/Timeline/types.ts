interface Item {
  date: string;
  title: string;
  subTitle: string;
  action?: string;
}

export interface TimelineProps {
  data: Item[];
}
