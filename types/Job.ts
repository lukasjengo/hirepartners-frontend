export interface JobResponse {
  acf: {
    company_expects: string;
    company_offers: string;
    job_description: string;
    location: string;
    monthly_salary: string;
    tech_stack: string;
  };
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  modified: Date;
}
