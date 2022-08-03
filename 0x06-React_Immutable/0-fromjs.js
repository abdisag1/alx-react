import { Map, List, fromJS } from 'immutable';

export default function getImmutableObject(object) {
    return (fromJS(object))
}
