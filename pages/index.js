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
import DivInsta from '../components/DivInsta'


function Home() {
    return (
<div>   
        <Head>
            <title>Soarte</title>
            <link rel="icon" type="image/x-icon" href="/images/logo-soarte.ico"/>
            <meta name="description" content="Centro Cultural Sons da Aratanha, Sociedade dos artistas e estudantes de Pacatuba, Escola de Música" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <div> </div>
        </Head>

        <Header>  </Header>

    <main>

        <Galeria />
        <QuemSomos />
        <DivInsta />
        <Cursos /> 
        <Apoie />
        <Contato />
        <Footer />

    </main>

<p style={{textAlign:'center',margin:'25px'}}>&copy; Soarte 2022 - Todos os direitos reservados - v1.3.3</p>
</div>
    )
}

export default Home