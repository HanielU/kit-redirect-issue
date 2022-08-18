import type { PageLoad } from "./$types";
import { get as getStoreValue } from "svelte/store";
import { redirect } from "@sveltejs/kit";
import { browser } from "$app/env";
// import { userWantsToChangePlan as _userWantsToChangePlan } from "$lib/stores/user";

export const load: PageLoad = () => {
  // if (!browser) return {};
  throw redirect(301, "/user");
};
