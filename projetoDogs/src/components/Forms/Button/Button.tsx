import { ReactNode } from "react";
import { ButtonForm } from "./style";



const Button = ({ children, ...props }: { children: ReactNode } & Record<string, any>) => {
  return <ButtonForm {...props}>{children}</ButtonForm>;
};

export default Button;
