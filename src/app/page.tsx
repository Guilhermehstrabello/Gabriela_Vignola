import Faq from "./components/faq";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[100px]">
      <section className="flex flex-col gap-8 my-24 lg:flex-row">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-7xl text-6xl text-[#403E3E] font-medium">
            <span className="font-bold tracking-[-0.08em]">Descubra </span>
            Como se Tornar uma
            <span className="font-bold text-[#b2625c] tracking-[-0.08em]">
              {" "}
              UGC Creator{" "}
            </span>
            de Sucesso em
            <span className="font-bold tracking-[-0.08em]"> 2024.</span>
          </h1>
          <p className="text-2xl text-[#403E3E]">
            Eu desenvolvi um <span className="font-bold">manual</span> passo a
            passo para você se tornar uma UGC Creator. Descubra agora como dar o{" "}
            <span className="font-bold">primeiro</span> passo e comece a trilhar
            seu caminho rumo ao <span className="font-bold">sucesso.</span>
          </p>
          <a
            href="#scroll"
            className="bg-[#B2625C] w-72 text-center mx-auto lg:mx-0 font-semibold text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
          >
            Quero Descobrir!!
          </a>
        </div>
        <img
          className="w-[420px] rounded-lg xl:mr-0"
          src="/hero.png"
          alt="Imagem da seção Hero"
        />
      </section>

      <section className="flex flex-col py-8 gap-10 justify-center">
        <div
          id="scroll"
          className="bg-[#403E3E] rounded-xl py-6 px-6 text-[26px] flex justify-center items-center"
        >
          <h2 className="text-[#FDFDFD] tracking-[-0.04em] text-center">
            <span className="font-bold">Receba produtos grátis</span>, crie
            conteúdo e <span className="font-bold">seja paga</span>, sem{" "}
            <span className="font-bold">precisar</span> de{" "}
            <span className="font-bold">seguidores</span> ou{" "}
            <span className="font-bold">postar</span>.
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            className="w-44"
            src="/mousescroll.gif"
            alt="Gif de um scroll de mouse"
          />
        </div>
      </section>

      <section className="py-28 gap-x-4 flex-col flex lg:flex-row">
        <div className="space-y-12 max-w-[640px]">
          <h1 className="font-medium text-4xl text-[#403E3E] tracking-[-0.08em]">
            Tá, Mas <span className="font-bold text-6xl">O Que é UGC?</span>
          </h1>
          <p className="font-medium text-2xl text-[#403E3E] tracking-[-0.04em]">
            UGC é a sigla para User Generated Content, em português Conteúdo
            Gerado por Usuário. Mas o que exatamente é isso? Trata-se de
            conteúdos criados por pessoas comuns assim como eu e você, para
            marcas que gostamos. <br /> <br />
            Esse tipo de conteúdo sempre foi produzido de forma orgânica, mas
            faz algum tempo que profissionalizou-se esse estilo no mercado de
            creators. Seu maior benefício é oferecem autenticidade, humanização
            e geram confiança na marca, pois são produzidos a partir de uma
            experiência genuína de usuário, que criam para marcas com as quais
            se identificam. <br /> <br />O UGC vêm se mostrando extremamente
            eficaz em aumentar a visibilidade online sem a necessidade de
            grandes investimentos em publicidade. Cada vez mais e mais mulheres
            tornam-se criadoras de conteúdo através dessa profissão, criando uma
            nova fonte de renda, trabalhando de casa, ganhando recebidinhos e
            sendo paga para gravar vídeos sem precisar postar!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 mt-4 lg:mt-0">
          <img
            src="/image1.png"
            alt="Imagem 1"
            className="w-full h-full object-contain"
          />
          <img
            src="/image2.png"
            alt="Imagem 2"
            className="w-full h-full object-contain"
          />
          <img
            src="/image3.png"
            alt="Imagem 3"
            className="col-span-2 w-full h-full object-contain"
          />
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mb-20">
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] w-72 text-center mx-auto my-10 lg:mx-0 font-bold text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          QUERO COMEÇAR!
        </a>
      </div>

      <section className="space-y-10">
        <h1 className="lg:text-6xl text-5xl text-center mx-auto text-[#403E3E] font-bold tracking-[-0.08em]">
          UGC Examples
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <video className="w-full h-full rounded-xl" controls>
            <source src="video4.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <video className="w-full h-full rounded-xl" controls>
            <source src="video2.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <video className="w-full h-full rounded-xl" controls>
            <source src="video3.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <video className="w-full h-full rounded-xl" controls>
            <source src="video1.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
      </section>

      <section className="my-32 flex flex-col lg:flex-row gap-6">
        <div className="flex items-center">
          <img src="/comecar.png" className="w-[450px] rounded-lg" alt="" />
        </div>
        <div className="max-w-[780px]">
          <h1 className="text-[#403E3E] font-medium text-4xl lg:text-5xl tracking-[-0.08em]">
            Esse é o Sinal para <br />{" "}
            <span className="font-bold text-6xl lg:text-7xl">
              {" "}
              Você <span className="text-[#B2625C]">Começar</span> no UGC
            </span>
          </h1>
          <div className="mt-8">
            <div className="p-5 mb-6 bg-[#403E3E] rounded-xl w-[320px] flex justify-right lg:text-3xl text-2xl font-bold text-[#FDFDFD] tracking-[-0.08em]">
              <h3>Oportunidade Única</h3>
            </div>
            <p className="text-[#403E3E] font-medium text-2xl tracking-[-0.08em]">
              Transforme sua criatividade em lucro, mesmo sem seguidores ou
              presença online. É sua chance de entrar no mercado de criação de
              conteúdo de maneira simples e acessível .
            </p>
          </div>
          <div className="mt-8">
            <div className="p-5 mb-6 bg-[#403E3E] rounded-xl w-[360px] flex justify-right lg:text-3xl text-2xl font-bold text-[#FDFDFD] tracking-[-0.08em]">
              <h3>Receba Produtos Grátis</h3>
            </div>
            <p className="text-[#403E3E] font-medium text-2xl tracking-[-0.08em]">
              Ganhe acesso a produtos das suas marcas favoritas sem gastar um
              centavo. Além disso, você será paga para compartilhar sua opinião
              e experiência com eles .
            </p>
          </div>
          <div className="mt-8">
            <div className="p-5 mb-6 bg-[#403E3E] rounded-xl w-[290px] flex justify-right lg:text-3xl text-2xl font-bold text-[#FDFDFD] tracking-[-0.08em]">
              <h3>Flexibilidade Total</h3>
            </div>
            <p className="text-[#403E3E] font-medium text-2xl tracking-[-0.08em]">
              Trabalhe no seu próprio ritmo, sem a pressão de postar nas suas
              redes. O foco é na criação de conteúdos autênticos, sem precisar
              manter um <br /> perfil ativo .
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mb-20">
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] w-76 text-center mx-auto my-10 lg:mx-0 font-semibold text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          Quero começar agora!
        </a>
      </div>

      <section className="flex flex-col mx-auto justify-center gap-10">
        <h1 className="text-[#403E3E] text-center font-bold lg:text-6xl text-5xl tracking-[-0.08em]">
          {" "}
          O Que é o Manual UGC?{" "}
        </h1>
        <p className="text-[#403E3E] font-normal text-2xl md:text-3xl lg:text-3xl">
          O Manual UGC é um guia que vai te ajudar, não só a entender mais sobre
          o UGC, mas também te ensinar o que você deve fazer para começar nessa
          nova profissão. Você terá todo o conhecimento necessário e o passo a
          passo prático para começar a ver resultados; estou te entregando uma
          estrutura de um negócio validado, que me faz faturar quase dois
          salários mínimos por mês trabalhando apenas poucas horas por semana.
        </p>
        <h3 className="mx-auto text-[#403E3E] font-semibold text-5xl">
          O Manual por dentro!
        </h3>
        <div className="container flex justify-center mx-auto p-4">
          <table className="max-w-[600px] border-collapse border border-[#403E3E]">
            <thead>
              <tr>
                <th className="border border-[#403E3E] text-left font-bold p-2">
                  Temas
                </th>
                <th className="border border-[#403E3E] text-left font-normal p-2">
                  Conteúdos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  O que é UGC
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Conceito e Prática
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Perfil Pré Portfólio
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Usando as redes com estratégia
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Os Primeiros Passos
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Como começar
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Contato com Marcas
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Prospecção de clientes
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Tabela de Valores
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Quanto cobrar
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Contratos
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Burocracias
                </td>
              </tr>
              <tr>
                <td className="border border-[#403E3E] text-left font-bold p-2">
                  Entrega Final
                </td>
                <td className="border border-[#403E3E] text-left font-normal p-2">
                  Como finalizar de forma certa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#403E3E] font-medium text-2xl md:text-3xl lg:text-3xl">
          Você não estará sozinha, vou te pegar na mão e te guiar de “não sei
          nada sobre UGC” para “tenho tudo para começar e me lançar no mercado
          digital”. <br /> <br />
          Se você já ama gravar vídeos, compartilhar suas experiências e sempre
          sonhou em ter uma vida de blogueira, o Manual UGC é tudo que você
          precisa para ter sucesso na sua jornada!
        </p>
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] mx-auto w-[370px] lg:w-[470px] text-center font-medium lg:text-2xl text-xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          Quero Ter Acesso ao Manual!
        </a>
      </section>

      <section className="mx-auto mt-32 flex flex-col justify-center">
        <h1 className="text-[#403E3E] text-center font-bold lg:text-6xl text-5xl">
          Para Quem é o UGC?
        </h1>
        <h3 className="text-[#403E3E] text-center font-medium lg:text-5xl text-4xl mt-10">
          Se Você...
        </h3>
        <div className="flex flex-col mt-20 gap-y-8">
          <div className="flex flex-row justify-center items-center space-x-16 lg:space-x-24">
            <img src="/camera.svg" alt="" />
            <p className="text-[#403E3E] font-normal text-2xl w-[470px]">
              Gosta de gravar e editar vídeos curtos para redes sociais;
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-16 lg:space-x-24">
            <img src="/laptop.svg" alt="" />
            <p className="text-[#403E3E] font-normal text-2xl w-[470px]">
              Quer trabalhar de qualquer lugar, no seu próprio ritmo;
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-16 lg:space-x-24">
            <img src="/megafone.svg" alt="" />
            <p className="text-[#403E3E] font-normal text-2xl w-[470px]">
              Deseja fazer parte de uma nova tendência que está revolucionando o
              marketing digital;
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-16 lg:space-x-24">
            <img src="/comentarios.svg" alt="" />
            <p className="text-[#403E3E] font-normal text-2xl w-[470px]">
              É boa em compartilhar suas experiências e opiniões nas <br />{" "}
              redes sociais;
            </p>
          </div>
        </div>
        <p className="text-[#403E3E] font-medium text-[28px] tracking-[-0.04em] mt-14 mb-12">
          Então, o UGC é para <span className="font-bold"> você!</span> <br />
          Não importa se você é uma iniciante ou já tem experiência em criação
          de conteúdo – o Manual vai te ajudar a se tornar uma UGC Creator, de
          uma maneira rápida e direta, diferente de quando eu comecei no
          mercado, que mal tinha conteúdo Brasileiro, e os que tinham, eram
          cursos com um valor elevado que eu não podia pagar.
        </p>
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] mx-auto w-[390px] text-center font-semibold text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          Quero Começar com o UGC!
        </a>
      </section>

      <section className="mt-40 mx-auto">
        <div className="flex lg:flex-row flex-col gap-x-10 gap-y-10 justify-center items-center">
          <div className="flex flex-col">
            <h3 className="text-[#403E3E] font-bold text-3xl mb-6">
              O que está incluso:
            </h3>
            <p className="text-2xl text-[#403E3E]">- Comunidade no Telegram</p>
            <p className="text-2xl text-[#403E3E]">
              {" "}
              - Cronograma em 4 semanas{" "}
            </p>
            <p className="text-2xl text-[#403E3E]"> - Checklist de tarefas </p>
            <p className="text-2xl text-[#403E3E]"> - Aula inaugural </p>
            <p className="text-2xl text-[#403E3E]"> - Acesso à consultorias </p>
          </div>
          <div className="bg-[#DBDBDB] w-screen lg:w-[440px] mx-4 flex flex-col justify-center items-center rounded-xl py-12 gap-y-10">
            <h3 className="text-[#403E3E] font-bold text-5xl">Manual UGC</h3>
            <h4 className="text-[#403E3E] font-medium text-3xl">Por apenas</h4>
            <h2 className="text-[#403E3E] font-medium text-3xl w-[230px] text-center">
              10x de{" "}
              <span className="text-[#B2625C] font-bold text-6xl">
                {" "}
                R$11,37{" "}
              </span>{" "}
              ou <span className="underline">R$97,00 </span> à vista
            </h2>
            <a
              href="https://pay.kiwify.com.br/M6Z9A61"
              className="bg-[#B2625C] mx-auto w-[270px] text-center font-semibold text-xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
            >
              Eu Quero o Manual!
            </a>
            <img src="/garantias.png" alt="" />
          </div>
          <p className="text-[#403E3E] w-[360px] text-2xl font-medium">
            Tudo que você precisa para começar com UGC, de uma maneira prática e
            rápida.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-10 mt-20 flex flex-col lg:flex-row items-center gap-y-6 gap-x-28">
        <p className="text-[#403E3E] font-medium text-[28px]">
          Como tenho confiança no meu produto e sei que ele vai te ajudar a
          entender como começar a trabalhar com UGC, vou estar disponibilizando
          7 dias de garantia caso sinta que o manual não é bom ou não quiser
          seguir na área.
        </p>
        <img
          src="/7diasgarantia.png"
          className="w-[160px]"
          alt="Icone 7 dias de garantia"
        />
      </section>

      <section className="flex flex-col items-center gap-8 my-24 lg:flex-row">
        <img
          className="w-[450px] h-full rounded-xl xl:ml-0 flex"
          src="/mentora.png"
          alt="Imagem da seção Hero"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-[#403E3E] font-bold">
            Conheça sua Mentora
          </h1>
          <p className="text-xl text-[#403E3E]">
            Sou Gabriela Santos, tenho 24 anos, sou casada e cristã (e isso
            define muito quem sou). Graduada em Literatura pela Unicamp, fui
            fotógrafa por 6 anos e já tentei de tudo para fazer dinheiro com a
            internet. Tentei ser influencer, criar conteúdo no Youtube, no
            TikTok e nunca consegui monetizar ou tirar um centavo disso tudo.
            Mas esse era um sonho e eu não desisti de tentar... <br /> <br />
            Enquanto estava no meu último ano da faculdade, sem saber como seria
            meu futuro, decidi fazer uma oração sincera ao Senhor pedindo que me
            desse um Caminho! Foi aí que conheci a profissão do futuro: UGC
            CREATOR. Comecei a estudar sozinha, do absoluto zero e me agarrei a
            essa porta que me foi aberta. Em apenas 1 mês, tendo menos de 30
            seguidores no meu perfil no Instagram, eu fechei minha primeira
            parceria paga! <br /> <br />
            Agora, como UGC profissional faz quase 1 ano, tive a oportunidade de
            trabalhar em múltiplas parcerias com +20 diferentes marcas de
            diversos nichos do mercado. Trabalho tanto em pequenas campanhas,
            quanto em longos contratos mensais, que me garantem mais do que meu
            salário como CLT. <br /> <br />
            Como eu disse, eu comecei sem apoio nenhum, totalmente do zero.
            Cometi muitos erros e deixei muito dinheiro na mesa por conta
            disso... mas você pode ser diferente; e eu estou aqui para te guiar
            nessa jornada com tudo que você precisa para ter sucesso nessa nova
            profissão.
          </p>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] w-[480px] lg:w-[470px] text-center mx-auto font-semibold text-xl lg:text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          Quero Ter Acesso ao Manual UGC!
        </a>
      </div>

      <section className="mt-28 mx-auto">
        <h1 className="text-[#403E3E] text-center font-bold text-4xl">
          Perguntas Frequentes
        </h1>
        <Faq />
      </section>

      <section className="mt-20 flex flex-col justify-center gap-10 mb-12">
        <h1 className="text-[#403E3E] mx-auto font-bold text-center text-4xl">
          Pronta para dar o seu primeiro passo?
        </h1>
        <a
          href="https://pay.kiwify.com.br/M6Z9A61"
          className="bg-[#B2625C] w[340px] lg:w-[470px] text-center mx-auto font-semibold text-2xl text-[#FDFDFD] rounded-xl py-4 px-5 hover:scale-105 hover:bg-[#8b4c48] transition-transform duration-300 ease-in-out"
        >
          Acesse o Manual e Comece Hoje!
        </a>
      </section>

      <footer className="flex justify-center p-10">
        <p className="text-[#403E3E] font-medium text-2xl">
          Copyright 2024 - Manual UGC . Todos Direitos Reservados ©
        </p>
      </footer>
    </main>
  );
}
