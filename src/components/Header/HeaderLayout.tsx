import { AppBar, Toolbar, Typography} from '@material-ui/core';

interface IProps {
  user: {
    name: string,
    email: string,
    id: number
  } | null,
}

const HeaderLayout: React.FunctionComponent <IProps> = props => {

  return (
        <AppBar position="static"> 
          <Toolbar>
            <Typography variant="h6">
              {props.user ? `Hello ${props.user.name}` : "Login page"}
            </Typography>
          </Toolbar>
        </AppBar> 
  );
}

export default HeaderLayout;