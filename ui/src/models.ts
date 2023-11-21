export interface IJob {
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
}

export interface ISuburb {
  id: Number;
  name: String;
  postcode: String;
}

export interface ICategory {
  id: Number;
  name: String;
  patent_category_id: Number;
}
