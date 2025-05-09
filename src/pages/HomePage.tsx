import DayButton from '../components/DayButton';
import { useEffect, useState } from 'react';
import { fetchMembers, Member } from '../api/member';

const HomePage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers().then(setMembers).catch(console.error);
    console.log('데이터 호출 성공!', members);
  }, []);

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex h-120 flex-col gap-4 overflow-y-scroll p-2">
        <DayButton day={1} />
        <DayButton day={2} />
        <DayButton day={3} />
        <DayButton day={4} />
        <DayButton day={5} />
        <DayButton day={6} />
        <DayButton day={7} />
        <DayButton day={8} />
        <DayButton day={9} />
        <DayButton day={10} />
        <DayButton day={11} />
        <DayButton day={12} />
      </div>

      <div className="">
        <h1>회원 목록</h1>
        <ul>
          {members.map((m, i) => (
            <li key={i}>
              {m.nickname} , {m.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
