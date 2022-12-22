import './Header.css';
import logo from '../../assets/img/rentcar-white.png';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <img className='rentcar' src={logo} alt="Logo Rentcar" />
            </div>
            <div className='other-pages'>
                <p className='links'>Saiba Mais</p>
                <p className='links'>Perguntas</p>
                <p className='links'>Blog</p>
            </div>
            <div className='language'>
                <LanguageOutlinedIcon fontSize='small' />
                <p className='pt'>PT</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='sign-up'>
                <p className='sign-up-button'>Criar conta</p>
            </div>
        </div>
    )
}

export default Header;