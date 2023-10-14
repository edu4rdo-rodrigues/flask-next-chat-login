// flask-next-chat-login/frontend/components/Events/index.tsx

import React from 'react';

interface IEvents {
  events: any;
}

export const Events: React.FC<IEvents> = ({ events }) => {
  return (
    <ul>
    {
      events.map((event: any, index: number) =>
        <li key={ index }>{ event }</li>
      )
    }
    </ul>
  );
}