export const initialData = {
  categories: [
    { id: 1, name: 'tasks', to: '/' },
    { id: 2, name: 'important', to: '/important' },
    { id: 3, name: 'completed', to: '/completed' },
  ],
  tags: [
    { id: 1, name: 'personal', to: '/personal' },
    { id: 2, name: 'work', to: '/work' },
    { id: 3, name: 'study', to: '/study' },
    { id: 4, name: 'gathering', to: '/gathering' },
  ],
  tasks: [
    {
      id: 1,
      name: '증명사진 찍기',
      content: '운전 면허 등록 때 3장 갖고 가기',
      isDone: false,
      isImportant: true,
      tag: 'personal',
    },
    {
      id: 2,
      name: '피그마 프로토타입 만들기',
      content: '',
      isDone: true,
      isImportant: true,
      tag: 'study',
    },
    {
      id: 3,
      name: '자동이체 확인하기',
      content: '왓챠 입금 확인해야함',
      isDone: false,
      isImportant: false,
      tag: 'personal',
    },
    {
      id: 4,
      name: '마라탕 먹기',
      content: '너무 먹고싶다',
      isDone: true,
      isImportant: true,
      tag: 'personal',
    },
    {
      id: 5,
      name: '수영 회식 가기',
      content: '이번주 화요일이나 목요일',
      isDone: false,
      isImportant: false,
      tag: 'gathering',
    },
    {
      id: 6,
      name: '필기 시험 준비',
      content: '어플로 틈틈이 보기',
      isDone: false,
      isImportant: false,
      tag: 'study',
    },
    {
      id: 7,
      name: 'PR 보내기',
      content: '',
      isDone: false,
      isImportant: true,
      tag: 'work',
    },
  ],
};
