import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Media() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
    return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
  }
export default Media;