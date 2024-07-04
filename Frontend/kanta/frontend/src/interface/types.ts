export interface PhysicalPerson {
    id: number;
    email: string;
    role: string;
    fullName: string;
    telephoneNumber: string;
    location: string;
  }
  
  export interface Company {
    id: number;
    email: string;
    role: string;
    companyName: string;
    number: string;
    taxNumber: string;
    location: string;
  }
  
  export interface Institution {
    id: number;
    email: string;
    role: string;
    institutionName: string;
    location: string;
  }
  
  export type User = PhysicalPerson | Company | Institution;
  export {};