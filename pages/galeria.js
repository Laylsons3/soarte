import Link from 'next/link';
import Head from 'next/dist/shared/lib/head';
import Header from '../components/Header'

function Galeria() {
    return (
        <div>
            
            <Head>
            <title>Soarte</title>
            <link rel="icon" type="image/x-icon" href="/images/logo-soarte.ico"/>
            <meta name="description" content="Centro Cultural Sons da Aratanha, Sociedade dos artistas e estudantes de Pacatuba, Escola de Música" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

                <Header />

            <main>
                <span>Galeria em construção</span><br />
                    <Link href="/">
                        <a className="button-ver-mais-galeria">Voltar</a>
                    </Link>
            </main>

        </div>
    )
}

export default Galeria