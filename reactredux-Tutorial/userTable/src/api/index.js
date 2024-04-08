import Chance from "chance";

const chance = Chance();

const fakeuserData = () => {
  return chance.name({ middle: true });
};

export default fakeuserData;
