let questions = [
  {
    "numb": 1,
    "question": "DHCP é um protocolo da camada de aplicação da suíte TCP/IP que permite a configuração dinâmica de máquinas numa rede local. Oferece as seguintes funcionalidades, EXCETO,",
    "answer": "manter o sincronismo entre os relógios das máquinas da rede local.",
    "options": [
      "informar a localização dos gateways da rede local.",
      "informar a localização dos servidores de DNS da rede local.",
      "manter o sincronismo entre os relógios das máquinas da rede local.",
      "atribuir endereços IP às máquinas da rede local."
    ]
  },
  {
    "numb": 2,
    "question": "Qual é o dispositivo de interconexão de redes que opera na camada 3 do modelo OSI/ISO?",
    "answer": "roteador.",
    "options": [
      "roteador.",
      "switch.",
      "repetidor.",
      "hub."
    ]
  },
  {
    "numb": 3,
    "question": "Considerando o início em zero, o sistema de numeração hexadecimal tem a mesma representação do sistema decimal até o número",
    "answer": "9",
    "options": [
      "1",
      "9",
      "10",
      "16"
    ]
  },
  {
    "numb": 4,
    "question": "Gerar o quadro Ethernet, pegando os dados passados pela camada imediatamente superior a ela (LLC) e acrescentando um cabeçalho a esses dados, é função primordial da sub-camada?",
    "answer": "de controle de acesso ao meio.",
    "options": [
      "física.",
      "de controle de acesso ao meio.",
      "de aplicação.",
      "de transporte."
    ]
  },
  {
    "numb": 5,
    "question": "Caso um roteador não consiga passar adiante um datagrama recebido (por congestionamento demais ou por zeragem do TTL do datagrama, por exemplo), ele precisa informar ao transmissor do datagrama que ocorreu um erro. O mecanismo usado para tal pelos roteadores é o uso do protocolo:",
    "answer": "ICMP.",
    "options": [
      "IGMP.",
      "ICMP.",
      "SMTP.",
      "SNMP."
    ]
  },
  {
    "numb": 6,
    "question": "Considerando o modelo TANENBAUM (4 camadas) de referência TCP/IP, os protocolos FTP, IP e UDP pertencem, respectivamente, às camadas:",
    "answer": "aplicação, inter-redes e transporte.",
    "options": [
      "aplicação, transporte e inter-redes.",
      "física, transporte e aplicação.",
      "aplicação, inter-redes e transporte.",
      "transporte, inter-redes e física."
    ]
  },
  {
    "numb": 7,
    "question": "O meio de transmissão a ser fortemente considerado, quando a interferência e a distância se constituir num problema crítico de um projeto de rede, é?",
    "answer": "cabo de fibra óptica.",
    "options": [
      "cabo coaxial.",
      "cabo par trançado CAT6.",
      "cabo STP.",
      "cabo de fibra óptica."
    ]
  },
  {
    "numb": 8,
    "question": "Considere um ponto de acesso wireless que pode interligar os micros da rede cabeada aos micros conectados à rede wireless, criando uma única rede local, o AP está operando como?",
    "answer": "bridge.",
    "options": [
      "hub.",
      "bridge.",
      "roteador.",
      "multiplex."
    ]
  },
  {
    "numb": 9,
    "question": "no Modelo OSI da ISO, constitui uma referência para o funcionamento das redes de computadores. A camada que se refere às especificações de hardware é denominada:",
    "answer": "física.",
    "options": [
      "física.",
      "enlace.",
      "controle de acesso ao meio.",
      "rede."
    ]
  },
  {
    "numb": 10,
    "question": "Dentre os equipamentos de interconexão de redes de computadores, os dispositivos que executam filtro de tráfego são:",
    "answer": "router, bridge e switch.",
    "options": [
      "switch, repeater e hub.",
      "bridge, hub e repeater.",
      "router, bridge e switch.",
      "hub, switch e router."
    ]
  },
  {
    "numb": 11,
    "question": "São equipamentos de interconexão com as seguintes características:  I. dispositivos que filtram e encaminham frames com base no endereço físico; II. dispositivos que filtram e encaminham frames com base no endereço lógico. Esses equipamentos são conhecidos, respectivamente, como:",
    "answer": "switch e router.",
    "options": [
      "router e bridge.",
      "gateway e switch.",
      "switch e router.",
      "hub e bridge."
    ]
  },
  {
    "numb": 12,
    "question": "Acerca de conceitos relacionados à Internet e intranet, assinale a opção correta.",
    "answer": "Fazer parte da Internet significa usufruir de diversos serviços, como correio eletrônico, acesso a conteúdo livre ou pago, sendo necessário, para tanto, utilizar o protocolo TCP/IP.",
    "options": [
      "A Internet é uma rede mundial de computadores, administrada pelo governo norte-americano, para disponibilizar informações do mundo inteiro.",
      "Intranet é a mesma coisa que Internet, só que ela foi criada para ser acessada apenas por usuários externos a determinada instituição.",
      "Para se acessar a Internet, basta ter um computador conectado na rede elétrica, pois, com o advento das redes sem fio, atualmente não são mais necessários cabos ou fios de telefonia para o acesso.",
      "Fazer parte da Internet significa usufruir de diversos serviços, como correio eletrônico, acesso a conteúdo livre ou pago, sendo necessário, para tanto, utilizar o protocolo TCP/IP."
    ]
  },
  {
    "numb": 13,
    "question": "Os tipos básicos de topologia física das redes de computadores são?",
    "answer": "barramento, anel e estrela.",
    "options": [
      "barramento e anel.",
      "barramento, anel, estrela, árvore e híbrida.",
      "barramento, anel e estrela.",
      "anel e estrela."
    ]
  },
  {
    "numb": 14,
    "question": "Qual é a técnica de controle de acesso ao meio baseada em contenção utilizada pela pela Rede Ethernet ?",
    "answer": "CSMA/CD",
    "options": [
      "CSMA/CD",
      "CSMA/CA",
      "CDMA",
      "TDMA"
    ]
  },
  {
    "numb": 15,
    "question": "Em relação à tecnologia Ethernet utilizada para redes locais, é correto afirmar que:",
    "answer": "permite que a comunicação seja feita com fios de cobre convencionais não blindados, semelhantes aos fios usados para conectar telefones.",
    "options": [
      "atualmente consiste de cabos coaxiais aos quais todos os computadores são conectados.",
      "permite que a energia de alimentação seja transportada com fios de cobre convencionais não blindados, semelhantes aos fios usados para telefonia.",
      "permite que a comunicação seja feita com fios de cobre devidamente blindados, distintos dos fios usados para conectar telefones.",
      "permite que a comunicação seja feita com fios de cobre convencionais não blindados, semelhantes aos fios usados para conectar telefones."
    ]
  },
  {
    "numb": 16,
    "question": "Os protocolos da pilha TCP/IP: HTTP, FTP, NFS e SMTP, operam na camada OSI de?",
    "answer": "Aplicação.",
    "options": [
      "Transporte.",
      "Sessão.",
      "Apresentação.",
      "Aplicação."
    ]
  },
  {
    "numb": 17,
    "question": "No modelo de referência TCP/IP, os protocolos IP, TCP e também aquele cujo objetivo é organizar máquinas em domínios e mapear nomes de hosts em ambientes IP, são, respecivamente, partes integrantes das camadas?",
    "answer": "Inter-Redes, de Transporte e de Aplicação.",
    "options": [
      "Inter-Redes, de Transporte e de Aplicação.",
      "Inter-Redes, Host/Rede e de Aplicação.",
      "Host/Rede, Inter-Redes e de Transporte.",
      "Inter-Redes, de Aplicação e de Transporte."
    ]
  },
  {
    "numb": 18,
    "question": "Segundo Tanenbaum, o modelo de referência TCP/IP não tem camada correspondente no modelo OSI às camadas de?",
    "answer": "sessão e de apresentação.",
    "options": [
      "enlace e física.",
      "aplicação e de transporte.",
      "rede e de transporte.",
      "sessão e de apresentação."
    ]
  },
  {
    "numb": 19,
    "question": "No modelo de referência TCP/IP, a camada de transporte contém os seguintes protocolos:",
    "answer": "TCP e UDP.",
    "options": [
      "TCP e UDP.",
      "SMTP e POP3.",
      "TCP e IP.",
      "TCP e SMTP."
    ]
  },
  {
    "numb": 20,
    "question": "Usando o protocolo TCP para o transporte de dados, têm-se:  I. Serviço orientado por conexão; uma sessão é estabelecida entre os hosts. II. Garantia da entrega através do uso de confirmações e entrega sequenciada dos dados. III. Maior rapidez que o UDP, necessitando de baixa sobrecarga e podendo oferecer suporte à comunicação ponto a ponto e ponto a vários pontos. É correto o que consta em:",
    "answer": "I e II, apenas.",
    "options": [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas."
    ]
  },
  {
    "numb": 21,
    "question": "Com relação ao protocolo TCP.   I - executa o empacotamento, fragmentando os dados em pacotes menores, numerando-os, garantindo que cada pacote seja entregue no destino em segurança e na ordem adequada. II - pertence à camada de transporte. III - executa o endereçamento e o roteamento. IV - pertence à camada de rede. Está correto o que se afirma APENAS em:",
    "answer": "I e II.",
    "options": [
      "III e IV.",
      "I e IV.",
      "I e II.",
      "II e III."
    ]
  },
  {
    "numb": 22,
    "question": "Em relação ao protocolo TCP/IP é correto afirmar que:",
    "answer": "os endereços internet podem ser usados para se referir a redes e a hosts individuais.",
    "options": [
      "um endereço IP especifica um computador individual.",
      "os endereços internet podem ser usados para se referir a redes.",
      "os endereços internet não podem ser usados para se referir a hosts individuais.",
      "os endereços internet podem ser usados para se referir a redes e a hosts individuais."
    ]
  },
  {
    "numb": 23,
    "question": "Se o sistema IPv4 estiver sendo usado, cada máquina conectada a uma rede TCP/IP receberá um endereço lógico no formato a.b.c.d., onde cada letra equivale a um número de:",
    "answer": "8 bits.",
    "options": [
      "1 bit.",
      "8 bits.",
      "16 bits.",
      "128 bits"
    ]
  },
  {
    "numb": 24,
    "question": "Protocolos de transporte, como UDP e TCP, implementam uma forma de distinguir múltiplos destinos (aplicações) dentro de um determinado host, através de campos nos seus cabeçalhos contendo números inteiros. Esses campos são conhecidos pelo termo:",
    "answer": "porta.",
    "options": [
      "broadcast.",
      "checksum.",
      "multicast.",
      "porta."
    ]
  },
  {
    "numb": 25,
    "question": "O hardware, cuja função é fornecer o ponto de acesso de um computador a uma rede de computadores, é:",
    "answer": "a placa de rede.",
    "options": [
      "a unidade central de processamento.",
      "o barramento de comunicação serial.",
      "a placa de rede.",
      "a placa-mãe."
    ]
  },
  {
    "numb": 26,
    "question": "Dadas as assertivas a seguir, com relação a roteador.  I - O processo de roteamento baseia-se na análise do endereço IP de destino dos dados de entrada e no envio dos dados por meio de uma porta de saída, de acordo com o endereço MAC do destinatário.   II.  As tabelas de roteamento podem ser descobertas com o uso de protocolos de roteamento. III.  As tabelas de roteamento podem ser configuradas manualmente.   IV.  Em uma rede local com um roteador, todos os pacotes IP devem ser enviados para o roteador para que este decida se fica na rede local ou envia para outra rede externa.",
    "answer": "II e III",
    "options": [
      "II e III",
      "I e II",
      "III e IV",
      "II e IV"
    ]
  },
  {
    "numb": 27,
    "question": "Este tipo de rede consiste em muitas conexões entre pares de máquinas individuais. Para ir da origem ao destino, um pacote neste tipo de rede talvez tenha de visitar primeiro uma ou mais máquinas intermediárias. Como normalmente é possível haver várias rotas com diferentes tamanhos, encontrar boas rotas é importante nesta rede. A definição acima se refere a que tipo de rede?",
    "answer": "Redes ponto a ponto.",
    "options": [
      "Redes de difusão.",
      "Redes ponto a ponto.",
      "Redes Broadcast.",
      "Redes Locais."
    ]
  },
  {
    "numb": 28,
    "question": "Acerca de redes de computadores e de dispositivos usados nessas redes, é CORRETO afirmar que :",
    "answer": "bridges e switches são funcionalmente idênticos; entretanto, os últimos,normalmente implementados em hardware dedicado, apresentam desempenho superior com relação aos primeiros.",
    "options": [
      "bridges e switches são funcionalmente idênticos; entretanto, os últimos,normalmente implementados em hardware dedicado, apresentam desempenho superior com relação aos primeiros.",
      "em redes Ethernet, um domínio de broadcast é o segmento em que dois ou mais nós podem concorrer pelo uso do meio, o que provoca colisão.",
      "switches tomam suas decisões de encaminhamento a partir dos endereços de rede, ao passo que os roteadores utilizam os endereços físicos.",
      "Tecnologia Ethernet permite que a energia seja transportada com fios de cobre convencionais não blindados, semelhantes aos fios usados para escuta telefônica."
    ]
  },
  {
    "numb": 29,
    "question": "Com relação a redes de computadores e seus elementos de interconexão, o roteador, podemos afirmar que:",
    "answer": "é utilizado para interligar redes com diferentes protocolos MAC ou diferentes protocolos na cama física.",
    "options": [
      "é transparente às máquinas a ele interligadas. Quando duas máquinas em redes distintas estão em comunicação, o roteador situado entre as duas redes fica dedicado à comunicação entre elas, desprezando ou descartando os demais datagramas a ele destinado.",
      "decide o que fazer com um datagrama, utilizando apenas o endereço de origem e o tipo de protocolo utilizado. Se o protocolo for TCP/IP, o roteador apenas captura o datagrama do segmento de origem e o envia para todos os demais segmentos a ele conectados.",
      "ao receber um datagrama, analisa se o endereço de destino é uma máquina conectada a um de seus segmentos. Em caso negativo, ele devolve o datagrama à máquina de origem informando a negação de transmissão e solicitando o endereço do próximo roteador nesta rota a ser utilizado.",
      "é utilizado para interligar redes com diferentes protocolos MAC ou diferentes protocolos na cama física."
    ]
  },
  {
    "numb": 30,
    "question": "A tecnologia ATM (Asynchronous Transfer Mode) é utilizada:",
    "answer": "Em redes de longa distância.",
    "options": [
      "Em redes locais.",
      "Somente em redes que utilizam cabos coaxiais.",
      "Em redes locais desde que sejam utilizados cabos de fibra ótica.",
      "Em redes de longa distância."
    ]
  },
  {
    "numb": 31,
    "question": "Sobre os elementos de interconexão de redes de computadores, é correto afirmar que:",
    "answer": "Os switches são capazes de encaminhar os frames apenas para a interface que esteja ligada ao equipamento com o endereço MAC de destino desejado.",
    "options": [
      "repetidores são capazes de analisar o conteúdo dos frames repassados entre as redes.",
      "bridges não são capazes de separar domínio de colisão.",
      "bridges são capazes de separar domínios de broadcast.",
      "Os switches são capazes de encaminhar os frames apenas para a interface que esteja ligada ao equipamento com o endereço MAC de destino desejado."
    ]
  },
  {
    "numb": 32,
    "question": "Sobre as redes de computadores, assinale a alternativa correta.",
    "answer": "Uma VLAN é uma rede virtual logicamente independente, podem existir várias em um mesmo switch, dividindo uma rede local física em mais de uma rede virtual.",
    "options": [
      "O CSMA/CD é um protocolo de telecomunicações que organiza como os computadores compartilham o link.",
      "Uma VLAN é uma rede virtual logicamente independente, podem existir várias em um mesmo switch, dividindo uma rede local física em mais de uma rede virtual.",
      "O CSMA/CA é o antecessor do CSMA/CD e possui um grau de ordenação menor, com menos parâmetros restritivos.",
      "O proxy é um dispositivo de uma rede de computadores que tem por objetivo aplicar uma política de segurança em um determinado ponto da rede."
    ]
  },
  {
    "numb": 33,
    "question": "Em redes de computadores, fala-se muito em latência. Sendo assim, uma latência é:",
    "answer": "a diferença de tempo entre o início de um evento e o momento em que seus efeitos tornam-se perceptíveis.",
    "options": [
      "a diferença de tempo entre o início de um evento e o seu término.",
      "o tempo total de um evento desde o seu início até o seu término.",
      "o acréscimo de tempo entre o início de um evento e o momento em que seus efeitos tornam-se perceptíveis.",
      "a diferença de tempo entre o início de um evento e o momento em que seus efeitos tornam-se perceptíveis."
    ]
  },
  {
    "numb": 34,
    "question": "Dentre os equipamentos de redes de computadores, a função da Switch é:",
    "answer": "realizar o chaveamento de suas Portas por meio do endereço Ethernet.",
    "options": [
      "encaminhar os datagramas da rede local para a rede ampla de acordo com o endereço IP.",
      "encaminhar os datagramas da rede local para a rede ampla de acordo com o endereço TCP",
      "encaminhar os datagramas da rede local para a rede ampla de acordo com o número da Porta Ethernet.",
      "realizar o chaveamento de suas Portas por meio do endereço Ethernet."
    ]
  },
  {
    "numb": 35,
    "question": "Em relação aos elementos de interconexão de redes de computadores, é correto afirmar que:",
    "answer": "uma ponte divide um domínio de colisão em domínios de menor dimensão. Cada interface da ponte determina um domínio de colisão.",
    "options": [
      "o repetidor, atuando na camada de enlace do modelo OSI, conecta segmentos de rede, amplificando e transmitindo os sinais elétricos que ocorrem em um segmento para o(s) outro(s).",
      "um gateway é, essencialmente, uma ponte mais complexa, com múltiplas interfaces. É um dispositivo de interconexão que comuta quadros entre segmentos de uma LAN de acordo com o endereço MAC das estações.",
      "um hub é um dispositivo que age como centralizador de conexões de rede que atuam na camada de enlace do modelo OSI. É uma forma de repetidor multiporta.",
      "uma ponte divide um domínio de colisão em domínios de menor dimensão. Cada interface da ponte determina um domínio de colisão."
    ]
  },
  {
    "numb": 36,
    "question": "O canal das redes de difusão é:",
    "answer": "Compartilhado por todas as máquinas da rede.",
    "options": [
      "Dedicado para cada conexão entre dois ou mais computadores.",
      "Compartilhado por todas as máquinas da rede.",
      "Direcionado para um equipamento exclusivo.",
      "Aleatoriamente conectado, conforme o nível de energia dos computadores."
    ]
  },
  {
    "numb": 37,
    "question": "Quanto às redes Ethernet, é correto afirmar que a topologia estrela:",
    "answer": "utiliza cabeamento estruturado e um periférico concentrador, que interliga todas as máquinas da rede.",
    "options": [
      "interliga fisicamente os computadores entre si por um cabo coaxial.",
      "pega as informações passadas pela camada superior (LLC) e insere em um quadro.",
      "circula uma ficha comandada por cada micro da rede.",
      "utiliza cabeamento estruturado e um periférico concentrador, que interliga todas as máquinas da rede."
    ]
  },
  {
    "numb": 38,
    "question": "Uma das vantagens da adoção do uso de switches, comparando-se ao uso de hubs em redes ethernet, é:",
    "answer": "a ausência de colisões.",
    "options": [
      "que todas as placas de rede vinculadas ao switch recebam todos os pacotes destinados a todos os destinos.",
      "que processa pacotes no âmbito da rede.",
      "a ausência de colisões.",
      "que permitem sniffer sem necessidade de espelhamento de porta."
    ]
  },
  {
    "numb": 39,
    "question": "Sobre a arquitetura Ethernet, é correto afirmar que:",
    "answer": "Opera nas camadas um e dois do modelo OSI, definindo, portanto, a parte física da rede local.",
    "options": [
      "Trabalha no mesmo nível da camada de aplicação do modelo OSI.",
      "Opera nas camadas um e dois do modelo OSI, definindo, portanto, a parte física da rede local.",
      "Tem sua primeira camada atuando na iteração usuário/ aplicação, seguida pelas camadas de controle de link lógico (LLC) e acesso ao meio (MAC).",
      "Tem como função principal receber os pacotes de dados dos protocolos de mais alto nível e transmiti-los à camada de transporte do modelo OSI."
    ]
  },
  {
    "numb": 40,
    "question": "Com relação às tecnologias Ethernet, Fast Ethernet e Gigabit Ethernet é correto afirmar que:",
    "answer": "A Ethernet emprega o controle de acesso meio CSMA/CD.",
    "options": [
      "Só permitem os modos de transmissão Simplex e Half-Duplex.",
      "A tecnologia que propicia maior velocidade de transmissão é a Fast Ethernet.",
      "Ethernet e Gigabit Ethernet utilizam as mesmas técnicas de acesso ao meio em todos os modos de transmissão.",
      "A Ethernet emprega o controle de acesso meio CSMA/CD."
    ]
  },
  {
    "numb": 41,
    "question": "Para endereçar 16 sub-redes em uma rede cujo endereço é 128.0.0.0, a máscara adequada a ser aplicada é:",
    "answer": "128.0.0.0/20",
    "options": [
      "128.0.0.0/20",
      "128.0.0.0/16",
      "128.0.0.0/12",
      "128.0.0.0/8"
    ]
  },
  {
    "numb": 42,
    "question": "Dado o endereço IP 199.1.1.100 e a máscara 255.255.255.224, quais são, respectivamente, o primeiro e o último endereços IP válidos da sub-rede?",
    "answer": "199.1.1.97 e 199.1.1.126",
    "options": [
      "199.1.1.1e 199.1.1.97",
      "199.1.1.1 e 199.1.1.126",
      "199.1.1.1 e 199.1.1.127",
      "199.1.1.97 e 199.1.1.126"
    ]
  },
  {
    "numb": 43,
    "question": "Considere um servidor, em uma rede TCP/IP, configurado com os dados abaixo. Endereço IP: 192.168.10.10 Máscara: 255.255.255.248 Que endereço IP e máscara podem ser configurados em uma estação para que esta pertença à mesma sub-rede do servidor?",
    "answer": "192.168.10.14, 255.255.255.248",
    "options": [
      "192.168.0.1, 255.255.255.0",
      "192.168.0.0, 255.255.255.0",
      "192.168.10.14, 255.255.255.248",
      "192.168.10.1, 255.255.255.248"
    ]
  },
  {
    "numb": 44,
    "question": "Em relação a classes de endereços IP, o endereço 222.100.100.100 enquadra-se na classe:",
    "answer": "C",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "numb": 45,
    "question": "Uma rede local foi subdividida para facilitar o gerenciamento dos recursos. Nessa subdivisão, uma sub­-rede que possui a identificação 191.25.8.0/22 permite a instalação de até:",
    "answer": "1022 hosts.",
    "options": [
      "62 hosts.",
      "126 hosts.",
      "254 hosts.",
      "1022 hosts."
    ]
  },
  {
    "numb": 46,
    "question": "A filial de uma empresa solicita à matriz 25 endereços IP para sua rede interna. Considerando-se que há escassez de endereços nessa empresa, que máscara de rede deve ser disponibilizada para a filial?",
    "answer": "255.255.255.224",
    "options": [
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224"
    ]
  },
  {
    "numb": 47,
    "question": "A respeito de redes de computadores, protocolos TCP/IP e considerando uma rede classe C, assinale a alternativa que apresenta a máscara para dividi-la em 16 (dezeseis) sub-redes.",
    "answer": "255.255.255.240",
    "options": [
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.240"
    ]
  },
  {
    "numb": 48,
    "question": "Uma empresa recebeu o endereço de rede classe B 190.4.102.1. O roteador principal da rede da empresa utiliza a máscara de sub-rede 255.255.252.0. Nesse caso, o número máximo de sub-redes válidas que o roteador desta empresa pode manipular é:",
    "answer": "62",
    "options": [
      "14",
      "30",
      "62",
      "128"
    ]
  },
  {
    "numb": 49,
    "question": "O administrador de rede da filial de uma empresa recebeu da matriz a seguinte sub-rede IP/Máscara: 192.168.5.0/255.255.255.224 Considerando-se que o roteador ocupará o endereço IP 192.168.5.1, quantas estações (cada uma ocupando um endereço IP) podem ser utilizadas na sub-rede dessa filial?",
    "answer": "29",
    "options": [
      "23",
      "29",
      "30",
      "126"
    ]
  },
  {
    "numb": 50,
    "question": "A rede classe C 192.168.0.0 foi dividida em sub-redes de máscara 255.255.255.248. Dois endereços IP que, nestas condições, pertencerão a uma mesma sub-rede são:",
    "answer": "192.168.0.97 e 192.168.0.102",
    "options": [
      "192.168.0.7 e 192.168.0.10",
      "192.168.0.97 e 192.168.0.102",
      "192.168.0.182 e 192.168.0.185",
      "192.168.0.246 e 192.168.0.250"
    ]
  },
  {
    "numb": 51,
    "question": "Seja S uma determinada sub-rede TCP/IP formada pelos equipamentos. Estação X, IP: 192.168.1.21/29 Roteador R, IP: 192.168.1.22/29 Quantas novas estações podem ser conectadas a S?",
    "answer": "4",
    "options": [
      "2",
      "4",
      "6",
      "16"
    ]
  },
  {
    "numb": 52,
    "question": "Qual máscara de rede deve-se aplicar para delimitar exatamente 62 hosts válidos da rede?",
    "answer": "255.255.255.192",
    "options": [
      "255.255.255.0",
      "255.255.255.240",
      "255.255.255.252",
      "255.255.255.192"
    ]
  },
  {
    "numb": 53,
    "question": "O endereço da rede a qual o host 200.131.19.84/26 pertence é ?",
    "answer": "200.131.19.64/26",
    "options": [
      "200.131.19.84/26",
      "200.131.19.100/26",
      "200.131.19.24/26",
      "200.131.19.64/26"
    ]
  },
  {
    "numb": 54,
    "question": "As máscaras de sub-rede são utilizadas, principalmente, para realizar a divisão do endereço IPv4 da rede e dos hosts. Com base nessa informação, quantos endereços IPv4 válidos podem ser atribuídos a diferentes hosts em uma rede com a máscara de sub-rede 255.255.255.224?",
    "answer": "30",
    "options": [
      "29",
      "31",
      "30",
      "32"
    ]
  },
  {
    "numb": 55,
    "question": "Deseja-se segmentar logicamente uma rede IPv4 em 30 sub-redes, pela configuração de máscaras em seus dispositivos. Assinale a máscara de rede mais adequada aos propósitos do administrador dessa rede.",
    "answer": "255.255.255.248",
    "options": [
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.248"
    ]
  },
  {
    "numb": 56,
    "question": "Endereçamento físico numa rede padrão Ethernet fica por conta do MAC (Media Access Control). Assinale a alternativa que contém apenas campos presentes num quadro MAC:",
    "answer": "Preâmbulo, Endereço de destino, Endereço de origem, tamanho, checksum.",
    "options": [
      "Sincronismo, IP origem, IP destino, tamanho, CRC32.",
      "Sincronismo, IP origem, IP destino, preenchimento, CRC32.",
      "Preâmbulo, Endereço de destino, Endereço de origem, tamanho, paridade.",
      "Preâmbulo, Endereço de destino, Endereço de origem, tamanho, checksum."
    ]
  },
  {
    "numb": 57,
    "question": "Considere as faixas de endereçamento IPv4 abaixo escritos em notação CIDR:  I) 10.0.0.0/8   II) 50.0.0.0/8   III) 172.16.0.0/12 IV) 192.168.0.0/16  V) 200.0.0.0/8 São considerados como reservados para uso em redes locais (privadas) e, portanto, NÃO podem aparecer na Internet:",
    "answer": "Apenas I, III e IV",
    "options": [
      "Apenas I",
      "Apenas I e IV",
      "Apenas III e IV",
      "Apenas I, III e IV"
    ]
  },
  {
    "numb": 58,
    "question": "Examinando os três primeiros bits de um endereço IP chegou-se ao número binário 110. Pode-se portanto, afirmar categoricamente que esse endereço pertence a:",
    "answer": "Classe C",
    "options": [
      "Classe A",
      "Classe D",
      "Classe B",
      "Classe C"
    ]
  },
  {
    "numb": 59,
    "question": "uma rede IPv4, para criar sub-redes com 16 computadores, deveremos utilizar como máscara de sub-rede:",
    "answer": "255.255.255.240",
    "options": [
      "255.255.255.240",
      "255.255.255.224",
      "255.255.255.32",
      "255.255.255.16"
    ]
  },
  {
    "numb": 60,
    "question": "Uma sub-rede tem máscara 255.255.255.128. A quantidade de hosts válidos existentes nesta sub-rede é?",
    "answer": "126",
    "options": [
      "512",
      "256",
      "128",
      "126"
    ]
  },
  {
    "numb": 61,
    "question": "Um bom teste para verificar o funcionamento de uma rede localmente é usar o conceito de loopback para testar seu funcionamento. Atualmente a maioria das implementações do IPv4 usa como o endereço de loopback padrão o IP:",
    "answer": "127.0.0.1",
    "options": [
      "172.0.0.1",
      "128.0.0.1",
      "127.0.0.1",
      "192.168.1.1"
    ]
  },
  {
    "numb": 62,
    "question": "Quanto aos conceitos de Internet e Intranet, analise as afirmativas abaixo, dê valores Verdadeiro (V) ou Falso (F) e assinale a alternativa que apresenta a sequência correta (de cima para baixo):(  ) a gama de endereços IP entre 192.168.0.0 até 192.168.255.255 é utilizado pela Intranet.   (  ) Intranet é uma rede privada voltada para os funcionários de uma empresa.(  ) a Intranet somente utiliza o protocolo TCP/IP quando acessa a Internet.",
    "answer": "V - V - F",
    "options": [
      "V - V - V",
      "V - V - F",
      "V - F - V",
      "F - F - V"
    ]
  },
  {
    "numb": 63,
    "question": "A partir do endereço de rede IP classe C: 192.168.3.0/27 com máscara 255.255.255.224, poderão ser criadas 8 sub-redes. O endereço de rede da sexta sub-rede será :",
    "answer": "192.168.3.160",
    "options": [
      "192.168.3.160",
      "192.168.3.226",
      "192.168.3.128",
      "192.168.3.192"
    ]
  },
  {
    "numb": 64,
    "question": "Um administrador de uma rede local atribuiu para um dos computadores o endereço IPv4 10.10.2.60. Quanto à classe de endereços, esse endereço faz parte da:",
    "answer": "Classe A",
    "options": [
      "Classe A",
      "Classe B",
      "Classe C",
      "Classe D"
    ]
  },
  {
    "numb": 65,
    "question": "Dado um endereço IPv4 classe C 192.168.26.56 com máscara de rede 255.255.255.224 (ou /27), configurado em um host de uma rede interna, qual é o endereço de rede e o endereço de broadcast, respectivamente, da sub-rede do qual o endereço faz parte?",
    "answer": "192.168.26.32 e 255.255.255.63",
    "options": [
      "192.168.26.32 e 255.255.255.128",
      "192.168.26.32 e 255.255.255.63",
      "192.168.26.48 e 255.255.255.96",
      "192.168.26.0 e 255.255.255.64"
    ]
  },
  {
    "numb": 66,
    "question": "Considere que uma empresa recebeu o endereço IP 192.168.2.0/27 para ser utilizado em sua rede interna e precisa criar 5 sub-redes, com 30 hosts cada. Nestas condições, a máscara da rede e os endereços de rede e de broadcast da segunda sub-rede serão, respectivamente?",
    "answer": "255.255.255.224 - 192.168.2.32/27 - 192.168.2.63/27",
    "options": [
      "255.255.255.224 - 192.168.2.32/27 - 192.168.2.63/27",
      "255.255.255.252 - 192.168.2.96/27 - 192.168.2.127/27",
      "255.255.255.240 - 192.168.2.64/27 - 192.168.2.95/27",
      "255.255.255.224 - 192.168.2.30/27 - 192.168.2.61/27"
    ]
  },
  {
    "numb": 67,
    "question": "Na internet, cada computador conectado à rede tem um endereço IP que é atribuído à interface de rede do computador, normalmente, às placas de rede. No caso do protocolo IPv4 os endereços IP possuem 32 bits. Considerando o seguinte endereço na nomenclatura CIDR 192.168.0.1 /26, quantas sub-redes podem ser endereçadas?",
    "answer": "4 Subredes",
    "options": [
      "4 Subredes",
      "8 Subredes",
      "16 Subredes",
      "32 Subredes"
    ]
  },
  {
    "numb": 68,
    "question": "Supondo que um gerente de rede receba um intervalo de endereços IPv4 12.0.0.0/8. Assinale a alternativa de máscara de rede para que este gerente divida este intervalo em exatamente 8 (oito) sub-redes distintas.",
    "answer": "255.224.0.0",
    "options": [
      "255.224.0.0",
      "255.192.0.0",
      "255.240.0.0",
      "255.255.0.0"
    ]
  },
  {
    "numb": 69,
    "question": "Quantas sub-redes possui uma rede classe C cuja máscara é 255.255.255.192?",
    "answer": "04 Sub-redes",
    "options": [
      "04 Sub-redes",
      "08 Sub-redes",
      "32 Sub-redes",
      "16 Sub-redes"
    ]
  },
  {
    "numb": 70,
    "question": "Sabendo-se que o TCP/IP v4 utiliza o conceito de portas, que são identificadas com um valor de 16 bits, qual o número máximo de portas que podem potencialmente ser alocadas para estes serviços?",
    "answer": "65536, sendo de 0 a 65535",
    "options": [
      "65536, sendo de -32768 a 32767",
      "256, sendo de 0 a 255",
      "32767, sendo de 0 a 32767",
      "65536, sendo de 0 a 65535"
    ]
  },
  {
    "numb": 71,
    "question": "Caso um roteador não consiga passar adiante um datagrama recebido (por congestionamento demais ou por zeragem do TTL do datagrama, por exemplo), ele precisa informar ao transmissor do datagrama que ocorreu um erro. O mecanismo usado para tal pelos roteadores é o uso do protocolo:",
    "answer": "ICMP",
    "options": [
      "IGMP",
      "ICMP",
      "SNMP",
      "SMTP"
    ]
  },
  {
    "numb": 72,
    "question": "Quando um segmento TCP chega a um hospedeiro, a porta ao qual o segmento será dirigido depende do:",
    "answer": "Todas as alternativas estão corretas",
    "options": [
      "Número da porta da fonte",
      "Endereço IP da fonte do datagrama que encapsulou o segmento",
      "Número da porta do destino",
      "Todas as alternativas estão corretas"
    ]
  },
  {
    "numb": 73,
    "question": "Quando um segmento UDP chega em um hospedeiro, para dirigir o segmento à porta apropriada o OS utiliza:",
    "answer": "O número de porta do destino",
    "options": [
      "O número de porta do destino",
      "O número de porta da fonte",
      "O endereço IP da fonte",
      "Todas as alternativas estão certas"
    ]
  },
  {
    "numb": 74,
    "question": "Para uma estação determinar um endereço Ethernet, a partir de um endereço IP, que mensagem deve transmitir?",
    "answer": "ARP Request",
    "options": [
      "MAC Query",
      "RARP Request",
      "DNS Query",
      "ARP Request"
    ]
  },
  {
    "numb": 75,
    "question": "Para uma estação determinar um endereço IP, a partir de um endereço Físico (Ethernet), que mensagem deve transmitir?",
    "answer": "RARP Request",
    "options": [
      "MAC Query",
      "RARP Request",
      "ARP Request",
      "DNS Query"
    ]
  },
  {
    "numb": 76,
    "question": "Qual a definição correta para redes de computadores?",
    "answer": "Conjunto de sistemas computacionais autônomos interconectados por meios físicos e protocolos.",
    "options": [
      "Conjunto de sistemas computacionais autônomos interconectados por meios físicos e protocolos.",
      "Conjunto dispositivos móveis autônomos interconectados por meio de protocolos.",
      "Estruturas físicas que permitem a comunicação entre apenas duas máquinas.",
      "Estruturas físicas e lógicas que conectam dispositivos móveis."
    ]
  },
  {
    "numb": 77,
    "question": "Classificação das redes de computadores quanto a área de abrangência:",
    "answer": "LAN,MAN,WAN.",
    "options": [
      "LAN, PAN, MAN, DAN.",
      "WAN,LAN,PAN,WI-FI.",
      "LAN,MAN,WAN.",
      "INTERNET, WAN,LAN,PAM,WI-FI."
    ]
  },
  {
    "numb": 78,
    "question": "Tipos de mensagens que podem ser enviadas em uma rede de computadores:",
    "answer": "Broadcast, Unicast, Multicast",
    "options": [
      "Broadcast, Unicast, Multicast",
      "Broadcast, Anycast, Half-Duplex",
      "Full-Duplex, Half-Duplex, Simplex",
      "Broadcast, Anycast, Simplex"
    ]
  },
  {
    "numb": 79,
    "question": "DHCP é um protocolo da camada de aplicação da suíte TCP/IP que permite a configuração dinâmica de máquinas numa rede local. Oferece as seguintes funcionalidades, EXCETO,",
    "answer": "Manter o sincronismo entre os relógios das máquinas da rede local.",
    "options": [
      "Informar a localização dos gateways da rede local.",
      "Informar a localização dos servidores de DNS da rede local.",
      "Atribuir endereços IP às máquinas da rede local.",
      "Manter o sincronismo entre os relógios das máquinas da rede local."
    ]
  },
  {
    "numb": 80,
    "question": "Protocolos de transporte, como UDP e TCP, implementam uma forma de distinguir múltiplos destinos (aplicações) dentro de um determinado host, através de campos nos seus cabeçalhos contendo números inteiros. Esses campos são conhecidos pelo termo:",
    "answer": "porta.",
    "options": [
      "broadcast.",
      "checksum.",
      "porta.",
      "multicast"
    ]
  },
  {
    "numb": 81,
    "question": "Qual empresa criou o iPhone?",
    "answer": "Apple",
    "options": [
      "Google",
      "Apple",
      "Microsoft",
      "Cisco"
    ]
  },
  {
    "numb": 82,
    "question": "Qual das linguagens de programação a seguir é atualmente administrada pela Oracle?",
    "answer": "Java",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "R"
    ]
  },
  {
    "numb": 83,
    "question": "Qual destas empresas é um grande provedor de computação em nuvem?",
    "answer": "Amazon",
    "options": [
      "Uber",
      "Lenovo",
      "Amazon",
      "Samsung"
    ]
  },
  {
    "numb": 84,
    "question": "Dentre os dispositivos de armazenamento de dados, qual possui a maior velocidade de acesso (Leitura/Gravação)?",
    "answer": "HDD-SSD",
    "options": [
      "HDD 5.400 RPM",
      "HDD-SATA.",
      "HDD-ATA",
      "HDD-SSD"
    ]
  },
  {
    "numb": 85,
    "question": "Escolha o cabeamento UTP par trançado com melhor desempenho (velocidade e proteção de dados).",
    "answer": "Cat-6",
    "options": [
      "Cat-5.",
      "Cat-6",
      "Cat-4",
      "Fibra óptica."
    ]
  },
  {
    "numb": 86,
    "question": "Quantas camadas possui o modelo TCP/IP?",
    "answer": "5",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ]
  },
  {
    "numb": 87,
    "question": "Qual a camada responsável por definir os padrões elétricos, ópticos e mecânicos?",
    "answer": "Física",
    "options": [
      "Física",
      "Internet",
      "Enlace",
      "Aplicação"
    ]
  },
  {
    "numb": 88,
    "question": "O switch pertence a camada de:",
    "answer": "enlace",
    "options": [
      "rede",
      "fisica",
      "enlace",
      "transporte"
    ]
  },
  {
    "numb": 89,
    "question": "Os protocolos SMTP, POP3 e DNS pertencem a qual camada?",
    "answer": "Aplicação",
    "options": [
      "Enlace",
      "Rede",
      "Transporte",
      "Aplicação"
    ]
  },
  {
    "numb": 90,
    "question": "O Roteador toma decisão baseado em qual protocolo?",
    "answer": "IP",
    "options": [
      "IP",
      "MAC",
      "TCP",
      "UDP"
    ]
  },
  {
    "numb": 91,
    "question": "Qual camada do modelo OSI que não existe no modelo TCP/IP de 5 camadas?",
    "answer": "Apresentação",
    "options": [
      "Transporte",
      "Aplicação",
      "Apresentação",
      "Enlace"
    ]
  },
  {
    "numb": 92,
    "question": "O switch toma decisão baseado em qual endereço?",
    "answer": "MAC",
    "options": [
      "IP",
      "TCP",
      "MAC",
      "UDP"
    ]
  },
  {
    "numb": 93,
    "question": "Qual é o sistema que consiste na utilização de vários discos ligados a uma placa controladora especial e que são “vistos” pelo sistema como apenas um?",
    "answer": "RAID",
    "options": [
      "PCI",
      "USB",
      "IDE",
      "RAID"
    ]
  },
  {
    "numb": 94,
    "question": "Assinale a alternativa que apresenta a implementação de redundância que consiste no agrupamento de um grupo de computadores ligados entre si, visto na rede como um único sistema.",
    "answer": "CLUSTER",
    "options": [
      "CLUSTER",
      "LAN",
      "WAN",
      "STAND-ALONE"
    ]
  },
  {
    "numb": 95,
    "question": "O ambiente criado para proteger a rede interna por meio de um perímetro de segurança, localizado entre a Internet e a rede interna e normalmente acoplado a um firewall, é:",
    "answer": "Zona Desmilitarizada (DMZ).",
    "options": [
      "Network Address Translation (NAT).",
      "Sistema de Detecção de Intrusos (IDS).",
      "Zona Desmilitarizada (DMZ).",
      "Sistema de Prevenção de Intrusos (IPS)."
    ]
  },
  {
    "numb": 96,
    "question": "Considerando o contexto da Internet, são exemplos de requisitos importantes para interligação de redes:",
    "answer": "Escalabilidade, confiabilidade e segurança.",
    "options": [
      "Escalabilidade, confiabilidade e segurança.",
      "Mobilidade, qualidade de serviço e multiplataforma.",
      "Interoperabilidade, portabilidade e qualidade de serviço.",
      "Desempenho, segurança e multiprotocolos."
    ]
  },
  {
    "numb": 97,
    "question": "Qual é o termo utilizado para o tipo de unidade de dados que é interpretado e utilizado por cada camada específica da rede?",
    "answer": "PDU",
    "options": [
      "MTU",
      "PDU",
      "PACOTE",
      "BYTE"
    ]
  },
  {
    "numb": 98,
    "question": "Assinale a alternativa que completa correta e respectivamente as lacunas. Quando se menciona endereço lógico se refere ao __________________ e quando se fala em endereço físico refere-se ao __________________.",
    "answer": "endereço IP / endereço MAC",
    "options": [
      "endereço IP / endereço MAC",
      "endereço IP / endereço Loopback",
      "endereço MAC / endereço IP",
      "endereço unicast / endereço MAC"
    ]
  },
  {
    "numb": 99,
    "question": "Em redes de computadores, a comunicação em broadcast consiste em:",
    "answer": "Um quadro ser enviado de um endereço MAC da rede para todos os outros  endereços MACs da rede.",
    "options": [
      "Um quadro ser enviado para um grupo específico de clientes ou dispositivos da rede de computadores.",
      "Um quadro ser enviado a um endereço MAC específico da rede de computadores.",
      "Um quadro ser enviado de um endereço MAC da rede para todos os outros  endereços MACs da rede.",
      "Um quadro ser enviado a um computador específico em uma rede externa à criação do quadro de origem."
    ]
  },
  {
    "numb": 100,
    "question": "A respeito de conceitos de Internet e intranet, assinale a opção correta:",
    "answer": "Na Internet, todas as atividades que envolvem duas ou mais entidades remotas comunicantes são governadas por um protocolo.",
    "options": [
      "Na comutação de pacotes, a conexão é forte, e os comutadores no caminho entre o remetente e o destinatário mantêm o estado.",
      "Na comutação de pacotes, há reserva nos recursos do enlace, para evitar espera na transmissão dos pacotes e para que a transmissão seja simultânea.",
      "Em um circuito implementado em um enlace por multiplexação por divisão de frequência, o tempo é dividido em quadros de duração e número de slots fixos.",
      "Na Internet, todas as atividades que envolvem duas ou mais entidades remotas comunicantes são governadas por um protocolo."
    ]
  },
  {
    "numb": 101,
    "question": "Existem muitas estratégias de multiplexação, segundo o protocolo de comunicação empregado, que se pode combiná-las para alcançar um uso mais eficiente. As estratégias demultiplexação mais conhecidas são:",
    "answer": "CDMA - TDMA - FDMA",
    "options": [
      "CDMA - TDMA - XDMA",
      "CDMA - XDMA - FDMA",
      "CDMA - TDMA - FDMA",
      "XDMA - TDMA - FDMA"
    ]
  },
  {
    "numb": 102,
    "question": "No contexto das Redes de Computadores, o entendimento de “janela deslizante” é:",
    "answer": "Trata-se de um mecanismo que consiste na realização de um número de transmissões preestabelecidas sem necessitar de uma confirmação de chegada, o que minimiza o tempo de espera de confirmações.",
    "options": [
      "É denominada “deslizante”, porque todos os pacotes que são enviados através das janelas que oferecem melhor tráfego conseguem ser enviados de forma rápida e sem gargalos de transmissão.",
      "O encaminhamento sistemático de dados não simétricos através de protocolos dinâmicos que podem ter seus fluxos amplamente controlados com o objetivo de se estabelecer diretrizes de retransmissão.",
      "Trata-se de um mecanismo que consiste na realização de um número de transmissões preestabelecidas sem necessitar de uma confirmação de chegada, o que minimiza o tempo de espera de confirmações.",
      "A Refere-se a um processo de transmissão de mensagens que é desencadeado por um determinado“start” de início que libera uma primeira mensagem e, em seguida, todas as demais são enviadas automaticamente."
    ]
  },
  {
    "numb": 103,
    "question": "Para reduzir a complexidade de projeto, as redes de comunicação são normalmente organizadas em camadas ou níveis. A esse respeito, assinale a opção correta.",
    "answer": "As camadas inferiores devem oferecer certos serviços para as camadas superiores, isolando os detalhes de como os serviços oferecidos estão atualmente implementados.",
    "options": [
      "As camadas inferiores devem oferecer certos serviços para as camadas superiores, isolando os detalhes de como os serviços oferecidos estão atualmente implementados.",
      "As interfaces entre as camadas devem ser dependentes, de tal maneira que uma interface não possa ser modificada sem alteração nas camadas intermediárias.",
      "O objetivo das camadas consiste em ofertar serviços de roteamento sem preocupação com a origem e o destino da comunicação.",
      "As camadas devem ficar isoladas para garantir a dependência da multiplexação de unidades de dados de protocolo, para que não ocorram problemas de roteamento."
    ]
  },
  {
    "numb": 104,
    "question": "Quando uma ponte é conectada a uma rede, ela detecta automaticamente os endereços dos dispositivos e os coloca em uma tabela para saber em que segmento eles estão conectados. Esses endereços são conhecidos como:",
    "answer": "MAC.",
    "options": [
      "RIP.",
      "TCP.",
      "MAC.",
      "DNS."
    ]
  },
  {
    "numb": 105,
    "question": "O tempo médio para falhar e o tempo de resposta ao usuário, são exemplos de métricas utilizadas para mensurar:",
    "answer": "confiabilidade e velocidade.",
    "options": [
      "confiabilidade e velocidade.",
      "robustez e portabilidade.",
      "robustez e confiabilidade.",
      "confiabilidade e robustez."
    ]
  },
  {
    "numb": 106,
    "question": "Considere as afirmações sobre alguns conceitos utilizados na Internet: I - Um hyperlink é uma referência dentro de um documento hipertexto a outras partes desse ou de outro documento. II - IMAP é um protocolo que permite o acesso de vários clientes à mesma caixa de correio, mantendo as mensagens de e-mail disponíveis no servidor. III - Um Provedor de Serviço Internet é uma organização que oferece, principalmente, serviços de acesso à Internet.Está(ão) correta(s):",
    "answer": "I, II e III.",
    "options": [
      "Apenas II.",
      "Apenas I e II.",
      "Apenas III.",
      "I, II e III."
    ]
  },
  {
    "numb": 107,
    "question": "Em se falando de redes locais, estas são redes privadas contidas em um único edifício ou campus universitário com até alguns quilômetros de extensão. Elas são amplamente usadas para conectar computadores pessoais e estações de trabalho em escritórios e instalações industriais de empresas, permitindo o compartilhamento de recursos e a troca de informações. As redes locais têm três características que as distinguem de outros tipos de redes:",
    "answer": "Tamanho, tecnologia de transmissão e topologia.",
    "options": [
      "Tamanho, tecnologia de transmissão e topologia.",
      "Duração, velocidade e tecnologia de transmissão.",
      "Extensão, duração e velocidade.",
      "Extensão, profundidade e topologia."
    ]
  },
  {
    "numb": 108,
    "question": "A maioria das placas de rede possui dois LED indicadores de “status”, sendo que um deles indica se a placa de rede está conectada corretamente ao “switch” ou “hub”, que é o:",
    "answer": "“LINK”.",
    "options": [
      "“PING”.",
      "“ACTIVITY”.",
      "“MTRJ”.",
      "“LINK”."
    ]
  },
  {
    "numb": 109,
    "question": "Qual das seguintes alternativas apresenta um Media Access Control Address VÁLIDO?",
    "answer": "28:00:ab:60:ff:eb",
    "options": [
      "ag:33:60:f9:ac",
      "28:00:ab:60:ff:eb",
      "12:33:11:33:44",
      "b8:f9:h4:ef:22:11"
    ]
  },
  {
    "numb": 110,
    "question": "A rede de computadores, que disponibiliza um conjunto de serviços análogo à Internet, também baseada na pilha de protocolos TCP/IP, sendo restrita a um local físico, ou seja, é uma rede fechada, interna e exclusiva, é denominada de:",
    "answer": "Intranet.",
    "options": [
      "Internet.",
      "Intranet.",
      "Extranet.",
      "DNS."
    ]
  },
  {
    "numb": 111,
    "question": "Modelo de referência de redes dividido em 7 camadas, cada uma com sua função.",
    "answer": "OSI",
    "options": [
      "OSI",
      "IEEE",
      "HÍBRIDO",
      "TCP/IP"
    ]
  },
  {
    "numb": 112,
    "question": "Dispositivo de rede que trabalha na camada de enlace (camada 2 do modelo OSI), faz endereçamento de quadros de dados através do endereço MAC (físico).",
    "answer": "SWITCH",
    "options": [
      "HUB",
      "REPETIDOR",
      "SWITCH",
      "ROTEADOR"
    ]
  },
  {
    "numb": 113,
    "question": "Essa camada transforma os dados em bits e o transmite pelo meio de comunicação.",
    "answer": "Física",
    "options": [
      "Enlace",
      "Física",
      "Transporte",
      "Rede"
    ]
  },
  {
    "numb": 114,
    "question": "Existem dois protocolos trabalhando nessa camada, o TCP e o UDP.",
    "answer": "Transporte",
    "options": [
      "Enlace",
      "Aplicação",
      "Transporte",
      "Rede"
    ]
  },
  {
    "numb": 115,
    "question": "Essa camada divide-se em 2 subcamadas: - LLC (Logical Link Control – Controle Lógico do Enlace)- MAC (Medium Access Control – Controle de Acesso ao Meio)",
    "answer": "Enlace",
    "options": [
      "Enlace",
      "Transporte",
      "Física",
      "Rede"
    ]
  },
  {
    "numb": 116,
    "question": "Essa camada deve tornar transparente para a camada de transporte a forma como os recursos dos níveis inferiores são usados para implementar conexões de rede e equalizar as diferenças entre as diversas sub-redes utilizadas de forma a fornecer um serviço único a seus usuários.",
    "answer": "Rede",
    "options": [
      "Enlace",
      "Aplicação",
      "Rede",
      "Trasnporte"
    ]
  },
  {
    "numb": 117,
    "question": "Essa camada é responsável pelo controle de sequência e controle de erro: organização dos dados a fim de evitar perdas, duplicação ou entrega fora de ordem e controle de fluxo.",
    "answer": "Transporte",
    "options": [
      "Sessão",
      "Transporte",
      "Enlace",
      "Aplicação"
    ]
  },
  {
    "numb": 118,
    "question": "As principais funções dessa camada OSI/ISO são:  Formatação do dados - Criptografia dos dados - Compactação dos dados.",
    "answer": "Apresentação",
    "options": [
      "Sessão",
      "Rede",
      "Aplicação",
      "Apresentação"
    ]
  },
  {
    "numb": 119,
    "question": "Nessa camada são definidos os serviços de usuário, como operação de correio, transferência de arquivos, etc. É a camada mais próxima do sistema final.",
    "answer": "Aplicação",
    "options": [
      "Sessão",
      "Transporte",
      "Enlace",
      "Aplicação"
    ]
  },
  {
    "numb": 120,
    "question": "A comunicação ocorre em um sentido e depois no outro, mas não simultaneamente;",
    "answer": "Half-Duplex",
    "options": [
      "Half-Duplex",
      "Simplex",
      "Quadriplex",
      "Full-Duplex"
    ]
  },
  {
    "numb": 121,
    "question": "Esse dispositivo gera os sinais novamente, e os retemporiza para que trafeguem a uma distância maior. É um dispositivo de porta única de entrada e porta única de saída.",
    "answer": "Repetidor",
    "options": [
      "Hub",
      "Switch",
      "Repetidor",
      "Roteador"
    ]
  },
  {
    "numb": 122,
    "question": "Esse dispositivo: Concentra diversos hosts, conhecido como repetidor multiportas, cria um ponto de conexão central.",
    "answer": "Hub",
    "options": [
      "Switch",
      "Hub",
      "Repetidor",
      "Modem"
    ]
  },
  {
    "numb": 123,
    "question": "Tecnologia de rede local desenvolvida nos anos 1970 pela xerox:",
    "answer": "Ethernet",
    "options": [
      "Frame Relay",
      "Ethernet",
      "Token Rig",
      "ATM"
    ]
  },
  {
    "numb": 124,
    "question": "Dentre todas as funções dessa camada, a principal é a escolha do melhor caminho entre origem e destino, principalmente quando mais de um caminho pode ser usado.",
    "answer": "Rede",
    "options": [
      "Aplicação",
      "Transporte",
      "Rede",
      "Enlace"
    ]
  },
  {
    "numb": 125,
    "question": "Segundo Tanenbaum é um modelo de referência de redes dividido em 4 camadas, cada uma com sua função.",
    "answer": "TCP/IP",
    "options": [
      "HÍBRIDO",
      "OSI",
      "TCP/IP",
      "IEEE"
    ]
  },
  {
    "numb": 126,
    "question": "Essa camada deve tornar transparente para a camada de transporte a forma como os recursos dos níveis inferiores são usados para implementar conexões de rede e equalizar as diferenças entre as diversas sub-redes utilizadas de forma a fornecer um serviço único a seus usuários.",
    "answer": "Rede",
    "options": [
      "Enlace",
      "Rede",
      "Transporte",
      "Aplicação"
    ]
  },
  {
    "numb": 127,
    "question": "Essa camada é responsável pelo controle de sequência e controle de erro: organização dos dados a fim de evitar perdas, duplicação ou entrega fora de ordem e controle de fluxo.",
    "answer": "Transporte",
    "options": [
      "Aplicação",
      "Enlace",
      "Transporte",
      "Sessão"
    ]
  },
  {
    "numb": 128,
    "question": "Nessa camada são definidos os serviços de usuário, como operação de correio, transferência de arquivos, etc. É a camada mais próxima do sistema final.",
    "answer": "Aplicação",
    "options": [
      "Enlace",
      "Aplicação",
      "Transporte",
      "Sessão"
    ]
  },
  {
    "numb": 129,
    "question": "O que é uma rede de computadores?",
    "answer": "Conjuntos de dispositivos autônomos interconectados que podem se comunicar e compartilhar recursos",
    "options": [
      "Um firewall utilizado para proteger redes locais",
      "Conjuntos de dispositivos autônomos interconectados que podem se comunicar e compartilhar recursos",
      "Software para conectar computadores em uma rede local",
      "Dispositivo para os usuários interagirem com o computador"
    ]
  },
  {
    "numb": 130,
    "question": "Conjunto de dispositivos (normalmente conhecidos como nós) conectados por links de comunicação é a definição mais genérica de redes de computadores. Qual o objetivo principal das redes de computadores?",
    "answer": "Compartilhamento de recursos e comunicação",
    "options": [
      "Compartilhamento de recursos e comunicação",
      "Controlar o acesso a Internet",
      "Executar programas de forma centralizada",
      "Executar jogos online"
    ]
  },
  {
    "numb": 131,
    "question": "Os nós de uma rede de computadores podem",
    "answer": "Todas as opções",
    "options": [
      "Receber dados",
      "Enviar dados",
      "Rotear dados",
      "Todas as opções"
    ]
  },
  {
    "numb": 132,
    "question": "Os sistemas finais (hosts) que executam programas de aplicação em redes de computadores ficam localizados..",
    "answer": "na borda da rede",
    "options": [
      "nos enlaces",
      "nas redes de acesso",
      "na borda da rede",
      "no núcleo da rede"
    ]
  },
  {
    "numb": 133,
    "question": "Em redes de computadores, a comunicação é feita segundo regras bem definidas, e essas regras são chamadas de",
    "answer": "Protocolos",
    "options": [
      "Modelos",
      "Normas",
      "Protocolos",
      "Algoritmos"
    ]
  },
  {
    "numb": 134,
    "question": "O modelo de rede criado como referência teórica é o modelo:",
    "answer": "OSI/ISO",
    "options": [
      "TCP/IP",
      "IETF",
      "ITU-T",
      "OSI/ISO"
    ]
  },
  {
    "numb": 135,
    "question": "O modelo de rede prático implementado na Internet ?",
    "answer": "TCP/IP",
    "options": [
      "TCP/IP",
      "WWW",
      "HTTP",
      "OSI/ISO"
    ]
  },
  {
    "numb": 136,
    "question": "O que significa a sigla OSI?",
    "answer": "Interconexão de Sistemas Abertos",
    "options": [
      "Interconexão de Sistemas Abertos",
      "Organização de Sistemas Interligados",
      "Operação de Serviços de Internet",
      "Otimização de Sistemas Integrados"
    ]
  },
  {
    "numb": 137,
    "question": "Qual alternativa divide a mensagem em pequenas unidades que são transmitidas e não requer a reserva de recursos de uma conexão dedicada?",
    "answer": "comutação de pacotes",
    "options": [
      "comutação de bits",
      "comutação de circuitos",
      "comutação de pacotes",
      "comutação de segmentos"
    ]
  },
  {
    "numb": 138,
    "question": "O modelo de referência OSI/ISO é dividido em quantas camadas:",
    "answer": "7",
    "options": [
      "6",
      "5",
      "4",
      "7"
    ]
  },
  {
    "numb": 139,
    "question": "Na comunicação entre dois dispositivos existem 3 (três) modos comuns de comunicação para utilizar o meio físico para transmitir dados, qual das opções NÃO é um destes modos?",
    "answer": "Half-Simplex",
    "options": [
      "Half-Duplex",
      "Half-Simplex",
      "Full-Duplex",
      "Simplex"
    ]
  },
  {
    "numb": 140,
    "question": "Em redes de computadores, os tipos de comunicação definem como os dados são transmitidos entre dispositivos. Os modos de transmissão podem ser Unicast, Multicast, Broadcast e Anycast. O modo Broadcast significa",
    "answer": "um para todos",
    "options": [
      "um para algum",
      "um pra muitos",
      "um para todos",
      "um para um"
    ]
  },
  {
    "numb": 141,
    "question": "Topologia física de redes de computadores determina os caminhos físicos existentes e utilizáveis entre quaisquer pares de estações conectadas a essa rede. Qual topologia requer conexão com um ponto central de distribuição de comunicação?",
    "answer": "Estrela",
    "options": [
      "Barramento",
      "Estrela",
      "Anel",
      "Malha"
    ]
  },
  {
    "numb": 142,
    "question": "Rede sem limite de distância e geograficamente distribuída.",
    "answer": "WAN",
    "options": [
      "MAN",
      "WAN",
      "LAN",
      "PAN"
    ]
  },
  {
    "numb": 143,
    "question": "Qual meio de transmissão é considerado não guiado?",
    "answer": "Bluetooth",
    "options": [
      "Coaxial",
      "Par Trançado",
      "Bluetooth",
      "Fibra Óptica"
    ]
  },
  {
    "numb": 144,
    "question": "Qual meio de transmissão oferece a maior velocidade de transmissão?",
    "answer": "Fibra Óptica",
    "options": [
      "Wi-Fi",
      "Coaxial",
      "Fibra Óptica",
      "Par Trançado"
    ]
  },
  {
    "numb": 145,
    "question": "Cabos par trançado podem ser classificados quanto a blindagem, qual das opções a seguir NÃO possuem blindagem?",
    "answer": "UTP",
    "options": [
      "STP",
      "FTP",
      "SSTP",
      "UTP"
    ]
  },
  {
    "numb": 146,
    "question": "Considere as seguintes afirmações relativas a circuitos virtuais, marque a alternativa correta? I - O roteamento dos pacotes é feito no momento da transmissão dos dados, pacote por pacote, em cada roteador ou switch; II- Os dados de um fluxo chegam de forma ordenada no seu destino, pois percorrem os mesmos caminhos; III- Os caminhos utilizados por um circuito virtual são exclusivos dos fluxos de dados que utilizam este circuito virtual.",
    "answer": "Apenas II e III",
    "options": [
      "Apenas I",
      "Apenas II",
      "Apenas III",
      "Apenas II e III"
    ]
  },
  {
    "numb": 147,
    "question": "Em uma rede de longa distância, onde os enlaces entre os roteadores são formados por circuitos virtuais sobre um rede contratada, com relação aos pacotes transmitidos ao longo desta rede, pode-se dizer que os pacotes entre: A) roteadores distantes de até dois saltos chegam em ordem, os pacotes entre roteadores distantes de três ou mais saltos não, necessariamente, chegam em ordem; B) dois roteadores quaisquer, distantes de um ou mais saltos, necessariamente, chegam em ordem; C) dois roteadores quaisquer, distantes de um ou mais saltos, não, necessariamente, chegam em ordem; D) roteadores vizinhos, necessariamente, chegam em ordem; os pacotes entre roteadores distantes de dois ou mais saltos não, necessariamente, chegam em ordem.",
    "answer": "B",
    "options": [
      "C",
      "D",
      "A",
      "B"
    ]
  },
  {
    "numb": 148,
    "question": "Analise as seguintes afirmativas sobre a camada de rede e marque a correta: I - Um datagrama IP é encapsulado em um quadro para transmissão através de redes fisicas que podem utilizar tecnologias diferentes. II - O protocolo IP oferece um serviço do tipo best effort delivery e por isso não garante a entrega dos datagramas; III - O endereço de destino contido no cabeçalho do datagrama IP não é alterado no processo de roteamento, diferentemente, do endereço de destino do quadro que se altera a cada salto.",
    "answer": "As afirmativas I, II e III estão corretas.",
    "options": [
      "A afirmativa III está errada e as afirmativas I, II estão corretas.",
      "As afirmativas I, II e III estão corretas.",
      "A afirmativa II está errada e as afirmativas I, III estão corretas.",
      "A afirmativa I está errada e as afirmativas II, III estão corretas."
    ]
  },
  {
    "numb": 149,
    "question": "Qual a opção correta sobre a fragmentação de datagramas por roteadores? a) O roteador que dá acesso à rede com MTU insuficiente fragmenta o datagrama, sendo a remontagem feita pelo próximo roteador; b) Um roteador intermediário ou o host de destino final podem fazer a remontagem; c) Cada fragmento pode ser fragmentado novamente, mas a remontagem ocorre apenas no host de destino final; d) Roteadores não realizam o procedimento de fragmentação.",
    "answer": "A",
    "options": [
      "D",
      "C",
      "A",
      "B"
    ]
  },
  {
    "numb": 150,
    "question": "O protocolo ARP obtêm o endereço MAC a partir de uma consulta do IP . Esse mapeamento é registrado em uma tabela ARP. A) os mapeamentos obtidos a partir de todas as msgs de ARP Request que trafegam pela rede, já que essas msgs são sempre enviadas utilizando o endereço de Broadcast; B) os mapeamentos obtidos a partir de todas as mensagens de ARP Reply que trafegam pela rede, já que essas msgs são sempre enviadas utilizando o endereço de broadcast; C) apenas os mapeamentos obtidos pelas respostas enviadas pelo roteador de saída da sub-rede; D) apenas os mapeamentos obtidos pelas respostas enviadas por um servidor DHCP a solicitações enviadas por broadcast.",
    "answer": "A",
    "options": [
      "D",
      "B",
      "C",
      "A"
    ]
  },
  {
    "numb": 151,
    "question": "O RIP é um protocolo de roteamento intradomínio, utilizado dentro de um sistema autônomo, considerado um protocolo",
    "answer": "Vetor de distância.",
    "options": [
      "Vetor de distância.",
      "Vetor de caminho.",
      "Vetor de rota.",
      "Contador de nós."
    ]
  },
  {
    "numb": 152,
    "question": "A implementação de um circuito em um enlace ocorre por quais tipos de multiplexação?",
    "answer": "Por divisão de frequência (FDM) ou por divisão de tempo (TDM).",
    "options": [
      "Por divisão de frequência (FDM) ou por divisão de tempo (TDM).",
      "Por divisão de intensidade (IDM) ou por divisão de conexões (CDM).",
      "Por multiplicação de frequência (FMM) ou por multiplicação de tempo (TMM).",
      "Por divisão de frames (DFM) ou por divisão de categorias (CDM)."
    ]
  },
  {
    "numb": 153,
    "question": "No endereçamento do IPv6 existem três tipos de endereços, diferentes do IPv4 , que são:",
    "answer": "anycast, multicast e unicast",
    "options": [
      "broadcast, unicast e geocast",
      "anycast, broadcast e multicast",
      "anycast, multicast e unicast",
      "broadcast, multicast e unicast"
    ]
  },
  {
    "numb": 154,
    "question": "Sobre os meios de transmissão de dados podemos afirmar que:",
    "answer": "A fibra óptica pode ser Monomodo ou Multimodo.",
    "options": [
      "A fibra óptica pode ser Monomodo ou Multimodo.",
      "Cabo par trançado possui ioto filamento de cobre e alcança velocidade de transmissão melhor que fibra óptica.",
      "Wi-Fi é a transmissão de sinal por meio de fibra óptica.",
      "Cabo par trançado possui um único filamento de cobre e uma blindagem."
    ]
  },
  {
    "numb": 155,
    "question": "Sobre tipos de transmissão de dados, podemos afirmar que:",
    "answer": "Na transmissão síncrona os dados são enviados em blocos e transmitidos em intervalos de tempo definidos.",
    "options": [
      "Na transmissão síncrona os dados são enviados em blocos e transmitidos em intervalos de tempo definidos.",
      "Full-duplex os dados são transmitidos e recebidos, porém não ao mesmo tempo.",
      "Transmissão simplex a comunicação é bidirecional, ou seja em vários sentidos.",
      "Na transmissão assíncrona os caracteres são enviados juntos e sem controle de tempo entre um e outro."
    ]
  },
  {
    "numb": 156,
    "question": "Qual das seguintes afirmações é verdadeira em relação ao IPv4 e IPv6?",
    "answer": "O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.",
    "options": [
      "O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.",
      "O IPv4 é mais seguro do que o IPv6 devido à criptografia incorporada. ",
      "O IPv6 não garante a entrega dos dados, enquanto o IPv4 garante a entrega confiável.a",
      "O IPv4 é mais rápido que o IPv6 devido à ausência de cabeçalhos adicionais."
    ]
  },
  {
    "numb": 157,
    "question": "Um profissional precisa fazer o cabeamento de uma rede utilizando o padrão Ethernet 10BASE-T. Todos os nós da rede serão conectados por cabos de par trançado a um switch, de forma que a rede tenha topologia em estrela. Nestas condições, o comprimento máximo do segmento de cabo sem repetidor deve ser de:",
    "answer": "100 m.",
    "options": [
      "50 m.",
      "200 m.",
      "80 m.",
      "100 m."
    ]
  },
  {
    "numb": 158,
    "question": "Qual método de acesso ao meio físico durante a transmissão em uma rede local que se baseia no princípio de escutar o meio, transmitir e, em seguida, verificar se ocorreu colisão durante a transmissão?",
    "answer": "CSMA-CD",
    "options": [
      "Frame Relay",
      "PPPoE",
      "CSMA-CD",
      "CSMA-CA"
    ]
  },
  {
    "numb": 159,
    "question": "Por padrão, transmissões realizadas, utilizando a tecnologia ADSL, são executadas através de quantos pares trançados?",
    "answer": "1 Par",
    "options": [
      "2 Pares",
      "8 Pares",
      "4 Pares",
      "1 Par"
    ]
  },
  {
    "numb": 160,
    "question": "A tecnologia ADSL também é conhecida como DSL assimétrico, pois:",
    "answer": "oferece velocidades diferentes de downstream e upstream.",
    "options": [
      "trabalha em diversas frequências.",
      "oferece velocidades diferentes de downstream e upstream.",
      "pode ser implementada com cabos de tamanhos diferentes.",
      "utiliza tamanhos de pacotes diferentes."
    ]
  },
  {
    "numb": 161,
    "question": "A respeito de conceitos de Internet e Intranet, analise as seguintes afirmações:I) A Internet é uma rede pública de comunicação de dados, com controle estritamente centralizado e que utiliza o conjunto de protocolos TCP/IP como base para a estrutura de comunicação e seus serviços de rede.II) A arquitetura TCP/IP fornece não somente os protocolos que habilitam a comunicação de dados entre as redes, como também define uma série de aplicações que contribuem para o funcionamento da Internet.III) A Internet é considerada um sistema aberto, uma vez que seus protocolos básicos são definidos publicamente através de RFCs.IV) A Intranet é uma rede local de computadores, interna de uma instituição, na qual podem ser utilizados os mesmos protocolos de comunicação empregados na Internet.Estão corretas:",
    "answer": "apenas II, III e IV.",
    "options": [
      "apenas I e II.",
      "apenas I, II e III.",
      "apenas II e III.",
      "apenas II, III e IV."
    ]
  },
  {
    "numb": 162,
    "question": "Uma das principais preocupações ao se realizar transações eletrônicas através da internet está na segurança da comunicação entre o computador do usuário e o servidor que provê o produto/serviço. Esta segurança e proporcionada pela criptografia dos dados entre as duas partes da comunicação, através de um protocolo específico, que usualmente é representado antes do endereço do site no qual se está navegando. Dentre os protocolos abaixo mencionados, qual representaria uma conexão criptografada entre o cliente e o servidor?",
    "answer": "https",
    "options": [
      "http",
      "ftp",
      "smtp",
      "https"
    ]
  },
  {
    "numb": 163,
    "question": "Um canal de comunicação precisa ser utilizado por diversas máquinas simultaneamente. Qual técnica permite a divisão desse canal?",
    "answer": "Multiplexação por divisão de tempo.",
    "options": [
      "Duplexação por divisão de frequência.",
      "Multiplexação por divisão de tempo.",
      "Modulação em frequência.",
      "Janelas deslizantes."
    ]
  },
  {
    "numb": 164,
    "question": "Nas Redes de Computadores, um cliente conecta-se à este servidor, solicitando algum serviço, como um arquivo, conexão, página web ou outros recursos disponíveis e ele avalia a solicitação como um meio de simplificar e controlar sua complexidade. Ele funciona como um intermediário que fica entre o computador do usuário e a Internet. Além de ser utilizado para registrar o uso, pode também bloquear o acesso a sites da Internet. Esta definição se refere ao servidor de rede:",
    "answer": "Proxy.",
    "options": [
      "Firewall.",
      "Proxy.",
      "FTP.",
      "DNS."
    ]
  },
  {
    "numb": 165,
    "question": "Acerca da arquitetura cliente/servidor, assinale a alternativa que apresenta as principais características da arquitetura.",
    "answer": "Uma das principais características da arquitetura cliente/servidor é o fato de um cliente, mesmo solicitando serviços ou recursos em um servidor, não estar apto a compartilhar seus recursos computacionais.",
    "options": [
      "Na arquitetura cliente/servidor, cada instância de software instalado no computador cliente deve aguardar a finalização de uma requisição enviada ao servidor por outro software para que uma nova comunicação possa ser estabelecida.",
      "Na arquitetura cliente/servidor, os computadores clientes nem sempre iniciam as sessões de comunicação com os servidores. A comunicação pode partir dos servidores, onde o cliente desenvolve o papel de servidor e vice-versa.",
      "Uma das principais características da arquitetura cliente/servidor é o fato de um cliente, mesmo solicitando serviços ou recursos em um servidor, não estar apto a compartilhar seus recursos computacionais.",
      "Na arquitetura cliente/servidor o processo da informação é dividido em 2 processos: Processo cliente, responsável pela manutenção da informação, e processo servidor, responsável pela obtenção dos dados."
    ]
  },
  {
    "numb": 166,
    "question": "Os tipos de serviço orientado e não orientado à conexão são fornecidos por protocolos da camada de transporte e também da camada de rede. Acerca do tipo de serviço orientado à conexão, assinale a alternativa correta.",
    "answer": "Para realizar a troca de dados, é necessário, primeiro, o estabelecimento de uma conexão lógica entre o cliente e o servidor.",
    "options": [
      "O serviço orientado à conexão é igual tanto na camada de transporte quanto na camada de rede.",
      "Nesse tipo de serviço, os aplicativos precisam dividir suas mensagens em blocos de dados exatamente iguais para que sejam aceitáveis pela camada de transporte e, posteriormente, enviados.",
      "Para realizar a troca de dados, é necessário, primeiro, o estabelecimento de uma conexão lógica entre o cliente e o servidor.",
      "Na camada de transporte, esse tipo de serviço realiza um controle entre as duas estações finais e todos os roteadores entre elas."
    ]
  },
  {
    "numb": 167,
    "question": "Considerando o modelo TANENBAUM (4 camadas) de referência TCP/IP, os protocolos FTP, IP e UDP pertencem, respectivamente, às camadas:",
    "answer": "aplicação, inter-redes e transporte.",
    "options": [
      "aplicação, transporte e inter-redes.",
      "física, transporte e aplicação.",
      "aplicação, inter-redes e transporte.",
      "transporte, inter-redes e física."
    ]
  },
  {
    "numb": 168,
    "question": "Para conectar um novo dispositivo a uma rede corporativa, é necessário informar o número deidentificação do hardware. Esse número é informado por meio do:",
    "answer": "MAC ADDRESS",
    "options": [
      "MAC ADDRESS",
      "IP",
      "HTTP",
      "PORTA"
    ]
  },
  {
    "numb": 169,
    "question": "O correio eletrônico, também conhecido como e-mail, é um programa em que é possívelrealizar trocas de mensagens pela internet . Através dele é possível o envio e a troca de documentos, imagens e áudios para qualquer pessoa que possua um endereço de correio eletrônico. Que nome se dá ao arquivo que é incluído em uma mensagem de e-mail?",
    "answer": "Anexo",
    "options": [
      "Atalho",
      "Anexo",
      "Browser",
      "URL"
    ]
  },
  {
    "numb": 170,
    "question": "Com relação ao firewall, é possível afirmar que:",
    "answer": "pode ser tanto um dispositivo de hardware quanto um software.",
    "options": [
      "trata-se do processo em que dados e arquivos são armazenados virtualmente.",
      "não segue regras especificas.",
      "pode ser tanto um dispositivo de hardware quanto um software.",
      "é um protocolo de transferência de arquivos sigilosos."
    ]
  },
  {
    "numb": 171,
    "question": "O que é um firewall de aplicação web (WAF)?",
    "answer": "Um dispositivo que protege aplicativos da web contra ataques",
    "options": [
      "Um dispositivo que filtra spam em e-mails",
      "Um dispositivo que controla o tráfego de rede com base em endereços MAC",
      "Um dispositivo que protege aplicativos da web contra ataques",
      "Um dispositivo que gerencia endereços IP na rede"
    ]
  },
  {
    "numb": 172,
    "question": "Qual é a principal função de um roteador em uma rede de computadores?",
    "answer": "Encaminhar pacotes de dados entre redes distintas",
    "options": [
      "Encaminhar pacotes de dados entre redes distintas",
      "Conectar dispositivos na mesma rede local",
      "Fornecer endereços IP para dispositivos",
      "Armazenar dados de tráfego de rede"
    ]
  }
]