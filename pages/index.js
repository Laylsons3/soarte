//Background #eee
//Texto #222
//Botão laranja rgb(255,165,0)
//Botão verde rgb(0,128,0)

import Head from 'next/head'
import Header from '../components/Header'
import Galeria from '../components/Galeria'
import Cursos from '../components/Cursos'
import QuemSomos from '../components/QuemSomos'
import Apoie from '../components/Apoie'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import DivInsta from '../components/DivInsta'
import ButtonMatricula from '../components/ButtonMatricula'


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
        <div className="buttonMatricula">
            <ButtonMatricula />
        </div>
            
        <Galeria />
        <QuemSomos />
        <DivInsta />
        <Cursos /> 
        <Apoie />
        <Contato />
        
        <Footer />

    </main>

    <p style={{textAlign:'center',margin:'25px'}}>&copy; Soarte 2022 - Todos os direitos reservados<br /> v1.4.1 </p>
    </div>
    )
}



export default Home