import * as yup from 'yup';

const NewsletterSchema = yup.object().shape({
  email: yup.string().email().required('Email cannot be empty.'),
});

export default NewsletterSchema;
