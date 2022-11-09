import { useCallback, } from 'react';

import { changeVisible, changeCheckbox } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
    const { showName, name, checkboxState } = useSelector((state) => state)
    const dispatch = useDispatch();
    //const [, setDummy] = useState();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
        //setDummy({});
    }, [dispatch]);
    const setCheckbox = useCallback(() => {
        dispatch(changeCheckbox);
        //setDummy({});
    }, [dispatch]);


    return (<div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        <p>Checkbox</p>
        <input type='checkbox' checked={checkboxState} onChange={setCheckbox} />
    </div>
    )
};
export default Profile;