export type Bindings = {
  VANITY_GITHUB_ORG: string;
  VANITY_GIT_BRANCH: string;
  VANITY_DOMAIN: string;
}

declare global {
  function getMiniflareBindings(): Bindings;
}
