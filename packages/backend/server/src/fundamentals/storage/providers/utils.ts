import { Readable } from 'node:stream';

import { crc32 } from '@node-rs/crc32';
import { getStreamAsBuffer } from 'get-stream';

import { getMime } from '../../../native';
import { BlobInputType, PutObjectMetadata } from './provider';

export async function toBuffer(input: BlobInputType): Promise<Buffer> {
  if (input instanceof Readable) {
    return await getStreamAsBuffer(input);
  }
  if (input instanceof Buffer) {
    return input;
  }
  return Buffer.from(input);
}

export function autoMetadata(
  blob: BlobInputType,
  raw: PutObjectMetadata = {}
): PutObjectMetadata {
  const metadata = {
    ...raw,
  };

  if (!metadata.contentLength) {
    metadata.contentLength =
      blob instanceof Buffer || blob instanceof Uint8Array
        ? blob.byteLength
        : blob instanceof Readable
          ? 0
          : Buffer.from(blob).byteLength;
  }

  try {
    if (!metadata.checksumCRC32) {
      metadata.checksumCRC32 =
        blob instanceof Buffer
          ? crc32(blob).toString(16)
          : blob instanceof Uint8Array
            ? crc32(Buffer.from(blob)).toString(16)
            : blob instanceof Readable
              ? undefined
              : crc32(Buffer.from(blob)).toString(16);
    }

    if (!metadata.contentType) {
      metadata.contentType =
        blob instanceof Buffer || blob instanceof Uint8Array
          ? getMime(Buffer.from(blob))
          : blob instanceof Readable
            ? 'application/octet-stream'
            : getMime(Buffer.from(blob));
    }
  } catch {
    // noop
  }

  return metadata;
}
