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

export default function QuizPage() {
  console.log('Perguntas criadas: ', db.questions);
  const question = db.questions[0];

  return (
    <QuizBackground backgruondImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              Pergunta
              1
              de
              {` ${db.questions.length} `}
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

        <LoadinWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
