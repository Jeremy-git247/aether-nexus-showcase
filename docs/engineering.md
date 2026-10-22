# Engineering decisions and tradeoffs

## Keeping long jobs observable

Video rendering and remote generation do not fit comfortably inside a single browser request. The project separates background work from its HTTP interface and exposes persisted events through Server-Sent Events.

**Tradeoff:** More components and job states must be managed, but the interface can show progress without holding one request open for the entire workflow.

## Preserving useful work after a failure

The workflows persist intermediate results and checkpoints. Resume paths can reuse eligible completed work rather than regenerate everything.

**Tradeoff:** Saved state must remain valid for the requested operation. Checkpoints do not guarantee universal recovery or eliminate every repeated provider call.

## Treating publishing differently from generation

External publishing changes another system. The inspected implementation includes publish-claim checks, review gates, and handling that returns failed publishing attempts to review. Private tests cover duplicate approval/claim behavior and retaining a provider upload identifier after an optional follow-up operation fails.

**Tradeoff:** Requiring review after ambiguous failures adds friction, but reduces the risk of casually repeating an external side effect. This is not a claim of end-to-end exactly-once delivery.

## Making errors useful without exposing raw responses

Provider diagnostics select bounded categories and recognized metadata. The inspected implementation avoids forwarding raw response bodies and arbitrary provider messages in these diagnostic strings.

**Tradeoff:** Less raw detail is available in the dashboard. Categories help triage a failure but do not prove its root cause or replace a security audit.

## Balancing local and external services

The private project includes local model support and external text/media integrations, with policy and budget controls in the source. Optional research has authorization checks.

**Tradeoff:** Local generation has hardware constraints; external services introduce availability, pricing, and account dependencies. This showcase deliberately omits the proprietary selection and fallback rules.

## Verification scope

Inspection found private tests covering publishing controls, provider diagnostics, research consent and saved research, secret encryption/redaction, API behavior, and artifact workflows. Test files establish what the project intends to check; their presence alone is not evidence that the current installation passes.

Preparing this showcase did not run the private application, invoke paid providers, publish content, play-test generated games, or rerun the private test suite. The only executable public example is synthetic and independent of the application.

No benchmark or commercial outcome is included without evidence. Personal contribution, collaboration, and AI-assisted development details should be explained accurately by the project owner during an interview; this portfolio does not invent an authorship history.
