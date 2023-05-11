import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { insert } from '../module/tasks';
import { open, change } from '../module/modal';

const Container = styled.div`
  padding: 20px 20px;
  min-width: 290px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: #363637;
  font-size: 1.3rem;
  margin: 0;
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 7px;
  padding-left: 13px;
  border: none;
  border-radius: 7px;
  height: 37px;
  outline: none;
`;

const Input = styled.input`
  padding: 7px;
  padding-left: 13px;
  border: none;
  border-radius: 7px;
  height: 23px;
  outline: none;

  &::placeholder {
    font-size: 0.8rem;
  }
`;

const Textarea = styled.textarea`
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 13px;
  border-radius: 7px;
  resize: none;
  min-height: 100px;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled.button`
  border: none;
  background-color: #6ba4ff;
  border-radius: 7px;
  height: 34px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const TaskInput = () => {
  const [form, setForm] = useState({
    name: '',
    content: '',
    tag: 'personal',
  });
  const { tags } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const submit = (e) => {
    setTimeout(() => {
      dispatch(change(''));
    }, 1000);

    dispatch(open(false));
    dispatch(insert(form));
    setForm({ name: '', content: '', tag: 'personal' });
  };

  return (
    <Container>
      <Title>Task 추가하기</Title>
      <Select onChange={(e) => setForm({ ...form, tag: e.target.value })}>
        {tags.map((tag) => (
          <option value={tag.name} key={tag.id}>
            {tag.icon} {tag.name}
          </option>
        ))}
      </Select>
      <Input
        id="task-input"
        type="text"
        placeholder="할 일을 입력하세요"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Textarea
        placeholder="세부 내용을 입력하세요"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></Textarea>
      <SubmitButton onClick={submit}>추가하기</SubmitButton>
    </Container>
  );
};

export default TaskInput;
