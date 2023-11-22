export interface IformatedJob {
  id: string;
  contact_name: string;
  created_at: number;
  suburbName: string;
  postcode: string;
  categoryName: string;
  price: number;
  contact_email: string;
  contact_phone: string;
  description: string;
  status: string
}

export interface IJob {
  id: string;
  contact_name: string;
  created_at: number;
  categoryName: string;
  price: number;
  contact_email: string;
  contact_phone: string;
  description: string;
  suburb_id: number;
  category_id: number;
  status: string
}

export interface ISuburb {
  id: Number;
  name: string;
  postcode: string;
}

export interface ICategory {
  id: Number;
  name: string;
  patent_category_id: Number;
}
