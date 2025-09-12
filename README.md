# Robo-Pi
interact with your robot in JS- Zapier for Robots
robo-pi

A minimal, Robot.js-like hardware abstraction + web teleop starter you can publish as robo-pi.

This repo is a pnpm workspaces monorepo with:

packages/web → @robopi/web (browser SDK using Web Serial)

apps/dashboard → Vite + React demo dashboard (device registry, connect, calibrate, teleoperate)

Works in Chromium-based browsers that support Web Serial (Chrome, Edge). Falls back to a mock layer elsewhere.
