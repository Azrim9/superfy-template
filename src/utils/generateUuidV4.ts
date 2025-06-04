/**
 * Generates a RFC-4122 version 4 UUID.
 *
 * Example output: "3b12f1df-5232-4f75-8f3e-2bdc7e3e8b69"
 */
export function generateUUIDv4() {
    // Create a buffer of 16 random bytes
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
  
    // Per RFC-4122, set bits for version and `clock_seq_high_and_reserved`
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version = 4 (0b0100xxxx)
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant = 10xxxxxx
  
    // Convert each byte to its 2-digit hex representation
    const hexPairs = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'));
  
    // Insert hyphens in the 8-4-4-4-12 pattern
    return [
      hexPairs.slice(0, 4).join(''),   // 4 bytes → 8 hex chars
      hexPairs.slice(4, 6).join(''),   // 2 bytes → 4 hex chars
      hexPairs.slice(6, 8).join(''),   // 2 bytes → 4 hex chars
      hexPairs.slice(8, 10).join(''),  // 2 bytes → 4 hex chars
      hexPairs.slice(10, 16).join('')  // 6 bytes → 12 hex chars
    ].join('-');
  }
  


  