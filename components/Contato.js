function Home() {
    return (
<div>

<section className="contato" id="contato">
            <div className="form-contato">
                    <h1>Contato</h1>
                <form style={{width:'350px',margin:'auto'}} autoComplete="on">
                    <label>Nome: </label>
                    <input name="nome" type="text" size="30" /><br />
                    <label>E-mail: </label>
                    <input name="email" type="text" size="30" /><br />
                    <label>Mensagem: </label><br />
                    <textarea name="message" rows="4" cols="38" /><br />
                    <input style={{background:'green',padding:'6px 20px',fontSize:'14pt',fontWeight:'700',color:'#fff',}} type="submit"></input>
                </form>
            </div>
    </section>

</div>
    )
}

export default Home