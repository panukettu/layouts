import React from 'react';
export default props => (
  <svg
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 128 128"
    style={{ enableBackground: 'new 0 0 128 128' }}
    width="128px"
    height="128px"
    {...props}
  >
    <g>
      <g>
        <circle
          className="mobile-menu__body"
          cx="64"
          cy="64"
          r="50"
          style={{ ...props.circle }}
        />
      </g>
      <g>
        <path
          className="mobile-menu__border"
          d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47    s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
          style={{ ...props.outer }}
        />
      </g>
    </g>
    <g>
      <path
        d="M86.5,52h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,52,86.5,52z"
        style={{ fill: 'black' }}
      />
    </g>
    <g>
      <path
        d="M86.5,67h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,67,86.5,67z"
        style={{ fill: 'black', opacity: '0.7' }}
      />
    </g>
    <g>
      <path
        d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
        style={{ fill: 'black', opacity: '0.6' }}
      />
    </g>
  </svg>
);
