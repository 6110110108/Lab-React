import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1, // เล่นครั้งที่เท่าไหร่
        guess: '', // คลิกไปกี่ครั้งแล้ว
        complete: false // การเล่นจบแล้วหรือยัง
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated`)
        
        let guess = state.guess + c

        console.log(guess)
        setState({...state, guess})

        if(guess.length == state.word.length) {
            if(guess == state.word) {
                console.log('yeah!')
                setState({...state, completed: true})
            }
            else {
                console.log('rest, next attempt')
                setState({...state, guess: '' , attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
    );
}
