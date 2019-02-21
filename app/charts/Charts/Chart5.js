import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryStack,
  VictoryArea
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart5 extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  getData() {
    return _.times(7, () => {
      return [
        { x: 1, y: _.random(1, 5) },
        { x: 2, y: _.random(1, 10) },
        { x: 3, y: _.random(2, 10) },
        { x: 4, y: _.random(2, 10) },
        { x: 5, y: _.random(2, 15) }
      ];
    });
  }

  renderChart(width, height) {
    return (
      <VictoryChart
        width={width}
        height={height}
        containerComponent={<VictoryVoronoiContainer responsive={false} />}
        theme={theme({
          withGrid: true,
          withDarkGrid: true,
          withAxis: true,
          withArea: true
        })}
      >
        <VictoryStack colorScale={"blue"}>
          {_.map(this.getData(), (data, i) => (
            <VictoryArea key={i} data={data} interpolation={"basis"} />
          ))}
        </VictoryStack>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    );
  }

  render() {
    return (
      <Paper className={this.props.className}>
        <AutoSizer disableHeight>
          {({ width }) => !!width && this.renderChart(width, 0.8 * width)}
        </AutoSizer>
      </Paper>
    );
  }
}

export default Chart5;
