import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const router = useRouter();
  const roleType = useSelector((state) => state?.auth?.signupFormData?.usertype);
  let userRole = roleType?.toString();
  console.log(userRole, 'USERRole')

  useEffect(() => {
    // Redirect to the appropriate route based on roleType
    if (userRole === 'user') {
      router.push('/user');
    } else if (userRole === 'agent') {
      router.push('/agent');
    }
  }, [roleType, router]);

  return null;
};

export default Dashboard;