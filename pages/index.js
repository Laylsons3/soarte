//Background #eee
//Texto #222
//Botão laranja rgb(255,165,0)
//Botão verde rgb(0,128,0)

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

        <Header> <ButtonMatricula /> </Header>

    <main>

        <Galeria />
        <QuemSomos />
        <img style={{width:'100%'}} src='images/bg-insta.png' />
        <Cursos />
        <Apoie />
        <Contato />
        <Footer />

    </main>


v1.3
</div>
    )
}

export default Home