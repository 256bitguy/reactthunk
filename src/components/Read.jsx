import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";

const Read = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUser());
    }, []);

    const { users, loading } = useSelector((state) => state.app);

    if (loading) {
        return (
            <div className="w-50 mx-auto"> <h2>LOADING!!</h2></div>
        );
    }

    // Reverse the users array
    const reversedUsers = users.slice().reverse();

    return (
        <div>
            {reversedUsers &&
                reversedUsers.map((item, index) => {
                    return (
                        <div key={index} className="card w-50 mx-auto">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                                <p className="card-text">{item.email}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Read;
