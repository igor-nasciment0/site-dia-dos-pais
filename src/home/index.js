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

            <section className="sec-texto"> 
                <h2>(e brá brá brá)</h2>
                <p>Pai, </p> 
                <p>É realmente difícil encontrar palavras para descrever quem você é e o quanto é querido. Na dúvida, pensei em usar o site “Pergunte ao pai”, mas infelizmente ele ainda não foi ao ar.</p>
                <p>Pensei em falar das suas linguagens de amor: passar tempo com a gente, criar piadas internas, abraçar e beijar (com cuidado com o ouvido), ter conversas sérias, levar sempre algo para comer quando voltamos de longe, nos procurar pela casa a cada 10 minutos sem nos ver, assistir qualquer desenho bobo com a gente, dizer que nos ama... Se pararmos para pensar, as 5 linguagens (presentes, tempo de qualidade, toques físicos, palavras de afirmação e atos de serviço) parecem poucas para representar as tantas formas que você demostra nos amar.</p>
                <p>Queremos te agradecer por todo esse cuidado. Sem isso, com certeza seríamos pessoas muito diferentes – sem dúvida, menos felizes. Assim, nós de fato temos sorte em ter você (só não tanto quanto você de ter a gente). Ser presente resume demais o que você é para nós: um amigo de verdade.</p>
                <p>Não vou me alongar muito, pois o pobre pai precisa descansar. Nunca se esqueça, seus filhos te amam e eles tratariam 10 pais enquanto você não trata 2 filhos. ❤️</p>
                <h3>Mari</h3>
            </section>
            
            <section className="sec-video">
                <iframe height="315" src="https://www.youtube.com/embed/Hzclx0g3_BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" />
            </section>

            <section className="sec-fotos">
                <div className="container-fotos">
                    <div>
                        <img src="/assets/images/secao-fotos/casamento.jpg" alt="" />
                        <h4>Em 2001, o Pai e a Mãe se casaram</h4>
                    </div>

                    <div>
                        <img src="/assets/images/secao-fotos/mari.jpg" alt="" />
                        <h4>A Mari sempre consegue tirar umas fotos bem bonitas</h4>
                    </div>

                    <div>
                        <img src="/assets/images/secao-fotos/mata_redonda.jpg" alt="" />
                        <h4>Já a mãe, nem sempre.</h4>
                    </div>

                    <div>
                        <img src="/assets/images/secao-fotos/irmaos.jpg" alt="" />
                        <h4>No ano passado, os irmãos fizeram uma das raras reuniões.</h4>
                    </div>

                    <div>
                        <img src="/assets/images/secao-fotos/triunfo.jpg" alt="" />
                        <h4>O Pai em Triunfo.<br/>Um dia, ele ainda vai morar por lá de novo.</h4>
                    </div>
                </div>
            </section>

            <footer>
                <h1>Pai... <br/> Obrigado por ser o Pai!</h1>
            </footer>
        </div>
    )
}