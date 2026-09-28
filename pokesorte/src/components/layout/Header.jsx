import './Header.css';
import logoPokeSorte from '../assets/logo-pokesorte.png';

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

    if (nome === 'favoritos') {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return null;
}

function Header({ telaAtual, onNavigate }) {
    const opcoes = [
        {
            id: 'home',
            nome: 'Início',
            icone: 'home'
        },
        {
            id: 'album',
            nome: 'Álbum',
            icone: 'album'
        },
        {
            id: 'sortear',
            nome: 'Sortear',
            icone: 'sortear'
        },
        {
            id: 'favoritos',
            nome: 'Favoritos',
            icone: 'favoritos'
        }
    ];

    const opcoesVisiveis = opcoes.filter(
        (opcao) => opcao.id !== telaAtual
    );

    return (
        <header className="header">
            <button
                className="header__logo"
                onClick={() => onNavigate('home')}
                aria-label="Ir para a página inicial"
            >
                <img
                    src={logoPokeSorte}
                    alt="PokeSorte"
                />
            </button>

            <nav
                className="header__nav"
                aria-label="Navegação principal"
            >
                {opcoesVisiveis.map((opcao) => (
                    <button
                        key={opcao.id}
                        type="button"
                        onClick={() => onNavigate(opcao.id)}
                        className="header__link"
                    >
                        <span className="header__icon">
                            <Icon nome={opcao.icone} />
                        </span>

                        <span>{opcao.nome}</span>
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default Header;