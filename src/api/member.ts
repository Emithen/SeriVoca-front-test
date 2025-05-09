export const fetchMembers = async (): Promise<Member[]> => {
  const res = await fetch('https://serivoca-back.onrender.com/api/members', {
    method: 'GET',
  });
  if (!res.ok) throw new Error('API 호출 실패');

  const data = await res.json();
  return data as Member[];
};

export interface Member {
  id: number;
  username: string;
  password: string;
  nickname: string;
}
