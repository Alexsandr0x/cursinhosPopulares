/**
 * Created by alexsandro on 18/01/17.
 */

var map;

var data = [
    {
        "nome": "Cursinho Arcadas - Direito SanFran",
        "Endereco": "Largo São Francisco, 95 - Centro, São Paulo - SP, 01005-010",
        "regiao": "SÉ, CENTRO - SP",
        "Site": "http://arcadasvestibulares.com.br/",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5498431,
        "Longitude": -46.6390025
    },
    {
        "nome": "Cursinho CAPJOVEM - FIA",
        "Endereco": "Rua Navarro de Andrade, 152 - Pinheiros, São Paulo - SP",
        "regiao": "PINHEIROS, OESTE - SP",
        "Site": "http://www3.fia.com.br/conhecafia/projetossociais/capjovem/Paginas/CapJovem.aspx",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5647271,
        "Longitude": -46.6908951
    },
    {
        "nome": "Cursinho Carolina de Jesus (Capão Redondo)",
        "Endereco": "EMEF Terezinha Mota Figueiredo - Rua Cantorias Paulistas, 20, Bairro do Mutirão",
        "regiao": "CAPÃO REDONDO, SUL -SP",
        "Site": "http://cursinhopopularcarolinadejesus.blogspot.com.br/",
        "facebook": "https://www.facebook.com/cursinho.popular.carolina.de.jesus/about/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "Telefone: 11-98661-9164 (Edson) / 11-96453-5827 (Larissa) / 11-98379-7377 e 11-99830-6509 (Lucas) / 11-98134-6144 (Jorge)",
        "E-mails": "cursinhopopularcarolinadejesus@gmail.com",
        "Latitude": -23.6804768,
        "Longitude": -46.7967849
    },
    {
        "nome": "Cursinho CASD - São José dos Campos",
        "Endereco": "Rua Tsunessaburo Makiguti, 139 - Floradas de São José - São José dos Campos - SP",
        "regiao": "SÃO JOSÉ DOS CAMPOS - SP",
        "Site": "http://www.casdvest.org.br/",
        "facebook": "https://www.facebook.com/casdvest/?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "Fone: (12) 3934-9386 / 3947-7847",
        "E-mails": "ensino@casdvest.org.br",
        "Latitude": -23.2212006,
        "Longitude": -45.888058
    },
    {
        "nome": "Cursinho CEC - UFSCAR SOROCABA",
        "Endereco": "Rodovia João Leme dos Santos, Km 110, SP-264, Itinga Sorocaba",
        "regiao": "SOROCABA - SP",
        "Site": "http://cursinhoeducacaoecidadania.blogspot.com.br/",
        "facebook": "https://www.facebook.com/CursinhoUFSCarSorocabaCEC/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "ufscar.cursinho@gmail.com",
        "Latitude": -23.5814302,
        "Longitude": -47.5265511
    },
    {
        "nome": "Cursinho Chico Mendes (Itapevi) (Rede Emancipa)",
        "Endereco": "CEMEB Tarsila do Amaral - Av. Rubens Caramez, 1.000, Vila Aurora (Itapevi)",
        "regiao": "ITAPEVI -SP",
        "Site": "http://cpchicomendes.wordpress.com",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "11-97469-7893 (Vanúsia) / 11-98137-9691 (Taline)",
        "E-mails": "cursinho.chicomendes@gmail.com",
        "Latitude": -23.5537647,
        "Longitude": -46.9383802
    },
    {
        "nome": "Cursinho Comuna - São Bernardo",
        "Endereco": "Avenida Bunduki, 352 São Bernardo do Campo – SP",
        "regiao": "SÃO BERNARDO DO CAMPO - SP",
        "Site": "www.cursinhocomuna.wix.com/site",
        "facebook": "https://www.facebook.com/CursinhoComuna/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 96787-2527",
        "E-mails": "",
        "Latitude": 23.7214058,
        "Longitude": -46.5764643
    },
    {
        "nome": "Cursinho comunitário dos Pimentas",
        "Endereco": "Rua do poente, 148 - Conjunto Marcos Freire - Guarulhos",
        "regiao": "GUARULHOS - SP",
        "Site": "http://cursinhopimentas.org.br/",
        "facebook": "https://www.facebook.com/cursinhocomunitariopimentascp",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 2484-5700",
        "E-mails": "",
        "Latitude": -23.4618133,
        "Longitude": -46.4070673
    },
    {
        "nome": "Cursinho Comunitário Prestes Vestibulares",
        "Endereco": "Avenida Brasil N°292, Cohab II, Carapicuiba",
        "regiao": "CARAPICUIBA - SP",
        "Site": "http://prestesvestibulares.blogspot.com.br/",
        "facebook": "https://www.facebook.com/PrestesVestibulares",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 4184-2212",
        "E-mails": "cursinho.prestesvestibulares@gmail.com",
        "Latitude": -23.5251915,
        "Longitude": -46.83251
    },
    {
        "nome": "Cursinho Comunitário Projeto Chance - Paraisópolis",
        "Endereco": "R Dr. José Carlos de Toledo Pisa S/N –Vila Andrade",
        "regiao": "VILA ANDRADE - ZONA OESTE - SP",
        "Site": "http://projetochanceparaisopolis.blogspot.com.br/2009/03/cnpj10_25.html",
        "facebook": "https://www.facebook.com/Projeto-Chance-289102257871728/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 2866 3441",
        "E-mails": "contato@projetochance.org.br",
        "Latitude": -23.6212555,
        "Longitude": -46.7332895
    },
    {
        "nome": "Cursinho CUJA - UNIFESP",
        "Endereco": "Rua Pedro de Toledo, 849 - Vila Clementino, São Paulo - SP, 04038-000",
        "regiao": "VILA CLEMENTINO, SUL -SP",
        "Site": "http://www.cujaunifesp.com/",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5982482,
        "Longitude": -46.6471833
    },
    {
        "nome": "Cursinho LA (Linguagem arquitetonica) - FAU",
        "Endereco": "R. do Lago, 876 - Butantã, SP",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "",
        "facebook": "https://www.facebook.com/cursinholar/about/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "cursinhola@gmail.com",
        "Latitude": -23.5609975,
        "Longitude": -46.7316717
    },
    {
        "nome": "Cursinho da FEA - USP",
        "Endereco": "Av. Professor Luciano Gualberto, 908, Cidade Universitária/Butantã (prédio FEA 5, sala 16)",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "http://www.cursinhofeausp.com.br/",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": 240,
        "Contatos": "11-3091-6491",
        "E-mails": "cursinhofeausp@gmail.com",
        "Latitude": -23.5578465,
        "Longitude": -46.7314789
    },
    {
        "nome": "Cursinho da FGV",
        "Endereco": "Rua Itapeva, 432, Bela Vista",
        "regiao": "BELA VISTA - SÃO PAULO - SP",
        "Site": "http://www.cursinhofgv.com/",
        "facebook": "https://www.facebook.com/cursinho.fgv",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "contato@cursinhofgv.com",
        "Latitude": -23.5598296,
        "Longitude": -46.6543002
    },
    {
        "nome": "Cursinho da Poli - USP",
        "Endereco": "Av. Professor Almeida Prado, 128 - Travessa 2 - Prédio do Biênio da Escola Politénica, dentro da Cidade Universitária",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "http://cursinhocpusp.wixsite.com/cpusp",
        "facebook": "https://www.facebook.com/cpusp/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "Tel: 011-3091-5777",
        "E-mails": "cursinho@gremio.poli.usp.br",
        "Latitude": -23.5562208,
        "Longitude": -46.7352907
    },
    {
        "nome": "Cursinho da Psicologia - USP",
        "Endereco": "Av. Professor Mello Moraes, 1721, Bloco B, sala 30. Instituto de Psicologia, Cidade Universitária, Cep: 05508-030",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "https://cursinhodapsico.milharal.org",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 98932-1414",
        "E-mails": "cursinhopsico.secretaria@gmail.com",
        "Latitude": -23.5555151,
        "Longitude": -46.7268551
    },
    {
        "nome": "Cursinho do CRUSP",
        "Endereco": "Avenida Professor Mello de Moraes, 1235 – térreo do bloco F, Sala 13",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "http://cursinhodocrusp.com.br/",
        "facebook": "https://www.facebook.com/CursinhoCRUSP/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "11 3091-3189",
        "E-mails": "",
        "Latitude": -23.5576996,
        "Longitude": -46.7211727
    },
    {
        "nome": "Cursinho do XI - Centro",
        "Endereco": "Avenida Brigadeiro Luís Antônio, 277 – 5º andar",
        "regiao": "BELA VISTA - SÃO PAULO - SP",
        "Site": "https://cursinhodonze.wordpress.com/curso-pre-vestibulinho/",
        "facebook": "https://www.facebook.com/Cursinho-do-XI-Oficial-148965861858273/?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 3107-6293 / 3101- 4583",
        "E-mails": "cd.xi@uol.com.br",
        "Latitude": -23.5530019,
        "Longitude": -46.6399615
    },
    {
        "nome": "Cursinho Edson Luiz (Butantã)",
        "Endereco": "Faculdade de Educação da USP (Feusp). Av. da Universidade, 308, Bloco B, Sala 106, Cidade Universitária/Butantã (a 20 minutos a pé do Metrô Butantã)",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "http://redeemancipa.org.br/2013/02/cursinho-popular-edson-luis/",
        "facebook": "https://www.facebook.com/cursinhoedsonluis/",
        "horario_das_aulas": "Segunda a sexta feira. Das 07:30 às 12:20.",
        "processo_seletivo": "Não há processo_seletivo, só inscrição por ordem de chegada",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5624911,
        "Longitude": -46.7175525
    },
    {
        "nome": "Cursinho EDUCAFRO",
        "Endereco": "",
        "regiao": "",
        "Site": "http://www.educafro.org.br/site/cursinho-educafro-modelo-preparatorio-para-usp-e-para-o-enem/",
        "facebook": "https://www.facebook.com/educafrobrasil/?ref=ts&fref=ts",
        "horario_das_aulas": "segunda a sexta.feira das 18:40 as 22:45",
        "processo_seletivo": "",
        "vagas": "50 vagas",
        "Contatos": "",
        "E-mails": "nucleos@educafro.org.br",
        "Latitude": "",
        "Longitude": ""
    },
    {
        "nome": "Cursinho EPUFABC (Santo André e Mauá)",
        "Endereco": "Avenida dos Estados, 5001. Bairro Bangu Santo André / R. Gen. Osório, 75 - Vila Bocaina, Mauá - SP, 09310-050",
        "regiao": "SANTO ANDRÉ e MAUÁ - SP",
        "Site": "http://proec.ufabc.edu.br/cursos/cursos-de-extensao/em-andamento/escola-preparatoria-da-ufabc",
        "facebook": "https://www.facebook.com/epufabc/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": 500,
        "Contatos": "(11) 4541-8289",
        "E-mails": "cursinhoepufabc@gmail.com",
        "Latitude": -23.6451326,
        "Longitude": -46.5301307
    },
    {
        "nome": "Cursinho Floristan Fernandes (Butantã)",
        "Endereco": "Avenida Professor Lineu Prestes, 338 (FFLCH /USP)",
        "regiao": "BUTANTÃ - ZONA OESTE - SP",
        "Site": "http://redeemancipa.org.br/2013/07/florestan-fernandes-butanta/",
        "facebook": "https://www.facebook.com/cursinhoflorestan",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 97545-9081",
        "E-mails": "redeemancipa@gmail.com",
        "Latitude": -23.5641921,
        "Longitude": -46.7251147
    },
    {
        "nome": "Cursinho Wladimir Herzog (Grajaú)",
        "Endereco": "Escola Estadual Professor Carlos Ayres, Avenida Dona Belmira Marin, 565; ao lado do Terminal Grajaú",
        "regiao": "GRAJAÚ - ZONA SUL - SP",
        "Site": "http://redeemancipa.org.br/rede-emancipa/grajau/",
        "facebook": "https://www.facebook.com/cursinho.grajau",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "11-99476-4770 (Idalício) / 11-95430-6043 (Ana Carolina) / 11-98823-4491 e 11-95458-5882 (Cibele)",
        "E-mails": "cpgrajau@gmail.com",
        "Latitude": -23.7361433,
        "Longitude": -46.6963857
    },
    {
        "nome": "Cursinho Laudelina (Ipiranga)",
        "Endereco": "EE A. Alcântara Machado. Rua Américo Ribeiro, 97, Alto do Ipiranga. Próximo ao metrô Alto do Ipiranga",
        "regiao": "IPIRANGA - ZONA SUL - SP",
        "Site": "http://redeemancipa.org.br/2013/02/cursinho-popular-laudelina/",
        "facebook": "https://www.facebook.com/cursinho.laudelina",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": 100,
        "Contatos": "Cesar 974 994 562 / Juliana 7746-2727 / Renato 996 566 567",
        "E-mails": "cursinholaudelina@gmail.com",
        "Latitude": -23.604315,
        "Longitude": -46.6187158
    },
    {
        "nome": "Cursinho Mafalda (Zona Leste)",
        "Endereco": "Rua José Fernandes Torres, 12 – Tatuapé – São Paulo/SP (Na Universidade Cidade de São Paulo – Unicid)",
        "regiao": "TATUAPÉ - SÃO PAULO - SP",
        "Site": "http://www.cursomafalda.com.br",
        "facebook": "https://www.facebook.com/CursinhoMafalda/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 9-8400-5780",
        "E-mails": "spleste@cursomafalda.com.br",
        "Latitude": -23.5359382,
        "Longitude": -46.5636717
    },
    {
        "nome": "Cursinho Mafalda (Zona SUL)",
        "Endereco": "Rua Joaquim Forzano, 50 – Cidade Ademar – São Paulo – SP (Na Casa de Cultura e Cidadania)",
        "regiao": "CIDADE ADEMAR - ZONA SUL - SP",
        "Site": "http://www.cursomafalda.com.br",
        "facebook": "https://www.facebook.com/CursinhoMafalda/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 5674-0920",
        "E-mails": "spsul@cursomafalda.com.br",
        "Latitude": -23.7049103,
        "Longitude": -46.6359788
    },
    {
        "nome": "Cursinho Mafalda (Ferraz de Vasconcelos)",
        "Endereco": "Rua Walter Souza Costa, 147 – Jd. Primavera – Ferraz de Vasconcelos/SP (Na EE Eliane Aparecida Dantas da Silva)",
        "regiao": "FERRAZ DE VACONCELOS - SP",
        "Site": "http://www.cursomafalda.com.br",
        "facebook": "https://www.facebook.com/CursinhoMafalda/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "ferraz@cursomafalda.com.br",
        "Latitude": -23.5497751,
        "Longitude": -46.3917568
    },
    {
        "nome": "Cursinho MedEnsina - FMUSP",
        "Endereco": "Faculdade de Medicina da USP Rua Dr. Arnaldo, 455 | Subsolo – Clínicas",
        "regiao": "CERQUEIRA CESAR - SÃO PAULO - SP",
        "Site": "http://medensina.com/",
        "facebook": "https://www.facebook.com/MedEnsina/?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 3061-9292",
        "E-mails": "medensina.fmusp@gmail.com",
        "Latitude": -23.5560871,
        "Longitude": -46.6767492
    },
    {
        "nome": "Cursinho Movimento Sem Universidade - MSU",
        "Endereco": "11 CEUs na capital: CEU Cidade Tiradentes, CEU Jambeiro, CEU Capão Redondo, CEU Campo Limpo, CEU Perus, CEU Azul da Cor do Mar, CEU São Miguel, CEU Sapopemba, CEU Jardim Paulistano, CEU Paraisópolis e CEU Cidade Dutra.",
        "regiao": "",
        "Site": "http://www.msu.org.br",
        "facebook": "https://www.facebook.com/movimentodossemuniversidade/about/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "msu@msu.org.br",
        "Latitude": "",
        "Longitude": ""
    },
    {
        "nome": "Cursinho NCN (Núcleo de Consciência Negra)",
        "Endereco": "Av. Lúcio Martins Rodrigues, Bloco 3, Travessa 4, Cidade Universitária/Butantã",
        "regiao": "BUTANTÃ, OESTE - SP",
        "Site": "http://www.ncn.org.br",
        "facebook": "",
        "horario_das_aulas": "Segunda a sexta, tarde e noite",
        "processo_seletivo": "Não há processo_seletivo, só matrícula",
        "vagas": 60,
        "Contatos": "(11) 3091-4291 (fixo) / (11) 95866-8863 (celular)",
        "E-mails": "nucleodeconsciencianegra@gmail.com",
        "Latitude": -23.5543423,
        "Longitude": -46.7276691
    },
    {
        "nome": "Cursinho Noctuam - Santo André",
        "Endereco": "Rua Oratório, 383 - Bangú, Santo André - SP",
        "regiao": "SANTO ANDRÉ - SP",
        "Site": "",
        "facebook": "https://www.facebook.com/noctuam.coSA?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 4996-4166/(11)4996-2883",
        "E-mails": "contato@noctuam.co",
        "Latitude": -23.6443382,
        "Longitude": -46.528479
    },
    {
        "nome": "Cursinho Popular ACEPUSP (Centro)",
        "Endereco": "R. da Consolação, 1909 - Consolação, SP",
        "regiao": "CONSOLAÇÃO, CENTRO - SP",
        "Site": "http://www.cursinhopopular.com.br/",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5526259,
        "Longitude": -46.6607857
    },
    {
        "nome": "Cursinho Popular Cardume - UNIFESP SANTOS",
        "Endereco": "Av. Ana Costa, 178 - Vila Belmiro - Santos/SP",
        "regiao": "Santos - SP",
        "Site": "http://www.unifesp.br/campus/san7/cursinho-popular-cardume",
        "facebook": "https://www.facebook.com/cursinhocardume/?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "Não há processo_seletivo, vagas são preenchidas por ordem de chegada.",
        "vagas": "",
        "Contatos": "",
        "E-mails": "sidneicazeto@uol.com.br (Cordenador); eduardo.silva@unifesp.br (vice-cordenador); eduardo.silva@unifesp.br (Secretário); cursinhocardume.bs@unifesp.br.",
        "Latitude": -23.9514673,
        "Longitude": -46.3331826
    },
    {
        "nome": "Cursinho popular da PUC - são Paulo - Barra Funda",
        "Endereco": "R. Ministro de Godoy, 969 – Perdizes - São Paulo;SP",
        "regiao": "BARRA FUNDA-ZONA OESTE-SP",
        "Site": "https://cacspucsp.wordpress.com/2012/01/20/cursinho-popular-dos-alunos-da-puc-sp/",
        "facebook": "https://www.facebook.com/Cursinho.Cora.Coralina/",
        "horario_das_aulas": "aos sábados das 08:00 às 17:00",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 98802-8752 (henrique); (11) 96909-5282 (Marianna); (11) 97595-0041 (Pedro); (11) 99500-8529 (Ronaldo tiozinho)",
        "E-mails": "",
        "Latitude": -23.5377623,
        "Longitude": -46.6738181
    },
    {
        "nome": "Cursinho Popular Domínio Público",
        "Endereco": "R. Serra de Jairé, 316 - Belenzinho",
        "regiao": "BELEM - SÃO PAULO - SP",
        "Site": "",
        "facebook": "https://www.facebook.com/CursinhoPopularDP/about/",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": -23.5461311,
        "Longitude": -46.5896303
    },
    {
        "nome": "Cursinho pré-vestibular Cora Coralina",
        "Endereco": "Rua Luis Silvestre, s/n, Parque Onofre Miranda, Bom Clima, Antiga AJUF - Portuguesinha",
        "regiao": "Guarulhos - SP",
        "Site": "http://cursinhocoracoralina.webnode.com/",
        "facebook": "https://www.facebook.com/Cursinho.Cora.Coralina/",
        "horario_das_aulas": "Aos sábados e aos domingos, horários variados",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(11) 9 6223-1313",
        "E-mails": "cursinhocoracoralina@gmail.com",
        "Latitude": -23.4459702,
        "Longitude": -46.5192544
    },
    {
        "nome": "Cursinho Pré-vestibular da FIEB",
        "Endereco": "Av. Henriqueta Mendes Guerra, 1168 – Jd. São Pedro\nBarueri/SP - CEP 06401-160",
        "regiao": "Barueri - SP",
        "Site": "http://www.fieb.edu.br/cursinho/",
        "facebook": "https://www.facebook.com/pages/Cursinho-Da-Fieb/228517120686613?fref=ts",
        "horario_das_aulas": "Extensiva – durante a semana, à noite; \nIntensiva – aos sábados, o dia todo.",
        "processo_seletivo": "Vestibulinho - turmas de fevereiro e maio",
        "vagas": "",
        "Contatos": "(11) 2078-7810",
        "E-mails": "fieb@fieb.edu.br",
        "Latitude": -23.5091454,
        "Longitude": -46.8883248
    },
    {
        "nome": "Cursinho Pré-vestibular da UFSCAR",
        "Endereco": "Rodovia Washington Luís, km 235 – SP-310  São Carlos – São Paulo – Brasil",
        "regiao": "SÃO CARLOS - SP",
        "Site": "http://www.cursinho.ufscar.br/",
        "facebook": "https://www.facebook.com/CPVUFSCar/?fref=ts",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "(16) 3351-8433 e (16) 3351-8906",
        "E-mails": "cursinho.saocarlos@ufscar.br",
        "Latitude": -21.9836752,
        "Longitude": -47.9220209
    },
    {
        "nome": "Cursinho Principia - UNESP BAURU",
        "Endereco": "Av. Eng. Luiz Edmundo Carrijo Coube, nº 14-01 - CEP 17.033.360 - Bauru/SP",
        "regiao": "Bauru - SP",
        "Site": "http://www.cursinhoprincipia.com.br/",
        "facebook": "https://www.facebook.com/CursinhoPrincipia/?fref=ts",
        "horario_das_aulas": "Segunda a sexta - Período Vespertino e noturno",
        "processo_seletivo": "Vestibulinho",
        "vagas": "",
        "Contatos": "(14) 3103-6065",
        "E-mails": "secretaria@cursinhoprincipia.com.br",
        "Latitude": -22.3495309,
        "Longitude": -49.0335957
    },
    {
        "nome": "Cursinho Salvador Alende",
        "Endereco": "Emef Derville Alegretti. Rua Voluntários da Pátria, 777, Santana; próximo ao Metrô Portuguesa-Tietê",
        "regiao": "SANTANA, NORTE - SP",
        "Site": "http://cursinhoallende.wordpress.com",
        "facebook": "https://www.facebook.com/cursinho.allende",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "",
        "Contatos": "Rubens 987-131-306 (Tim) / Malu 993-352-727 (Claro) / Rodrigo 951-467-294 (Tim) / Renata 988-138-030 (Claro)  / Marcela 996-896-721 (Tim)",
        "E-mails": "cursinhoallende@gmail.com",
        "Latitude": -23.5136165,
        "Longitude": -46.6290021
    },
    {
        "nome": "Cursinho Tetris- Suzano",
        "Endereco": "R Basílio Valente de Aguiar, 19 Centro - Suzano/SP",
        "regiao": "SUZANO - SP",
        "Site": "http://www.cputetris.com/",
        "facebook": "",
        "horario_das_aulas": "Aos sábados das 8h as 17h30",
        "processo_seletivo": "Prova de ingresso",
        "vagas": "",
        "Contatos": "(11)97208-9818",
        "E-mails": "cputetris@gmail.com",
        "Latitude": -23.5455788,
        "Longitude": -46.3140343
    },
    {
        "nome": "Cursinho Uneafro",
        "Endereco": "22 cidades em São Paulo",
        "regiao": "São Paulo",
        "Site": "http://uneafrobrasil.org/cursinhos/",
        "facebook": "https://www.facebook.com/uneafrobrasil/",
        "horario_das_aulas": "",
        "processo_seletivo": "Perfil socioeconomico",
        "vagas": "",
        "Contatos": "",
        "E-mails": "",
        "Latitude": "",
        "Longitude": ""
    },
    {
        "nome": "Cursinho Universidade Cidadã - Santo André (gratuito)",
        "Endereco": "Centro Comunitário Tamarutaca, na Rua Garanhuns, S/N, em Santo André",
        "regiao": "SANTO ANDRÉ - SP",
        "Site": "",
        "facebook": "",
        "horario_das_aulas": "",
        "processo_seletivo": "",
        "vagas": "20 vagas",
        "Contatos": "Mais informações sobre o projeto podem ser obtidas com o Instituto Acqua, pelos telefones 4825-1711 e 4823-1800, ou com a Noctuam Ensino, pelos números 4996-4166 e 4996-2883.",
        "E-mails": "",
        "Latitude": -23.6359463,
        "Longitude": -46.5471515
    }
];


var cityCoordenates = {lat: -23.5606826, lng: -46.6171579}; //just sao paulo yet


var generateToolTip = function(data) {
    contatos = "";



    return "<b style='font-size: large'> " + data.nome + "</b> <br>" +
            "<b>Endereco:</b> " + data.Endereco + " <br>"
};

function setPosition(latitude, longitude) {
    map.setCenter({lat: latitude, lng: longitude});
    map.setZoom(17);
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: cityCoordenates,
        scrollwheel: false,
        zoom: 9
    });

    for (cursinho_id in data) {
        cursinho = data[cursinho_id];

        if (cursinho.Latitude != "" || cursinho.Longitude != "") {
            var infoWindowData = generateToolTip(cursinho);

            var infowindow = new google.maps.InfoWindow({
                content: infoWindowData
            });

            var marker = new google.maps.Marker({
                map: map,
                position: {lat: cursinho.Latitude, lng: cursinho.Longitude},
                title: cursinho.nome
            });


            // Abrir o infoWindow quando clica no marker
            google.maps.event.addListener(marker, 'click', (function (marker, infoWindowData, infowindow) {
                return function () {
                    infowindow.setContent(infoWindowData);
                    infowindow.open(map, marker);
                };
            })(marker, infoWindowData, infowindow));
        }

    }
}
