import { Form ,useParams,useSearchParams} from "react-router-dom";
import React from "react";

export default function Contact() {
    const { contactId  } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const test = searchParams.get("test");
    
  const contact = {
    first: "Your",
    last: contactId,  
    last1: test,
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

let avatar : any = contact.avatar;

  return (
    <div id="contact">
      <div>
        <img
          key={avatar}
          src={avatar || null}
        />
      </div>

      <div>
        <h1>
           
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}{contact.last1}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact  } : any) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}