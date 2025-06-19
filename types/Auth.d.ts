export interface LoginValues {
  phone: string;
}

export interface SignupValues {
  phone: string;
}

export interface NameValues {
  name: string;
}

export interface EmailValues {
  email: string;
}

export interface AgeValues {
  age: number;
}

export type GenderValues = {
  gender: "male" | "female" | "other";
}

export type LookingForValues = {
  lookingFor: "relationship" | "casual" | "notSure" | "marriage";
}
