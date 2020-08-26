const getBirthday = () => {
  const birthDay = new Date("1998/06/24");
  const ageDif = Date.now() - birthDay.getTime();
  const ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const skills = [
  { name: "HTML", color: "cyan" },
  { name: "CSS", color: "rgb(251, 221, 98)" },
  { name: "JAVASCRIPT", color: "rgb(255, 83, 128)" },
  { name: "REDUX", color: "#ff7200" },
  { name: "REACT", color: "rgba(255, 83, 83, 0.66)" },
  { name: "REACT NATIVE", color: "#26d3b0" },
  { name: "GRAPHQL", color: "#bababa" },
  { name: "NODEJS", color: "rgb(195, 84, 229)" },
  { name: "TYPESCRIPT", color: "#28e0fc" },
  { name: "GATSBY", color: "#e2d09e" },
  { name: "EXPRESS", color: "rgb(11, 206, 175)" },
  { name: "GIT", color: "#37bf7f" },
];

export const stuffAboutMe = [
  {
    label: "Name",
    value: "Simon Sisay",
  },
  {
    label: "Degree",
    value: "Software Engineering BSc (2021)",
  },
  {
    label: "Age",
    value: getBirthday(),
  },

  {
    label: "Professional Experience",
    value: "2 years",
  },
  {
    label: "Work",
    value: "Alama.co",
    isLink: true,
  },
  {
    label: "City",
    value: "Addis Ababa, Ethiopia",
  },

  {
    label: "Phone",
    value: "+251911056281",
  },

  {
    label: "Email",
    value: "Simon@alama.co",
  },
];
