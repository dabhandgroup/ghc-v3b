import { redirect } from "next/navigation";

export default function OldPortalRedirect() {
  redirect("/investor-portal/home");
}
