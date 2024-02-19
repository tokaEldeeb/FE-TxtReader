import { Button } from '../../assets/button/button';
import './style.css';
import RefreshIcon from '@mui/icons-material/Refresh';

const Header = (props: {onReset: () => void}) => {
  return (
    <header>
      <div className="header-item">
        <img src="logo.png" alt="logo" className='logo' />
        <h3>WORDS GENERATOR!</h3>
      </div>
      <div className="header-item">
        <Button onClick={props.onReset}><><RefreshIcon style={{ verticalAlign: '-0.6em' }} /> <span id='reset'>Reset</span></></Button>
      </div>
    </header>
  );
}

export default Header;
