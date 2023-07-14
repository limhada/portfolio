import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading(){
  return (<div>
    <FontAwesomeIcon icon={faSpinner} className="animate-spin bg-mycolor4"/>
  </div>)
}