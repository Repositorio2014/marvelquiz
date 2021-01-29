/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadinWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando ...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
}) {
  return (
    <Widget>
      <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
            </h3>
          </Widget.Header>

          <img
            alt="Descrição"
            style={{
              width: '100%',
              heith: '150px',
              objectFit: 'cover',
            }}
            src={question.image}
          />
          <Widget.Content>
            <h2>
              {question.title}
            </h2>
            <p>
              {question.description}
            </p>

            <Button>
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>
  );
}

export default function QuizPage() {
  console.log('Perguntas criadas: ', db.questions);
  const totalQuestions = db.questions.length;
  const questionIndex = 1;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgruondImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestion={totalQuestions}
          />
        <LoadinWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
