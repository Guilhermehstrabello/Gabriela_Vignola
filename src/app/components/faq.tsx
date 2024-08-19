"use client"
import React, { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-600">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-6 px-6 text-left text-2xl font-bold text-[#403E3E] hover:text-[#B2625C] duration-100 focus:outline-none"
      >
        {question}
        <span className={`text-2xl ${isOpen ? "rotate-45" : "rotate-0"} transition-transform duration-300`}>
          {isOpen ? "✕" : "＋"}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-lg font-medium text-[#403E3E]">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Faq() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <AccordionItem
        question="Não sei nada sobre UGC. Esse manual é para mim?"
        answer="Sim! O manual foi criado para ser direto e acessível, partindo desde uma introdução para iniciantes até o processo final de entrega!"
      />
      <AccordionItem
        question="Preciso ter muitos seguidores para trabalhar com UGC?"
        answer="Não! Você pode trabalhar com marcas de diversos tamanhos independentemente do seu número de seguidores, você não vai ser uma influencer, você vai ser um “rosto” para a marca."
      />
      <AccordionItem
        question="Em quanto tempo verei resultados aplicando o manual?"
        answer="Os resultados podem variar, mas o manual foi projetado para que você possa aplicar as técnicas rapidamente e começar a ver resultados em poucas semanas, dependendo do seu esforço e dedicação. Dentro dele você encontrará um cronograma de 4 semanas de aplicação do método validado."
      />
      <AccordionItem
        question="Tenho uma rotina corrida. Vou conseguir aplicar o conteúdo do manual?"
        answer="Sim! O manual é direto ao ponto, sem enrolações, para que você possa absorver o conteúdo e aplicá-lo no seu tempo livre, sem comprometer sua rotina. Até mesmo se você for CLT, ainda assim conseguirá começar."
      />
      <AccordionItem
        question="O mercado de UGC realmente tem demanda"
        answer="Sim, o mercado de UGC está em pleno crescimento, com muitas marcas buscando conteúdos autênticos criados por pessoas reais. O manual te dá as ferramentas necessárias para aproveitar essa oportunidade crescente."
      />
      <AccordionItem
        question="Como eu vou ter acesso o manual?"
        answer="Após a realização da compra, o manual será enviado para o e-mail que você colocou no checkout, então use um e-mail que você tenha acesso."
      />
    </div>
  );
}
