
// import './contactus.css';
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
    <HeaderSection>
      <TextWrapper>
        <HeaderText>
          <span className="highlight">Say hello to us</span>
          <br />
          love to hear you
        </HeaderText>
      </TextWrapper>
      <ImageWrapper>
        <img
          src="header\contactus.jpg" 
          alt="Contact us"
        />
      </ImageWrapper>
    </HeaderSection>
    <FooterSection>
      <FooterText>
        Let's <span className="highlight">begin</span>
      </FooterText>
    </FooterSection>
    <FormSection>
      <Form>
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email address" />
        <Input type="text" placeholder="Subject" />
        <Textarea placeholder="Tell us about the project"></Textarea>
        <Button>Send</Button>
      </Form>
    </FormSection>
  </PageContainer>
  );
}

export default App;

// Styled Components
const PageContainer = styled.div`
  font-family: "Arial", sans-serif;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(124, 166, 153);
  padding: 40px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const HeaderText = styled.h1`
  font-size: 3rem;
  color: #000;
  line-height: 1.4;

  .highlight {
    color: darkred;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 100%;
    border-radius: 0px;
  }
`;

const FooterSection = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  background-color: #fff;
`;

const FooterText = styled.h2`
  font-size: 2rem;
  color: #000;

  .highlight {
    color: darkred;
  }
`;

const FormSection = styled.div`
  background-color: #fff;
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: darkred;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;

  &:focus {
    border-color: darkred;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #333;
  }
`;