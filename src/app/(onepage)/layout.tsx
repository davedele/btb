import OnepageHeader from "@/components/OnepageHeader";
import OnepageFooter from "@/components/OnepageFooter";

export default function OnepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OnepageHeader />
      {children}
      <OnepageFooter />
    </>
  );
}
