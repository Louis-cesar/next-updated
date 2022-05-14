import { useRouter } from "next/router";
import Link from "next/link";

const LouisCoffee = () => {
  const router = useRouter();
  const dy = router.dy;

  return (
    <div>
      Louis Coffee Page {dy}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="louis-store">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default LouisCoffee;
