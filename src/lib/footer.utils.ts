export function getExternalLinkProps(external?: boolean) {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : undefined
}
