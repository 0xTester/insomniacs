import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#282c34",
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    backgroundColor: '#000',
    overflow: 'hidden',
    lineHeight: 1,
  },
  paper: {
    margin: theme.spacing(1),
  },
  gridContainer: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
    paddingBottom: 0,
  },
  salesSection: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
    paddingLeft: 0,
    paddingRight: 0,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  salesCard: {
    borderRadius: `18px !important`,
    padding: theme.spacing(3),
    border: '2px solid #ccc !important'
  },
  perBotero: {
    marginTop: 48,
  },
  faqCard: {
    padding: '1rem',
    marginBottom: '1rem'
  },
  footer: {
    textAlign: 'center'
  },
  address: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  }
}));

export default useStyles;
