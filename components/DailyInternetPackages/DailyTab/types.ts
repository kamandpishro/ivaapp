export interface PackageItem {
  id: string | number;
  title: string;
  price: string;
}

export interface DailyTabProps {
  title: string;
  items: PackageItem[];
}