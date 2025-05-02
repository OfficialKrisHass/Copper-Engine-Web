# Summary
Wrapper for the command line arguments passed to the running executable. Does not include the path of the executable.

# Header
Engine/Core/Args.h
# Source
Engine/Core/Args.cpp
# Namespace
Copper
# Type
Namespace

# Functions
void Setup(uint32 argc, char* arv[])
uint32 Count()
const std::string& Get(uint32 index)
const fs::path& ProjectPath()
