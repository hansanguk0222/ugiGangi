import * as MBTI from '@/types/MBTI';
import * as Question from '@/types/Question';
import { match } from 'ts-pattern';
import { useState } from 'react';
import * as Character from '@/types/Character';
import { A, O, pipe } from '@mobily/ts-belt';
import { useRouter } from 'next/navigation';

const questionList: Array<Question.t> = [
  { indicator: 'focusOfAttention', content: 'Do you make new friends regularly?' },
  {
    indicator: 'focusOfAttention',
    content: 'At the party, do you prefer introducing yourself to new people rather than just talking to people who you already know?',
  },
  { indicator: 'focusOfAttention', content: 'Do you feel easy speaking to people who you’d like to talk?' },
  { indicator: 'focusOfAttention', content: 'Do you care less about how people see you?' },
  { indicator: 'focusOfAttention', content: 'Do you enjoy group activities?' },
  { indicator: 'recognition', content: 'Do you use your free time exploring your interest?' },
  { indicator: 'recognition', content: ' Do you like books or movies which can interpret the conclusion on your way?' },
  { indicator: 'recognition', content: 'Do you feel interesting about questions related to afterlife?' },
  { indicator: 'recognition', content: 'Do you think deeply about philosophical questions?' },
  { indicator: 'recognition', content: 'Do you have confidence about things will be just like your thinking?' },
  { indicator: 'nature', content: 'When you see someone crying, do you feel the same too?' },
  { indicator: 'nature', content: 'Do you feel hard to keep composure in high-pressure situation?' },
  { indicator: 'nature', content: ' Do you tend to follow your emotions rather than reasons?' },
  { indicator: 'nature', content: 'Do your emotions change very quickly?' },
  { indicator: 'nature', content: 'Do you feel easy to understand other people’s emotions?' },
  { indicator: 'lifeStyle', content: 'Are you the person who proceed your work consistently with plan rather than improvising?' },
  { indicator: 'lifeStyle', content: ' Do you complete your work with process without skipping steps?' },
  { indicator: 'lifeStyle', content: 'Do you feel easy at keeping the due date?' },
  { indicator: 'lifeStyle', content: ' Do you enjoy planning your work everyday?' },
  { indicator: 'lifeStyle', content: 'Do you make conclusion quickly rather than postponing until the end?' },
];

const defaultValue: MBTI.t = {
  focusOfAttention: {
    extraversion: { label: 'extraversion', score: 0 },
    introversion: { label: 'introversion', score: 0 },
  },
  recognition: {
    sensing: { label: 'sensing', score: 0 },
    intuition: { label: 'intuition', score: 0 },
  },
  nature: {
    thinking: { label: 'thinking', score: 0 },
    feeling: { label: 'feeling', score: 0 },
  },
  lifeStyle: {
    perceiving: { label: 'perceiving', score: 0 },
    judging: { label: 'judging', score: 0 },
  },
};

export const QuestionForm = () => {
  const router = useRouter();
  const [selectedButtonList, setSelectedButtonList] = useState<{ label: string; score: number }[]>([
    { label: 'introversion', score: 0 },
    { label: 'introversion', score: 0 },
    { label: 'introversion', score: 0 },
    { label: 'introversion', score: 0 },
    { label: 'introversion', score: 0 },
    { label: 'intuition', score: 0 },
    { label: 'intuition', score: 0 },
    { label: 'intuition', score: 0 },
    { label: 'intuition', score: 0 },
    { label: 'intuition', score: 0 },
    { label: 'feeling', score: 0 },
    { label: 'feeling', score: 0 },
    { label: 'feeling', score: 0 },
    { label: 'feeling', score: 0 },
    { label: 'feeling', score: 0 },
    { label: 'perceiving', score: 0 },
    { label: 'perceiving', score: 0 },
    { label: 'perceiving', score: 0 },
    { label: 'perceiving', score: 0 },
    { label: 'perceiving', score: 0 },
  ]);

  const getResult = (selectedButtonList: { label: string; score: number }[]) => {
    let result = defaultValue;
    for (let i = 0; i < 5; i += 1) {
      match(selectedButtonList[i]?.label)
        .with('extraversion', () => {
          result = {
            ...result,
            focusOfAttention: {
              ...result.focusOfAttention,
              extraversion: {
                ...result.focusOfAttention.extraversion,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.focusOfAttention.extraversion.score,
              },
            },
          };
        })
        .otherwise(() => {
          result = {
            ...result,
            focusOfAttention: {
              ...result.focusOfAttention,
              introversion: {
                ...result.focusOfAttention.introversion,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.focusOfAttention.introversion.score,
              },
            },
          };
        });
    }
    for (let i = 5; i < 10; i += 1) {
      console.log(selectedButtonList[i]);
      match(selectedButtonList[i]?.label)
        .with('sensing', () => {
          result = {
            ...result,
            recognition: {
              ...result.recognition,
              sensing: {
                ...result.recognition.sensing,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.recognition.sensing.score,
              },
            },
          };
        })
        .otherwise(() => {
          result = {
            ...result,
            recognition: {
              ...result.recognition,
              intuition: {
                ...result.recognition.intuition,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.recognition.intuition.score,
              },
            },
          };
        });
    }
    for (let i = 10; i < 15; i += 1) {
      match(selectedButtonList[i]?.label)
        .with('thinking', () => {
          result = {
            ...result,
            nature: {
              ...result.nature,
              thinking: {
                ...result.nature.thinking,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.nature.thinking.score,
              },
            },
          };
        })
        .otherwise(() => {
          result = {
            ...result,
            nature: {
              ...result.nature,
              feeling: {
                ...result.nature.feeling,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.nature.feeling.score,
              },
            },
          };
        });
    }
    for (let i = 15; i < 20; i += 1) {
      match(selectedButtonList[i]?.label)
        .with('perceiving', () => {
          result = {
            ...result,
            lifeStyle: {
              ...result.lifeStyle,
              perceiving: {
                ...result.lifeStyle.perceiving,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.lifeStyle.perceiving.score,
              },
            },
          };
        })
        .otherwise(() => {
          result = {
            ...result,
            lifeStyle: {
              ...result.lifeStyle,
              judging: {
                ...result.lifeStyle.judging,
                score: O.getWithDefault(selectedButtonList[i]?.score, 0) + result.lifeStyle.judging.score,
              },
            },
          };
        });
    }

    router.push(
      `/result?mbti=${result.focusOfAttention.extraversion.score >= -result.focusOfAttention.introversion.score ? 'e' : 'i'}${
        result.recognition.intuition.score >= -result.recognition.sensing.score ? 'n' : 's'
      }${result.nature.feeling.score >= -result.nature.thinking.score ? 'f' : 't'}${
        result.lifeStyle.judging.score >= -result.lifeStyle.perceiving.score ? 'j' : 'p'
      }`,
    );
  };

  const onClickScore = (labelScore: { label: string; score: number }, selectedButtonList: Character.t[], row: number) => {
    console.log(labelScore, row);
    setSelectedButtonList(selectedButtonList.map((value, idx) => (idx === row ? { ...labelScore, isSelected: true } : { ...value })));
  };

  const plusScoreIndicator = (indicator: keyof MBTI.t) =>
    match(indicator)
      .with('focusOfAttention', () => 'extraversion' as const)
      .with('recognition', () => 'intuition' as const)
      .with('nature', () => 'feeling' as const)
      .with('lifeStyle', () => 'judging' as const)
      .otherwise(() => '' as const);

  const minusScoreIndicator = (indicator: keyof MBTI.t) =>
    match(indicator)
      .with('focusOfAttention', () => 'introversion' as const)
      .with('recognition', () => 'sensing' as const)
      .with('nature', () => 'thinking' as const)
      .with('lifeStyle', () => 'perceiving' as const)
      .otherwise(() => '' as const);

  return (
    <div>
      <ul>
        {pipe(
          questionList,
          A.mapWithIndex((idx, item) => (
            <li key={item.content} className="flex border-b-[1px] border-b-[#ccc]">
              <span className="flex justify-center items-center h-full text-[15px] pr-[10px]">{idx + 1}</span>
              <div>
                <span>{item.content}</span>
                <div className="flex justify-between w-[300px]">
                  <span>allow</span>
                  <span>not allow</span>
                </div>
                <div className="flex justify-around indent-[-9999em] items-center w-[300px]">
                  <button
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === 3 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}
                    onClick={() =>
                      onClickScore(
                        {
                          label: plusScoreIndicator(item.indicator),
                          score: 3,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: plusScoreIndicator(item.indicator),
                          score: 2,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === 2 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: plusScoreIndicator(item.indicator),
                          score: 1,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === 1 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: minusScoreIndicator(item.indicator),
                          score: 0,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === 0 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: minusScoreIndicator(item.indicator),
                          score: -1,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === -1 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: minusScoreIndicator(item.indicator),
                          score: -2,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === -2 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                  <button
                    onClick={() =>
                      onClickScore(
                        {
                          label: minusScoreIndicator(item.indicator),
                          score: -3,
                        },
                        selectedButtonList,
                        idx,
                      )
                    }
                    className={`rounded-[50%] w-[20px] h-[20px] ${selectedButtonList[idx]?.score === -3 ? 'bg-[#0f0]' : 'bg-[#a00]'}`}></button>
                </div>
              </div>
            </li>
          )),
        )}
      </ul>
      <button onClick={() => getResult(selectedButtonList)}>Get Result!</button>
    </div>
  );
};
