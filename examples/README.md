# Illustrative public status projection

`public-status.mjs` is a new, small example written specifically for this showcase. It illustrates a general design principle relevant to the project: build a public object from explicitly permitted values rather than serializing an internal record.

It is **not production Aether Nexus code**, an API schema, or a reproduction of its diagnostic logic. It has no dependencies, network calls, credentials, or application imports.

With Node.js installed, run from this repository:

```sh
node examples/public-status.mjs
```

Expected output:

```json
{"state":"review","progress":75}
```

The example accepts only fixed state labels and a finite progress number, clamps progress to 0–100, and leaves unknown fields out of the result. Its sample data is entirely synthetic. It is not a general-purpose secret scanner or authorization system.
