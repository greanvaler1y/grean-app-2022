import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';
import cn from 'classnames';

export type HitsProps<THit> = React.ComponentProps<'div'> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element;
    classNames?: string;
  };

function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
  hitComponent: Hit,
  ...props
}: HitsProps<THit>) {
  const { hits } = useHits(props);
  console.log('HITS FOUND:',  hits)
  return (
    <div className={cn('ais-Hits', props.classNames)}>
      <ol className="ais-Hits-list">
        {hits?.map((hit) => (
          <li key={hit.objectID} className="ais-Hit-item">
            <Hit hit={hit as unknown as THit} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Hits;
