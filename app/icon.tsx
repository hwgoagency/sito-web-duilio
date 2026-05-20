import { ImageResponse } from 'next/og'

// Metadata per l'icona
export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

// Generazione dinamica dell'icona dal logo Duilio
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.duilio1939.com/images/logo-full-v2.png"
          style={{
            width: 48,
            height: 48,
            objectFit: 'contain',
          }}
          alt="Duilio"
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
