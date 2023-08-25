import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    chartContainer: {
      width: '100%',
      height: '400px',
    },
  })
);

export default useStyles;