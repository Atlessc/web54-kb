import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { JellyTriangle } from '@uiball/loaders';


const Loading = () => {
  const { isLoading } = useAuth0();

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

