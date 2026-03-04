import { redirect } from "next/navigation";

export default function CompanyIndexRedirect() {
  redirect("/company/about");
}
