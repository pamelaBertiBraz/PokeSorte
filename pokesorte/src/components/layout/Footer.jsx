import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <p>
                        &copy; 2026 <strong>PokeSorte</strong>.
                    </p>
                </div>

                <div className="footer__authors">
                    <p>
                        Desenvolvido por:{' '}
                        <span>Josiane Batista</span>,{' '}
                        <span>Letícia Bento</span> e{' '}
                        <span>Pamela Berti</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;