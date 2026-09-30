import './Header.css';
import logoPokeSorte from '../../assets/logo-pokesorte.png';
import { NavLink, useLocation } from 'react-router-dom';

function Icon({ nome }) {
    if (nome === 'home') {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M3 10.5L12 3l9 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.5 9.5V21h13V9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.5 21v-6h5v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (nome === 'album') {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M5 4.5h11a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3V4.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 20V7.5a3 3 0 0 1 3-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M12 9h4M12 12h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (nome === 'sortear') {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M4 7h3.5c4 0 5 10 9 10H20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M17 14l3 3-3 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 17h3.5c1.4 0 2.3-1.1 3.1-2.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M13 9.4C13.8 8.1 14.7 7 16 7h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M17 4l3 3-3 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return null;
}

function Header() {
    const location = useLocation();

    const opcoes = [
        {
            caminho: '/',
            nome: 'Início',
            icone: 'home'
        },
        {
            caminho: '/album',
            nome: 'Álbum',
            icone: 'album'
        },
        {
            caminho: '/sortear',
            nome: 'Sortear',
            icone: 'sortear'
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
                {opcoesVisiveis.map((opcao) => (
                    <NavLink
                        key={opcao.caminho}
                        to={opcao.caminho}
                        className="header__link"
                    >
                        <span className="header__icon">
                            <Icon nome={opcao.icone} />
                        </span>

                        <span>{opcao.nome}</span>
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;