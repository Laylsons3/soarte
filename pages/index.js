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
        <Header />

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