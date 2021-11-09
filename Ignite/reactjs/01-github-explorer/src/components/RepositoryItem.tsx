interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    htlm_url: string,
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name }</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.htlm_url}>
        Acessar aqui
      </a>
    </li>
  );
}