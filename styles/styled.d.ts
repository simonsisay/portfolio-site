import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    background1: string;
    textColor: string;
    gray1: string;
    black20: string;
    background2: string;
    lightText: string;
  }
}
