import * as React from "react";

const FAQ = [
  {
    question: 'Может ли ребёнок заниматься самостоятельно?',
  },
  {
    question: 'Как происходит оплата?',
  },
  {
    question: 'Есть ли гарантии усвоения материала?',
  },
  {
    question: 'С кем будет общаться мой ребёнок?',
  },
  {
    question: 'Каковы принципы обучения?',
  },
  {
    question: 'Сколько раз в неделю можно заниматься?',
  },
]

const Faq = (): JSX.Element => {
  return (
    <div className="faq">
      <h2 className="faq__title">Вопрос/Ответ</h2>

      <ul className="faq__list">
        {FAQ.map((question, i) => {
          return <li key={i} className="faq__item">
            <p className="faq__question-title">{question.question}</p>
            <button className="faq__open-question-button"></button>
          </li>
        })}
      </ul>
    </div>
  )
};

export default Faq;