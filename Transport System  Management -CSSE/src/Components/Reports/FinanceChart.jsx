import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Typography from '@material-ui/core/Typography';
import {green, red, orange, blue, blueGrey, yellow} from "@material-ui/core/colors";



const FinanceChart = () => {
  
    // Sample data
    const data = [
      { argument: 'Kandy', value: 738798 },
      { argument: 'Kegalle', value: 430398 },
      { argument: 'Kurunegala', value: 230852 },
      { argument: 'Galle', value: 1023430 },
      { argument: 'Lewella', value: 22964 },
    ];
    return (
        <Paper    elevation={5} >
            <Typography style={{marginBottom : "0px"}} variant={"h5"} color={"textSecondary"} align={"center"}>
                            Finance Incomes
                        </Typography>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />
      
          <BarSeries valueField="value" argumentField="argument" />
        </Chart>
        </Paper>
);
}
  
export default FinanceChart;