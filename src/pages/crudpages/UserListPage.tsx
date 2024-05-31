import { Await, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../../components/Loader";
import CrudTable from "../../components/CrudTable";

export default function UserListPage() {
    const loaderData = useLoaderData() as any;

    return (
        <div className="grid mx-10 lg:mx-20">
            <Suspense fallback={<Loader isLoading={true} />}>
                <Await resolve={loaderData.data}>
                    <UserTable />
                </Await>
            </Suspense>
        </div>
    )
}

const UserTable = () => {
    const loadData = useAsyncValue() as any;
    const navigate = useNavigate();
    const onEdit = (data: any) => {
        alert(`${data.username} - EDIT TODO!`);
    }

    const onDelete = (data: any) => {
        alert(`${data.username} - DELETE TODO!`);
    }

    const onAdd = () => {
        navigate("add")
    }

    const onUserSelect = (data: any) => {
        alert(`${data.username} - SELECT TODO!`);
    }

    return (
        <div className="max-w-7xl">
            <CrudTable key={"usertbl"} headerData={loadData.UserHeaders} listData={loadData.UserData}
                addFn={onAdd} editFn={onEdit} deleteFn={onDelete} onSelect={onUserSelect}>
                <h1 className="font-bold text-3xl text-left">User List</h1>
            </CrudTable>
        </div>
    )
}