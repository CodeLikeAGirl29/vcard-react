// Turbopack statically validates direct member access on a namespace import
// (e.g. `Si.SiCss3`) and will fail the build if that export doesn't exist in
// the installed package version. Looking it up through a function argument
// instead avoids that static check, so this keeps working across
// react-icons versions that name an icon slightly differently.
export function pickIcon(mod, ...names) {
  for (const name of names) {
    if (mod && mod[name]) return mod[name];
  }
  return null;
}
