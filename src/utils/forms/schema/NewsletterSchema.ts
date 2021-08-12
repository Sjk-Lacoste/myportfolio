import * as yup from 'yup';

const NewsletterSchema = yup.object().shape({
  email: yup.string().email().required('Email address cannot be empty.'),
});

export default NewsletterSchema;
