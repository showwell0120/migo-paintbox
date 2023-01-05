import styled from '@emotion/styled';
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

const Container = styled.nav``;

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
    <Container>
      <ol>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              {isCurrentPath ? (
                route.crumb
              ) : (
                <Link to={route.pathname}>{route.crumb}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </Container>
  );
}

