import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    };
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div className="box left">
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>

                <a href={props.repository.html_url}>Acessar repositório</a>
            </div>
            <div className="box-right">
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </li>
    );
}
