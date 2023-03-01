export const validateCommentForm = (values) => {
  const errors = {};

  if (!values.ratings) {
    errors.ratings = "Required";
  }

  if (values.author.length < 2) {
    errors.author = "Must be 2 characters or more";
  } else if (values.author.length > 15) {
    errors.author = "Must be 15 characters or less";
  }

  return errors;
};
