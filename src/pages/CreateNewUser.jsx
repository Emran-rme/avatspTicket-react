
import { useGetUsersQuery } from "../api";
import { Main, UserForm } from "../components/Main";

import { UserItem } from "../components/fragments";

const CreateNewUser = () => {
    const { data: users, isLoading } = useGetUsersQuery();
    return (
        <div className="flex w-full">
            <div className="bg-slate-200 w-72 ">
                <UserForm />
            </div>
            <Main>
                <div className="px-8 py-4 grid grid-cols-4 gap-6">
                    {!isLoading
                        ? users.data.map((user) => (
                              <UserItem key={user._id} {...user} />
                          ))
                        : "صبر کنید"}
                </div>
            </Main>
        </div>
    );
};

export default CreateNewUser;
