import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <div>
      Test Page
      <Link style={{ color: "red" }} href="/List">
        <div>go ListPage1</div>
      </Link>
    </div>
  );
}
