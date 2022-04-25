// bg       fafafa
// verde    3db868
// azul     3380ce
// laranja  e69444
// gold     ffd700
import Link from 'next/link';
import Galeria from '../components/Galeria'
import Cursos from '../components/Cursos.js'
import QuemSomos from '../components/QuemSomos.js'
import Apoie from '../components/Apoie.js'
import Contato from '../components/Contato.js'
import Footer from '../components/Footer.js'

function Home() {
    return (
<div>
    
<title>Soarte</title>


<header>
    <section className="cabecalho">
        <div className="menu-e-logo">
            <div>
                <img className="logo" src='/images/logo-soarte.svg' alt="Logo Soarte"/>
            </div>
        </div>
        <div>
            <Link href="/matricula">
            <a style={{display:'table',margin:'auto',background:'orange',padding:'10px 22px',textDecoration:'none',borderRadius:'6px',color:'#000',filter:'drop-shadow(1px 1px 2px black'}} >MATRÍCULA</a>
            </Link>
        </div>
    </section>
</header>

<main>
        <Galeria />
        <QuemSomos />
        <Cursos />
        <Apoie />
        <Contato />
</main>
<Footer />
</div>
    )
}

export default Home