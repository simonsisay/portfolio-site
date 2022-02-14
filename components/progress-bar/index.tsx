import { Container } from "./styles";

type Props = {
  progress: string;
};

const ProgressBar = ({ progress = "20%" }: Props) => {
  return <Container progress={progress} />;
};

export default ProgressBar;
