import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IProps {
  procent: number;
  title: any;
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; title: any }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: "2px 0" }}>
      <Box sx={{ minWidth: 35, width: "40%" }}>
        <Typography
          variant="body2"
          color="white"
          style={{ padding: "0 5px", margin: "0 10px" }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} color="primary" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({ procent, title }: IProps) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= procent ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} title={title} />
    </Box>
  );
}
