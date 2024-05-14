import React, { Suspense } from 'react';
import Animation from '@/components/Animation';
import Code from "@/components/Code";
import { CODE_EXAMPLES, CODE_SIDES, IDs } from '@/constants';
import Styles from './styles.module.css';
// import dynamic from 'next/dynamic';

// const DynamicCode = dynamic(() => import('@/components/Code'), {})

function CodeWrapper() {

  return (
      <section id={IDs.code} className='section'>
        <Animation className='title' Tag='h1' animation='fade-up'> Some examples of my code </Animation>
        
        <div className={Styles.codeContainer}>
          <Suspense  fallback={<div>Loading...</div>}>
          {CODE_EXAMPLES.map((example, index) => (

            // sides will autimatically be assigned depending on if index is odd or even
            <Code key={index} note={example.note} side={index % 2 === 0 ? CODE_SIDES.LEFT : CODE_SIDES.RIGHT} >{example.code}</Code>
          ))}
          </Suspense>
        </div>
      </section>
  );
}

export default CodeWrapper;