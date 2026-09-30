import './Header.css';
import logoPokeSorte from '../../assets/logo-pokesorte.png';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CasinoIcon from '@mui/icons-material/Casino';

function Header() {
    const location = useLocation();

    const opcoes = [
        {
            caminho: '/',
            nome: 'Início',
            icone: HomeIcon
        },
        {
            caminho: '/album',
            nome: 'Álbum',
            icone: MenuBookIcon
        },
        {
            caminho: '/sortear',
            nome: 'Sortear',
            icone: CasinoIcon
        }
    ];

    const opcoesVisiveis = opcoes.filter(
        (opcao) => opcao.caminho !== location.pathname
    );

    return (
        <header className="header">
            <NavLink
                to="/"
                className="header__logo"
                aria-label="Ir para a página inicial"
            >
                <img
                    src={logoPokeSorte}
                    alt="PokeSorte"
                />
            </NavLink>

            <nav
                className="header__nav"
                aria-label="Navegação principal"
            >
                {opcoesVisiveis.map((opcao) => {
                    const Icone = opcao.icone;

                    return (
                        <NavLink
                            key={opcao.caminho}
                            to={opcao.caminho}
                            className="header__link"
                        >
                            <span className="header__icon">
                                <Icone aria-hidden="true" />
                            </span>

                            <span>{opcao.nome}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
}

export default Header;