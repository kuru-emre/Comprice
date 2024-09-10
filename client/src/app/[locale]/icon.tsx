import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

const fontPath = path.resolve('./public/fonts/Lastica.ttf');
const fontData = fs.readFileSync(fontPath);

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          fontFamily: 'Lastica',
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        C
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'CustomFont',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
