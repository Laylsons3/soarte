import Head from 'next/head'
import Header from '../components/Header.js'
import Galeria from '../components/Galeria.js'
import Cursos from '../components/Cursos.js'
import QuemSomos from '../components/QuemSomos.js'
import Apoie from '../components/Apoie.js'
import Contato from '../components/Contato.js'
import Footer from '../components/Footer.js'
import ButtonMatricula from '../components/ButtonMatricula'


function Home() {
    return (
<div>   
        <Head>
            <title>Soarte</title>
            <link rel="icon" type="image/x-icon" href="/images/logo-soarte.ico"/>
            <meta name="description" content="Centro Cultural Sons da Aratanha, Sociedade dos artistas e estudantes de Pacatuba, Escola de Música" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header />
        <ButtonMatricula />
<main>
<Cursos />
<Galeria />
<QuemSomos />
<Apoie />
<Contato />
</main>
<Footer />
</div>
    )
}

export default Home