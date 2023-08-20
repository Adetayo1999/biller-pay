import DYNH from "@/components/common/DYNH";

const BusinessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <DYNH />
    </>
  );
};

export default BusinessLayout;
