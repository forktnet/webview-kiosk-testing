import urlJoin from "url-join";

export const getBuildBasePath = () => {
  return urlJoin("/", process.env.PUBLIC_DOCS_BASE_PATH ?? "/");
};
