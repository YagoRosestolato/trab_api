import React from 'react';

import { Filme, Subtitle, Rodape, Info } from './styles';

const Filmes: React.FC = () => {
    return (
        <Filme>
            <div><img src="https://www.homemexpresso.com.br/wp-content/uploads/2009/09/clube-da-luta1.jpg" alt="Capa do Filme" /></div>
            <Info>
                <h1>
                    <a href="/">Home</a> 
                    Dia de Treinamento
                </h1>
                <Subtitle>Sinopse: 
                    O filme segue um único dia na vida de um jovem policial 
                    do departamento de narcóticos da polícia de Los Angeles,
                     chamado Jake Hoyt.
                    O sonho de Jake Hoyt era entrar na equipe de narcóticos
                     da polícia local. Mas, quando ele finalmente consegue 
                     este posto, recebe como oficial de treinamento e 
                     parceiro Alonzo Harris, um policial veterano e 
                     corrupto. Sua metodologia de trabalho é questionada 
                     por se manter num limite no qual se confundem 
                     legalidade e corrupção. Seu otimismo já foi desgastado 
                     pela rotina nas ruas: lutar contra o crime de acordo 
                     com o regulamento pode matá-lo e, para cumprir o 
                     serviço, Alonzo e seus colegas precisam infringir a 
                     mesma lei que eles têm o poder de impor. Com o 
                     passar do dia, o jovem policial é exposto à corrupção
                    existente, é obrigado a usar PCP e é ainda 
                    acusado de assassinato.
                </Subtitle>
                <Rodape>
                    <p>Diretor: David Fincher</p>
                    <p>Produtor: Art Linson</p>
                    <p>Data Lançamento: 29 de outubro de 1999</p>
                </Rodape>
            </Info>
        </Filme>
    )
};

export default Filmes;