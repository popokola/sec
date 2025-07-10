import { createAuthClient } from "better-auth/client";
import type { auth } from "./auth.ts";
import { inferAdditionalFields,
    magicLinkClient,
 } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: "https://ubiquitous-space-invention-w59vv7w5697h5q5r-3000.app.github.dev/",
    plugins: [magicLinkClient(), inferAdditionalFields<typeof auth>()],
});
