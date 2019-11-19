/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

export default {
  logo: ({ isDark, classNameText, ...props }) => {
    const textFill = isDark ? '#262525' : '#ffffff';
    return (
      <svg
        className={`logo`}
        width="102"
        height="42"
        viewBox="0 0 102 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="Logofull">
          <path
            id="Path"
            d="M17.0382 26.9963C15.6757 28.7668 13.5618 29.904 11.1805 29.904H11.1551C8.76107 29.904 6.63448 28.7409 5.28467 26.9575L11.1678 21.0129L17.0382 26.9963Z"
            fill="#349A89"
          />
          <g id="logo" fill={textFill} className={classNameText}>
            <path
              className="logo__text"
              id="i"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.0569 3.39878C52.0569 4.13539 52.3243 4.78154 52.8464 5.31139C53.3812 5.84124 54.0052 6.11262 54.731 6.11262C55.4569 6.11262 56.0936 5.84124 56.6157 5.31139C57.1378 4.78154 57.4052 4.13539 57.4052 3.39878C57.4052 2.66216 57.1378 2.01601 56.6157 1.48616C56.0936 0.956314 55.4569 0.684929 54.731 0.684929C54.0052 0.684929 53.3685 0.956314 52.8464 1.48616C52.3243 2.01601 52.0569 2.66216 52.0569 3.39878ZM52.6681 30.24C52.6681 30.8345 52.8591 31.3385 53.2539 31.7391C53.6486 32.1397 54.1453 32.3335 54.731 32.3335C55.355 32.3335 55.8516 32.1397 56.2337 31.7391C56.6157 31.3514 56.8067 30.8474 56.8067 30.24V11.8892C56.8067 11.256 56.6157 10.752 56.2337 10.3643C55.8516 9.97662 55.355 9.78277 54.731 9.78277C54.1453 9.78277 53.6486 9.97662 53.2539 10.3643C52.8591 10.752 52.6681 11.256 52.6681 11.8892V30.24Z"
            />
            <path
              className="logo__text"
              id="k"
              d="M79.3205 30.6018C79.3205 31.2092 79.0785 31.7132 78.5946 32.1268C78.1872 32.4628 77.7542 32.6178 77.2958 32.6178C76.6973 32.6178 76.2134 32.3723 75.8313 31.8812L68.1145 22.1889L66.077 23.9982V30.3046C66.077 30.912 65.8988 31.4031 65.5295 31.7649C65.1602 32.1397 64.6763 32.3206 64.0905 32.3206C63.492 32.3206 63.0081 32.1397 62.6516 31.7649C62.2823 31.3902 62.104 30.912 62.104 30.3046V2.13231C62.104 1.52493 62.2823 1.03385 62.6516 0.672002C63.0209 0.297233 63.492 0.11631 64.0905 0.11631C64.689 0.11631 65.1729 0.297233 65.5295 0.672002C65.8988 1.04677 66.077 1.53785 66.077 2.13231V18.9194L75.946 9.97662C76.3025 9.61477 76.7227 9.44677 77.2066 9.44677C77.7797 9.44677 78.2381 9.66646 78.5946 10.1058C78.9512 10.4677 79.1167 10.8942 79.1167 11.3852C79.1167 11.9668 78.9003 12.432 78.4673 12.7938L70.9924 19.5526L78.8748 29.3742C79.1677 29.6972 79.3205 30.1108 79.3205 30.6018Z"
            />
            <path
              className="logo__text"
              id="o"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M96.5754 11.088C98.269 12.0572 99.5933 13.4142 100.561 15.1458C101.516 16.8775 102 18.8548 102 21.0905C102 23.2874 101.516 25.2517 100.574 26.9834C99.6315 28.7151 98.3072 30.072 96.6136 31.0412C94.9199 32.0105 92.9844 32.5015 90.8196 32.5015C88.6548 32.5015 86.7192 32.0234 85.0128 31.0412C83.3064 30.072 81.9694 28.7151 81.027 26.9834C80.072 25.2517 79.6008 23.2874 79.6008 21.0905C79.6008 18.8548 80.0847 16.8775 81.027 15.1458C81.9821 13.4142 83.3064 12.0702 85.0128 11.088C86.7192 10.1188 88.6548 9.62769 90.8196 9.62769C92.9589 9.62769 94.8817 10.1188 96.5754 11.088ZM82.9372 21.0517C82.9372 25.4714 86.4645 29.0382 90.8068 29.0382C95.1491 29.0382 98.6638 25.4714 98.6765 21.0517C98.6765 16.632 95.1491 13.0652 90.8068 13.0652C86.4518 13.0652 82.9372 16.6449 82.9372 21.0517Z"
            />
            <path
              className="logo__text"
              id="p"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.0922 11.088C44.7858 12.0572 46.1102 13.4142 47.078 15.1458C48.033 16.8775 48.5169 18.8548 48.5042 21.0905C48.5042 23.2874 48.0203 25.2517 47.078 26.9834C46.1357 28.7151 44.8113 30.072 43.1177 31.0412C41.424 32.0105 39.4885 32.5015 37.3237 32.5015C35.1589 32.5015 33.2233 32.0234 31.5169 31.0412C31.0712 30.7957 30.651 30.5114 30.2563 30.2012V39.8935C30.2563 40.5268 30.0652 41.0308 29.6832 41.4185C29.3012 41.8062 28.8046 42 28.1806 42C27.5948 42 27.0982 41.8062 26.7034 41.4185C26.3087 41.0308 26.1177 40.5268 26.1177 39.8935V21.0905C26.1177 18.8548 26.6016 16.8775 27.5439 15.1458C28.4989 13.4142 29.8233 12.0702 31.5297 11.088C32.9941 10.248 34.6495 9.76985 36.4705 9.65354H36.5342H36.5724C36.8016 9.64062 37.0563 9.62769 37.2982 9.62769H37.3364C39.4757 9.62769 41.3986 10.1188 43.0922 11.088ZM29.454 21.0517C29.454 25.4714 32.9813 29.0382 37.3237 29.0382C41.666 29.0382 45.1933 25.4714 45.1933 21.0517C45.1933 16.632 41.666 13.0652 37.3237 13.0652C32.9686 13.0652 29.454 16.6449 29.454 21.0517Z"
            />
            <path
              className="logo__text"
              id="a"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8854 11.1268C18.579 12.1348 19.9161 13.5046 20.9094 15.2492C21.9026 16.9938 22.3865 18.9323 22.3738 21.0775V30.2788C22.3738 30.8732 22.1828 31.3772 21.788 31.7778C21.406 32.1785 20.9094 32.3723 20.3109 32.3723C19.7251 32.3723 19.2285 32.1785 18.8337 31.7778C18.439 31.3902 18.2479 30.8862 18.2479 30.2788V30.2012C17.8659 30.5114 17.4457 30.7828 17.0127 31.0412C15.3191 32.0105 13.3835 32.5015 11.2187 32.5015C9.05393 32.5015 7.11835 32.0234 5.41198 31.0412C3.70562 30.072 2.36854 28.7151 1.42622 26.9834C1.41985 26.9769 1.41667 26.9672 1.41348 26.9575C1.4103 26.9478 1.40712 26.9382 1.40075 26.9317L1.36255 26.9188C0.993258 26.1951 0.700375 25.4455 0.483895 24.6702C0.464794 24.5926 0.445693 24.5183 0.426592 24.444C0.407491 24.3697 0.38839 24.2954 0.369288 24.2178C0.362921 24.1855 0.356554 24.1565 0.350187 24.1274C0.34382 24.0983 0.337453 24.0692 0.331086 24.0369C0.28015 23.8431 0.241949 23.6363 0.203747 23.4295L0.203745 23.4295C0.203745 23.4166 0.200562 23.4037 0.197378 23.3908C0.194195 23.3778 0.191011 23.3649 0.191011 23.352C0.152809 23.1194 0.114607 22.8868 0.0891386 22.6542V22.6283C0.0636704 22.3828 0.0382022 22.1372 0.0254682 21.8788V21.8658C0.0127341 21.6074 0 21.336 0 21.0775C0 18.9323 0.483895 16.9938 1.46442 15.2492C2.44494 13.5046 3.79476 12.1348 5.51386 11.1268C7.23296 10.1317 9.13034 9.62769 11.2187 9.62769C13.3071 9.62769 15.1918 10.1188 16.8854 11.1268ZM3.3236 21.0517C3.3236 25.4714 6.85094 29.0382 11.1933 29.0382C15.5356 29.0382 19.0629 25.4714 19.0629 21.0517C19.0629 16.632 15.5483 13.0652 11.1933 13.0652C6.8382 13.0652 3.3236 16.6449 3.3236 21.0517Z"
            />
          </g>
        </g>
      </svg>
    );
  },
  favorite: ({
    width = 20,
    height = 20,
    fill = '#33333A',
    fillInner = 'transparent',
    classNameInner,
    classNameOver,
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="heart-like-love-favourite-dating">
        <g id="Shape">
          <path
            className={classNameInner}
            d="M15.4514 2.38635C13.6701 0.638942 10.8306 0.542761 8.93333 2.10148C7.03682 0.543495 4.19728 0.638942 2.41528 2.38635C1.50219 3.28208 1 4.47223 1 5.73947C1 7.00671 1.50219 8.19759 2.41528 9.09258L8.08686 14.6564C8.32037 14.8855 8.62723 15 8.93333 15C9.23944 15 9.5463 14.8855 9.7798 14.6564L15.4514 9.09258C16.3645 8.19759 16.8667 7.00744 16.8667 5.73947C16.8667 4.47223 16.3645 3.28135 15.4514 2.38635Z"
            fill={fillInner}
          />
          <path
            className={classNameOver}
            d="M15.4514 2.38635L15.1012 2.74328L15.1014 2.74342L15.4514 2.38635ZM8.93333 2.10148L8.61595 2.48783L8.93335 2.74857L9.25073 2.48782L8.93333 2.10148ZM2.41528 2.38635L2.06521 2.02935L2.06513 2.02942L2.41528 2.38635ZM2.41528 9.09258L2.76542 8.73565L2.76528 8.73551L2.41528 9.09258ZM8.08686 14.6564L8.43701 14.2995L8.43701 14.2995L8.08686 14.6564ZM9.7798 14.6564L9.42966 14.2995L9.42966 14.2995L9.7798 14.6564ZM15.4514 9.09258L15.1014 8.73551L15.1012 8.73565L15.4514 9.09258ZM15.8015 2.02942C13.8358 0.101055 10.7083 -0.00382548 8.61593 1.71514L9.25073 2.48782C10.9529 1.08935 13.5045 1.17683 15.1012 2.74328L15.8015 2.02942ZM9.25072 1.71513C7.15917 -0.00307053 4.03168 0.101058 2.06521 2.02935L2.76535 2.74335C4.36289 1.17683 6.91446 1.09006 8.61595 2.48783L9.25072 1.71513ZM2.06513 2.02942C1.05717 3.01823 0.5 4.33661 0.5 5.73947H1.5C1.5 4.60785 1.94722 3.54593 2.76542 2.74328L2.06513 2.02942ZM0.5 5.73947C0.5 7.14221 1.05709 8.46144 2.06528 9.44966L2.76528 8.73551C1.9473 7.93374 1.5 6.8712 1.5 5.73947H0.5ZM2.06513 9.44951L7.73672 15.0133L8.43701 14.2995L2.76542 8.73565L2.06513 9.44951ZM7.73672 15.0133C8.06867 15.339 8.50341 15.5 8.93333 15.5V14.5C8.75105 14.5 8.57207 14.432 8.43701 14.2995L7.73672 15.0133ZM8.93333 15.5C9.36326 15.5 9.798 15.339 10.13 15.0133L9.42966 14.2995C9.2946 14.432 9.11562 14.5 8.93333 14.5V15.5ZM10.13 15.0133L15.8015 9.44951L15.1012 8.73565L9.42966 14.2995L10.13 15.0133ZM15.8014 9.44966C16.8095 8.46146 17.3667 7.14298 17.3667 5.73947H16.3667C16.3667 6.87189 15.9194 7.93371 15.1014 8.73551L15.8014 9.44966ZM17.3667 5.73947C17.3667 4.33673 16.8096 3.0175 15.8014 2.02928L15.1014 2.74342C15.9194 3.5452 16.3667 4.60773 16.3667 5.73947H17.3667Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  ),
  filterGrid: ({
    width = 17,
    height = 17,
    fill = '#505050',
    className,
    pathClassName,
    ...props
  }) => (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        id="grid"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1429 0H14.5714C15.9126 0 17 1.08739 17 2.42857V4.85714C17 6.19832 15.9126 7.28571 14.5714 7.28571H12.1429C10.8017 7.28571 9.71429 6.19832 9.71429 4.85714V2.42857C9.71429 1.08739 10.8017 0 12.1429 0ZM12.1429 9.71429H14.5714C15.9126 9.71429 17 10.8017 17 12.1429V14.5714C17 15.9126 15.9126 17 14.5714 17H12.1429C10.8017 17 9.71429 15.9126 9.71429 14.5714V12.1429C9.71429 10.8017 10.8017 9.71429 12.1429 9.71429ZM4.85714 9.71429H2.42857C1.08739 9.71429 0 10.8017 0 12.1429V14.5714C0 15.9126 1.08739 17 2.42857 17H4.85714C6.19832 17 7.28571 15.9126 7.28571 14.5714V12.1429C7.28571 10.8017 6.19832 9.71429 4.85714 9.71429ZM2.42857 0H4.85714C6.19832 0 7.28571 1.08739 7.28571 2.42857V4.85714C7.28571 6.19832 6.19832 7.28571 4.85714 7.28571H2.42857C1.08739 7.28571 0 6.19832 0 4.85714V2.42857C0 1.08739 1.08739 0 2.42857 0Z"
      />
    </svg>
  ),
  loop: ({
    width = 17,
    height = 18,
    fill = '#5C5C5C',
    pathClassName,
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.23782 13.1718C10.4389 13.1718 12.9756 10.5265 12.9756 7.33592C12.9756 4.14538 10.4389 1.5 7.23782 1.5C4.03674 1.5 1.5 4.14538 1.5 7.33592C1.5 10.5265 4.03674 13.1718 7.23782 13.1718Z"
        fill="white"
        fillOpacity="0.01"
        stroke={fill}
        strokeWidth="3"
      />
      <path
        d="M10.7646 11.6667L14.7577 15.7523"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  pin: ({
    width = 13,
    height = 19,
    fill = '#5C5C5C',
    pathClassName,
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        id="Location"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.22222 0C2.91694 0 0 2.80662 0 5.77778C0 11.7808 5.9422 18.3683 5.77778 18.7778C6.27255 18.7295 6.38357 18.7778 7.22222 18.7778C6.62727 18.7706 6.73016 18.7295 7.22222 18.7778C7.06051 18.3604 13 11.6634 13 5.77778C13 2.80662 10.0831 0 7.22222 0ZM7.22222 8.66667C5.30418 8.66667 4.33333 7.69815 4.33333 7.22222C4.33333 5.30426 5.30418 4.33333 7.22222 4.33333C7.69582 4.33333 8.66667 5.30426 8.66667 7.22222C8.66667 7.69815 7.69582 8.66667 7.22222 8.66667Z"
        fill={fill}
      />
    </svg>
  ),
  plus: ({
    width = 38,
    height = 38,
    fill = '#349A89',
    pathClassName,
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 19"
      fill={fill}
      // xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Group 7">
        <rect
          className={pathClassName}
          id="Rectangle 3"
          x="17"
          width="4"
          height="38"
          rx="2"
          fill={fill}
        />
        <rect
          className={pathClassName}
          id="Rectangle 3.1"
          y="21"
          width="4"
          height="38"
          rx="2"
          transform="rotate(-90 0 21)"
          fill={fill}
        />
      </g>
    </svg>
  ),
  eye: ({width="24", height="15", fillEdge="#000", fillBody="white",fillCenter="#000", ...props}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 15"
      fill="none"
      {...props}
    >
      <g id="eye">
        <path
          id="edge"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6032 0C16.2102 0 20.4552 2.316 22.9552 6.195C23.2913 6.715 23.2913 7.387 22.9552 7.908C20.4552 11.786 16.2102 14.102 11.6032 14.102C6.99625 14.102 2.75225 11.786 0.25125 7.908C-0.08375 7.387 -0.08375 6.716 0.25125 6.195C2.75225 2.316 6.99625 0 11.6032 0ZM11.6033 12.902C15.8013 12.902 19.6683 10.792 21.9473 7.25701C22.0263 7.13401 22.0263 6.96801 21.9473 6.84501C19.6673 3.31001 15.8013 1.20001 11.6033 1.20001C7.40526 1.20001 3.53926 3.31001 1.26026 6.84501C1.18026 6.96801 1.18026 7.13401 1.26026 7.25701C3.53926 10.792 7.40526 12.902 11.6033 12.902Z"
          fill={fillEdge}
        />
        <path
          id="body"
          className="body"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6679 13C15.9728 13 19.9383 10.8363 22.2753 7.21125C22.3563 7.08511 22.3563 6.91489 22.2753 6.78875C19.9373 3.16373 15.9728 1 11.6679 1C7.36301 1 3.39856 3.16373 1.06153 6.78875C0.979491 6.91489 0.979491 7.08511 1.06153 7.21125C3.39856 10.8363 7.36301 13 11.6679 13Z"
          fill={fillBody}
        />
        <path
          id="center"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00323 7.05099C8.00323 5.06599 9.61823 3.45099 11.6032 3.45099C13.5882 3.45099 15.2032 5.06599 15.2032 7.05099C15.2032 9.03599 13.5882 10.651 11.6032 10.651C9.61823 10.651 8.00323 9.03599 8.00323 7.05099ZM9.20325 7.051C9.20325 8.374 10.2802 9.451 11.6032 9.451C12.9262 9.451 14.0032 8.374 14.0032 7.051C14.0032 5.728 12.9262 4.651 11.6032 4.651C10.2802 4.651 9.20325 5.728 9.20325 7.051Z"
          fill={fillCenter}
        />
      </g>
    </svg>
  ),
};
