export const LintOnEdit = async ({ $ }) => {
  return {
    "tool.execute.after": async (input, output) => {
      if (input.tool !== "edit" && input.tool !== "write") return

      const filePath = output.args?.filePath
      if (!filePath) return

      const exts = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".astro"]
      if (!exts.some((ext) => filePath.endsWith(ext))) return

      if (filePath.includes("node_modules") || filePath.includes("dist")) return

      try {
        const result = await $`npx astro check 2>&1`
        if (result.exitCode !== 0) {
          console.log(`[lint-on-edit] Issues detected:\n${result.stdout}`)
        }
      } catch {
        // Silently ignore — lint-on-edit is advisory, not blocking
      }
    },
  }
}
