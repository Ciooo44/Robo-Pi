# robo-pi

**Goal**: Close the hardware↔software gap for small robot builders with a minimal browser SDK and a plug‑and‑play dashboard.

Zapier for Robots 🤖⚡

Robo-Pi is an open-source SDK + dashboard monorepo that closes the gap between robot hardware and software for small builders.

Why?

Today, makers, students, and small robotics teams face a recurring pain point:

They can wire up the hardware (servos, motors, sensors).

They can code the software (simulations, AI).
But they struggle to connect the two worlds in a fast and standard way.

Every robot comes with its own SDK, setup takes weeks, and integration is fragile.

Robo-Pi solves this by acting like Zapier for Robots:

Use findPort() to detect and connect to your robot.

Run calibrate() with visual feedback.

Control joints live with teleoperate() from the browser.

Build data pipelines with record() → train() → eval() for AI-driven policies.

All from one unified API and a plug-and-play web dashboard.

Features

✅ WebSerial-based robot detection
✅ Visual dashboard with device registry
✅ One-click calibration & teleoperation panel
✅ MockBot support for testing without hardware
🚧 Dataset recording & replay (record/replay)
🚧 AI training (train)
🚧 AI inference (eval)

Who is it for?

Maker & hobbyist communities

University / high school robotics clubs

Small robotics startups

Research labs

Development
pnpm i
pnpm -r build
pnpm --filter @robopi/dashboard dev


Open in your browser → click Add Unit → connect a robot or try with MockBot.

Roadmap

 Device detection (findPort)

 Calibration (calibrate)

 Teleoperation (teleoperate)

 Data recording (record/replay)

 AI training (train)

 AI inference (eval)

License

MIT — free and open to all.

## Dev

```bash
pnpm i
pnpm -r build
pnpm --filter @robopi/dashboard dev
```
