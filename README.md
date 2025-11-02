# SwiftHire Architecture

## Architecture Recommendation

Event-driven architecture is best for SwiftHire. It handles automation events (UI scans, AI responses, form submissions) asynchronously, making it scalable, modifiable, and robust. Use TypeScript interfaces for type safety and maintainability.

## Folder Structure

```
src/
├── automation/     # Terminator SDK integration, field detection, action executor
├── ai/             # Ollama client, field mapping logic, context analyzer
├── ui/             # Electron renderer components (control panel, tray icon, logs)
├── data/           # JSON data handlers, configuration manager, session state
├── utils/          # Logging, error handling, performance monitoring
├── main/           # Electron main process (app lifecycle, IPC)
├── types/          # TypeScript type definitions
└── config/         # App configuration files
```

## Key Principles

- **Modular**: Separate concerns for easy modifications
- **Event-based**: Use Node.js EventEmitter or custom pub/sub for communication
- **Scalable**: Add features without rewriting core logic
- **Maintainable**: Clear interfaces, documentation, tests
- **Robust**: Comprehensive error handling, retries, logging

## About SwiftHire

SwiftHire is an AI-powered desktop automation tool that fills forms automatically across any app. It scans the screen to find form fields, uses local AI to match your data to those fields, and fills them without you doing anything. It adapts to changing forms, works on web and native apps, keeps everything private on your device, and runs on Windows and macOS. The goal is to save time, reduce errors, and make form filling effortless and smart.
