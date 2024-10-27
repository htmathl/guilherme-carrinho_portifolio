import './homePage.css';
import naturezaMortaGif from '../../assets/O_Conto_de_um_termino_Natureza_Morta_.gif';

function HomePage() {
    return (
        <>
            <div id="titulo">
                <div className='links'>
                    <a href="http://" id='about'>About</a>
                </div>
                <div>
                    <h1>Guilherme Carrinho</h1>
                    <div className='buttons'>
                        <button className="sect">Videos</button>
                        <button className="sect">Photograph</button>
                        <button className="sect">Motion</button>
                    </div>
                    <div>
                        <img height={200} src={naturezaMortaGif} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;