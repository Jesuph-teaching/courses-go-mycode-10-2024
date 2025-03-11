import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <button className="btn btn-secondary">{children}</button>;
}
