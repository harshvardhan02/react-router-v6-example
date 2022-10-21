import { useEffect } from "react";
import { Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useSelector, useDispatch } from 'react-redux';
import { chatAction } from '../store/actions';
import { apiConstants } from "../store/constants/api.constants";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
  const dispatch = useDispatch();
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const id = localStorage.getItem("userId");
  const groups = useSelector(state => state.groupChat.groups);

  const appName = useSelector(state => state.appReducer.name)

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  useEffect(() => {
    dispatch(chatAction.getGroupChat(apiConstants.GetChat, { id: id }))
  }, [])

  return (
    <>
      <div id="sidebar">
        <h1>{appName}</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {groups.length ? (
            <ul>
              {groups.map((group) => (
                <li key={group._id}>
                  <NavLink
                    to={`chat/${group._id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {group.chatName ? (
                      <>
                        {group.chatName}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {group.isGroupChat && <span>★</span>}
                  </NavLink>
                </li>

              ))}
              <li>
                <NavLink to={`settings`}>
                  Settings
                </NavLink>
              </li>
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}