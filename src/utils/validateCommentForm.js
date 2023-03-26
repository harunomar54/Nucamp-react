export const validateCommentForm = (values) => {
  const errors = {};

  if (!values.rating) {
    errors.rating = "Required";
  }

  if (!values.author) {
    errors.author = "Enter a name";
  } else if (values.author.length < 2) {
    errors.author = "Must be 2 characters or more";
  } else if (values.author.length > 15) {
    errors.author = "Must be 15 characters or less";
  }

  if (!values.commentText) {
    errors.commentText = "Enter a comment";
  } else if (values.commentText.length < 2) {
    errors.commentText = "Must be at least 2 characters";
  } else if (values.commentText.length > 250) {
    errors.commentText = "Must be 250 characters or less";
  }

  return errors;
};
