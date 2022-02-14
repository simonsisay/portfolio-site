import { Tech as Container } from "./styles";

const stack = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "react native",
  "gatsby",
  "NodeJs",
  "graphql",
  "nextjs",
  "python",
];

const Tech = () => {
  return (
    <Container id="tech">
      <h1 className="header title">Technologies I work with</h1>
      <div className="tech-list">
        {stack.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>
    </Container>
  );
};

export default Tech;
