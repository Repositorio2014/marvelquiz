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
  totalQuestion,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              {`Perguntas ${questionIndex + 1} de ${totalQuestion}`}
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

            <form
              onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                onSubmit();
              }}
            >
              {question.alternatives.map((alternative, alternativeIndex) => {
                console.log('Para de reclamar um pouquinho só');
                const alternativeId = `alternative__${alternativeIndex}`;

                return (
                  <Widget.Topic
                    as="label"
                    htmlFor={alternativeId}
                  >
                    <input
                      id={alternativeId}
                      name={questionId}
                      type="radio"
                    />
                    {alternative}
                  </Widget.Topic>
                );
              })}
              {/* <pre>
                {JSON.stringify(question, null, 4)}
              </pre> */}

              <Button type="submit">
                Confirmar
              </Button>
            </form>

          </Widget.Content>
        </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestion) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgruondImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestion={totalQuestion}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <LoadinWidget />}
        {screenState === screenStates.RESULT && <div>Você acertou x questões. Parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
