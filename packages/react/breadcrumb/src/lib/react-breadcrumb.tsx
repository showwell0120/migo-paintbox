import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useMatches, Link, Params } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ReactBreadcrumbProps {}

interface CustomMatch {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    crumb: (data?: unknown) => JSX.Element | React.ReactNode;
  };
}

const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Li = styled.li`
  padding-left: 0.5rem;
  ${() => Li} + ${() => Li} {
    &:before {
      display: inline-block;
      padding-right: 0.5rem;
      color: var(--gray-600);
      content: '/';
    }
  }
`;

export function ReactBreadcrumb(props: ReactBreadcrumbProps) {
  const matches = useMatches() as unknown as CustomMatch[];

  const routes = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => ({
      crumb: match.handle.crumb(match.data) as React.ReactNode,
      pathname: match.pathname,
    }));

  const isCurrentPath = true;

  return (
    <nav>
      <Ol>
        {routes.map((route, index) => {
          return (
            <Li
              key={index}
              css={[
                isCurrentPath &&
                  css`
                    a {
                      color: var(--primary-primary);
                      text-decoration: none;
                      &:hover {
                        text-decoration: none;
                      }
                    }
                  `,
              ]}
            >
              {isCurrentPath ? (
                route.crumb
              ) : (
                <Link to={route.pathname}>{route.crumb}</Link>
              )}
            </Li>
          );
        })}
      </Ol>
    </nav>
  );
}

