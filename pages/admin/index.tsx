import { NextPage } from 'next';
import AdminLayout from '@components/Layouts/AdminLayout';

const Admin: NextPage = (): JSX.Element => {
  return (
    <AdminLayout title="Dashboard">
      <h1> Admin page</h1>
    </AdminLayout>
  );
};

export default Admin;
