import React from 'react';
import SubmitButton from './SubmitButton';
import { withKnobs, text } from '@storybook/addon-knobs';

function clicked() {
  alert('i am clicked');
}
export default { title: 'Submit Button Component', decorators: [withKnobs] };

export const Submitbutton = () => {
  const ButtonTitle = text('title', 'Trial button');
  return <SubmitButton ButtonTitle={ButtonTitle} onClick={clicked} />;
};
