# Summary
Struct providing a simple hashable UUID implementation using SIMD instructions, heavily inspired by https://github.com/crashoz/uuid_v4.

# Header
Engine/Core/UUID.h
# Source
Engine/Core/UUID.cpp
# Namespace
Copper
# Type
Struct

# Functions
UUID()#Default constructor, generates a valid random UUID.
UUID(const UUID& other)#Copy constructor, self explanatory.
UUID(uint64 x, uint64 y)#Constructs the UUID from two 8 byte values, the two halves of the 16 byte byte representation of an UUID.
UUID(const uint8* bytes)#Constructs the UUID from a 16 byte array, the byte representation of an UUID.

explicit UUID(const std::string& bytes)#Constructs the UUID from the fancy hexadecimal version of the UUID

static UUID Generate()#Returns a newly generated UUID.
static void Generate(UUID& out)#Generates a new UUID and stores it in out.
void Regenerate()#Sets the uuid to a newly generated value

std::string ToBytes() const#Converts this UUID to a byte array and returns it as a string.
void ToBytes(std::string& out) const#Converts this UUID to a byte array and stores it in out.
void ToBytes(char* out) const#Converts this UUID to a byte array and stores it in out.

static UUID CreateFromString(const std::string& string)#Creates an UUID from the fancy hexadecimal string representation of an UUID, and returns it.
static UUID CreateFromString(const char* string)#Creates an UUID from the fancy hexadecimal string representation of an UUID, and returns it.
void SetString(const char* string)#Sets the UUID from a fancy hexadecimal string representation of an UUID.

std::string ToString() const#Converts the UUID to a fancy hexadecimal string representation and returns it.
void ToString(std::stirng& out) const#Converts the UUID to a fancy hexadecimal string representation and stores it in out.
void ToString(char* out) const#Converts the UUID to a fancy hexadecimal string representation and stores it in out.

bool IsValid() const#Returns trues if the UUID is valid (not equal to the Invalid UUID)

size_t hash() const#Returns a 64 bit hash of the UUID.

static const UUID& GetInvalid()#Returns a reference to the Invalid UUID.
