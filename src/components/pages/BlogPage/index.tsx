import React from "react";
import { Container } from "./styled";
import Title from "../../Title";

const BlogPage = () => {
  return (
    <Container>
      <Title>Blog</Title>
      <div className="content">
        {/* <h1 className="light-header">Nothing to read yet!</h1> */}
        <span className="coming-soon">
          <h1>Coming Soon</h1>
        </span>
      </div>
    </Container>
  );
};

export default BlogPage;
