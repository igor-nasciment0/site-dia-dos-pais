import Cabecalho from "../components/cabecalho";
import './index.scss';

export default function Home() {
    return (
        <div className="pagina-pai">
            <section className="sec-inicio">
                <Cabecalho />

                <img src="/assets/images/selfiePai.jpg" alt="" />

                <div>
                    <h1>Feliz Dia dos Pais!</h1>
                </div>
            </section>

            <section className="sec-video">
                <h2></h2>
            </section>
        </div>
    )
}