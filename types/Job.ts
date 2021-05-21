export interface JobResponse {
  acf: {
    location: string;
    monthly_salary: string;
  };
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  modified: string;
}
