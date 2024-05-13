import React from 'react';
import Animation from '@/components/Animation';
import Code from "@/components/Code";
import { CODE_EXAMPLES, CODE_SIDES, IDs } from '@/constants';
import Styles from './styles.module.css';

function CodeWrapper() {

  let side: any;

  return (
      <section id={IDs.code} className='section'>
        <Animation className='title' Tag='h1' animation='fade-up'> Some examples of my code </Animation>
        
        <div className={Styles.codeContainer}>
          {CODE_EXAMPLES.map((example, index) => (

            // sides will autimatically be assigned depending on if index is odd or even
            <Code key={index} note={example.note} side={index % 2 === 0 ? CODE_SIDES.LEFT : CODE_SIDES.RIGHT} >{example.code}</Code>
          ))}
        </div>
      </section>
  );
}

export default CodeWrapper;