'use client';

import { QuestionForm } from '@/components/questionForm';

const QuestionPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[25px]">MBTI Test</h2>
      <QuestionForm />
    </div>
  );
};

export default QuestionPage;
