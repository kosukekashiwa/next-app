import Nl2br from '@/src/components/Nl2br';
import { prisma } from '@/globals/db';

// 30秒ごとに再生成
export const revalidate = 30;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: 'faq' },
  });
  return (
    <main>
      <h1 className="my-2 text-xl">Frequently Asked Questions</h1>
      <p className="my-2 text-xs text-gray-400">The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
