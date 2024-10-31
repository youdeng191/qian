import styled, { css } from "styled-components";

const ProgressWrapper = styled.div`
  width: 100%;
  height: 30px !important;
  background: rgba(44, 48, 51, 255); /* 未完成部分的颜色 */
  border-radius: 0;
  border: 1px solid black; /* 黑色边框 */
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3); /* 内部阴影效果 */

  .progress-done {
    height: 100%;
    background: rgba(120, 16, 13, 255); /* 已完成部分的颜色 */
    border-radius: 0;
    border: 1px solid black;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3); /* 内部阴影效果 */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      padding-right: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ variant }) =>
    variant === "v2" &&
    css`
      height: 24px;
      background: rgba(44, 48, 51, 255);
      backdrop-filter: blur(10px);
      border-radius: 0;
      border: 1px solid black;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

      .progress-done {
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          padding-right: 5px;
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600;
          font-size: 20px;
          line-height: 1;
        }
      }
    `}

  ${({ variant }) =>
    variant === "green" &&
    css`
      background: rgba(44, 48, 51, 255);
      border-radius: 0;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

      .progress-done {
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${({ variant }) =>
    variant === "green2" &&
    css`
      height: 24px;
      border-radius: 0;
      background: rgba(44, 48, 51, 255);
      backdrop-filter: blur(10px);
      border: 1px solid black;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      .progress-done {
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${({ variant }) =>
    variant === "dashed" &&
    css`
      width: 100%;
      height: 40px;
      background: rgba(44, 48, 51, 255);
      border: 1px dashed ${({ theme }) => theme.colors.white}33;
      border-radius: 0;
      padding: 8px;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

      .progress-done {
        height: 24px;
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${({ variant }) =>
    variant === "dashed2" &&
    css`
      width: 100%;
      height: 40px;
      background: rgba(44, 48, 51, 255);
      border: 1px dashed ${({ theme }) => theme.colors.white}33;
      border-radius: 0;
      padding: 8px;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

      .progress-done {
        height: 24px;
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${({ variant }) =>
    variant === "dashed3" &&
    css`
      width: 100%;
      height: 40px;
      background: rgba(44, 48, 51, 255);
      border: 1px dashed ${({ theme }) => theme.colors.white}4d;
      backdrop-filter: blur(5px);
      border-radius: 0;
      padding: 8px;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

      .progress-done {
        height: 24px;
        background: rgba(120, 16, 13, 255);
        border-radius: 0;
        border: 1px solid black;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}
`;

export default ProgressWrapper;
