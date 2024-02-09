import UpdateCard from "../components/UpdateCard";

export default function Updates() {
  return (
    <div className="flex flex-col justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
      <div className="container mx-auto py-2 text-sm">
        <pre className="whitespace-pre-wrap">
          <UpdateCard
            text={`•	Basis the last calibrations with Program Team, we got the approval to treat Panini Trading cards as False Positive products.\n
•	Until we will have the general approach for trading cards approved, we will be treating only Panini cards as FP to mitigate the risk of having frustrated cases and Escalation SIMs.`}
            date="January 22,2024"
          />
        </pre>
      </div>
      <div className="container mx-auto py-2 text-sm">
        <pre className="whitespace-pre-wrap">
          <UpdateCard
            text={`•	Regarding the product type “5D diamond painting kit”, please be informed that if the kit is marketed for kids/children we will go ahead with restrictive approach as per SOP. Logic would be if the product theme is for adult and seller is claiming that kids can use it, in such cases Seller has to either submit documents or update details.`}
            date="January 22,2024"
          />
        </pre>
      </div>
    </div>
  );
}
