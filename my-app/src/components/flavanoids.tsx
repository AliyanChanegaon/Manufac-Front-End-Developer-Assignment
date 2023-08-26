import { DataItemsProp } from "../models/dataModel";
import { ResultModelProp } from "../models/resultModel";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils/util-fuctions";

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
       Mode: calculateMode(classData),
    };
  }

  return (
    <div>
      <h2>Flavanoids</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(result).map((classNum) => (
              <th key={classNum}>Class {classNum}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {Object.keys(result).map((classNum) => (
              <td key={classNum}>{result[classNum].Mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Median</td>
            {Object.keys(result).map((classNum) => (
              <td key={classNum}>{result[classNum].Median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Mode</td>
            {Object.keys(result).map((classNum) => (
              <td key={classNum}>{result[classNum]?.Mode?.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Flavanoids;
