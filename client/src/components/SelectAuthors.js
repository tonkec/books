import React from "react";

const SelectAuthors = ({ content, handle }) => {
  let { authors } = content;
  return (
    <div className="control select is-primary">
      <select onChange={handle}>
        <option> Select author </option>
        {authors.map(author => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAuthors;
