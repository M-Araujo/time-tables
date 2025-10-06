
import './App.css';
import { useState } from 'react';
import { Box, Heading, Input, Button, Text, HStack } from "@chakra-ui/react";

function App() {

  const [multiplicand, setMultiplicand] = useState(getRandomNumber(1, 9));
  const [multiplier, setMultiplier] = useState(getRandomNumber(1, 10));
  let [answer, setAnswer] = useState('');
  let [isCorrect, setIsCorrect] = useState('');

  let playSound = (type) => {
    const sound = new Audio(`/sounds/${type}.wav`);
    sound.play();
  }

  let validateAnswer = () => {

    let isValidAnswer = multiplicand * multiplier == answer;
    if (isValidAnswer) {
      playSound('correct');
      setIsCorrect(1);
    } else {
      playSound('wrong');
      setIsCorrect(0);
    }

    setTimeout(() => {
      setMultiplicand(getRandomNumber(1, 9));
      setMultiplier(getRandomNumber(1, 9));
      setAnswer('');
      setIsCorrect('');
    }, 1000)


  }

  return (
    <div className="App">

      <Box
        p={6}
        maxW="sm"
        mx="auto"
        mt="250"
        pt="50"
        height="150"
        textAlign="center"
        bg="white"
        shadow="md"
        borderRadius="lg"
      >

        <HStack spacing={4}>

          <Heading size="lg" mg={4}>
            {multiplicand} * {multiplier} =
          </Heading>
          <Input
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                validateAnswer();
              }
            }}
            w="100px"
            fontSize="xl"
            textAlign="center"
            mr={2}
            display="inline-block"
          />

          <Button colorScheme="blue" onClick={validateAnswer}>Ok</Button>

        </HStack>
        {isCorrect !== '' && (
          isCorrect == '1' ? (

            <Text mt={4} fontWeight="bold" color="green.500"> Correct!</Text>
          ) : (
            <Text mt={4} fontWeight="bold" color="red.500"> Wrong answer</Text>
          )
        )}

      </Box>

    </div>
  );
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export default App;
