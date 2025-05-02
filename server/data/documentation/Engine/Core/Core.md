# Summary
Core header file that includes all of the core files, types, defines, functions, etc that are used in almost every part of the Engine. This header is included in every Engine header file.

# Header
Engine/Core/Core.h
# Source
No source
# Namespace
No namespace
# Type
Header file

# Functions
extern bool Editor::IsRuntimeRunning()

const fs::path& ExecutableFolder()

# Defines
FLAG(bit) = (1 << bit)

IN_RUNTIME(action) = if (Editor::IsRuntimeRunning()) { action; }
IN_NOT_RUNTIME(action) = if (!Editor::IsRuntimeRunning()) { action; }
IN_RUNTIME_BEGIN = if (Editor::IsRuntimeRunning()) {
IN_RUNTIME_END = }

# Types
int8 - char
uint8 - unsigned char

int16 - short
uint16 - unsigned short

int32 - int
uint32 - unsigned int

int64 - long long
uint64 - unsigned long long
