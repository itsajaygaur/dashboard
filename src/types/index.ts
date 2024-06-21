export type User = {
  name: string;
  email: string;
  status: "active" | "inactive";
  createdAt: Date;
};
