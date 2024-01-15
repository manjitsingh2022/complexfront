import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../redux/actions/user.actions";
import { useCommonState } from "../../../../common";
import { Message, Pagination } from "../../../../UI/Common";

const ShowUserList = ({ handleAddUserClick }) => {
  const dispatch = useDispatch();
  const { data, message,page,itemsPerPage,total_count ,totalItems} = useSelector((state) => state.users);
console.log(data, message,page,itemsPerPage,total_count ,totalItems,'messagemessagemessage000000000')
const [isActiveDelete, setIsActiveDelete] = useCommonState(false);

  const onPageChange = (newPage) => {
    dispatch(userActions.getUsers(newPage));
  };
  const handleEditClick = () => {
    setIsActiveDelete(false);
  };

  const handleDeleteClick = () => {
    setIsActiveDelete(true);
  };
  useEffect(() => {
    dispatch(userActions.getUsers(page));
  }, []);
  return (
    <div className="mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <Message message={message} />
          <div className="px-4 py-5 sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-lg font-semibold">Users</h1>
              <p className="text-sm">
                A list of all the users in your account including their name,
                title, email, and role.
              </p>
            </div>
            <button
              className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddUserClick}
            >
              Add user
            </button>
          </div>

          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data &&
                  data.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              // src={user.avatar}
                              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              alt="User Avatar"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {/* {user.title} */}
                          title
                        </div>
                        <div className="text-sm text-gray-500">{user.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <div className="flex justify-between">
                          <NavLink
                            style={{
                              color: isActiveDelete ? "inherit" : "blue",
                            }}
                            className={`text-blue-500 ${
                              isActiveDelete ? "" : "active"
                            }`}
                            onClick={handleEditClick}
                          >
                            Edit
                          </NavLink>
                          <NavLink
                            style={{
                              color: isActiveDelete ? "red" : "inherit",
                            }}
                            className={`text-red-500 ${
                              isActiveDelete ? "active" : ""
                            }`}
                            onClick={handleDeleteClick}
                          >
                            Delete
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Pagination
      totalItems={total_count}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
      currentPage={page} 
    />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUserList;
