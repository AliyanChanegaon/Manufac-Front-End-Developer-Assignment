import { DataItemsProp } from "../models/dataModel";
import { ResultModelProp } from "../models/resultModel";
import {
  calculateMean,
  calculateMedian,
  calculateMode
} from "../utils/util-fuctions";
import { Table } from "./table";

const Flavanoids = ({ data }: { data: DataItemsProp[] }) => {
  const classes: Record<string, number[]> = {};

  data.forEach((item) => {
    const classNo = item.Alcohol;

    if (!classes[classNo]) {
      classes[classNo] = [];
    }

    classes[classNo].push(+item.Flavanoids);
  });

  const result: ResultModelProp = {};
  for (const classNum in classes) {
    const classData = classes[classNum];

    result[classNum] = {
      Mean: calculateMean(classData),
      Median: calculateMedian(classData),
      Mode: calculateMode(classData)
    };
  }

  return (
    <div>
      <h2>Flavanoids</h2>
      <Table data={result} />
    </div>
  );
};

export default Flavanoids;
