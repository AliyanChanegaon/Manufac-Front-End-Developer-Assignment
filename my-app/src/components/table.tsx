import { ResultModelProp } from "../models/resultModel";

export const Table = ({ data }: { data: ResultModelProp }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(data).map((classNum) => (
            <th key={classNum}>Class {classNum}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mean</td>
          {Object.keys(data).map((classNum) => (
            <td key={classNum}>{data[classNum].Mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Median</td>
          {Object.keys(data).map((classNum) => (
            <td key={classNum}>{data[classNum].Median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Mode</td>
          {Object.keys(data).map((classNum) => {
           

            return (
              <td key={classNum}>
                {data[classNum].Mode === 0 ? 0 : data[classNum].Mode.toFixed(3)}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};
