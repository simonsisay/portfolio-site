import { Container } from "./styles";
import { BsArrowBarRight } from "react-icons/bs";

type Props = {
  width?: number;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, width, onClick }) => {
  return (
    <Container onClick={onClick} className="button" style={{ width }}>
      {children}
      <BsArrowBarRight color={"white"} />
    </Container>
  );
};

export default Button;
