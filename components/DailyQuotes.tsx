import type { FC } from 'react';
import Marquee from 'react-fast-marquee';

const quotationsList = [
  {
    content: '不要哀求，学会争取，若是如此，终有所获',
    original: '————《交響詩篇エウレカセブン》'
  },
  {
    content: '只要这件事能让你安心入睡，那就去做吧',
    original: '————《Rick and Morty》'
  },
  {
    content: '不要停止奔跑，不要回顾来路，来路无可眷恋，值得期待的只有前方',
    original: '————《BoJack Horseman》'
  }
];

const DailyQuotes: FC = () => {
  const index = Math.floor(Math.random() * quotationsList.length);
  return (
    <Marquee gradient={false}>
      {quotationsList[index].content}
      {quotationsList[index].original}
    </Marquee>
  );
};

export default DailyQuotes;
