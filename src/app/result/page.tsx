'use client';

import { getData } from '@/service/getData';
import { P, match } from 'ts-pattern';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { A, pipe } from '@mobily/ts-belt';
import Image from 'next/image';

const Result = () => {
  const param = useSearchParams();
  const mbti = param.get('mbti');
  const [data, setData] = useState<{ id: { videoId: string }; snippet: { title: string; thumbnails: { default: { url: string } } } }[]>([]);

  useEffect(() => {
    match(mbti).with(P.not(P.nullish), async (mbti) => {
      const res = await getData(mbti);
      setData(res.items);
    });
  }, [mbti]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full h-full">
      <h1 className="w-full text-center text-[39px] mb-[15px]">result</h1>
      <div className="w-full text-center text-[20px] mb-[10px]">you are mbti is {mbti} </div>
      <div className="w-full text-center text-[15px]">youtube result</div>
      <ul className="px-[30px]">
        {pipe(
          data,
          A.map((item) => (
            <li key={item.snippet.title} className="mb-[40px]">
              <a href={`https://youtube.com/watch?v=${item.id.videoId}`}>
                <Image src={item.snippet.thumbnails.default.url} alt="thumbnail" width={250} height={250} />
                <span>{item.snippet.title}</span>
              </a>
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

export default Result;
