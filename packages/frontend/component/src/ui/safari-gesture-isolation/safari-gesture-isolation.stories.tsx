import type { Meta, StoryFn } from '@storybook/react';

import { SafariGestureIsolation } from './safari-gesture-isolation';

export default {
  title: 'UI/Safari Gesture Isolation',
  component: SafariGestureIsolation,
} satisfies Meta<typeof SafariGestureIsolation>;

const Template: StoryFn<{}> = () => (
  <div>
    <button
      onClick={() => {
        history.pushState('xxx', '');
      }}
    >
      history.pushState
    </button>
    <SafariGestureIsolation
      allowBack={false}
      allowForward={false}
      style={{ height: '600px', background: 'red' }}
    >
      Safari Gesture Isolation
    </SafariGestureIsolation>
    <div style={{ height: '100vh', background: 'blue' }}></div>
  </div>
);

export const Default: StoryFn<{}> = Template.bind(undefined);
Default.args = {
  title: 'Safari Gesture Isolation',
  description: 'Safari Gesture Isolation',
};
Default.parameters = {
  layout: 'fullscreen',
};
