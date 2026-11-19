import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = path.join(root, 'package.json')

let staged = ''
try {
  staged = execSync('git diff --cached --name-only', {
    cwd: root,
    encoding: 'utf8',
  })
} catch {
  staged = ''
}
if (staged.split('\n').includes('package.json')) {
  const cached = execSync('git diff --cached package.json', {
    cwd: root,
    encoding: 'utf8',
  })
  if (/^[+-]\s*"version":/m.test(cached)) {
    process.exit(0)
  }
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
const [major, minor] = pkg.version.split('.').map((part) => Number(part))
const bumpMajor = process.env.BUMP === 'major' || process.argv.includes('--major')
const next = bumpMajor ? [major + 1, 0, 0] : [major, minor + 1, 0]
pkg.version = next.join('.')

fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)

console.log(`Version ${pkg.version}`)
