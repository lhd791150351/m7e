/* eslint-disable no-shadow */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import ReactDOM from 'react-dom';
import React from 'react';

export enum MessageTypes {
  Success = 'Success',
  Info = 'Info',
  Error = 'Error',
}

const animate = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface MessageProps {
  content?: any;
  did?: string;
  type?: MessageTypes;
}

export const MessageComp = (props: MessageProps) => {
  const TYPE_CSS_MAP = {
    [MessageTypes.Success]: css`
      background: linear-gradient(109.41deg, #6734f733 13.03%, rgba(163, 162, 180, 0.2) 90.68%),
        rgba(123, 238, 104, 0.3);
      box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08),
        inset 6px 6px 12px rgba(0, 0, 0, 0.18);
    `,
    [MessageTypes.Error]: css`
      background: linear-gradient(
          154.49deg,
          rgba(136, 103, 230, 0.2) 5.35%,
          rgba(163, 162, 180, 0.2) 83.85%
        ),
        rgba(200, 90, 96, 0.3);
      box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08),
        inset 6px 6px 12px rgba(0, 0, 0, 0.18);
    `,
    [MessageTypes.Info]: css`
      background: linear-gradient(
          154.49deg,
          rgba(136, 103, 230, 0.2) 5.35%,
          rgba(163, 162, 180, 0.2) 83.85%
        ),
        rgba(255, 216, 79, 0.3);
      box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08),
        inset 6px 6px 12px rgba(0, 0, 0, 0.18);
    `,
  };

  const type: MessageTypes = props.type || MessageTypes.Success;

  return (
    <>
      (
      {props.did ? (
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 10001;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 490px;
              height: 100px;
              margin: auto;
              background-image: url('/images/messageBG.png');
              background-repeat: no-repeat;
              -moz-background-size: 100% 100%;
              background-size: 100% 100%;
              border-radius: 8px;
              animation: ${animate} 0.3s linear;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 120px;
                padding: 16px 24px;
                color: white;
                font-size: 24px;
                font-family: 'Anonymous Pro';
                line-height: 24px;
                border-radius: 8px;
                a {
                  margin: 0 5px 0 15px;
                  color: white;
                  white-space: nowrap;
                  span {
                    font-weight: bold;
                    text-decoration: underline;
                  }
                }
              `}
            >
              view your curation in
              <a href={`https://dataverse.art/#/${props.did}`} target="_blank">
                <span>Dataverse</span>
              </a>
              <img
                src="/images/arrow.png"
                css={css`
                  width: 15px;
                  padding-top: 4px;
                `}
              />
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          css={css`
            position: fixed;
            top: 40px;
            right: 50px;
            z-index: 10001;
            background: #111;
            border-radius: 8px;
            animation: ${animate} 0.3s linear;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 120px;
              padding: 16px 24px;
              color: white;
              font-size: 15px;
              border-radius: 8px;
              ${TYPE_CSS_MAP[type]};
              a {
                color: white;
              }
            `}
          >
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          </div>
        </div>
      )}
      )
    </>
  );
};

const message = (props: MessageProps & { duration?: number }) => {
  const holder = document.createElement('div');
  document.body.append(holder);
  const destroy = () => {
    holder.remove();
  };

  if (props.duration !== 0) {
    setTimeout(() => {
      destroy();
    }, props.duration ?? 3000);
  }

  holder.addEventListener('click', () => {
    holder.remove();
  });

  ReactDOM.render(<MessageComp {...props} />, holder);
};

export default message;
