import styles from './react-tag.module.scss';

/* eslint-disable-next-line */
export interface ReactTagProps {}

export function ReactTag(props: ReactTagProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactTag!</h1>
    </div>
  );
}

export default ReactTag;
