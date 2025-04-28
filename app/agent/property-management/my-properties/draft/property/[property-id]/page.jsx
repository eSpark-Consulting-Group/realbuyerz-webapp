import DraftPropertyForm from '@/src/components/dashboard/agent/property-management/my-properties/draft/DraftPropertyForm';

const Page = ({ params }) => {
  return <DraftPropertyForm property_Id={params['property-id']} />;
};

export default Page;
