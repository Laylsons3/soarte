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
                <label><a className="menu-nav" href="#">Galeria</a></label>
                <label><a className="menu-nav" href="#">Quem Somos</a></label>
                <label><a className="menu-nav" href="#">Cursos</a></label>
                <label><a className="menu-nav" href="#">Apoie</a></label>
                <label><a className="menu-nav" href="#">Contato</a></label>
            </div>
            <div>
                <img className="logo" src='/images/logo-soarte.svg' alt="Logo Soarte"/>
            </div>
        </div>
    </section>
</header>

<main>
    <section className="galeria">
            <h1>Galeria</h1>
            <img className="foto-galeria" src='/images/paulo.png' alt="Professor Paulo Ferreira"/>
            <img className="foto-galeria" src='/images/luciano.png' alt="Professor Luciano Pereira"/>
            <img className="foto-galeria" src='/images/manoel.png' alt="Professor Manoel Teodósio"/>

    </section>
</main>


</div>
    )
}

export default Home