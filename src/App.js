import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import ImageGrallery from './component/ImageGrallery';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 36px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const H2Styple = styled.h2`
    margin-bottom: 12px;
    font-size: 2.5rem;
`;
const FormStyle = styled.form`

`;
const InputStyle = styled.input`
    min-width: 500px;
    padding: 5px 12px;
    margin-top: 30px;
    margin-bottom: 36px;
    line-height: 1.5;
    outline: none;
    color: #333;
    font-size: 17px;

`;
function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current.value);

    // API URL
    const endpointURL = `https://pixabay.com/api/?key=40867858-0c31214b60c64fa0d6aab1686&q=${ref.current.value}&image_type=photo`;
    // API
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <Container>
      <H2Styple>My Pixabay</H2Styple>
      <FormStyle onSubmit={(event) => handleSubmit(event)}>
        <InputStyle type='text' placeholder='이미지를 검색해주세요!' ref={ref} />
      </FormStyle>
      <ImageGrallery fetchData={fetchData} />
    </Container>
  );
}

export default App;
