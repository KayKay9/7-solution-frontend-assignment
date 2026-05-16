type Gender = "male" | "female";

type DepartmentResult = {
  male: number;
  female: number;
  minAge: number;
  maxAge: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
};

export type Output = Record<string, DepartmentResult>;