import Link from 'next/link';
import Header from '../components/Header'

function Matricula() {
    return (
        <div>
        <Header />
        <Link href="/">
        <a style={{display:'table',margin:'auto',marginTop:'20px',background:'white',padding:'10px 22px',textDecoration:'none',borderRadius:'6px',color:'#000',filter:'drop-shadow(1px 1px 2px black'}} className='linkTOP'>Voltar ao Inicio</a>
        </Link>

        <div className="div-matricula">
            <form style={{padding:'30px'}}>

                
                <label>Nome Completo: </label><br />
                <input name="nome" size="44" type="text" style={{marginBottom:'8px'}}/>

                <label>E-mail: </label>
                <input name="email" size="36" type="text" style={{marginBottom:'8px'}}/>

                <label>Endereço: </label><br />
                <input name="nome" size="44" type="text" style={{marginBottom:'8px'}}/>

                <label>Número: </label>
                <input name="nome" size="4" type="text" style={{marginBottom:'8px'}}/>

                <label>Bairro: </label>
                <input name="nome" size="8" type="text" style={{marginBottom:'8px'}}/><br />

                <label>Cidade: </label>
                <input name="nome" size="24" type="text" style={{marginBottom:'8px'}}/><br /><br />

                <button type='submit'>Enviar</button>

            </form>
        </div>
        </div>
    )
}

export default Matricula