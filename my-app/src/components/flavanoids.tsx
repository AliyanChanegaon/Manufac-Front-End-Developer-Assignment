import { DataItemsProp } from "../models/dataModel";

const Flavanoids = ({ data }: { data: DataItemsProp[] }) => {
  const classes: Record<string, number[]> = {};

  data.forEach((item) => {
    const classNo = item.Alcohol;
    if (!classes.classNo) {
      classes[classNo] = [];
    }

    if (typeof item.Flavanoids === "string") {
      classes[classNo].push(parseFloat(item.Flavanoids));
    } else {
      classes[classNo].push(item.Flavanoids);
    }
  });

  return (
    <div>
      <h2>Flavanoids</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
          </tr>
          <tr>
            <td>Median</td>
          </tr>
          <tr>
            <td>Mode</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Flavanoids;
