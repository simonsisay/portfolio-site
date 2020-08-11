import React from "react";
import CSS from "csstype";
import { default as GatsbyImage } from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from "gatsby";

type Props = {
  filename: string;
  style?: CSS;
  alt: string;
  className?: string;
};

const Image = ({ className, filename, style, alt }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(file => {
          return file.node.fluid.src.includes(filename);
        }).node.fluid;

        if (!image) {
          return null;
        }

        return (
          <GatsbyImage
            className={className}
            alt={alt}
            fluid={image}
            style={style}
          />
        );
      }}
    />
  );
};

export default Image;
