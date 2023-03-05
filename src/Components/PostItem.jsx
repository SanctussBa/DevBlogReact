function PostItem({ title, summary }) {
  return (
    <>
      <div className="post-item-container">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </>
  );
}

export default PostItem;
