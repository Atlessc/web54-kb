import React from 'react';
import { JellyTriangle } from '@uiball/loaders';


const Loading = () => {

  return (
    <div>
      <JellyTriangle
        size={200}
        speed={1}
        color="#ff6f00"
      />
    </div>
  );
};

export default Loading;

