const careerStartDate = new Date('10/30/2012');

const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

// get (roughly) the amount of years since I first got paid to write code
export const yearsExperience = () =>
  Math.floor((new Date().getTime() - careerStartDate.getTime()) / YEAR_MS);
