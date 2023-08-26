import { DataItemsProp } from "../models/dataModel";
import { ResultModelProp } from "../models/resultModel";
import { Table } from "../components/table";
import {
  calculateMean,
  calculateMedian,
  calculateMode
} from "../utils/util-fuctions";

export function GammaStats({ data }: { data: DataItemsProp[] }) {
  const classes: Record<string, number[]> = {};

  data.forEach((item) => {
    const classNum = item.Alcohol;

    const gamma = (+item.Ash * +item.Hue) / +item.Magnesium;
    if (!classes[classNum]) {
      classes[classNum] = [];
    }
    classes[classNum].push(gamma);
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
      <h2>Gamma</h2>
      <Table data={result} />
    </div>
  );
}
