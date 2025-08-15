// src/components/QRCode.js
import { QRCodeCanvas } from "qrcode.react";

export default function QRCode({ url }) {
  return (
    <div>
      <QRCodeCanvas value={url} size={200} />
    </div>
  );
}
