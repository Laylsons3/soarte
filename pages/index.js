// bg       fafafa
// verde    3db868
// azul     3380ce
// laranja  e69444
// gold     ffd700
function Home() {
    return (
<div>
<title>Soarte</title>


<header>
    <section className="animation">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.
    </section>
    <section className="cabecalho">
        <div className="menu-e-logo">
            <div>
                <label><a className="menu-nav" href="/">Inicio</a></label>
                <label><a className="menu-nav" href="#galeria">Galeria</a></label>
                <label><a className="menu-nav" href="#quem-somos">Quem Somos</a></label>
                <label><a className="menu-nav" href="#cursos">Cursos</a></label>
                <label><a className="menu-nav" href="#apoie">Apoie</a></label>
                <label><a className="menu-nav" href="#contato">Contato</a></label>
            </div>
            <div>
                <img className="logo" src='/images/logo-soarte.svg' alt="Logo Soarte"/>
            </div>
        </div>
    </section>
</header>

<main>
    <section className="galeria" id="galeria">
            <h1>Galeria</h1>
            <img className="foto-galeria" src='/images/paulo.jpg' alt="Professor Paulo Ferreira"/>
            <img className="foto-galeria" src='/images/luciano.jpg' alt="Professor Luciano Pereira"/>
            <img className="foto-galeria" src='/images/manoel.jpg' alt="Professor Manoel Teodósio"/>
                <br />
            <a className="button-galeria" href="#">Ver mais...</a>
    </section>

    <section className="quem-somos" id="quem-somos">
        <h1>
            Quem somos
        </h1>
        <p className="texto-quem-somos">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even 
        slightly believable. If you are going to use a passage of 
        Lorem Ipsum, you need to be sure there isn't anything 
        embarrassing hidden in the middle of text. All the Lorem
        Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator
        on the Internet. It uses a dictionary of over 200 Latin
        words, combined with a handful of model sentence structures,
        to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum.
        </p>
    </section>
    <section className="cursos" id="cursos">
            <h1>Cursos</h1>
            <label><a href="#"><img className="button-curso" src="/images/flute.png" alt="Flauta Doce" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/transverse-flute.png" alt="Flauta Transversal" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/clarinet.png" alt="Clarinete" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/guitar.png" alt="Violão" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/sax.png" alt="Saxofone" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/trumpet.png" alt="Metais" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/voice.png" alt="Canto" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/drum.png" alt="Percussão" /></a></label>
            <label><a href="#"><img className="button-curso" src="/images/pc.png" alt="Informática" /></a></label>
    </section>
    <section className="apoie" id="apoie">
            <h1>Apoie</h1>
            <a className="button-apoie" href="https://apoia.se/soarte" target="_BLANK">APOIE!</a>
            <p style={{fontSize:'14pt'}}>Nos ajude a continuar <span style={{fontWeight:'900'}}>transformando vidas</span> através da <span style={{fontWeight:'900'}}>arte!</span></p>
    </section>
    <section className="contato" id="contato">
            <div style={{width:'320px', margin:'auto'}}>
                <h2 style={{paddingBottom:'15px'}}>
                    Endereço da Soarte
                </h2>
                <p>
                    Rua Antonio Luiz de Sousa, 560 - Monguba - Pacatuba-CE - CEP 61.805-770<br />
                    E-mail: soartemusica@gmail.com<br />
                    CNPJ: 10.967.869/0001-63<br />
                    Telefone: (85) 9 9129-2607
                </p>
            </div>
            <div className="form-contato">
                    <h1>Contato</h1>
                <form style={{width:'350px',margin:'auto'}} autoComplete="on">
                    <label>Nome: </label>
                    <input name="nome" type="text" size="30" /><br />
                    <label>E-mail: </label>
                    <input name="email" type="text" size="30" /><br />
                    <label>Mensagem: </label><br />
                    <textarea name="message" rows="4" cols="38" /><br />
                    <input type="submit"></input>
                </form>
            </div>
    </section>
</main>
<footer>
        <h1 style={{textAlign:'center',}}></h1>
</footer>
</div>
    )
}

export default Home